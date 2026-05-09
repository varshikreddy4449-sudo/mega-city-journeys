import apolloMicrosystems from "@/assets/clients/apollo-microsystems.png";
import indosol from "@/assets/clients/indosol.png";
import wellsFargo from "@/assets/clients/wells-fargo.png";
import novartis from "@/assets/clients/novartis.png";

const logos = [
  { src: apolloMicrosystems, alt: "Apollo Microsystems" },
  { src: indosol, alt: "Indosol" },
  { src: wellsFargo, alt: "Wells Fargo" },
  { src: novartis, alt: "Novartis" },
];

export default function ClientsBelt() {
  // Duplicate the list for a seamless infinite marquee
  const loop = [...logos, ...logos];

  return (
    <section className="relative py-10 md:py-20 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Our Network
          </span>
          <h2 className="mt-3 md:mt-4 font-display text-2xl md:text-4xl font-bold text-primary text-balance">
            Trusted by Our Travel Network
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Companies and groups that work with Mega City Tours &amp; Travells.
          </p>
        </div>

        <div
          className="clients-belt group relative mt-6 md:mt-10 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Auto-scrolling marquee (desktop + mobile). Touch users can still swipe/pause naturally. */}
          <div className="flex w-max items-stretch gap-4 md:gap-6 animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
            {loop.map((logo, i) => (
              <LogoTile key={`l-${i}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-20 w-36 md:h-28 md:w-52 rounded-2xl bg-white shadow-[0_6px_20px_-8px_rgba(13,92,99,0.25)] ring-1 ring-black/5 flex items-center justify-center p-3 md:p-4 transition-transform duration-300 hover:-translate-y-0.5">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}
