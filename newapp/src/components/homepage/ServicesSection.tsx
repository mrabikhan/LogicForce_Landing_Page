import { useState } from "react";
import {
  TrendingUp,
  Search,
  ShoppingCart,
  Code2,
  Palette,
  Gamepad2,
  Workflow,
  Users,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";

interface ServiceItem {
  id: string;
  category: "Grow" | "Build" | "Secure & Scale";
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan: string;
  gradient: string;
}

const services: ServiceItem[] = [
  {
    id: "software",
    category: "Build",
    title: "Software Development",
    description: "Web and mobile apps engineered for scale from day one — from MVP to a platform serving millions, built on stacks your team will love.",
    icon: Code2,
    colSpan: "md:col-span-2 lg:col-span-2",
    gradient: "from-ocean-500 to-royal-600",
  },
  {
    id: "ai-marketing",
    category: "Grow",
    title: "AI Digital Marketing",
    description: "SEO, content and PPC campaigns built to compound over time, tuned by AI-assisted targeting to maximize ROI.",
    icon: TrendingUp,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-ocean-400 to-ocean-600",
  },
  {
    id: "automation",
    category: "Secure & Scale",
    title: "Workflow Automation",
    description: "n8n pipelines, chatbots and CRM automations that quietly remove hours of manual, repetitive work from your team's week.",
    icon: Workflow,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-royal-400 to-navy-600",
  },
  {
    id: "ecommerce",
    category: "Grow",
    title: "E-Commerce Systems",
    description: "Storefronts on Shopify, WooCommerce or custom CMS, engineered to convert browsers into buyers on any device.",
    icon: ShoppingCart,
    colSpan: "md:col-span-2 lg:col-span-1",
    gradient: "from-navy-400 to-space-cadet",
  },
  {
    id: "cybersecurity",
    category: "Secure & Scale",
    title: "Cybersecurity",
    description: "Compliance readiness, penetration testing and managed security, so your growth never outruns your defenses.",
    icon: ShieldCheck,
    colSpan: "md:col-span-3 lg:col-span-1",
    gradient: "from-ocean-500 to-navy-800",
  },
  {
    id: "design",
    category: "Build",
    title: "UI/UX & Brand Design",
    description: "Figma-first UI/UX and brand identity systems that make your product feel considered, consistent, and premium.",
    icon: Palette,
    colSpan: "md:col-span-2 lg:col-span-2",
    gradient: "from-royal-500 to-ocean-400",
  },
  {
    id: "seo-geo",
    category: "Grow",
    title: "SEO & GEO Strategy",
    description: "Rank higher on classic search and get cited by generative engines like ChatGPT and Gemini before your competitors.",
    icon: Search,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-navy-600 to-royal-600",
  },
  {
    id: "gaming",
    category: "Build",
    title: "Gaming & XR",
    description: "Immersive games, AR and VR experiences built on modern engines for brands that want to be remembered.",
    icon: Gamepad2,
    colSpan: "md:col-span-2 lg:col-span-2",
    gradient: "from-ocean-600 to-navy-900",
  },
  {
    id: "staff",
    category: "Secure & Scale",
    title: "Staff Augmentation",
    description: "Vetted engineers, designers and marketers who plug directly into your team fast, bypassing the usual hiring overhead.",
    icon: Users,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-royal-400 to-ocean-500",
  },
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-white py-24 overflow-hidden" id="services">
      {/* Background Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Polygons/Triangles */}
        <svg className="absolute left-[-5%] top-[5%] opacity-[0.04] w-[30rem] h-[30rem] animate-float" viewBox="0 0 100 100">
          <polygon points="50,0 100,100 0,100" fill="#0077CC" />
        </svg>
        <svg className="absolute right-[-10%] top-[30%] opacity-[0.03] w-[40rem] h-[40rem] animate-float" viewBox="0 0 100 100" style={{ animationDelay: '3s' }}>
          <polygon points="100,0 100,100 0,100" fill="#0F3D7E" />
        </svg>
        <svg className="absolute left-[30%] bottom-[-10%] opacity-[0.05] w-[25rem] h-[25rem] animate-float rotate-12" viewBox="0 0 100 100" style={{ animationDelay: '1.5s' }}>
          <polygon points="0,100 100,100 0,0" fill="#1A8FE3" />
        </svg>

        <div className="absolute left-1/4 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-50/50 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] translate-x-1/3 translate-y-1/3 rounded-full bg-ocean-100/60 blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 transition-all duration-1000 sm:px-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ocean-200 bg-ocean-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ocean-600">
              Our Capabilities
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-space-cadet sm:text-5xl">
              Nine disciplines, <br className="hidden sm:block" />
              <span className="text-ocean-500">working as one force.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-space-cadet/60 sm:text-lg">
            Everything below is handled in-house — no subcontractors passing your project between agencies. We build, grow, and secure.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;
            const isActive = isHovered || index === 0;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${service.colSpan} border ${isActive ? "border-transparent shadow-2xl shadow-ocean-500/20" + (isHovered ? " -translate-y-1" : "") : "border-navy-100 bg-white shadow-sm"
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Dynamic Background that reveals on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Subtle pattern overlay when active */}
                <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:16px_16px] transition-opacity duration-700 ${isActive ? "opacity-10" : "opacity-0"}`} />

                {/* Triangle overlay pattern on hover */}
                <svg className={`absolute bottom-0 right-0 w-64 h-64 transition-all duration-700 ease-out ${isActive ? "opacity-[0.07] translate-x-0 translate-y-0" : "opacity-0 translate-x-10 translate-y-10"}`} viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon points="100,100 0,100 100,0" fill="#ffffff" />
                </svg>
                <svg className={`absolute top-0 left-0 w-32 h-32 transition-all duration-1000 ease-out delay-100 ${isActive ? "opacity-[0.05] translate-x-0 translate-y-0" : "opacity-0 -translate-x-10 -translate-y-10"}`} viewBox="0 0 100 100">
                  <polygon points="0,0 100,0 0,100" fill="#ffffff" />
                </svg>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? "bg-white/20 text-white" : "bg-navy-50 text-navy-400"
                      }`}>
                      {service.category}
                    </span>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${isActive ? "bg-white text-ocean-500 scale-110 shadow-lg" : "bg-ocean-50 text-ocean-600"
                      }`}>
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-space-cadet"
                      }`}>
                      {service.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-white/80" : "text-space-cadet/60"
                      }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Arrow Indicator */}
                  <div className={`absolute bottom-8 right-8 transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-center gap-6 rounded-3xl bg-navy-50 p-10 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-space-cadet">Not sure where to start?</h4>
            <p className="mt-2 text-sm text-space-cadet/60 max-w-md">
              We'll help you figure out exactly which services align with your current business goals on a short, no-pressure call.
            </p>
          </div>
          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-space-cadet px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ocean-500 hover:shadow-lg hover:shadow-ocean-500/25"
          >
            Talk to our experts
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}