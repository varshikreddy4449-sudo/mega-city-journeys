import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { packages, type PkgCategory } from "@/data/packages";
import { whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages from Hyderabad | Telangana Routes & Group Trips" },
      {
        name: "description",
        content:
          "Popular tour packages and routes from Hyderabad — Srisailam, Yadadri, Warangal, Vijayawada, Nagarjuna Sagar, and custom Telangana tours. Pricing on request.",
      },
      { property: "og:title", content: "Tour Packages from Hyderabad" },
      { property: "og:description", content: "Popular routes and custom packages from Hyderabad. Price on request." },
    ],
  }),
  component: PackagesPage,
});

const filters: ("All" | PkgCategory)[] = [
  "All",
  "Local Trips",
  "Pilgrimage Trips",
  "Family Trips",
  "Corporate Trips",
  "School/College Trips",
  "Custom Packages",
];

function PackagesPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-warm-gradient text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <span className="inline-block rounded-full bg-brand-cream/15 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Packages
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-primary-foreground text-balance">
            Popular routes & packages
          </h1>
          <p className="mt-5 text-base md:text-lg text-brand-cream/85 max-w-2xl mx-auto">
            Pricing varies by route, vehicle, group size, and dates. Share your trip details for a
            custom quote — tolls, parking, permits, and driver allowance are charged separately.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  active === f
                    ? "bg-warm-gradient text-primary-foreground shadow-card"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div
                key={p.slug}
                className="group overflow-hidden rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-brand-cream/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-brand-brown">
                    {p.category}
                  </span>
                  <span className="absolute top-3 right-3 rounded-full bg-rust-gradient text-primary-foreground px-3 py-1 text-[11px] font-semibold">
                    Price on request
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-primary">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground"><strong>Best for:</strong> {p.bestFor}</p>
                  <p className="mt-1 text-xs text-muted-foreground"><strong>Vehicles:</strong> {p.vehicles}</p>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{p.description}</p>
                  <a
                    href={whatsappLink(`Hi Mega City Tours & Travells, I would like a quote for: ${p.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center w-full rounded-full bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold shadow-card"
                  >
                    Ask for Price
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
