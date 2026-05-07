import pharmaChem from "@/assets/clients/pharma-chem.png";
import infosys from "@/assets/clients/infosys.png";
import foxconnFit from "@/assets/clients/foxconn-fit.png";
import dtds from "@/assets/clients/dtds.png";
import iconLifeSciences from "@/assets/clients/icon-life-sciences.png";

const logos = [
  { src: pharmaChem, alt: "VS Pharma Chem" },
  { src: infosys, alt: "Infosys" },
  { src: foxconnFit, alt: "Foxconn Interconnect Technology (FIT)" },
  { src: dtds, alt: "DTDS" },
  { src: iconLifeSciences, alt: "Icon Life Sciences" },
];

export default function ClientsBelt() {
  // Duplicate the list for a seamless infinite marquee
  const loop = [...logos, ...logos];

  return (
    <section className="relative py-14 md:py-20 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Our Network
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-primary text-balance">
            Trusted by Our Travel Network
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Companies and groups that work with Mega City Tours &amp; Travells.
          </p>
        </div>

        <div
          className="clients-belt group relative mt-10 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Desktop: auto-scrolling marquee */}
          <div className="hidden md:flex w-max items-stretch gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {loop.map((logo, i) => (
              <LogoTile key={`d-${i}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>

          {/* Mobile: native swipeable horizontal scroll */}
          <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {logos.map((logo, i) => (
              <div key={`m-${i}`} className="snap-start shrink-0">
                <LogoTile src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-24 w-44 md:h-28 md:w-52 rounded-2xl bg-white shadow-[0_6px_20px_-8px_rgba(13,92,99,0.25)] ring-1 ring-black/5 flex items-center justify-center p-4 transition-transform duration-300 hover:-translate-y-0.5">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}
