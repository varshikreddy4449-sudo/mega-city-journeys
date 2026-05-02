import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ShieldCheck, Maximize2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { cn } from "@/lib/utils";

import fleetHero from "@/assets/megacity-fleet-hero.jpg";
import fleet from "@/assets/megacity-fleet.jpg";
import brandedBus from "@/assets/megacity-branded-bus.jpg";
import volvo from "@/assets/volvo-bus.jpg";
import tempo from "@/assets/vehicle-tempo.jpg";
import tempoExteriorFront from "@/assets/tempo-exterior-front.jpg";
import tempoExteriorRear from "@/assets/tempo-exterior-rear.jpg";
import tempoInterior from "@/assets/tempo-interior.jpg";
import urbania from "@/assets/vehicle-urbania.jpg";
import urbaniaInterior from "@/assets/urbania-interior.jpg";
import innova from "@/assets/vehicle-innova.jpg";
import innovaFront from "@/assets/innova-exterior-front.jpg";
import innovaRear from "@/assets/innova-exterior-rear.jpg";
import innovaInteriorFront from "@/assets/innova-interior-front.jpg";
import innovaInteriorRear from "@/assets/innova-interior-rear.jpg";
import brezza from "@/assets/vehicle-brezza.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";
import bus22 from "@/assets/vehicle-bus-22.jpg";
import bus28 from "@/assets/vehicle-bus-28.jpg";
import bus40 from "@/assets/vehicle-bus-40.jpg";
import bus40Front from "@/assets/bus-40-front.jpg";
import bus40Rear from "@/assets/bus-40-rear.jpg";
import bus40Side from "@/assets/bus-40-side.jpg";
import bus40RearYellow from "@/assets/bus-40-rear-yellow.jpg";
import bus50 from "@/assets/vehicle-bus-50.jpg";
import bus from "@/assets/vehicle-bus.jpg";
import busInterior from "@/assets/bus-interior.jpg";
import busInterior2 from "@/assets/bus-interior-2.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Mega City Tours & Travells" },
      {
        name: "description",
        content:
          "Real photos of Mega City Tours and Travells vehicles, interiors, and branded fleet in Hyderabad.",
      },
      { property: "og:title", content: "Gallery | Mega City Tours & Travells" },
      {
        property: "og:description",
        content: "A real look at our vehicles, interiors, and branded fleet in Hyderabad.",
      },
      { property: "og:image", content: fleetHero },
      { name: "twitter:image", content: fleetHero },
    ],
  }),
  component: GalleryPage,
});

type Cat =
  | "All"
  | "Fleet Lineup"
  | "Cars & SUVs"
  | "Tempo Traveller"
  | "Urbania"
  | "Buses"
  | "Interiors"
  | "Branded Fleet";

type Item = {
  src: string;
  alt: string;
  caption: string;
  cats: Exclude<Cat, "All">[];
};

const items: Item[] = [
  {
    src: fleetHero,
    alt: "Mega City Tours and Travells fleet lineup in Hyderabad",
    caption: "Mega City fleet lineup in Hyderabad",
    cats: ["Fleet Lineup", "Branded Fleet"],
  },
  {
    src: fleet,
    alt: "Mega City Tours and Travells vehicles parked together",
    caption: "Our vehicles ready for the day",
    cats: ["Fleet Lineup"],
  },
  {
    src: brandedBus,
    alt: "Branded Mega City Tours and Travells bus in Hyderabad",
    caption: "Branded Mega City vehicle",
    cats: ["Branded Fleet", "Buses"],
  },
  {
    src: tempo,
    alt: "Tempo Traveller rental in Hyderabad by Mega City Tours and Travells",
    caption: "Tempo Traveller for group trips",
    cats: ["Tempo Traveller"],
  },
  {
    src: tempoExteriorFront,
    alt: "Tempo Traveller rental in Hyderabad by Mega City Tours and Travells",
    caption: "Tempo Traveller front view",
    cats: ["Tempo Traveller"],
  },
  {
    src: tempoExteriorRear,
    alt: "Tempo Traveller rental in Hyderabad by Mega City Tours and Travells",
    caption: "Tempo Traveller rear view",
    cats: ["Tempo Traveller"],
  },
  {
    src: tempoInterior,
    alt: "Tempo Traveller interior for group travel in Hyderabad",
    caption: "Comfortable seating for small and medium group trips",
    cats: ["Tempo Traveller", "Interiors"],
  },
  {
    src: urbania,
    alt: "Force Urbania for group travel in Hyderabad",
    caption: "Urbania for comfortable group travel",
    cats: ["Urbania"],
  },
  {
    src: urbaniaInterior,
    alt: "Force Urbania interior with comfortable seating",
    caption: "Urbania interior with comfortable seating",
    cats: ["Urbania", "Interiors"],
  },
  {
    src: innova,
    alt: "Innova Crysta for family and outstation trips from Hyderabad",
    caption: "Innova Crysta for family and outstation trips",
    cats: ["Cars & SUVs"],
  },
  {
    src: innovaFront,
    alt: "Innova Crysta for family and outstation trips from Hyderabad",
    caption: "Innova Crysta front view",
    cats: ["Cars & SUVs"],
  },
  {
    src: innovaRear,
    alt: "Innova Crysta for family and outstation trips from Hyderabad",
    caption: "Innova Crysta rear view",
    cats: ["Cars & SUVs"],
  },
  {
    src: innovaInteriorFront,
    alt: "Innova Crysta interior for family trips in Hyderabad",
    caption: "Comfortable car interiors for family trips",
    cats: ["Cars & SUVs", "Interiors"],
  },
  {
    src: innovaInteriorRear,
    alt: "Innova Crysta interior for family trips in Hyderabad",
    caption: "Spacious rear seating for family travel",
    cats: ["Cars & SUVs", "Interiors"],
  },
  {
    src: brezza,
    alt: "Maruti Brezza for city and short trips in Hyderabad",
    caption: "Compact SUV for city trips",
    cats: ["Cars & SUVs"],
  },
  {
    src: fortuner,
    alt: "Toyota Fortuner for premium travel in Hyderabad",
    caption: "Premium SUV for special travel",
    cats: ["Cars & SUVs"],
  },
  {
    src: bus22,
    alt: "22 seater bus rental in Hyderabad by Mega City Tours and Travells",
    caption: "22-seater bus for small group travel",
    cats: ["Buses"],
  },
  {
    src: bus28,
    alt: "28 seater bus rental in Hyderabad for medium group travel",
    caption: "28-seater bus for medium group travel",
    cats: ["Buses"],
  },
  {
    src: bus40,
    alt: "40 seater bus rental in Hyderabad for large group travel",
    caption: "40-seater bus for large group travel",
    cats: ["Buses"],
  },
  {
    src: bus40Front,
    alt: "40 seater bus rental in Hyderabad for large group travel",
    caption: "40-seater bus front view",
    cats: ["Buses"],
  },
  {
    src: bus40Side,
    alt: "40 seater bus rental in Hyderabad for large group travel",
    caption: "40-seater bus side view",
    cats: ["Buses"],
  },
  {
    src: bus40Rear,
    alt: "40 seater bus rental in Hyderabad for large group travel",
    caption: "40-seater bus rear view",
    cats: ["Buses"],
  },
  {
    src: bus40RearYellow,
    alt: "40 seater bus rental in Hyderabad for large group travel",
    caption: "40-seater bus rear angle",
    cats: ["Buses"],
  },
  {
    src: bus50,
    alt: "50 seater bus for large group travel in Hyderabad",
    caption: "50-seater bus for large group travel",
    cats: ["Buses"],
  },
  {
    src: bus,
    alt: "Mega City bus rental for group travel in Hyderabad",
    caption: "Bus ready for group travel",
    cats: ["Buses", "Branded Fleet"],
  },
  {
    src: volvo,
    alt: "Volvo style bus for long distance travel from Hyderabad",
    caption: "Bus for long distance group travel",
    cats: ["Buses"],
  },
  {
    src: busInterior,
    alt: "Clean bus interior for group travel in Hyderabad",
    caption: "Clean bus interior",
    cats: ["Interiors"],
  },
  {
    src: busInterior2,
    alt: "Modern bus interior with comfortable seats in Hyderabad",
    caption: "Comfortable bus seating",
    cats: ["Interiors"],
  },
];

const cats: Cat[] = [
  "All",
  "Fleet Lineup",
  "Cars & SUVs",
  "Tempo Traveller",
  "Urbania",
  "Buses",
  "Interiors",
  "Branded Fleet",
];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const list =
    active === "All" ? items : items.filter((i) => i.cats.includes(active as Exclude<Cat, "All">));

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + list.length) % list.length)),
    [list.length],
  );
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % list.length)),
    [list.length],
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, close, prev, next]);

  // Reset lightbox if filter changes while open
  useEffect(() => {
    setOpenIdx(null);
  }, [active]);

  const current = openIdx !== null ? list[openIdx] : null;

  return (
    <>
      <section
        className="text-primary-foreground py-16 md:py-20"
        style={{ backgroundColor: "#4A2C20" }}
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wider"
            style={{ backgroundColor: "#A0522D", color: "#F4F1EA" }}
          >
            REAL FLEET PHOTOS
          </span>
          <h1
            className="mt-4 font-display text-4xl md:text-5xl font-bold"
            style={{ color: "#F4F1EA" }}
          >
            Gallery
          </h1>
          <p className="mt-3 text-base md:text-lg" style={{ color: "#D9B08C" }}>
            A real look at Mega City Tours &amp; Travells vehicles, interiors, and branded fleet.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Trust note */}
          <div
            className="mx-auto mb-8 flex max-w-3xl items-start gap-3 rounded-2xl border p-4"
            style={{ backgroundColor: "#F4F1EA", borderColor: "#D9B08C" }}
          >
            <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#8FA68F" }} />
            <p className="text-sm" style={{ color: "#4A2C20" }}>
              All photos shown here are real vehicle and fleet images from Mega City Tours &amp;
              Travells.
            </p>
          </div>

          {/* Filters - horizontally scrollable on mobile */}
          <div className="-mx-4 md:mx-0 mb-8">
            <div className="flex gap-2 overflow-x-auto px-4 md:flex-wrap md:justify-center md:px-0 scrollbar-hide">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    active === c ? "shadow-card" : "hover:opacity-80",
                  )}
                  style={
                    active === c
                      ? { backgroundColor: "#A0522D", color: "#F4F1EA" }
                      : {
                          backgroundColor: "#F4F1EA",
                          color: "#4A2C20",
                          border: "1px solid #D9B08C",
                        }
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {list.map((it, idx) => (
              <button
                key={it.caption}
                onClick={() => setOpenIdx(idx)}
                className="group text-left overflow-hidden rounded-2xl shadow-card bg-card transition-transform hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    style={{ backgroundColor: "rgba(74,44,32,0.9)", color: "#F4F1EA" }}
                  >
                    {it.cats[0]}
                  </span>
                  <span
                    className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#4A2C20" }}
                  >
                    <Maximize2 className="h-3 w-3" /> View
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium" style={{ color: "#4A2C20" }}>
                    {it.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {list.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No photos in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {current && openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(15,10,8,0.92)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full p-2 text-white hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>

          {list.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 rounded-full p-2 text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 rounded-full p-2 text-white hover:bg-white/10"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="mx-auto max-h-[78vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: "#A0522D", color: "#F4F1EA" }}
              >
                {current.cats[0]}
              </span>
              <p className="mt-2 text-white text-base md:text-lg">{current.caption}</p>
              <p className="text-white/60 text-xs mt-1">
                {openIdx + 1} / {list.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTASection
        title="Seen the Fleet? Plan Your Trip Next."
        text="Share your destination, travel date, group size, and preferred vehicle. Our team will suggest the right option."
      />
    </>
  );
}
