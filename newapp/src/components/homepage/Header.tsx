import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Zap } from "lucide-react";
import { megaMenuColumns, primaryNavLinks } from "../../data/Megamenudata";
import logo from "../../assets/logo-color.webp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState(megaMenuColumns[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isDark = !scrolled && !mobileOpen;
  const currentColumn = megaMenuColumns.find((c) => c.id === activeColumn) ?? megaMenuColumns[0];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(4,15,32,0.1)] border-b border-white/40"
            : "bg-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
        onMouseLeave={() => setServicesOpen(false)}
      >
        {/* Subtle geometric glowing top edge when scrolled */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ocean-400 to-transparent opacity-0 transition-opacity duration-700 ${scrolled ? 'opacity-30' : ''}`} />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 group" aria-label="Logic Force home">
            <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src={logo} 
                alt="Logic Force" 
                className={`h-12 lg:h-14 w-auto object-contain transition-all duration-300 ${isDark ? "brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "drop-shadow-sm"}`} 
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            <div onMouseEnter={() => setServicesOpen(true)}>
              <button
                type="button"
                className={`group flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isDark ? "text-white hover:bg-white/10" : "text-space-cadet/80 hover:text-ocean-600 hover:bg-ocean-50/80"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-ocean-400" : "opacity-70 group-hover:text-ocean-500"}`}
                />
              </button>
            </div>

            {primaryNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isDark ? "text-white/90 hover:text-white hover:bg-white/10" : "text-space-cadet/80 hover:text-ocean-600 hover:bg-ocean-50/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ocean-500 to-royal-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-ocean-500/25 transition-all duration-300 hover:shadow-ocean-500/40 hover:shadow-xl hover:-translate-y-0.5 hover:scale-105"
          >
            Start a project
            <ArrowRight size={16} />
          </a>

          {/* Mobile trigger */}
          <button
            type="button"
            className={`lg:hidden rounded-full p-2.5 transition-colors ${
              isDark ? "text-white bg-white/10 hover:bg-white/20" : "text-space-cadet bg-ocean-50 hover:bg-ocean-100"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mega menu panel (desktop) */}
        <div
          className={`hidden lg:block absolute inset-x-0 top-full origin-top border-t border-navy-100/50 bg-white/95 backdrop-blur-3xl shadow-2xl shadow-ocean-900/10 transition-all duration-500 ease-out ${
            servicesOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {/* Subtle triangle pattern background */}
          <svg className="absolute right-0 bottom-0 opacity-[0.03] w-96 h-96 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <polygon points="100,100 0,100 100,0" fill="#0077CC" />
          </svg>

          <div className="relative mx-auto grid max-w-7xl grid-cols-[1.6fr_1fr] gap-12 px-8 py-10">
            {/* Columns */}
            <div className="grid grid-cols-3 gap-10">
              {megaMenuColumns.map((column) => (
                <div
                  key={column.id}
                  onMouseEnter={() => setActiveColumn(column.id)}
                  className="group/col"
                >
                  <div className="flex items-center gap-2">
                     <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${column.accent}`} />
                     <p className="text-xs font-bold uppercase tracking-widest text-space-cadet">
                       {column.label}
                     </p>
                  </div>
                  <p className="mt-2 mb-6 text-xs font-medium text-space-cadet/50">{column.tagline}</p>
                  
                  <ul className="space-y-2">
                    {column.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="group flex items-start gap-4 rounded-2xl p-3 -mx-3 transition-all duration-300 hover:bg-ocean-50/80 hover:shadow-sm"
                          >
                            <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${column.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                              <Icon size={18} strokeWidth={2.5} />
                            </span>
                            <span>
                              <span className="block text-sm font-bold text-space-cadet transition-colors group-hover:text-ocean-600">
                                {item.title}
                              </span>
                              <span className="block text-xs font-medium text-space-cadet/50 leading-snug mt-0.5">
                                {item.description}
                              </span>
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured visual panel */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-space-cadet to-navy-900 p-8 text-white shadow-xl">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-ocean-500 to-royal-400 opacity-90 blur-[60px] transition-all duration-700 group-hover:opacity-50" />
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-royal-400 opacity-20 blur-[40px]" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white mb-6">
                         <Zap size={22} className="text-ocean-300" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-ocean-500">
                        {currentColumn.label} at Logic Force
                      </p>
                      <h3 className="mt-3 text-2xl font-bold leading-tight">
                        {currentColumn.tagline}
                      </h3>
                      <p className="mt-4 text-sm font-medium text-white/70 leading-relaxed">
                        One team across Lahore, Dallas and Sydney handles the full{" "}
                        <span className="text-white">{currentColumn.label.toLowerCase()} workstream</span> — no handoffs, no friction.
                      </p>
                  </div>
                  <a
                    href="/services"
                    className="group inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-white mt-8"
                  >
                    Explore all capabilities
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ocean-500/20 transition-all group-hover:bg-ocean-500 group-hover:translate-x-1">
                        <ArrowRight size={12} />
                    </span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed z-40 inset-x-0 top-[64px] bottom-0 bg-white/95 backdrop-blur-2xl transition-transform duration-500 ease-out overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-2 px-6 py-8">
          <button
            type="button"
            className="flex items-center justify-between rounded-2xl bg-ocean-50/50 px-4 py-4 text-lg font-bold text-space-cadet"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
          >
            Services
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-ocean-500" : "text-space-cadet/50"}`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {megaMenuColumns.map((column) => (
                <div key={column.id} className="px-4 py-4 border-l-2 border-ocean-100 ml-4 mb-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-ocean-500">
                    {column.label}
                  </p>
                  <div className="mt-3 space-y-3">
                    {column.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg py-1 text-sm font-semibold text-space-cadet/80 hover:text-ocean-600"
                        >
                          <Icon size={16} className="text-ocean-400" />
                          {item.title}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-2 border-t border-navy-100" />

          {primaryNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-4 py-4 text-lg font-bold text-space-cadet hover:bg-ocean-50/50"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contact"
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ocean-500 to-royal-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-ocean-500/25"
          >
            Start a project
            <ArrowRight size={18} />
          </a>
        </nav>
      </div>
    </>
  );
}