import { Star, ExternalLink, Quote } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Logic+Force";

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  highlight: string;
}

const reviews: Review[] = [
  {
    name: "Ayesha K.",
    role: "Marketing Director",
    rating: 5,
    highlight: "Traffic nearly doubled.",
    text: "Logic Force completely transformed our digital presence. Our organic traffic nearly doubled within the first quarter of working together, and the quality of leads improved dramatically."
  },
  {
    name: "Marcus T.",
    role: "Founder",
    rating: 5,
    highlight: "Unmatched execution speed.",
    text: "They shipped our mobile app faster than any agency we'd used before. The codebase is incredibly clean and the UI is flawless."
  },
  {
    name: "Sarah L.",
    role: "Operations Lead",
    rating: 5,
    highlight: "Saved 20+ hours a week.",
    text: "The n8n automation work alone saved our team over twenty hours a week. Things that used to fall through the cracks are now handled silently in the background."
  },
  {
    name: "James O.",
    role: "CTO",
    rating: 5,
    highlight: "Exceptional security audit.",
    text: "Their penetration test was extremely thorough. They didn't just hand us a report; they worked with our engineers to implement every fix within days."
  },
  {
    name: "Fatima R.",
    role: "E-Commerce Manager",
    rating: 5,
    highlight: "Immediate conversion lift.",
    text: "Store conversions improved noticeably within weeks of the Shopify redesign going live. The team is responsive, deeply knowledgeable, and highly strategic."
  },
  {
    name: "David C.",
    role: "Product Manager",
    rating: 5,
    highlight: "Global talent, local feel.",
    text: "Solid communication throughout the entire product lifecycle. Even working across three different timezones, they felt like an extension of our in-house team."
  }
];

function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.4 0 6.4 1.17 8.8 3.46l6.55-6.55C35.2 2.5 30 0 24 0 14.64 0 6.6 5.4 2.7 13.24l7.6 5.9C12.2 13.4 17.6 9.5 24 9.5Z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.15-3.14-.42-4.6H24v9.03h12.6c-.55 2.9-2.2 5.36-4.7 7.02l7.4 5.75C43.6 37.7 46.5 31.6 46.5 24.5Z" />
      <path fill="#FBBC05" d="M10.3 19.14a14.35 14.35 0 0 0 0 9.72l-7.6 5.9a24 24 0 0 1 0-21.52l7.6 5.9Z" />
      <path fill="#34A853" d="M24 48c6 0 11.2-1.98 14.9-5.38l-7.4-5.75c-2.06 1.4-4.7 2.23-7.5 2.23-6.4 0-11.8-3.9-13.7-9.4l-7.6 5.9C6.6 42.6 14.64 48 24 48Z" />
    </svg>
  );
}

export default function GoogleReviewsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-space-cadet py-32 overflow-hidden text-white">
      {/* Dynamic Polygon Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="100,0 100,100 0,100" fill="#1A8FE3" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-1/3 h-2/3" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,100 0,0" fill="#4361EE" />
        </svg>
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 transition-all duration-1000 sm:px-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean-400 flex items-center gap-2">
              <Star size={16} className="fill-current text-ocean-400" />
              Client Love
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Rated by the people <br className="hidden md:block" />
              we've actually <span className="text-ocean-400">worked with.</span>
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Real reviews from verified Google profiles. No hand-picked quotes,
              just an honest record of how Logic Force delivers.
            </p>
          </div>

          {/* Google Rating Badge */}
          <div className="shrink-0 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-center h-14 w-14 bg-white rounded-full">
              <GoogleG size={30} />
            </div>
            <div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold leading-none">5.0</span>
                <div className="flex gap-1 pb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-ocean-400 text-ocean-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-white/50 mt-1 font-medium">Based on 50+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Masonry Grid for Reviews */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="break-inside-avoid relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-ocean-400/50 hover:bg-white/10 group"
            >
              <Quote size={40} className="absolute top-4 right-4 text-white/5 opacity-50 group-hover:text-ocean-400/10 transition-colors duration-500" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-ocean-400 text-ocean-400" />
                ))}
              </div>

              <h4 className="text-xl font-bold text-white mb-3">"{review.highlight}"</h4>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {review.text}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-ocean-500 to-royal-600 font-bold shadow-lg shadow-ocean-500/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-ocean-300 uppercase tracking-wide mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ocean-500 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-ocean-500 hover:shadow-[0_0_30px_rgba(26,143,227,0.4)]"
          >
            Read all reviews on Google
            <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}