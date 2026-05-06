import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useState } from "react";
import {
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Car,
  CheckCircle2,
  Landmark,
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  Sparkles,
  Route as RouteIcon,
  Calendar,
  Receipt,
  MapPinned,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { LogoWatermark } from "@/components/LogoWatermark";
import { packages, type PkgCategory } from "@/data/packages";
import { whatsappLink, telLink, site } from "@/data/site";
import { cn } from "@/lib/utils";
import fleetImg from "@/assets/megacity-fleet-hero.webp";
import busInteriorImg from "@/assets/bus-interior.webp";
import { AreasServed } from "@/components/AreasServed";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Popular Routes & Telangana Tour Packages from Hyderabad | Mega City Tours & Travells" },
      {
        name: "description",
        content:
          "Bus rental for Srisailam trip, Hyderabad to Yadadri vehicle booking, Hyderabad to Warangal group travel, Hyderabad to Vijayawada outstation trip, Hyderabad local sightseeing vehicle rental, and Telangana tour packages from Hyderabad. Price on request.",
      },
      { property: "og:title", content: "Popular Routes & Telangana Tour Packages from Hyderabad" },
      {
        property: "og:description",
        content:
          "Srisailam, Yadadri, Warangal, Vijayawada and local sightseeing routes with suggested vehicles. Price on request.",
      },
    ],
  }),
  component: PackagesPage,
});

type Filter = "All" | PkgCategory;

const filters: Filter[] = [
  "All",
  "Local",
  "Pilgrimage",
  "Family",
  "School/College",
  "Corporate",
  "Wedding/Event",
  "Custom",
];

const tripTypeCards: { icon: typeof MapPin; label: string; desc: string; filter: Filter }[] = [
  {
    icon: MapPin,
    label: "Local Trips",
    desc: "City sightseeing and short rentals.",
    filter: "Local",
  },
  {
    icon: Landmark,
    label: "Pilgrimage Trips",
    desc: "Temple yatra and darshan routes.",
    filter: "Pilgrimage",
  },
  {
    icon: Users,
    label: "Family Trips",
    desc: "Comfortable rides for family groups.",
    filter: "Family",
  },
  {
    icon: GraduationCap,
    label: "School & College Trips",
    desc: "Safe student group travel.",
    filter: "School/College",
  },
  {
    icon: Briefcase,
    label: "Corporate Trips",
    desc: "Office travel and team outings.",
    filter: "Corporate",
  },
  {
    icon: Heart,
    label: "Wedding & Event Transport",
    desc: "Guest pickup and event movement.",
    filter: "Wedding/Event",
  },
  {
    icon: Sparkles,
    label: "Custom Packages",
    desc: "Built around your route and dates.",
    filter: "Custom",
  },
];

const howItWorks = [
  {
    icon: Send,
    title: "Share Your Route",
    desc: "Tell us your pickup point, destination, travel date, and number of passengers.",
  },
  {
    icon: Car,
    title: "Choose the Right Vehicle",
    desc: "We suggest a suitable car, SUV, traveller, Urbania, or bus based on your group size.",
  },
  {
    icon: WhatsAppIcon,
    title: "Get a Custom Quote",
    desc: "Pricing is shared based on route, vehicle type, trip date, and travel requirements.",
  },
];

const priceFactors = [
  { icon: RouteIcon, label: "Route and distance" },
  { icon: Car, label: "Vehicle type" },
  { icon: Calendar, label: "Travel date" },
  { icon: Users, label: "Group size" },
  { icon: MapPinned, label: "Local or outstation trip" },
  { icon: Receipt, label: "Tolls, parking, permits, state taxes, and driver allowance" },
];

function quoteLink(title: string) {
  return whatsappLink(`Hi Mega City Tours & Travells, I would like a quote for: ${title}.`);
}

function categoryColor(c: PkgCategory) {
  switch (c) {
    case "Pilgrimage":
      return "bg-brand-rust/10 text-brand-rust border-brand-rust/20";
    case "Family":
      return "bg-brand-sage/15 text-[#4F6B4F] border-brand-sage/30";
    case "Local":
      return "bg-brand-tan/25 text-brand-brown border-brand-tan/40";
    case "School/College":
      return "bg-blue-500/10 text-blue-700 border-blue-500/20";
    case "Corporate":
      return "bg-brand-brown/10 text-brand-brown border-brand-brown/20";
    case "Wedding/Event":
      return "bg-pink-500/10 text-pink-700 border-pink-500/20";
    case "Custom":
      return "bg-amber-500/10 text-amber-700 border-amber-500/20";
  }
}

function PackagesPage() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-brand-cream"
        style={{
          background: "linear-gradient(120deg, #4A2C20 0%, #4A2C20 55%, #6B3422 78%, #A0522D 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-25"
          style={{ background: "#8FA68F" }}
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pkg-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#F4F1EA" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pkg-dots)" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 lg:py-20 min-h-[420px] md:min-h-[460px] flex items-center">
          <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-brand-tan/20 text-brand-tan border border-brand-tan/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                Routes & Plans
              </span>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance text-brand-cream">
                Popular Routes & Custom Travel Plans
              </h1>
              <p className="mt-4 text-sm md:text-base text-brand-cream/85 max-w-xl leading-relaxed">
                Choose a common route from Hyderabad or request a custom travel plan based on your
                destination, group size, vehicle preference, and travel date.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground shadow-glow"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Get Quote on WhatsApp
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-cream/70 px-6 py-3 font-semibold text-brand-cream hover:bg-brand-cream/10 transition"
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-brand-cream/15 bg-brand-cream/[0.07] backdrop-blur-md p-5 shadow-soft">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-tan mb-3">
                  <Receipt className="h-3.5 w-3.5" /> Pricing Note
                </div>
                <p className="text-sm text-brand-cream/90 leading-relaxed">
                  Prices are shared on request because final cost depends on route, vehicle type,
                  date, group size, tolls, parking, permits, state taxes, and driver allowance.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-rust/90 text-brand-cream px-3 py-1.5 text-xs font-semibold">
                  Price on Request
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Simple Process"
            title="How Our Travel Plans Work"
            subtitle="Every plan is built around your route, group, and dates."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {howItWorks.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-card"
              >
                <div className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-brown text-brand-cream text-xs font-bold shadow-card">
                  {i + 1}
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rust-gradient text-primary-foreground mb-4 shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE BY TRIP TYPE */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-secondary/40">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Pick a Category"
            title="Choose by Trip Type"
            subtitle="Tap a category to filter routes below."
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tripTypeCards.map(({ icon: Icon, label, desc, filter }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setActive(filter);
                  document.getElementById("routes")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "group text-left rounded-2xl border bg-card p-5 shadow-card transition-all hover:shadow-soft hover:border-accent/50",
                  active === filter ? "border-accent ring-1 ring-accent/40" : "border-border/60",
                )}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-3">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <div className="font-display text-base font-semibold text-primary leading-snug">
                  {label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES LIST */}
      <section id="routes" className="relative overflow-hidden py-16 md:py-20 scroll-mt-20">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Routes & Plans"
            title="Popular Routes & Custom Travel Plans"
            subtitle="Common routes from Hyderabad with suggested vehicles. All prices on request."
          />

          {/* Filters */}
          <div className="-mx-4 md:mx-0 mb-8 overflow-x-auto">
            <div className="flex gap-2 px-4 md:px-0 md:flex-wrap md:justify-center min-w-max md:min-w-0">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all border",
                    active === f
                      ? "bg-brand-brown text-brand-cream border-brand-brown shadow-card"
                      : "bg-card text-foreground/85 border-border hover:border-accent hover:text-accent",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-card hover:shadow-soft hover:border-accent/30 transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
                      categoryColor(p.category),
                    )}
                  >
                    {p.category}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-rust">
                    Price on Request
                  </span>
                </div>

                {/* Route visual */}
                {p.from && p.to ? (
                  <div className="mb-4 rounded-xl bg-secondary/60 border border-border/60 px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex flex-col items-center">
                        <MapPin className="h-4 w-4 text-brand-rust" />
                        <div className="w-px h-3 bg-border my-0.5" />
                        <MapPin className="h-4 w-4 text-brand-sage" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          From
                        </div>
                        <div className="text-sm font-semibold text-foreground truncate">
                          {p.from}
                        </div>
                        <div className="mt-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          To
                        </div>
                        <div className="text-sm font-semibold text-foreground truncate">{p.to}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 rounded-xl bg-secondary/60 border border-border/60 px-4 py-3 flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-brown text-brand-cream">
                      <RouteIcon className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      Hyderabad based, custom route
                    </div>
                  </div>
                )}

                <h3 className="font-display text-lg font-semibold text-primary leading-snug">
                  {p.title}
                </h3>

                <dl className="mt-4 space-y-2.5 text-sm flex-1">
                  <div className="flex gap-2">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent w-24 shrink-0 pt-0.5">
                      Best for
                    </dt>
                    <dd className="text-foreground/90 flex-1">{p.bestFor}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent w-24 shrink-0 pt-0.5">
                      Vehicles
                    </dt>
                    <dd className="text-foreground/90 flex-1">{p.vehicles}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent w-24 shrink-0 pt-0.5">
                      Trip type
                    </dt>
                    <dd className="text-foreground/90 flex-1">{p.tripType}</dd>
                  </div>
                </dl>

                <a
                  href={quoteLink(p.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-rust-gradient text-primary-foreground py-2.5 text-sm font-semibold shadow-card hover:shadow-glow transition"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Ask for Price
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Pricing"
            title="What Affects Your Trip Price?"
            subtitle="A few things change the final cost. Share your trip details for an accurate quote."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="reveal hover-lift flex items-start gap-3 rounded-2xl bg-card border border-border/60 p-5 shadow-card"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium text-foreground/90 pt-1.5 leading-snug">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE WHICH PACKAGE - with fleet image */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                We Can Help
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-balance leading-tight">
                Not Sure Which Route or Vehicle Is Right?
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Share your pickup location, destination, travel date, group size, and vehicle
                preference. Our team will suggest the right travel option.
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Pickup location",
                  "Destination",
                  "Travel date",
                  "Group size",
                  "Vehicle preference",
                  "One-way or round trip",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl bg-card border border-border/60 px-3.5 py-2.5 shadow-card"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(
                    "Hi Mega City Tours & Travells, I need a route suggestion. Here are my trip details:",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3 font-semibold shadow-glow"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Get Suggestion on WhatsApp
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>
            </div>

            <div
              className="reveal relative overflow-hidden rounded-2xl shadow-soft border border-border/60"
              style={{ aspectRatio: "5 / 4" }}
            >
              <img
                src={fleetImg}
                alt="Mega City Tours & Travells fleet of cars, travellers, and buses in Hyderabad."
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/85 via-brand-brown/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-brand-cream">
                <div className="text-[11px] uppercase tracking-[0.18em] opacity-85">Our Fleet</div>
                <div className="font-display text-lg md:text-xl font-semibold mt-0.5">
                  Cars, SUVs, Travellers, Urbania, and 22 to 50 seater buses.
                </div>
              </div>
              <img
                src={busInteriorImg}
                alt=""
                aria-hidden="true"
                className="hidden md:block absolute -bottom-6 -right-6 h-32 w-44 object-cover rounded-xl border-4 border-card shadow-soft"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <AreasServed />

      {/* FINAL CTA */}
      <section className="bg-rust-gradient text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-balance leading-tight">
            Ready to Plan Your Trip?
          </h2>
          <p className="mt-4 text-base md:text-lg text-brand-cream/90 max-w-2xl mx-auto leading-relaxed">
            Send us your route, travel date, and group size. We will share the right vehicle and a
            custom quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-3.5 font-semibold shadow-soft"
            >
              <WhatsAppIcon className="h-5 w-5" /> Get Quote on WhatsApp
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-cream text-brand-cream px-7 py-3.5 font-semibold hover:bg-brand-cream/15 transition"
            >
              <Phone className="h-5 w-5" /> Call {site.phones[0]}
            </a>
          </div>
          <div className="mt-4 text-xs text-brand-cream/75 inline-flex items-center gap-2">
            <ArrowRight className="h-3.5 w-3.5" /> Price on Request. No hidden charges in our quote.
          </div>
        </div>
      </section>
    </>
  );
}
