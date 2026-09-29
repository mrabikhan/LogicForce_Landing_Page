import { useEffect, useState } from "react";
import {
  Code2,
  TrendingUp,
  ShieldCheck,
  Users,
  Workflow,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";

interface CoreService {
  title: string;
  tag: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

const coreServices: CoreService[] = [
  {
    title: "Software Development",
    tag: "Build",
    description: "Web and mobile apps engineered to scale, not just launch and hope.",
    href: "/services/software-development",
    icon: Code2,
    color: "from-ocean-400 to-royal-500",
  },
  {
    title: "AI Digital Marketing",
    tag: "Grow",
    description: "SEO, content and PPC campaigns tuned to compound, not just spend.",
    href: "/services/ai-digital-marketing",
    icon: TrendingUp,
    color: "from-ocean-500 to-navy-600",
  },
  {
    title: "Cybersecurity",
    tag: "Secure",
    description: "Compliance, penetration testing and managed security, built in from day one.",
    href: "/services/cybersecurity",
    icon: ShieldCheck,
    color: "from-royal-400 to-navy-700",
  },
  {
    title: "Staff Augmentation",
    tag: "Scale",
    description: "Vetted engineers and specialists who plug into your team within days.",
    href: "/services/staff-augmentation",
    icon: Users,
    color: "from-navy-500 to-ocean-500",
  },
  {
    title: "AI Automation",
    tag: "Automate",
    description: "n8n workflows and AI agents that take repetitive work off your team's plate.",
    href: "/services/automation",
    icon: Workflow,
    color: "from-ocean-400 to-royal-400",
  },
];

const AUTOPLAY_MS = 4000;

export default function CoreServicesSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const len = coreServices.length;

  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % len);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, paused, inView, len]);

  const goTo = (i: number) => setActive(((i % len) + len) % len);

  return (
    <section className="relative overflow-hidden py-24" style={{ background: "#F0F5FF" }}>
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-ocean-200/40 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-royal-200/30 blur-[100px]" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
        <defs>
          <pattern id="coreServicesDots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#0F3D7E" fillOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#coreServicesDots)" />
      </svg>

      <div
        ref={ref}
        className={`relative mx-auto max-w-5xl px-5 text-center transition-all duration-700 sm:px-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-ocean-500">
          Core Services
        </p>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-space-cadet sm:text-4xl lg:text-5xl">
          The services clients come back for.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-space-cadet/55 sm:text-lg">
          Five disciplines we're asked for most — each one run end to end by
          our own team, not handed off to a subcontractor.
        </p>
      </div>

      {/* Coverflow carousel */}
      <div
        className="relative mt-16 h-[420px] sm:h-[440px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto flex h-full max-w-5xl items-center justify-center px-5">
          {coreServices.map((service, i) => {
            let diff = i - active;
            if (diff > len / 2) diff -= len;
            if (diff < -len / 2) diff += len;

            const abs = Math.abs(diff);
            if (abs > 2) return null;

            const translate = diff * 230;
            const scale = diff === 0 ? 1 : abs === 1 ? 0.86 : 0.74;
            const opacity = diff === 0 ? 1 : abs === 1 ? 0.55 : 0.2;
            const zIndex = 10 - abs;
            const Icon = service.icon;

            return (
              <button
                key={service.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={service.title}
                className="absolute flex h-[380px] w-[280px] shrink-0 flex-col rounded-3xl bg-gradient-to-br from-navy-700 to-space-cadet p-7 text-left text-white shadow-[0_25px_60px_-20px_rgba(11,40,90,0.55)] transition-all duration-700 ease-out sm:h-[400px] sm:w-[300px] overflow-hidden"
                style={{
                  transform: `translateX(${translate}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: diff === 0 ? "none" : "auto",
                }}
              >
                {/* Card glow */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-ocean-500/20 blur-2xl" />

                <span className="relative w-fit rounded-full border border-ocean-400/35 bg-ocean-500/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-ocean-200">
                  {service.tag}
                </span>

                <div className={`relative mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <Icon size={22} />
                </div>

                <h3 className="relative mt-6 text-xl font-semibold sm:text-2xl">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  onClick={(e) => e.stopPropagation()}
                  className="relative mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-ocean-300 hover:text-ocean-200"
                >
                  Explore
                  <ArrowUpRight size={14} />
                </a>
              </button>
            );
          })}
        </div>

        {/* Arrows */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(active - 1)}
          className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-navy-200 bg-white p-3 text-navy-400 shadow-sm transition-colors hover:border-ocean-400/40 hover:text-ocean-500 sm:flex lg:left-10"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(active + 1)}
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-navy-200 bg-white p-3 text-navy-400 shadow-sm transition-colors hover:border-ocean-400/40 hover:text-ocean-500 sm:flex lg:right-10"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots + progress */}
      <div className="relative mt-4 flex items-center justify-center gap-2.5">
        {coreServices.map((service, i) => {
          const isActive = active === i;
          return (
            <button
              key={service.title}
              type="button"
              aria-label={`Go to ${service.title}`}
              onClick={() => goTo(i)}
              className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${isActive ? "w-8 bg-navy-200" : "w-1.5 bg-navy-200 hover:bg-navy-300"
                }`}
            >
              {isActive && (
                <span
                  key={`${active}-${paused}`}
                  className="absolute inset-y-0 left-0 block w-full origin-left bg-ocean-500 [animation:progress_4s_linear_forwards]"
                  style={{ animationPlayState: paused ? "paused" : "running" }}
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}