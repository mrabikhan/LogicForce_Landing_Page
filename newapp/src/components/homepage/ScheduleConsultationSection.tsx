import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import consultationGif from "../../assets/consultation.gif";

const services = [
  "AI Digital Marketing",
  "SEO & GEO",
  "E-Commerce",
  "Software Development",
  "Design",
  "Gaming & XR",
  "Automation",
  "Staff Augmentation",
  "Cybersecurity",
];

const marqueeWords = [
  "Innovative",
  "Reliable",
  "Scalable",
  "Secure",
  "Creative",
  "Strategic",
  "Forceful",
];

interface FormState {
  name: string;
  email: string;
  city: string;
  service: string;
  message: string;
}

const emptyForm: FormState = { name: "", email: "", city: "", service: "", message: "" };

export default function ScheduleConsultationSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
  };

  const inputClasses =
    "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-space-cadet placeholder:text-space-cadet/35 transition-colors focus:border-ocean-400 focus:outline-none focus:ring-2 focus:ring-ocean-400/15";

  return (
    <section className="relative overflow-hidden py-24" style={{ background: "#EEF3FB" }}>
      {/* Background accent */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-ocean-200/40 blur-[110px]" />

      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 transition-all duration-700 sm:px-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: gif + marquee */}
          <div className="flex flex-col justify-center">
            <div className="overflow-hidden rounded-3xl border border-navy-200 bg-white shadow-[0_20px_50px_-24px_rgba(15,61,126,0.25)]">
              <img
                src={consultationGif}
                alt="Logic Force at work"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Marquee */}
            <div
              className="mt-8 overflow-hidden"
              onMouseEnter={() => setMarqueePaused(true)}
              onMouseLeave={() => setMarqueePaused(false)}
            >
              <div
                className="flex w-max gap-8 animate-marquee"
                style={{ animationPlayState: marqueePaused ? "paused" : "running" }}
              >
                {[...marqueeWords, ...marqueeWords].map((word, i) => (
                  <span
                    key={`${word}-${i}`}
                    className="flex items-center gap-8 text-2xl font-bold text-space-cadet/30 transition-colors duration-200 hover:text-ocean-500 sm:text-3xl"
                  >
                    {word}
                    <span className="text-ocean-400/40">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: heading + form */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ocean-500">
              Schedule a Consultation
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-space-cadet sm:text-4xl">
              Let's map out your next move.
            </h2>
            <p className="mt-4 text-base text-space-cadet/55 sm:text-lg">
              Tell us a bit about what you're working on and pick the service
              closest to it — we'll come prepared with real ideas, not a
              generic sales pitch.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-ocean-300 bg-ocean-50 px-6 py-8 text-center">
                <p className="text-base font-semibold text-space-cadet">
                  Thanks — we've got it.
                </p>
                <p className="mt-1 text-sm text-space-cadet/55">
                  We'll reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className={inputClasses}
                  />
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={`${inputClasses} ${form.service ? "text-space-cadet" : "text-space-cadet/35"}`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-space-cadet">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${inputClasses} resize-none`}
                />

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ocean-500 to-royal-400 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_30px_-8px_rgba(26,143,227,0.5)] hover:-translate-y-0.5 sm:w-auto"
                >
                  Schedule consultation
                  <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}