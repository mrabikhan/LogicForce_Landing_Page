import { ArrowRight, ExternalLink } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import vantageImg from "../../assets/projects/vantage-crm.jpg";
import meridianImg from "../../assets/projects/meridian-health.jpg";
import loomcraftImg from "../../assets/projects/loomcraft.jpg";

interface Project {
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  gradient: string;
}

const featuredProjects: Project[] = [
  {
    title: "Inner Glow Studio",
    category: "E-Commerce System",
    description: "A custom e-commerce storefront for a premium cosmetics brand. Engineered with seamless checkout flows, high-performance product galleries, and robust inventory integration to handle seasonal traffic spikes effortlessly.",
    url: "innerglowstudio.com",
    image: vantageImg, // Keeping the existing import variable name to prevent broken references
    gradient: "from-ocean-500 to-royal-600",
  },
  {
    title: "Brand Growth Studio",
    category: "SEO & Brand Identity",
    description: "A complete digital rebranding and deep technical SEO overhaul for an established marketing agency. We restructured their web architecture to dominate search rankings and modernized their aesthetic to attract enterprise clients.",
    url: "brandgrowthstudio.io",
    image: meridianImg,
    gradient: "from-royal-400 to-navy-700",
  },
  {
    title: "All Smiles Dental",
    category: "Web Development & Design",
    description: "A patient-centric portfolio and booking website for a modern dental clinic. Designed to instill trust through clean aesthetics while streamlining the patient onboarding process with integrated appointment scheduling.",
    url: "allsmilesclinic.com",
    image: loomcraftImg,
    gradient: "from-ocean-400 to-ocean-700",
  },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,119,204,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Giant glowing blurred shapes */}
        <div className="absolute left-[-10%] top-1/4 h-[40rem] w-[40rem] rounded-full bg-ocean-100/40 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-royal-100/40 blur-[100px]" />

        {/* Geometric Polygons */}
        <svg className="absolute left-10 top-10 opacity-[0.03] w-64 h-64 animate-spin-slow" viewBox="0 0 100 100">
          <polygon points="50,0 100,100 0,100" fill="#0F3D7E" />
        </svg>
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 transition-all duration-1000 sm:px-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ocean-200 bg-ocean-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ocean-600">
            Featured Work
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-space-cadet sm:text-5xl lg:text-6xl">
            Projects we're <span className="bg-gradient-to-r from-ocean-500 to-royal-400 bg-clip-text text-transparent">proud of.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-space-cadet/60">
            We don't just build products; we build businesses. Here is a selection of recent
            partnerships where Logic Force drove measurable impact.
          </p>
        </div>

        {/* Stacked Project Showcase */}
        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                {/* Image Side */}
                <div className="w-full lg:w-3/5 group relative perspective-1000">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                  <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    {/* Browser Mockup Top Bar */}
                    <div className="flex items-center gap-3 border-b border-navy-50 bg-navy-50/50 px-4 py-3 backdrop-blur-md">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-400/80" />
                        <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                        <div className="h-3 w-3 rounded-full bg-green-400/80" />
                      </div>
                      <div className="mx-auto flex w-1/2 items-center justify-center rounded-md bg-white py-1 text-xs text-space-cadet/40 shadow-sm">
                        {project.url}
                      </div>
                    </div>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay gradient on image */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-navy-900/40 to-transparent" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-extrabold text-ocean-100">0{index + 1}</span>
                    <span className="h-px flex-1 bg-ocean-100" />
                  </div>

                  <span className="text-sm font-bold uppercase tracking-wider text-ocean-500 mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-bold text-space-cadet mb-6">
                    {project.title}
                  </h3>

                  <p className="text-lg text-space-cadet/70 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <a href={`https://${project.url}`} target="_blank" rel="noreferrer" className="group/btn inline-flex items-center gap-2 text-ocean-600 font-bold hover:text-royal-600 transition-colors">
                    View Case Study
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean-50 text-ocean-600 transition-all group-hover/btn:bg-ocean-600 group-hover/btn:text-white group-hover/btn:translate-x-1">
                      <ArrowRight size={16} />
                    </span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Global View All CTA */}
        <div className="mt-24 flex justify-center">
          <a
            href="/portfolio"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-space-cadet px-10 py-5 text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(4,15,32,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 to-royal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">
              Explore Full Portfolio
              <ExternalLink size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}