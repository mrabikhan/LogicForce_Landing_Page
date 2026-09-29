import trustedBgImage from "../../assets/trusted/clientcover.webp";

import deltaLogo from "../../assets/trusted/delta.png";
import chaayeLogo from "../../assets/trusted/chaaye.png";
import cureLogo from "../../assets/trusted/cure.png";
import formationLogo from "../../assets/trusted/formation.png";
import hashingLogo from "../../assets/trusted/hashing.png";
import percentLogo from "../../assets/trusted/percent.png";
import revoluticLogo from "../../assets/trusted/revolutic.png";
import riskLogo from "../../assets/trusted/risk.png";
import taxLogo from "../../assets/trusted/tax.png";
import cribLogo from "../../assets/trusted/crib.png";
import bajwaHospitalLogo from "../../assets/trusted/bajwahospital.png";
import vlccLogo from "../../assets/trusted/vlcc.png";

type Logo = {
  id: string;
  label: string;
  src: string;
};

const LOGOS: Logo[] = [
  { id: "delta", label: "Delta", src: deltaLogo },
  { id: "chaaye", label: "Chaaye", src: chaayeLogo },
  { id: "cure", label: "Cure", src: cureLogo },
  { id: "formation", label: "Formation", src: formationLogo },
  { id: "hashing", label: "Hashing", src: hashingLogo },
  { id: "percent", label: "Percent", src: percentLogo },
  { id: "revolutic", label: "Revolutic", src: revoluticLogo },
  { id: "risk", label: "Risk", src: riskLogo },
  { id: "tax", label: "Tax", src: taxLogo },
  { id: "crib", label: "Crib", src: cribLogo },
  { id: "bajwahospital", label: "Bajwa Hospital", src: bajwaHospitalLogo },
  { id: "vlcc", label: "VLCC", src: vlccLogo },
];

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-20 w-36 flex-shrink-0 items-center justify-center rounded-xl border border-ocean-400/20 bg-white/10 px-6 py-4 transition-all duration-300 hover:border-ocean-300/50 hover:bg-white/20 sm:h-24 sm:w-44 sm:rounded-2xl sm:px-8">
      <img
        src={logo.src}
        alt={logo.label}
        draggable={false}
        className="max-h-8 w-auto object-contain opacity-80 grayscale transition-all duration-300 ease-out hover:scale-110 hover:opacity-100 hover:grayscale-0 sm:max-h-10"
      />
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      aria-label="Companies that trust us"
      style={{ background: "linear-gradient(135deg, #040F20 0%, #071D3E 50%, #0A2D5E 100%)" }}
    >
      {/* Fixed background image */}
      <div
        className="trusted-bg-fixed pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${trustedBgImage})` }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,15,32,0.92) 0%, rgba(7,29,62,0.85) 45%, rgba(4,15,32,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ocean glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26,143,227,0.18) 0%, rgba(67,97,238,0.08) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-ocean-400/20 bg-ocean-500/10 px-4 py-1.5 text-xs font-medium text-ocean-200">
          Trusted by
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Backed by teams who{" "}
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-ocean-300 via-royal-300 to-ocean-400 bg-clip-text text-transparent">
            ship with confidence
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
          From clinics to fintech, growing brands hand us the parts of their business
          they can't afford to get wrong.
        </p>
      </div>

      {/* marquee */}
      <div className="relative mt-14 sm:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#040F20] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#040F20] to-transparent sm:w-32" />

        <div className="animate-trusted-marquee flex w-max gap-4 hover:[animation-play-state:paused] sm:gap-6">
          {[0, 1].map((pass) => (
            <div
              key={pass}
              className="flex flex-shrink-0 gap-4 sm:gap-6"
              aria-hidden={pass === 1}
            >
              {LOGOS.map((logo) => (
                <LogoTile key={`${pass}-${logo.id}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>

        <ul className="sr-only">
          {LOGOS.map((logo) => (
            <li key={logo.id}>{logo.label}</li>
          ))}
        </ul>
      </div>

      <style>{`
        .trusted-bg-fixed {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        @media (max-width: 767px) {
          .trusted-bg-fixed {
            background-attachment: scroll;
          }
        }
        @keyframes trusted-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-trusted-marquee {
          animation: trusted-marquee 32s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-trusted-marquee {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}