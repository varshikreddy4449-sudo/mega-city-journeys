import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/data/site";
import fleetHero from "@/assets/megacity-fleet.jpg";
import brandedBus from "@/assets/megacity-branded-bus.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Travel Vehicles in Hyderabad | Cars, SUVs, Tempo Travellers & Buses" },
      {
        name: "description",
        content:
          "Owned fleet from Hyderabad: Brezza, Innova Crysta, Fortuner, Tempo Traveller, Urbania, and 22/28/40/50 seater buses. AC and Non-AC, with experienced drivers included.",
      },
      { property: "og:title", content: "Our Travel Fleet | Hyderabad" },
      {
        property: "og:description",
        content: "Cars, SUVs, tempo travellers, and 22 to 50 seater buses with drivers.",
      },
    ],
  }),
  component: FleetPage,
});

const features = [
  "AC and Non-AC options available",
  "Drivers included with all vehicles",
  "Local and outstation trips",
  "One-way and round-trip support",
  "Vehicles available 24/7, 365 days",
  "Tolls, parking, permits and driver allowance charged separately",
];

function FleetPage() {
  return (
    <>
      <section className="relative overflow-hidden text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={fleetHero}
            alt="Mega City Tours and Travells owned fleet in Hyderabad."
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 65%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(42,26,20,0.82) 0%, rgba(74,44,32,0.70) 60%, rgba(160,82,45,0.55) 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24 text-center">
          <span className="inline-block rounded-full bg-brand-cream/15 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Our Fleet
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-primary-foreground text-balance">
            Vehicles for every group size
          </h1>
          <p className="mt-5 text-base md:text-lg text-brand-cream/85 max-w-2xl mx-auto">
            From 4-seater Brezza to 50-seater buses. Owned fleet, clean interiors, and experienced
            drivers for local and outstation travel.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-2 rounded-xl bg-secondary/60 p-3 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <div
            className="mb-10 relative overflow-hidden rounded-2xl shadow-card border border-border/60"
            style={{ aspectRatio: "21 / 9" }}
          >
            <img
              src={brandedBus}
              alt="Mega City Tours and Travells branded bus in Hyderabad."
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 35%" }}
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(74,44,32,0.10) 0%, rgba(74,44,32,0.05) 60%, rgba(74,44,32,0.55) 100%)",
              }}
            />
            <div className="relative h-full flex items-center justify-end px-6 md:px-10">
              <div className="max-w-xs text-right">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan">
                  Owned & Branded
                </p>
                <h3 className="mt-2 font-display text-xl md:text-2xl font-bold text-white leading-tight">
                  Recognise our buses on the road
                </h3>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <div
                key={v.slug}
                className="overflow-hidden rounded-2xl bg-white border border-border/60 flex flex-col"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
              >
                <div className="overflow-hidden bg-secondary/30" style={{ height: 200 }}>
                  <img
                    src={v.image}
                    alt={
                      v.slug === "tempo-traveller"
                        ? "Tempo Traveller rental in Hyderabad by Mega City Tours and Travells."
                        : v.slug === "urbania"
                          ? "Urbania vehicle for group travel in Hyderabad by Mega City Tours and Travells."
                          : v.slug === "innova-crysta"
                            ? "Innova Crysta for family and outstation trips in Hyderabad."
                            : v.slug.startsWith("bus-")
                              ? "Large bus rental in Hyderabad for group travel by Mega City Tours and Travells."
                              : `${v.name} for hire in Hyderabad by Mega City Tours and Travells.`
                    }
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-primary">{v.name}</h3>
                    <span className="text-sm font-bold text-accent">{v.seats} Seater</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{v.bestFor}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="rounded-lg bg-secondary px-2 py-1.5 font-semibold text-secondary-foreground text-center">
                      {v.ac}
                    </div>
                    <div className="rounded-lg bg-secondary px-2 py-1.5 font-semibold text-secondary-foreground text-center">
                      {v.count} vehicles
                    </div>
                    <div className="col-span-2 rounded-lg bg-secondary px-2 py-1.5 font-semibold text-secondary-foreground text-center">
                      Driver included
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground">Starting</span>
                    <span className="font-display text-xl font-bold text-primary">
                      {v.startingPrice}
                    </span>
                  </div>
                  <a
                    href={whatsappLink(
                      `Hi Mega City Tours & Travells, I would like to book the ${v.name} (${v.seats} seater).`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-full bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold shadow-card"
                  >
                    <MessageCircle className="h-4 w-4" /> Book
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
