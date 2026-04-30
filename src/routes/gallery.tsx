import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { cn } from "@/lib/utils";

import bus from "@/assets/vehicle-bus.jpg";
import innova from "@/assets/vehicle-innova.jpg";
import tempo from "@/assets/vehicle-tempo.jpg";
import urbania from "@/assets/vehicle-urbania.jpg";
import brezza from "@/assets/vehicle-brezza.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";
import family from "@/assets/trip-family.jpg";
import school from "@/assets/trip-school.jpg";
import corp from "@/assets/trip-corporate.jpg";
import wedding from "@/assets/trip-wedding.jpg";
import hyd from "@/assets/dest-hyderabad.jpg";
import sri from "@/assets/dest-srisailam.jpg";
import yad from "@/assets/dest-yadadri.jpg";
import war from "@/assets/dest-warangal.jpg";
import vij from "@/assets/dest-vijayawada.jpg";
import nag from "@/assets/dest-nagarjuna.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Mega City Tours & Travells" },
      { name: "description", content: "Photos of our vehicles, group trips, and destinations across Telangana and nearby states." },
      { property: "og:title", content: "Gallery — Mega City Tours & Travells" },
      { property: "og:description", content: "Photos of our fleet, group trips, and popular destinations." },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Vehicles" | "Group Trips" | "Destinations" | "Events" | "Outstation Trips";

const items: { src: string; alt: string; cat: Exclude<Cat, "All"> }[] = [
  { src: bus, alt: "40 seater bus", cat: "Vehicles" },
  { src: innova, alt: "Innova Crysta", cat: "Vehicles" },
  { src: tempo, alt: "Tempo Traveller", cat: "Vehicles" },
  { src: urbania, alt: "Force Urbania", cat: "Vehicles" },
  { src: brezza, alt: "Maruti Brezza", cat: "Vehicles" },
  { src: fortuner, alt: "Toyota Fortuner", cat: "Vehicles" },
  { src: family, alt: "Family group trip", cat: "Group Trips" },
  { src: school, alt: "School excursion", cat: "Group Trips" },
  { src: corp, alt: "Corporate group", cat: "Group Trips" },
  { src: wedding, alt: "Wedding guest transport", cat: "Events" },
  { src: hyd, alt: "Hyderabad sightseeing", cat: "Destinations" },
  { src: sri, alt: "Srisailam temple", cat: "Destinations" },
  { src: yad, alt: "Yadadri temple", cat: "Destinations" },
  { src: war, alt: "Warangal heritage", cat: "Destinations" },
  { src: vij, alt: "Vijayawada", cat: "Outstation Trips" },
  { src: nag, alt: "Nagarjuna Sagar", cat: "Outstation Trips" },
];

const cats: Cat[] = ["All", "Vehicles", "Group Trips", "Destinations", "Events", "Outstation Trips"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const list = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <section className="bg-warm-gradient text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Gallery</h1>
          <p className="mt-3 text-brand-cream/85">Our journey in pictures — vehicles, groups, and destinations.</p>
          <p className="mt-2 text-xs text-brand-cream/60">
            Note: some images are tasteful placeholders — to be replaced with the client's real photos.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  active === c
                    ? "bg-warm-gradient text-primary-foreground shadow-card"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {list.map((it) => (
              <div key={it.alt} className="overflow-hidden rounded-2xl shadow-card aspect-square group">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
