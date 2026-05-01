import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Phone,
  MapPin,
  Users,
  Shield,
  Wrench,
  CheckCircle2,
  Bus,
  Briefcase,
  Map as MapIcon,
  Home,
  GraduationCap,
  Landmark,
  Heart,
  PartyPopper,
  Plane,
  Compass,
  Route as RouteIcon,
} from "lucide-react";
import heroImg from "@/assets/megacity-fleet-hero.jpg";
import fleetImg from "@/assets/megacity-fleet.jpg";
import urbaniaInterior from "@/assets/urbania-interior.jpg";
import { site, whatsappLink } from "@/data/site";
import { vehicles } from "@/data/vehicles";
import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mega City Tours & Travells | Group Travel & Per KM Trips in Hyderabad" },
      {
        name: "description",
        content:
          "Hyderabad's trusted travel partner — owned fleet of 33+ vehicles from 4 to 50 seats for family, school, corporate, wedding, pilgrimage, and outstation group travel.",
      },
      { property: "og:title", content: "Mega City Tours & Travells | Hyderabad" },
      {
        property: "og:description",
        content: "Group travel, per KM trips, and outstation travel from Hyderabad across Telangana and nearby states.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const trustStats = [
  { num: "33+", label: "Owned Vehicles" },
  { num: "4–50", label: "Seater Options" },
  { num: "20–30 yrs", label: "Experienced Drivers" },
  { num: "365", label: "Days Available" },
];

const occasions = [
  { icon: Home, title: "Family Trips" },
  { icon: GraduationCap, title: "School & College Trips" },
  { icon: Briefcase, title: "Corporate Outings" },
  { icon: PartyPopper, title: "Wedding Guest Transport" },
  { icon: Heart, title: "Pilgrimage Trips" },
  { icon: Plane, title: "Outstation Trips" },
  { icon: Compass, title: "Local Sightseeing" },
  { icon: MapPin, title: "Airport Transfers" },
];

const popularRoutes = [
  { title: "Hyderabad Local Sightseeing", note: "Charminar, Golconda, Salar Jung, Birla Mandir", category: "Local" },
  { title: "Srisailam", note: "One or two-day temple yatra", category: "Pilgrimage" },
  { title: "Yadadri", note: "Same-day Lakshmi Narasimha darshan", category: "Pilgrimage" },
  { title: "Warangal", note: "Thousand Pillar Temple, Warangal Fort", category: "Heritage" },
  { title: "Vijayawada", note: "Outstation one-way or round trip", category: "Outstation" },
  { title: "Nagarjuna Sagar", note: "Day trip to dam & Ethipothala Falls", category: "Weekend" },
  { title: "Custom Telangana Tour", note: "Multi-day temples, forts, getaways", category: "Custom" },
  { title: "School / College One-Day Trip", note: "22 / 28 / 40 / 50 seater buses", category: "Education" },
  { title: "Corporate Group Outing", note: "Offsite logistics with AC vehicles", category: "Corporate" },
];

const services = [
  { icon: Users, title: "Group Travel", desc: "Comfortable transport for groups of 4 to 50 with experienced drivers." },
  { icon: RouteIcon, title: "Per KM Travel", desc: "Transparent per-KM pricing for outstation trips, one-way or round-trip." },
  { icon: MapIcon, title: "Local Trips", desc: "Hyderabad sightseeing, day rentals, and short city packages." },
  { icon: Plane, title: "Outstation Trips", desc: "Telangana, Andhra, Karnataka, Maharashtra and beyond." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Offsites, conferences, training events, and team outings." },
  { icon: GraduationCap, title: "School & College Trips", desc: "Safe, on-time bus transport for picnics and study tours." },
  { icon: Heart, title: "Pilgrimage Tours", desc: "Srisailam, Yadadri, Tirupati, Shirdi and more temple journeys." },
  { icon: PartyPopper, title: "Wedding & Event Transport", desc: "Guest transport for weddings, baraat, sangeet and events." },
];

function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Mega City Tours and Travells owned fleet in Hyderabad."
            className="h-full w-full object-cover"
            style={{ objectPosition: "center bottom" }}
            width={1600}
            height={513}
          />
          {/* Strong left-side warm dark gradient for text readability */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(74,44,32,0.88) 0%, rgba(74,44,32,0.78) 25%, rgba(74,44,32,0.55) 50%, rgba(74,44,32,0.30) 75%, rgba(74,44,32,0.22) 100%)",
            }}
          />
          {/* Mobile: even wash so headline reads */}
          <div className="absolute inset-0 lg:hidden" style={{ background: "rgba(74,44,32,0.70)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-10 pb-12 md:pt-[90px] md:pb-20 lg:pt-[100px] lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            {/* Left: copy + CTAs */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-cream/15 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-cream uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5" /> Hyderabad's Trusted Travel Partner
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-brand-cream text-balance">
                Reliable Group Travel & Per KM Trips from Hyderabad
              </h1>
              <p className="mt-5 text-base md:text-lg text-brand-cream/85 max-w-xl leading-relaxed">
                Owned fleet from 4 to 50 seats with experienced drivers — for families, schools,
                companies, weddings, pilgrimage groups, and outstation journeys across Telangana
                and nearby states.
              </p>

              {/* CTAs — visible above the fold on mobile */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "#25D366", borderRadius: "8px", padding: "16px 28px" }}
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </a>
                <a
                  href={`tel:+91${site.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "#A0522D", borderRadius: "8px", padding: "16px 28px" }}
                >
                  <Phone className="h-5 w-5" /> Call {site.phones[0]}
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Hyderabad Based", "Owned Fleet", "Experienced Drivers"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 text-white"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(217,176,140,0.45)",
                      borderRadius: "100px",
                      padding: "6px 14px",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#D9B08C" }} />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: hero quote form (desktop) — hidden on mobile to keep CTAs visible above fold */}
            <div className="hidden lg:block">
              <QuoteForm
                variant="compact"
                title="Get a Quick Quote"
                subtitle="Share your trip details — we respond on WhatsApp."
                ctaLabel="Get Quote"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE QUOTE FORM — directly below hero */}
      <section className="lg:hidden bg-secondary/40 py-10">
        <div className="mx-auto max-w-md px-4">
          <QuoteForm
            variant="compact"
            title="Get a Quick Quote"
            subtitle="Share your trip details — we respond on WhatsApp."
            ctaLabel="Get Quote"
          />
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((s) => (
              <div
                key={s.label}
                className="text-center pt-4 border-t-[3px] border-accent"
              >
                <div className="font-display font-bold leading-none text-accent text-[32px] md:text-[44px]">
                  {s.num}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK TRUST CARDS */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Group Travel Specialists", desc: "Families, schools, colleges, companies, functions, and events." },
              { icon: Wrench, title: "Flexible Per KM Pricing", desc: "Outstation pricing based on distance, vehicle, route, and trip needs." },
              { icon: Shield, title: "Owned Vehicle Fleet", desc: "Cars, SUVs, tempo travellers, Urbania, and buses from 4 to 50 seats." },
              { icon: MessageCircle, title: "Easy WhatsApp Booking", desc: "Share trip details over WhatsApp or call for quick vehicle options." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card p-6 shadow-card border border-border/60">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNED FLEET TRUST SECTION */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-soft border border-border/60" style={{ aspectRatio: "4 / 3" }}>
              <img
                src={fleetImg}
                alt="Mega City Tours and Travells owned fleet in Hyderabad."
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center 65%" }}
                loading="lazy"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                About Mega City
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-balance">
                Owned Fleet for Every Group Size
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                Owned and operated by M Kondal Reddy from {site.city}, Mega City Tours & Travells
                runs an in-house fleet of 33+ vehicles — from 4-seater Brezza to 50-seater buses —
                with drivers carrying 20–30 years of experience. Local sightseeing, outstation
                journeys, pilgrimage yatras, school excursions, corporate travel — all handled
                with one team you can call any time of the year.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["33+ Owned Vehicles", "4–50 Seaters", "20–30 yr Drivers", "365 Days Available"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-primary">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAN INTERIORS / WHY CHOOSE MEGA CITY */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                Why Choose Mega City
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-balance">
                Clean interiors, comfortable seating
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                Clean interiors, comfortable seating, and well-maintained vehicles for local and
                outstation journeys. Our fleet is regularly serviced and detailed so every group
                travels in comfort — whether it's a short city trip or a multi-day yatra.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Plush, well-cushioned seats with headrests",
                  "AC vehicles cleaned before every trip",
                  "Regular servicing and safety checks",
                  "Courteous, experienced drivers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl shadow-soft border border-border/60" style={{ aspectRatio: "4 / 3" }}>
              <img
                src={urbaniaInterior}
                alt="Clean Urbania interior for comfortable group travel in Hyderabad."
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Travel built around your group and route"
            subtitle="From short local trips to large group travel — pick what fits your journey."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warm-gradient text-primary-foreground mb-4 group-hover:scale-105 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href={whatsappLink(`Hi Mega City, I would like to enquire about ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:underline"
                >
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES FOR EVERY GROUP SIZE */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Fleet"
            title="Vehicles for Every Group Size"
            subtitle="Owned, well-maintained vehicles from 4 to 50 seats — drivers included."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <div
                key={v.slug}
                className="overflow-hidden rounded-2xl bg-white border border-border/60 flex flex-col shadow-card"
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
                    <h3 className="font-display text-lg font-semibold text-primary">{v.name}</h3>
                    <span className="text-sm font-bold text-accent">{v.seats} Seater</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{v.bestFor}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">{v.ac}</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">{v.count} available</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">Driver included</span>
                  </div>
                  <div className="mt-4 mb-2 text-sm font-semibold text-primary">
                    Price on Request
                  </div>
                  <a
                    href={whatsappLink(`Hi Mega City, please share the price for the ${v.name} (${v.seats} seater).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full rounded-lg bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold hover:shadow-glow transition-shadow"
                  >
                    <MessageCircle className="h-4 w-4" /> Ask for Price
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL FOR EVERY OCCASION */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Occasions"
            title="Travel for Every Occasion"
            subtitle="Whatever the trip, we have the right vehicle and driver for it."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {occasions.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl bg-card border border-border/60 p-6 text-center flex flex-col items-center shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                  <o.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-base font-bold text-primary leading-tight">{o.title}</h3>
                <a
                  href={whatsappLink(`Hi Mega City, I would like to enquire about ${o.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs font-semibold text-accent hover:underline"
                >
                  Enquire →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES & PACKAGES */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Popular Routes"
            title="Popular Routes & Packages from Hyderabad"
            subtitle="Pricing varies by route, vehicle, and group size. Share your details for a custom quote."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularRoutes.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl bg-card border border-border/60 p-6 shadow-card hover:shadow-soft transition-shadow flex flex-col"
              >
                <span className="self-start inline-block rounded-full bg-accent/10 text-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide mb-3">
                  {r.category}
                </span>
                <h3 className="font-display text-lg font-bold text-primary leading-tight">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.note}</p>
                <p className="mt-4 text-sm font-semibold text-primary">Price on Request</p>
                <a
                  href={whatsappLink(`Hi Mega City, please share the price for: ${r.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-lg bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold hover:shadow-glow transition-shadow"
                >
                  <MessageCircle className="h-4 w-4" /> Ask for Price
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MEGA CITY */}
      <section className="py-16 md:py-24 text-white" style={{ backgroundColor: "#4A2C20" }}>
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-tan">
              Why Mega City
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white text-balance">
              Trusted travel — every trip, every time
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { title: "Owned Fleet of 33+ Vehicles", sub: "From 4-seater Brezza to 50-seater buses — no third-party vehicles." },
              { title: "Drivers with 20–30 Years Experience", sub: "Calm, courteous and route-aware drivers on every trip." },
              { title: "AC & Non-AC, Local & Outstation", sub: "One team for city sightseeing, weekend getaways, and long trips." },
              { title: "Available 24/7, 365 Days", sub: "Last-minute trips, early-morning pickups, late-night returns — covered." },
              { title: "Transparent Per-KM Pricing", sub: "Tolls, parking, permits, and driver allowance always disclosed upfront." },
              { title: "Easy WhatsApp Booking", sub: "Share trip details on WhatsApp — get vehicle options in minutes." },
            ].map((p) => (
              <li key={p.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tan text-[#4A2C20]">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white leading-tight">{p.title}</h3>
                  <p className="mt-1 text-[14px] text-white/75 leading-relaxed">{p.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW BOOKING WORKS */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="How It Works"
            title="Book your trip in 4 easy steps"
          />
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden
              className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] border-t-2 border-dashed pointer-events-none"
              style={{ borderColor: "color-mix(in oklab, var(--brand-rust) 35%, transparent)" }}
            />
            {[
              ["Share Trip Details", "Send pickup, destination, date, group size."],
              ["Get Vehicle Options", "We suggest the right vehicle and route."],
              ["Confirm Booking", "Lock route, timing, vehicle, advance payment."],
              ["Start Travel", "Driver arrives on time — enjoy the trip."],
            ].map(([title, desc], i) => (
              <div key={title} className="relative rounded-2xl bg-card p-6 shadow-card border border-border/60 text-center lg:text-left">
                <span className="block font-display text-4xl font-bold text-accent leading-none">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeader
            eyebrow="FAQs"
            title="Common questions, clear answers"
          />
          <FAQAccordion items={faqs.slice(0, 6)} />
          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary hover:bg-card transition-colors"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL QUOTE FORM */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F4F1EA" }}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance leading-tight">
                Get a Custom Trip Quote
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Tell us about your trip — pickup, destination, group size, and travel date.
                Our team will respond with vehicle options and a clear quote.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-white border border-border p-4 hover:border-accent transition-colors"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ backgroundColor: "#25D366" }}>
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">WhatsApp</div>
                    <div className="font-display text-lg font-bold text-primary">+91 {site.whatsapp}</div>
                  </div>
                </a>
                <a
                  href={`tel:+91${site.phones[0]}`}
                  className="flex items-center gap-4 rounded-xl bg-white border border-border p-4 hover:border-accent transition-colors"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ backgroundColor: "#A0522D" }}>
                    <Phone className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Call Us</div>
                    <div className="font-display text-lg font-bold text-primary">+91 {site.phones[0]}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl bg-white border border-border p-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Hours</div>
                    <div className="font-display text-base font-semibold text-primary">{site.hours} · 365 days</div>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm variant="full" ctaLabel="Submit Enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
