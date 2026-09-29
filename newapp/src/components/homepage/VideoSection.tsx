import { useInView } from "../../hooks/useInView";

const YOUTUBE_VIDEO_ID = "MZQ1xXN1VPA";

export default function VideoSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative overflow-hidden bg-space-cadet py-32" aria-label="Brand Video">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] translate-x-1/3 translate-y-1/3 rounded-full bg-royal-400/20 blur-[100px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 transition-all duration-1000 sm:px-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="mb-12 max-w-2xl text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            See the{" "}
            <span className="bg-gradient-to-r from-ocean-400 to-royal-400 bg-clip-text text-transparent">
              Force
            </span>{" "}
            in action.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Watch how our globally distributed teams engineer, design, and deploy{" "}
            industry-leading digital products from the ground up.
          </p>
        </div>

        {/* YouTube Player Container */}
        <div className="group relative mx-auto overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-2xl shadow-ocean-500/10">
          <div className="relative w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&color=white&loop=1&playlist=${YOUTUBE_VIDEO_ID}`}
              title="Logic Force – Brand Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
