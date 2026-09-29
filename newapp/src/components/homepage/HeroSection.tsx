import { ArrowRight, Zap, Shield, TrendingUp, Play } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const badges = [
  { icon: Zap, label: "AI-Powered" },
  { icon: Shield, label: "Secure by Design" },
  { icon: TrendingUp, label: "Results-Driven" },
];

export default function HeroSection() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { ref: visualRef, inView: visualIn } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32"
      style={{ background: "linear-gradient(145deg, #040F20 0%, #0A2D5E 50%, #0F3D7E 100%)" }}
    >
      {/* Dynamic Background Geometry */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-500/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] rounded-full bg-royal-400/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        {/* Polygons & Triangles */}
        <svg className="absolute left-[-10%] top-[20%] w-full max-w-[800px] opacity-10 animate-float" viewBox="0 0 200 200" style={{ animationDuration: '8s' }}>
          <polygon points="100,10 40,180 190,60" fill="url(#hero-grad-1)" />
        </svg>
        <svg className="absolute right-[-5%] bottom-[10%] w-full max-w-[600px] opacity-[0.07] animate-float" viewBox="0 0 200 200" style={{ animationDuration: '12s', animationDelay: '2s' }}>
          <polygon points="10,190 190,190 100,10" fill="url(#hero-grad-2)" />
        </svg>

        {/* Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]" />

        <defs>
          <linearGradient id="hero-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A8FE3" />
            <stop offset="100%" stopColor="#0077CC" />
          </linearGradient>
          <linearGradient id="hero-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4361EE" />
            <stop offset="100%" stopColor="#0062AA" />
          </linearGradient>
        </defs>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Content Area */}
        <div
          ref={headRef}
          className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ${headIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
        >
          <div className="mb-8 inline-flex items-center justify-center lg:justify-start rounded-full bg-white/5 px-4 py-2 border border-white/10 backdrop-blur-md">
            <span className="text-sm font-semibold text-ocean-300 tracking-wide uppercase">Logic Force Digital Agency</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1] text-white sm:text-6xl lg:text-[4.5rem]">
            Force-Driving Your <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-ocean-300 via-royal-300 to-ocean-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                Digital Future
              </span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="#1A8FE3" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-white/70 sm:text-xl font-light leading-relaxed">
            Logic Force builds scalable software, runs AI-driven growth engines, and
            secures what you ship. We are the unified global team delivering excellence
            across every digital frontier.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-8">
            {badges.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-ocean-400/30 bg-ocean-500/10 px-4 py-1.5 text-xs font-medium text-ocean-200 backdrop-blur-sm transition-colors hover:bg-ocean-500/20">
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start w-full">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-full bg-gradient-to-r from-ocean-500 to-royal-400 px-8 py-4 text-base font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_8px_rgba(26,143,227,0.4)] shadow-lg shadow-ocean-500/30"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Start a project
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </a>
            <a
              href="#video-section"
              className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-ocean-400/50 hover:bg-white/10"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-ocean-300 group-hover:bg-ocean-500 group-hover:text-white transition-colors">
                <Play size={10} className="ml-0.5 fill-current" />
              </div>
              See our work
            </a>
          </div>
        </div>

        {/* Right Visual Area */}
        <div
          ref={visualRef}
          className={`relative hidden lg:block transition-all duration-1000 delay-200 ${visualIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
        >
          {/* Complex 3D-ish composition of shapes and glass panels */}
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Base polygon */}
            <svg className="absolute inset-0 w-full h-full text-ocean-500/20 drop-shadow-[0_0_30px_rgba(26,143,227,0.3)] animate-spin-slow" viewBox="0 0 200 200">
              <polygon points="100,5 190,50 190,150 100,195 10,150 10,50" fill="currentColor" />
            </svg>

            {/* Glass panel 1 */}
            <div className="absolute top-[15%] left-[10%] right-[20%] bottom-[30%] rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-400/10 to-royal-500/10" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ocean-300 to-transparent opacity-50" />
              <div className="p-6 flex flex-col h-full justify-between">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <div className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-white/50 font-mono">system_v2.0</span>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                  <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                  <div className="h-2 w-5/6 bg-white/20 rounded-full" />
                  <div className="h-2 w-2/3 bg-ocean-400/60 rounded-full shadow-[0_0_10px_rgba(26,143,227,0.5)]" />
                </div>
                <div className="mt-6 p-4 rounded-xl bg-navy-900/50 border border-white/10 flex items-center justify-between">
                  <span className="text-white/80 font-medium text-sm">Deployment Status</span>
                  <span className="text-emerald-400 text-xs font-semibold px-2 py-1 rounded-md bg-emerald-400/10">Active</span>
                </div>
              </div>
            </div>

            {/* Glass panel 2 */}
            <div className="absolute bottom-[10%] right-[5%] left-[30%] top-[45%] rounded-3xl border border-ocean-300/30 bg-ocean-900/40 backdrop-blur-xl shadow-[0_30px_60px_rgba(4,15,32,0.6)] animate-float" style={{ animationDelay: '2s' }}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,143,227,0.3),transparent_70%)]" />
              <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-400 to-royal-500 shadow-lg shadow-ocean-500/40">
                  <Zap size={28} className="text-white fill-current" />
                  <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-400 animate-ping" />
                  <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-lg">AI Integration</h3>
                <p className="text-white/60 text-sm mt-1">Real-time processing active</p>
              </div>
            </div>

            {/* Small decorative shape */}
            <div className="absolute top-[5%] right-[10%] h-12 w-12 rounded-lg border border-royal-400/50 bg-royal-500/20 rotate-12 backdrop-blur-md animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>

      </div>
    </section>
  );
}