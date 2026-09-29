import { ArrowRight, Phone, Rocket, Code2, ShieldCheck, TrendingUp } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import ctaBg from "../../assets/ctacover.webp";

const floatingIcons = [
  { Icon: Rocket, className: "left-[8%] top-[18%]", delay: "0s" },
  { Icon: Code2, className: "right-[10%] top-[22%]", delay: "0.6s" },
  { Icon: ShieldCheck, className: "left-[14%] bottom-[16%]", delay: "1.1s" },
  { Icon: TrendingUp, className: "right-[14%] bottom-[20%]", delay: "1.6s" },
];

export default function CtaSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="relative overflow-hidden py-18" style={{ background: "#040F20" }}>
      {/* Background photo */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/75 via-navy-800/70 to-navy-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,rgba(4,15,32,0.5)_100%)]" />

      {/* Ocean glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-500/20 blur-[140px]" />

      {/* Faint grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]" aria-hidden="true">
        <defs>
          <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#FFFFFF" strokeOpacity="0.07" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ctaGrid)" />
      </svg>

      {/* Floating decorative icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute hidden h-12 w-12 items-center justify-center rounded-2xl border border-ocean-400/20 bg-ocean-500/10 text-ocean-300/70 backdrop-blur-sm animate-float sm:flex ${className}`}
          style={{ animationDelay: delay }}
        >
          <Icon size={20} />
        </div>
      ))}

      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl px-5 text-center transition-all duration-700 sm:px-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >


        <h2 className="mt-7 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Your competitors are already{" "}
          <span className="bg-gradient-to-r from-ocean-300 via-royal-300 to-ocean-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
            automating.
          </span>{" "}
          Are you?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base text-white sm:text-lg">
          Every week you wait is a week your growth, product, and security
          stay stuck doing things the slow way. Let's fix that — starting
          with a conversation, not a contract.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:business@logicforce.io"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ocean-500 to-royal-400 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_10px_rgba(26,143,227,0.4)] hover:-translate-y-0.5 shadow-lg shadow-ocean-500/30"
          >
            Start a project
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+923214044590"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white/90 transition-colors hover:border-ocean-400/50 hover:text-white"
          >
            <Phone size={16} />
            Book a free call
          </a>
        </div>

        <p className="mt-8 text-xs text-white">
          No contracts you can't walk away from — just work worth staying for.
        </p>
      </div>
    </section>
  );
}