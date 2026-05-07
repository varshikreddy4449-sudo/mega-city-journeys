import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, Phone, Images, Users, Snowflake, BadgeCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { LogoWatermark } from "@/components/LogoWatermark";
import { CTASection } from "@/components/CTASection";
import { AreasServed } from "@/components/AreasServed";
import { vehicles } from "@/data/vehicles";
import { whatsappLink, site } from "@/data/site";
import { cn } from "@/lib/utils";
import fleetHero from "@/assets/megacity-fleet.webp";
import busInterior from "@/assets/bus-interior.webp";
import busInterior2 from "@/assets/bus-interior-2.webp";
import bus50Interior from "@/assets/bus-50-interior.webp";

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

type Filter = "All" | "Cars & SUVs" | "Urbania" | "Tempo Traveller" | "Buses" | "Interiors";
const filters: Filter[] = [
  "All",
  "Cars & SUVs",
  "Urbania",
  "Tempo Traveller",
  "Buses",
  "Interiors",
];

const seoHeading: Record<string, string> = {
  breeza: "Brezza Rental in Hyderabad",
  fortuner: "Fortuner Rental in Hyderabad",
  "innova-crysta": "Innova Crysta Rental in Hyderabad",
  "tempo-traveller": "12 Seater Tempo Traveller Rental in Hyderabad",
  urbania: "12 Seater Urbania Rental in Hyderabad",
  "bus-22": "22 Seater Bus Rental in Hyderabad",
  "bus-28": "28 Seater Bus Rental in Hyderabad",
  "bus-40": "40 Seater Bus Rental in Hyderabad",
  "bus-50": "50 Seater Bus Rental in Hyderabad",
};

const altMap: Record<string, string> = {
  "tempo-traveller":
    "Tempo Traveller rental in Hyderabad by Mega City Tours and Travells",
  urbania: "Urbania vehicle for group travel in Hyderabad by Mega City Tours and Travells.",
  "innova-crysta": "Innova Crysta for family and outstation trips in Hyderabad.",
  breeza: "White Brezza front view - Mega City Tours & Travells",
  fortuner: "White Fortuner exterior side view - Mega City Tours & Travells",
  "bus-22": "22 seater bus rental in Hyderabad",
  "bus-28": "28 seater bus rental in Hyderabad for medium group travel",
  "bus-40": "40 seater bus rental in Hyderabad for large group travel",
  "bus-50": "50 seater bus rental in Hyderabad by Mega City Tours and Travells",
};

function matchFilter(category: string, slug: string, f: Filter): boolean {
  if (f === "All") return true;
  if (f === "Interiors") return false;
  if (f === "Cars & SUVs") return category === "Car" || category === "SUV";
  if (f === "Urbania") return slug === "urbania";
  if (f === "Tempo Traveller") return slug === "tempo-traveller";
  if (f === "Buses") return category === "Bus";
  return true;
}

function FleetPage() {
  const [active, setActive] = useState<Filter>("All");
  const list = useMemo(
    () => vehicles.filter((v) => matchFilter(v.category, v.slug, active)),
    [active],
  );
  const showInteriors = active === "All" || active === "Interiors";

  return (
    <>
      {/* Hero — split layout, ocean breeze theme */}
      <section className="bg-warm-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Our Fleet
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-balance">
              Our Vehicles
            </h1>
            <p className="mt-4 text-base md:text-lg text-brand-cream/85 max-w-xl">
              Choose the right vehicle for your group size, route, and comfort needs. Owned fleet
              from 4-seater cars to 50-seater buses with experienced drivers.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold shadow-glow hover-lift"
              >
                <WhatsAppIcon className="h-4 w-4" /> Get Quote on WhatsApp
              </a>
              <a
                href={`tel:+91${site.phones[0]}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 text-primary-foreground border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/15"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/30 blur-2xl opacity-40" />
            <div className="relative overflow-hidden rounded-3xl shadow-soft border border-white/20" style={{ aspectRatio: "5/4" }}>
              <img
                src={fleetHero}
                alt="Mega City Tours and Travells owned fleet in Hyderabad."
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center 65%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-16">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          {/* Feature pills */}
          <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-2 rounded-xl bg-secondary/60 p-3 text-sm border border-border"
              >
                <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground/85">{f}</span>
              </div>
            ))}
          </div>

          {/* Filter chips */}
          <div className="-mx-4 md:mx-0 mb-8">
            <div className="flex gap-2 overflow-x-auto px-4 md:flex-wrap md:justify-center md:px-0 scrollbar-hide">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    active === f
                      ? "bg-warm-gradient text-primary-foreground shadow-card"
                      : "bg-card text-foreground border border-border hover:bg-secondary",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle grid */}
          {active !== "Interiors" && (
            <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((v) => {
                const hasRealPrice = /₹/.test(v.startingPrice);
                return (
                  <article
                    key={v.slug}
                    className="reveal hover-lift overflow-hidden rounded-2xl bg-card border border-border flex flex-col shadow-card"
                  >
                    <div className="overflow-hidden bg-secondary/40 relative" style={{ height: 200 }}>
                      <img
                        src={v.image}
                        alt={altMap[v.slug] ?? `${v.name} for hire in Hyderabad by Mega City Tours and Travells.`}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-[11px] font-semibold">
                        <Users className="h-3 w-3" /> {v.seats} Seater
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display text-xl font-bold text-primary">{v.name}</h3>
                      {seoHeading[v.slug] && (
                        <h4 className="mt-1 text-[12px] font-semibold text-accent">
                          {seoHeading[v.slug]}
                        </h4>
                      )}
                      <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
                        <span className="font-semibold text-primary">Best for: </span>
                        {v.bestFor}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                        <div className="rounded-lg bg-secondary px-2 py-1.5 font-semibold text-secondary-foreground text-center inline-flex items-center justify-center gap-1">
                          <Snowflake className="h-3 w-3" /> {v.ac}
                        </div>
                        <div className="rounded-lg bg-secondary px-2 py-1.5 font-semibold text-secondary-foreground text-center inline-flex items-center justify-center gap-1">
                          <BadgeCheck className="h-3 w-3" /> Driver included
                        </div>
                      </div>


                      <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
                        <a
                          href={whatsappLink(
                            `Hi Mega City Tours & Travells, I would like a quote for the ${v.name} (${v.seats} seater).`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-warm-gradient text-primary-foreground py-2.5 text-[13px] font-semibold shadow-card"
                        >
                          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                        </a>
                        <a
                          href={`tel:+91${site.phones[0]}`}
                          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent text-accent-foreground py-2.5 text-[13px] font-semibold shadow-card"
                        >
                          <Phone className="h-4 w-4" /> Call
                        </a>
                      </div>
                      <Link
                        to="/gallery"
                        className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card text-primary py-2.5 text-[13px] font-semibold hover:bg-secondary"
                      >
                        <Images className="h-4 w-4" /> Gallery
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Comfort proof - bus interiors */}
          {showInteriors && (
            <div className="mt-14">
              <SectionHeader
                eyebrow="Comfort Proof"
                title="Clean interiors, comfortable seating"
                subtitle="Real photos from our buses, cleaned before every trip and serviced regularly."
              />
              <div className="stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    className="reveal hover-lift overflow-hidden rounded-2xl border border-border shadow-card bg-card"
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
          )}

          {/* Need help choosing CTA */}
          <div className="mt-14 rounded-3xl bg-gradient-to-br from-secondary to-card border border-border p-6 md:p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">
              Need help choosing a vehicle?
            </h3>
            <p className="mt-2 text-foreground/75 max-w-2xl mx-auto">
              Tell us your group size and route — we'll suggest the right vehicle for your trip.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-warm-gradient text-primary-foreground px-7 py-3 text-sm font-semibold shadow-card hover-lift"
              >
                <WhatsAppIcon className="h-5 w-5" /> Get Quote on WhatsApp
              </a>
              <a
                href={`tel:+91${site.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3 text-sm font-semibold shadow-card hover-lift"
              >
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <AreasServed />

      <CTASection />
    </>
  );
}
