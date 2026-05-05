import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { AreasServed } from "@/components/AreasServed";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/data/site";
import fleetHero from "@/assets/megacity-fleet.jpg";
import brandedBus from "@/assets/megacity-branded-bus.jpg";
import busInterior from "@/assets/bus-interior.jpg";
import busInterior2 from "@/assets/bus-interior-2.jpg";
import bus50Interior from "@/assets/bus-50-interior.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Bus Rental Hyderabad | Tempo Traveller, Urbania, 22/28/40/50 Seater Buses" },
      {
        name: "description",
        content:
          "Bus rental Hyderabad and tempo traveller rental Hyderabad. Owned fleet: Brezza, Innova Crysta, Fortuner, 12 seater Tempo Traveller, 12 seater Urbania, and 22, 28, 40, and 50 seater bus rental in Hyderabad with experienced drivers.",
      },
      { property: "og:title", content: "Bus Rental Hyderabad | Tempo Traveller & Urbania Fleet" },
      {
        property: "og:description",
        content:
          "12 seater tempo traveller, 12 seater Urbania, and 22 to 50 seater bus rental in Hyderabad with drivers included.",
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
                className="reveal hover-lift overflow-hidden rounded-2xl bg-white border border-border/60 flex flex-col"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
              >
                <div className="overflow-hidden bg-secondary/30" style={{ height: 200 }}>
                  <img
                    src={v.image}
                    alt={
                      v.slug === "tempo-traveller"
                        ? "Tempo Traveller rental in Hyderabad by Mega City Tours and Travells"
                        : v.slug === "urbania"
                          ? "Urbania vehicle for group travel in Hyderabad by Mega City Tours and Travells."
                          : v.slug === "innova-crysta"
                            ? "Innova Crysta for family and outstation trips in Hyderabad."
                            : v.slug === "bus-28"
                              ? "28 seater bus rental in Hyderabad for medium group travel"
                              : v.slug === "bus-40"
                                ? "40 seater bus rental in Hyderabad for large group travel"
                                : v.slug === "bus-50"
                                  ? "50 seater bus rental in Hyderabad by Mega City Tours and Travells"
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
                  {(() => {
                    const seoHeading: Record<string, string> = {
                      "tempo-traveller": "12 Seater Tempo Traveller Rental in Hyderabad",
                      urbania: "12 Seater Urbania Rental in Hyderabad",
                      "bus-22": "22 Seater Bus Rental in Hyderabad",
                      "bus-28": "28 Seater Bus Rental in Hyderabad",
                      "bus-40": "40 Seater Bus Rental in Hyderabad",
                      "bus-50": "50 Seater Bus Rental in Hyderabad",
                    };
                    const heading = seoHeading[v.slug];
                    return heading ? (
                      <h4 className="mt-1 text-[13px] font-medium text-accent">{heading}</h4>
                    ) : null;
                  })()}
                  <p className="mt-2 text-sm text-muted-foreground">{v.bestFor}</p>
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
                  {(() => {
                    const hasRealPrice = /₹/.test(v.startingPrice);
                    return (
                      <div className="mt-auto pt-4">
                        {hasRealPrice ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs text-muted-foreground">Starting</span>
                            <span className="font-display text-xl font-bold text-primary">
                              {v.startingPrice}
                            </span>
                          </div>
                        ) : (
                          <div>
                            <div className="font-display text-lg font-bold text-primary">
                              Price on Request
                            </div>
                            <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                              Final quote depends on route, date, vehicle type, and trip details.
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                  <a
                    href={whatsappLink(
                      `Hi Mega City Tours & Travells, I would like a quote for the ${v.name} (${v.seats} seater).`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full rounded-full bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold shadow-card"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Ask for Price
                  </a>

                </div>
              </div>
            ))}
          </div>

          {/* Comfort proof - bus interiors */}
          <div className="mt-14">
            <SectionHeader
              eyebrow="Comfort Proof"
              title="Clean interiors, comfortable seating"
              subtitle="Real photos from our buses, cleaned before every trip and serviced regularly."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: busInterior, caption: "Clean bus interiors for long group trips" },
                {
                  src: busInterior2,
                  caption: "Comfortable seating for school, college, and family travel",
                },
                { src: bus50Interior, caption: "Spacious bus interiors for large group movement" },
              ].map((it) => (
                <figure
                  key={it.caption}
                  className="overflow-hidden rounded-2xl border border-border/60 shadow-card bg-card"
                >
                  <div className="relative" style={{ aspectRatio: "4 / 3" }}>
                    <img
                      src={it.src}
                      alt="Clean bus interior for group travel in Hyderabad"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-3 text-sm text-foreground/80">{it.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AreasServed />

      <CTASection />
    </>
  );
}
