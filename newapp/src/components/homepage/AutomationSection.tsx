import { useEffect, useState, type ComponentType } from "react";
import {
  FormInput,
  Database,
  Users,
  ShoppingCart,
  Workflow,
  Mail,
  MessageCircle,
  Bot,
  FileText,
  CheckCircle2,
  Bell,
  MessagesSquare,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";

interface Slide {
  tag: string;
  title: string;
  description: string;
  nodes: [LucideIcon, LucideIcon, LucideIcon];
}

const slides: Slide[] = [
  {
    tag: "Lead Capture",
    title: "Form fill to CRM in seconds.",
    description:
      "New form submissions land directly in your CRM — tagged, scored and assigned to the right rep before your sales team even refreshes their inbox.",
    nodes: [FormInput, Workflow, Database],
  },
  {
    tag: "Cart Recovery",
    title: "Abandoned carts, chased automatically.",
    description:
      "n8n watches your store around the clock and fires a personalized follow-up sequence the moment a cart goes cold — no manual list-building required.",
    nodes: [ShoppingCart, Workflow, Mail],
  },
  {
    tag: "AI Support",
    title: "A chatbot that knows when to step aside.",
    description:
      "A trained AI handles the first line of support and resolves the routine questions, escalating only the conversations that genuinely need a human.",
    nodes: [MessageCircle, Bot, Users],
  },
  {
    tag: "Finance Ops",
    title: "Invoices processed without a spreadsheet.",
    description:
      "Incoming invoices are read, verified against your records and routed for approval automatically — no one's copying numbers by hand anymore.",
    nodes: [FileText, Workflow, CheckCircle2],
  },
  {
    tag: "Team Alerts",
    title: "The right channel, notified instantly.",
    description:
      "Critical events across your stack — a failed payment, a five-star review, a stuck deployment — ping the right team the second they happen.",
    nodes: [Bell, Workflow, MessagesSquare],
  },
];

const AUTOPLAY_MS = 4500;

function NodeCircle({
  Icon,
  emphasized = false,
}: {
  Icon: LucideIcon | ComponentType;
  emphasized?: boolean;
}) {
  return (
    <div
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border sm:h-16 sm:w-16 ${emphasized
          ? "border-ocean-400/60 bg-gradient-to-br from-ocean-400 to-royal-500 text-white shadow-[0_0_28px_4px_rgba(26,143,227,0.45)]"
          : "border-white/15 bg-white/5 text-white/70"
        }`}
    >
      <Icon size={emphasized ? 24 : 22} />
    </div>
  );
}

function Connector({ delay = "0s" }: { delay?: string }) {
  return (
    <div className="relative mx-1 h-[2px] w-10 shrink-0 overflow-hidden rounded-full bg-white/10 sm:w-16">
      <span
        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-ocean-300 shadow-[0_0_10px_2px_rgba(82,169,236,0.8)] animate-flow-dot"
        style={{ animationDelay: delay }}
      />
    </div>
  );
}

function NodeFlow({ nodes }: { nodes: Slide["nodes"] }) {
  const [From, Mid, To] = nodes;
  return (
    <div className="flex items-center justify-center py-4">
      <NodeCircle Icon={From} />
      <Connector delay="0s" />
      <NodeCircle Icon={Mid} emphasized />
      <Connector delay="0.9s" />
      <NodeCircle Icon={To} />
    </div>
  );
}

export default function AutomationSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, paused, inView]);

  const goTo = (i: number) => setActive((i + slides.length) % slides.length);

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(160deg, #040F20 0%, #0A2D5E 50%, #0F3D7E 100%)" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-ocean-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-royal-400/15 blur-[100px]" />

      {/* Grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.3]" aria-hidden="true">
        <defs>
          <pattern id="automationGrid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0H0V36" fill="none" stroke="#FFFFFF" strokeOpacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#automationGrid)" />
      </svg>

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl px-5 text-center transition-all duration-700 sm:px-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-ocean-300">
          AI Automation & n8n
        </p>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Automation that runs while you don't.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/50 sm:text-lg">
          Powered by n8n and custom AI workflows, we connect the tools you
          already use so leads, orders and support tickets move themselves —
          less busywork for your team, fewer things dropped.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative mx-auto mt-14 max-w-4xl px-5 sm:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden rounded-3xl border border-ocean-400/20 bg-white/[0.04] backdrop-blur-sm shadow-2xl shadow-navy-900/40">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.title} className="w-full shrink-0 px-6 py-12 sm:px-14 sm:py-16">
                <span className="mx-auto block w-fit rounded-full border border-ocean-400/35 bg-ocean-500/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-ocean-200">
                  {slide.tag}
                </span>

                <NodeFlow nodes={slide.nodes} />

                <h3 className="mt-2 text-center text-xl font-semibold text-white sm:text-2xl">
                  {slide.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-center text-sm text-white/50 sm:text-base">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(active - 1)}
          className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ocean-400/25 bg-navy-800 p-2.5 text-ocean-300 transition-colors hover:border-ocean-400/50 hover:text-ocean-200 sm:flex"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(active + 1)}
          className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ocean-400/25 bg-navy-800 p-2.5 text-ocean-300 transition-colors hover:border-ocean-400/50 hover:text-ocean-200 sm:flex"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots + progress */}
        <div className="mt-7 flex items-center justify-center gap-2.5">
          {slides.map((slide, i) => {
            const isActive = active === i;
            return (
              <button
                key={slide.title}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${isActive ? "w-8 bg-white/15" : "w-1.5 bg-white/15 hover:bg-white/30"
                  }`}
              >
                {isActive && (
                  <span
                    key={`${active}-${paused}`}
                    className="absolute inset-y-0 left-0 block w-full origin-left bg-ocean-400 [animation:progress_4.5s_linear_forwards]"
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}