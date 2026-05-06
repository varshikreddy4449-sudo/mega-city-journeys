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
  Info,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { LogoWatermark } from "@/components/LogoWatermark";
import { packages, type PkgCategory } from "@/data/packages";
import { whatsappLink, telLink, site } from "@/data/site";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.webp";
import fleetImg from "@/assets/megacity-fleet-hero.webp";
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

const TEAL = "#0D5C63";
const TEAL_SOFT = "#3CAEA3";
const AQUA = "#ABDADC";
const CORAL = "#FF7A59";

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
  { icon: MapPin, label: "Local Trips", desc: "City sightseeing & short rentals.", filter: "Local" },
  { icon: Landmark, label: "Pilgrimage", desc: "Temple yatra and darshan routes.", filter: "Pilgrimage" },
  { icon: Users, label: "Family Trips", desc: "Comfortable rides for family groups.", filter: "Family" },
  { icon: GraduationCap, label: "School & College", desc: "Safe student group travel.", filter: "School/College" },
  { icon: Briefcase, label: "Corporate", desc: "Office travel and team outings.", filter: "Corporate" },
  { icon: Heart, label: "Wedding & Event", desc: "Guest pickup and event movement.", filter: "Wedding/Event" },
  { icon: Sparkles, label: "Custom Plans", desc: "Built around your route and dates.", filter: "Custom" },
];

const howItWorks = [
  { icon: Send, title: "Share Your Route", desc: "Tell us your pickup, destination, travel date, and number of passengers." },
  { icon: Car, title: "Choose the Right Vehicle", desc: "We suggest a suitable car, SUV, traveller, Urbania, or bus for your group size." },
  { icon: WhatsAppIcon, title: "Get a Custom Quote", desc: "Pricing shared based on route, vehicle, trip date, and travel requirements." },
];

const priceFactors = [
  { icon: RouteIcon, title: "Route & Distance", desc: "Total kilometres for your trip." },
  { icon: Car, title: "Vehicle Type", desc: "Car, SUV, Traveller, Urbania, or Bus." },
  { icon: Calendar, title: "Travel Date", desc: "Weekday, weekend, or peak season." },
  { icon: Users, title: "Group Size", desc: "Number of passengers travelling." },
  { icon: MapPinned, title: "Trip Type", desc: "Local package or outstation per KM." },
  { icon: Receipt, title: "Extras", desc: "Tolls, parking, permits, taxes, driver allowance." },
];

function quoteLink(title: string) {
  return whatsappLink(`Hi Mega City Tours & Travells, I would like a quote for: ${title}.`);
}

function categoryAccent(c: PkgCategory): string {
  switch (c) {
    case "Pilgrimage": return CORAL;
    case "Family": return TEAL_SOFT;
    case "Local": return "#F4A261";
    case "School/College": return "#4A90E2";
    case "Corporate": return TEAL;
    case "Wedding/Event": return "#E07A9B";
    case "Custom": return "#E9B949";
  }
}

function RouteCard({ p }: { p: typeof packages[number] }) {
  const accent = categoryAccent(p.category);
  return (
    <div
      className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-card hover:shadow-soft transition-all"
      style={{ border: "1px solid rgba(13,92,99,0.10)" }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: accent }} />

      <div className="flex items-center justify-between gap-3">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: `${accent}1F`, color: accent }}
        >
          {p.category}
        </span>
        <span className="text-[10.5px] font-bold uppercase tracking-wider" style={{ color: CORAL }}>
          Price on Request
        </span>
      </div>

      {p.from && p.to ? (
        <div
          className="mt-4 rounded-xl px-4 py-3"
          style={{ backgroundColor: "rgba(171,218,220,0.22)", border: "1px solid rgba(13,92,99,0.10)" }}
        >
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center pt-1">
              <MapPin className="h-4 w-4" style={{ color: CORAL }} />
              <span
                className="my-1 block w-px h-5"
                style={{
                  backgroundImage: "linear-gradient(to bottom, rgba(13,92,99,0.6) 50%, transparent 50%)",
                  backgroundSize: "1px 5px",
                }}
              />
              <MapPin className="h-4 w-4" style={{ color: TEAL }} fill={TEAL} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">From</div>
              <div className="text-sm font-bold truncate" style={{ color: TEAL }}>{p.from}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">To</div>
              <div className="text-base font-bold truncate" style={{ color: TEAL }}>{p.to}</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="mt-4 rounded-xl px-4 py-3 flex items-center gap-3"
          style={{ backgroundColor: "rgba(171,218,220,0.22)", border: "1px solid rgba(13,92,99,0.10)" }}
        >
          <div
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shrink-0"
            style={{ backgroundColor: accent }}
          >
            <RouteIcon className="h-4 w-4" />
          </div>
          <div className="text-sm font-bold" style={{ color: TEAL }}>
            Hyderabad based, custom route
          </div>
        </div>
      )}

      <h3 className="mt-4 font-display text-base font-bold leading-snug" style={{ color: TEAL }}>
        {p.title}
      </h3>

      <dl className="mt-3 space-y-1.5 text-sm flex-1">
        <div className="flex gap-2">
          <dt className="text-[10.5px] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5" style={{ color: CORAL }}>
            Best for
          </dt>
          <dd className="text-foreground/85 flex-1 text-[13px]">{p.bestFor}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-[10.5px] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5" style={{ color: CORAL }}>
            Vehicles
          </dt>
          <dd className="text-foreground/85 flex-1 text-[13px]">{p.vehicles}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-[10.5px] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5" style={{ color: CORAL }}>
            Trip type
          </dt>
          <dd className="text-foreground/85 flex-1 text-[13px]">{p.tripType}</dd>
        </div>
      </dl>

      <a
        href={quoteLink(p.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
        style={{ backgroundColor: "#25D366", boxShadow: "0 6px 14px rgba(37,211,102,0.25)" }}
      >
        <WhatsAppIcon className="h-4 w-4" /> Ask for Price
      </a>
    </div>
  );
}

function SwipeHint() {
  return (
    <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium" style={{ color: TEAL }}>
      <span className="opacity-70">Swipe to explore</span>
      <ArrowRight className="h-3.5 w-3.5 animate-pulse" style={{ color: CORAL }} />
    </div>
  );
}

function PackagesPage() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#F7F9FA",
          backgroundImage: [
            "linear-gradient(215deg, rgba(171,218,220,0.55) 0%, rgba(171,218,220,0.18) 32%, rgba(247,249,250,0) 60%)",
            "radial-gradient(620px 420px at 88% 30%, rgba(60,174,163,0.18), rgba(60,174,163,0) 70%)",
            "radial-gradient(560px 380px at 18% 88%, rgba(255,122,89,0.14), rgba(255,122,89,0) 70%)",
          ].join(", "),
        }}
      >
        {/* Subtle route line */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full hidden md:block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          fill="none"
        >
          <path
            d="M -50 460 C 280 320, 560 580, 880 400 S 1380 260, 1520 380"
            stroke={TEAL}
            strokeOpacity="0.10"
            strokeWidth="1.5"
            strokeDasharray="2 7"
          />
        </svg>
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 hidden md:block"
          style={{ width: "480px", transform: "translate(-50%, -50%)", opacity: 0.04, filter: "grayscale(100%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: AQUA, color: TEAL }}
              >
                <RouteIcon className="h-3.5 w-3.5" /> Routes & Plans
              </span>
              <h1
                className="mt-4 font-display text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] text-balance"
                style={{ color: TEAL }}
              >
                Popular Routes & Custom Travel Plans
              </h1>
              <p className="mt-4 text-base md:text-[17px] text-foreground/75 max-w-xl leading-relaxed">
                Choose a common route from Hyderabad or request a custom plan based on your
                destination, group size, vehicle preference, and travel date.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "#25D366", borderRadius: "10px", padding: "13px 22px", boxShadow: "0 6px 18px rgba(37,211,102,0.28)" }}
                >
                  <WhatsAppIcon className="h-5 w-5" /> Get Quote on WhatsApp
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: TEAL, borderRadius: "10px", padding: "13px 22px", boxShadow: "0 6px 18px rgba(13,92,99,0.28)" }}
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>
            </div>

            {/* Pricing note card */}
            <div className="relative">
              <div
                className="rounded-2xl bg-white p-6"
                style={{
                  border: "1px solid rgba(13,92,99,0.12)",
                  boxShadow: "0 24px 48px -20px rgba(13,92,99,0.25), 0 8px 20px -10px rgba(60,174,163,0.18)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ backgroundColor: AQUA, color: TEAL }}
                  >
                    <Receipt className="h-4.5 w-4.5" />
                  </span>
                  <div className="text-[11px] font-bold uppercase tracking-wider" style={{ color: CORAL }}>
                    Pricing Note
                  </div>
                </div>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  Final cost depends on route, vehicle type, date, group size, tolls, parking,
                  permits, state taxes, and driver allowance.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
                    style={{ backgroundColor: CORAL }}
                  >
                    Price on Request
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold"
                    style={{ backgroundColor: AQUA, color: TEAL }}
                  >
                    No hidden charges
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-white">
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Simple Process"
            title="How Our Travel Plans Work"
            subtitle="Every plan is built around your route, group, and dates."
          />

          {/* Mobile: horizontal snap */}
          <div className="md:hidden">
            <SwipeHint />
            <div className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {howItWorks.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="snap-start shrink-0 basis-[82%]">
                  <StepCard step={i + 1} icon={Icon} title={title} desc={desc} />
                </div>
              ))}
              <div className="shrink-0 w-1" aria-hidden="true" />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid stagger gap-6 md:grid-cols-3">
            {howItWorks.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="reveal hover-lift">
                <StepCard step={i + 1} icon={Icon} title={title} desc={desc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE BY TRIP TYPE */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: "#F7F9FA" }}>
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Pick a Category"
            title="Choose by Trip Type"
            subtitle="Tap a category to filter routes below."
          />

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tripTypeCards.map((t) => (
              <TripTypeTile key={t.label} {...t} active={active === t.filter} onClick={() => { setActive(t.filter); document.getElementById("routes")?.scrollIntoView({ behavior: "smooth" }); }} mobile />
            ))}
            <div className="shrink-0 w-1" aria-hidden="true" />
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid stagger gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tripTypeCards.map((t) => (
              <div key={t.label} className="reveal">
                <TripTypeTile {...t} active={active === t.filter} onClick={() => { setActive(t.filter); document.getElementById("routes")?.scrollIntoView({ behavior: "smooth" }); }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES LIST */}
      <section id="routes" className="relative overflow-hidden py-16 md:py-20 scroll-mt-20 bg-white">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Routes & Plans"
            title="Popular Routes & Custom Travel Plans"
            subtitle="Common routes from Hyderabad with suggested vehicles. All prices on request."
          />

          {/* Filter pills (mobile horizontal scroll) */}
          <div className="-mx-4 md:mx-0 mb-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-2 px-4 md:px-0 md:flex-wrap md:justify-center min-w-max md:min-w-0">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-all"
                  style={
                    active === f
                      ? { backgroundColor: TEAL, color: "white", boxShadow: "0 4px 12px rgba(13,92,99,0.25)" }
                      : { backgroundColor: "white", color: TEAL, border: `1px solid rgba(13,92,99,0.18)` }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: horizontal snap cards */}
          <div className="md:hidden">
            <SwipeHint />
            <div className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {filtered.map((p) => (
                <article key={p.slug} className="snap-start shrink-0 basis-[86%]">
                  <RouteCard p={p} />
                </article>
              ))}
              <div className="shrink-0 w-1" aria-hidden="true" />
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid stagger gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.slug} className="reveal hover-lift h-full">
                <RouteCard p={p} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: "#F7F9FA" }}>
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Pricing"
            title="What Affects Your Trip Price?"
            subtitle="A few things change the final cost. Share your trip details for an accurate quote."
          />

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {priceFactors.map((f) => (
              <div key={f.title} className="snap-start shrink-0 basis-[72%]">
                <PriceFactorCard {...f} />
              </div>
            ))}
            <div className="shrink-0 w-1" aria-hidden="true" />
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid stagger gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map((f) => (
              <div key={f.title} className="reveal hover-lift">
                <PriceFactorCard {...f} />
              </div>
            ))}
          </div>

          <div
            className="mt-8 mx-auto max-w-3xl rounded-2xl p-5 flex items-start gap-3"
            style={{ backgroundColor: "rgba(171,218,220,0.30)", border: "1px solid rgba(13,92,99,0.15)" }}
          >
            <Info className="h-5 w-5 shrink-0 mt-0.5" style={{ color: TEAL }} />
            <p className="text-sm leading-relaxed" style={{ color: TEAL }}>
              All prices are shared on request after we understand your route, vehicle preference,
              dates, and group size. No hidden charges in our quote.
            </p>
          </div>
        </div>
      </section>

      {/* NOT SURE WHICH PACKAGE */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4"
                style={{ backgroundColor: AQUA, color: TEAL }}
              >
                We Can Help
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-balance leading-tight" style={{ color: TEAL }}>
                Not Sure Which Route or Vehicle Is Right?
              </h2>
              <p className="mt-4 text-base text-foreground/75 leading-relaxed">
                Share your pickup, destination, travel date, group size, and vehicle preference.
                Our team will suggest the right travel option.
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
                    className="flex items-start gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-card"
                    style={{ border: "1px solid rgba(13,92,99,0.10)" }}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: CORAL }} />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Hi Mega City Tours & Travells, I need a route suggestion. Here are my trip details:")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "#25D366", boxShadow: "0 6px 18px rgba(37,211,102,0.28)" }}
                >
                  <WhatsAppIcon className="h-5 w-5" /> Get Suggestion on WhatsApp
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: TEAL, boxShadow: "0 6px 18px rgba(13,92,99,0.28)" }}
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[28px] hidden sm:block"
                style={{
                  background: "radial-gradient(60% 60% at 50% 60%, rgba(255,122,89,0.18), rgba(255,122,89,0) 70%)",
                  filter: "blur(8px)",
                }}
              />
              <div
                className="relative overflow-hidden rounded-2xl bg-white"
                style={{
                  aspectRatio: "5 / 4",
                  border: "1px solid rgba(13,92,99,0.12)",
                  boxShadow: "0 24px 48px -20px rgba(13,92,99,0.25)",
                }}
              >
                <img
                  src={fleetImg}
                  alt="Mega City Tours & Travells fleet of cars, travellers, and buses in Hyderabad."
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 backdrop-blur"
                  style={{ backgroundColor: "rgba(255,255,255,0.92)", border: "1px solid rgba(13,92,99,0.12)" }}>
                  <div className="text-[11px] font-bold uppercase tracking-wider" style={{ color: CORAL }}>Our Fleet</div>
                  <div className="font-display text-base md:text-lg font-bold mt-0.5" style={{ color: TEAL }}>
                    Cars, SUVs, Travellers, Urbania, and 22 to 50 seater buses.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AreasServed />

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          backgroundColor: "#F7F9FA",
          backgroundImage: [
            "radial-gradient(620px 420px at 15% 30%, rgba(60,174,163,0.18), rgba(60,174,163,0) 70%)",
            "radial-gradient(560px 380px at 85% 80%, rgba(255,122,89,0.16), rgba(255,122,89,0) 70%)",
          ].join(", "),
        }}
      >
        <div className="relative mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-balance leading-tight" style={{ color: TEAL }}>
            Ready to Plan Your Trip?
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Send us your route, travel date, and group size. We will share the right vehicle and a
            custom quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-bold text-white transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "#25D366", boxShadow: "0 6px 18px rgba(37,211,102,0.28)" }}
            >
              <WhatsAppIcon className="h-5 w-5" /> Get Quote on WhatsApp
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-bold text-white transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: TEAL, boxShadow: "0 6px 18px rgba(13,92,99,0.28)" }}
            >
              <Phone className="h-5 w-5" /> Call {site.phones[0]}
            </a>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium" style={{ color: TEAL }}>
            <ArrowRight className="h-3.5 w-3.5" style={{ color: CORAL }} /> Price on Request. No hidden charges.
          </div>
        </div>
      </section>
    </>
  );
}

function StepCard({
  step,
  icon: Icon,
  title,
  desc,
}: {
  step: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="relative h-full rounded-2xl bg-white p-6 shadow-card hover:shadow-soft transition-all overflow-hidden"
      style={{ border: "1px solid rgba(13,92,99,0.10)" }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${TEAL}, ${TEAL_SOFT}, ${CORAL})` }} />
      <div className="flex items-center gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm"
          style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL_SOFT})` }}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span
          className="inline-flex items-center justify-center rounded-full text-[11px] font-bold uppercase tracking-wider px-2.5 py-1"
          style={{ backgroundColor: `${CORAL}1A`, color: CORAL }}
        >
          Step {step}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-bold" style={{ color: TEAL }}>{title}</h3>
      <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{desc}</p>
    </div>
  );
}

function TripTypeTile({
  icon: Icon,
  label,
  desc,
  active,
  onClick,
  mobile,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
  active: boolean;
  onClick: () => void;
  mobile?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group text-left rounded-2xl bg-white p-5 shadow-card transition-all hover:shadow-soft hover:-translate-y-0.5",
        mobile && "snap-start shrink-0 basis-[72%]",
      )}
      style={{
        border: active
          ? `2px solid ${CORAL}`
          : "1px solid rgba(13,92,99,0.10)",
        boxShadow: active ? `0 8px 22px -8px ${CORAL}55` : undefined,
      }}
    >
      <div
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl mb-3"
        style={{
          background: active
            ? `linear-gradient(135deg, ${CORAL}, ${CORAL}CC)`
            : `linear-gradient(135deg, ${AQUA}, rgba(60,174,163,0.35))`,
          color: active ? "white" : TEAL,
        }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-display text-base font-bold leading-snug" style={{ color: TEAL }}>
        {label}
      </div>
      <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</div>
    </button>
  );
}

function PriceFactorCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="h-full flex items-start gap-3 rounded-2xl bg-white p-5 shadow-card hover:shadow-soft transition-all"
      style={{ border: "1px solid rgba(13,92,99,0.10)" }}
    >
      <div
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{ background: `linear-gradient(135deg, ${AQUA}, rgba(60,174,163,0.35))`, color: TEAL }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="font-display text-base font-bold leading-snug" style={{ color: TEAL }}>{title}</div>
        <div className="mt-0.5 text-sm text-foreground/75 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
