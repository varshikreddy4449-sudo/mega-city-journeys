import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Link } from "@tanstack/react-router";
import {
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
  Heart,
  PartyPopper,
  Plane,
  Compass,
  Route as RouteIcon,
  Info,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-fleet-clean.webp";
import logoImg from "@/assets/logo.webp";
import { useState } from "react";
import { VehicleDetailModal } from "@/components/VehicleDetailModal";
import type { Vehicle } from "@/data/vehicles";
import fleetImg from "@/assets/megacity-fleet.webp";
import tempoInterior from "@/assets/tempo-interior.webp";
import urbaniaInterior from "@/assets/urbania-interior.webp";
import busInterior from "@/assets/bus-interior.webp";
import busInterior2 from "@/assets/bus-interior-2.webp";
import bus50Interior from "@/assets/bus-50-interior.webp";
import volvoBus from "@/assets/volvo-bus.webp";
import { site, whatsappLink } from "@/data/site";
import { vehicles } from "@/data/vehicles";
import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { QuoteForm } from "@/components/QuoteForm";
import { AreasServed } from "@/components/AreasServed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mega City Tours & Travells | Bus Rental & Tempo Traveller Rental Hyderabad" },
      {
        name: "description",
        content:
          "Group travel agency Hyderabad with bus rental Hyderabad, tempo traveller rental Hyderabad, Urbania, and 22 to 50 seater bus rental. Per KM travels Hyderabad for outstation, family, school and college, wedding guest, pilgrimage, and corporate travel.",
      },
      { property: "og:title", content: "Mega City Tours & Travells | Hyderabad" },
      {
        property: "og:description",
        content:
          "Bus rental, tempo traveller rental, and per KM travels from Hyderabad across Telangana and nearby states.",
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

type RouteCard = {
  title: string;
  bestFor: string;
  vehicles: string;
  tripType: string;
  category: string;
};

const popularRoutes: RouteCard[] = [
  {
    title: "Hyderabad Local Sightseeing",
    bestFor: "Families and tourists exploring the city",
    vehicles: "Brezza, Innova, Tempo Traveller",
    tripType: "Local / Day Rental",
    category: "Local",
  },
  {
    title: "Hyderabad to Srisailam",
    bestFor: "Pilgrimage groups and families",
    vehicles: "SUV, Traveller, Bus",
    tripType: "Outstation / Per KM",
    category: "Pilgrimage",
  },
  {
    title: "Hyderabad to Yadadri",
    bestFor: "Same-day darshan trips",
    vehicles: "Innova, Urbania, Bus",
    tripType: "One-Day Round Trip",
    category: "Pilgrimage",
  },
  {
    title: "Hyderabad to Warangal",
    bestFor: "Heritage and family trips",
    vehicles: "Innova, Traveller, Bus",
    tripType: "Outstation / Per KM",
    category: "Family",
  },
  {
    title: "Hyderabad to Vijayawada",
    bestFor: "Outstation business and family travel",
    vehicles: "Innova, Fortuner, Urbania",
    tripType: "One-Way or Round Trip",
    category: "Outstation",
  },
  {
    title: "Hyderabad to Nagarjuna Sagar",
    bestFor: "Weekend day trips and picnics",
    vehicles: "Traveller, Urbania, Bus",
    tripType: "One-Day Round Trip",
    category: "Family",
  },
  {
    title: "School / College One-Day Trip",
    bestFor: "Picnics, study tours, college outings",
    vehicles: "22, 28, 40, 50 seater Bus",
    tripType: "Group Charter",
    category: "School/College",
  },
  {
    title: "Corporate Group Outing",
    bestFor: "Offsites, conferences, team events",
    vehicles: "Urbania, Traveller, Bus",
    tripType: "Local or Outstation",
    category: "Corporate",
  },
  {
    title: "Wedding Guest Transport",
    bestFor: "Baraat, sangeet, guest pickups",
    vehicles: "Traveller, Urbania, 28–50 seater Bus",
    tripType: "Event Logistics",
    category: "Wedding/Event",
  },
  {
    title: "Custom Telangana Tour",
    bestFor: "Multi-day temples, forts, getaways",
    vehicles: "Any vehicle, 4 to 50 seats",
    tripType: "Multi-Day Custom",
    category: "Custom",
  },
];

const featuredServices = [
  {
    icon: Users,
    title: "Group Travel",
    desc: "Vehicles for families, schools, companies, weddings, and group outings.",
    bestFor: "Families, schools, events",
    vehicles: "Traveller, Urbania, Bus",
  },
  {
    icon: RouteIcon,
    title: "Per KM Trips",
    desc: "Distance-based pricing for outstation journeys, one-way or round trip.",
    bestFor: "Outstation, long-distance",
    vehicles: "Car, SUV, Traveller, Bus",
  },
  {
    icon: Plane,
    title: "Outstation Trips",
    desc: "Comfortable travel across Telangana, Andhra, Karnataka, and beyond.",
    bestFor: "Multi-day tours, getaways",
    vehicles: "Innova, Fortuner, Urbania, Bus",
  },
];

const moreServices = [
  {
    icon: MapIcon,
    title: "Local Trips",
    desc: "Hyderabad sightseeing, day rentals, and short city packages.",
    bestFor: "Sightseeing, day use",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    desc: "Offsites, conferences, training events, and team outings.",
    bestFor: "Companies and teams",
  },
  {
    icon: GraduationCap,
    title: "School & College Trips",
    desc: "Safe, on-time bus transport for picnics and study tours.",
    bestFor: "Schools and colleges",
  },
  {
    icon: PartyPopper,
    title: "Wedding & Event Transport",
    desc: "Guest transport for weddings, baraat, sangeet, and events.",
    bestFor: "Weddings and events",
  },
  {
    icon: Heart,
    title: "Pilgrimage Trips",
    desc: "Srisailam, Yadadri, Tirupati, Shirdi, and more temple journeys.",
    bestFor: "Temple yatras",
  },
];

const quoteChecklist = [
  { icon: MapPin, label: "Pickup location" },
  { icon: MapPin, label: "Destination" },
  { icon: CheckCircle2, label: "Travel date" },
  { icon: Users, label: "Group size" },
  { icon: Bus, label: "Vehicle preference" },
  { icon: RouteIcon, label: "One-way or round trip" },
  { icon: Compass, label: "Local or outstation" },
];

function HomePage() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const openVehicle = (v: Vehicle) => {
    setSelectedVehicle(v);
    setModalOpen(true);
  };
  return (
    <>
      <LocalBusinessSchema />
      <VehicleDetailModal vehicle={selectedVehicle} open={modalOpen} onOpenChange={setModalOpen} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Mobile crop: vehicles in lower portion, dark sky above for headline */}
          <img
            src={heroImg}
            alt="Mega City Tours and Travells fleet of bus and Innova in Hyderabad."
            className="h-full w-full object-cover lg:hidden"
            style={{ objectPosition: "70% bottom" }}
            width={1920}
            height={1280}
          />
          {/* Desktop crop: vehicles on right, clean dark space on left for headline */}
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="hidden lg:block h-full w-full object-cover"
            style={{ objectPosition: "center center" }}
            width={1920}
            height={1080}
          />
          {/* Desktop: very strong dark wash on left for headline, light wash on right */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(20,12,8,0.92) 0%, rgba(30,18,12,0.82) 30%, rgba(40,24,16,0.45) 55%, rgba(40,24,16,0.35) 75%, rgba(40,24,16,0.55) 100%)",
            }}
          />
          {/* Mobile: stronger top-down wash so headline reads cleanly above the vehicles */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,12,8,0.85) 0%, rgba(30,18,12,0.7) 45%, rgba(40,24,16,0.55) 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-10 pb-12 md:pt-[90px] md:pb-20 lg:pt-[100px] lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_minmax(0,380px)] lg:gap-14 lg:items-center">
            {/* Left: copy + CTAs */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-cream/15 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-cream uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5" /> Hyderabad's Trusted Travel Partner
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-brand-cream text-balance">
                Reliable Group Travel & Per KM Trips from Hyderabad
              </h1>
              <p className="mt-5 text-base md:text-lg text-brand-cream/85 max-w-xl leading-relaxed">
                Owned fleet from 4 to 50 seats with experienced drivers, for families, schools,
                companies, weddings, pilgrimage groups, and outstation journeys across Telangana and
                nearby states.
              </p>

              {/* CTAs: visible above the fold on mobile */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "#25D366", borderRadius: "8px", padding: "16px 28px" }}
                >
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
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
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "#D9B08C" }}
                    />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: hero quote form (desktop), hidden on mobile to keep CTAs visible above fold */}
            <div className="hidden lg:block">
              <QuoteForm
                variant="compact"
                title="Get a Quick Quote"
                subtitle="Share your trip details. We respond on WhatsApp."
                ctaLabel="Get Quote"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE QUOTE FORM: directly below hero */}
      <section className="lg:hidden bg-secondary/40 py-10">
        <div className="mx-auto max-w-md px-4">
          <QuoteForm
            variant="compact"
            title="Get a Quick Quote"
            subtitle="Share your trip details. We respond on WhatsApp."
            ctaLabel="Get Quote"
          />
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center pt-4 border-t-[3px] border-accent">
                <div className="font-display font-bold leading-none text-accent text-[32px] md:text-[44px]">
                  {s.num}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground/80">{s.label}</div>
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
              {
                icon: Users,
                title: "Group Travel Specialists",
                desc: "Families, schools, colleges, companies, functions, and events.",
              },
              {
                icon: Wrench,
                title: "Flexible Per KM Pricing",
                desc: "Outstation pricing based on distance, vehicle, route, and trip needs.",
              },
              {
                icon: Shield,
                title: "Owned Vehicle Fleet",
                desc: "Cars, SUVs, tempo travellers, Urbania, and buses from 4 to 50 seats.",
              },
              {
                icon: WhatsAppIcon,
                title: "Easy WhatsApp Booking",
                desc: "Share trip details over WhatsApp or call for quick vehicle options.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="reveal hover-lift rounded-2xl bg-card p-6 shadow-card border border-border/60"
              >
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
            <div
              className="reveal relative overflow-hidden rounded-2xl shadow-soft border border-border/60"
              style={{ aspectRatio: "4 / 3" }}
            >
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
                runs an in-house fleet of 33+ vehicles, from 4-seater Brezza to 50-seater buses,
                with drivers carrying 20–30 years of experience. Local sightseeing, outstation
                journeys, pilgrimage yatras, school excursions, and corporate travel, all handled with
                one team you can call any time of the year.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "33+ Owned Vehicles",
                  "4–50 Seaters",
                  "20–30 yr Drivers",
                  "365 Days Available",
                ].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-primary"
                  >
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
                travels in comfort, whether it's a short city trip or a multi-day yatra.
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
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-3">
              <div
                className="reveal relative overflow-hidden rounded-2xl shadow-soft border border-border/60 col-span-2"
                style={{ aspectRatio: "16 / 9" }}
              >
                <img
                  src={busInterior}
                  alt="Clean bus interior for group travel in Hyderabad"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center" }}
                  loading="lazy"
                />
              </div>
              <div
                className="reveal relative overflow-hidden rounded-2xl shadow-card border border-border/60"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={busInterior2}
                  alt="Clean bus interior for group travel in Hyderabad"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center" }}
                  loading="lazy"
                />
              </div>
              <div
                className="reveal relative overflow-hidden rounded-2xl shadow-card border border-border/60"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={bus50Interior}
                  alt="Clean bus interior for group travel in Hyderabad"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center" }}
                  loading="lazy"
                />
              </div>
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
            subtitle="From short local trips to large group travel. Pick what fits your journey."
          />
          {/* Featured 3 services */}
          <div className="grid gap-6 md:grid-cols-3">
            {featuredServices.map((s) => (
              <div
                key={s.title}
                className="reveal hover-lift group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-card hover:shadow-soft transition-all hover:-translate-y-0.5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-5">
                  <s.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
                    Best for: {s.bestFor}
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
                    {s.vehicles}
                  </span>
                </div>
                <a
                  href={whatsappLink(`Hi Mega City, I would like to enquire about ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-lg bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold hover:shadow-glow transition-shadow"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>

          {/* Secondary services */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {moreServices.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border/60 bg-card p-5 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-3">
                  <s.icon className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-semibold text-primary leading-tight">
                  {s.title}
                </h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES FOR EVERY GROUP SIZE */}
      <section className="py-14 md:py-20" style={{ backgroundColor: "#F4F1EA" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Fleet"
            title="Vehicles for Every Group Size"
            subtitle="Choose from cars, SUVs, travellers, Urbania, and buses for small families, medium groups, and large travel needs."
          />

          {/* Trust strip */}
          <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { num: "33+", label: "Owned Vehicles" },
              { num: "4–50", label: "Seater Options" },
              { num: "100%", label: "Drivers Included" },
              { num: "Custom", label: "Price on Request" },
            ].map((t) => (
              <div
                key={t.label}
                className="rounded-xl bg-white border border-border/60 px-4 py-3 text-center shadow-card"
              >
                <div className="font-display text-xl md:text-2xl font-bold text-accent leading-none">
                  {t.num}
                </div>
                <div className="mt-1 text-xs font-semibold text-foreground/75">{t.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => {
              const altText =
                v.slug === "tempo-traveller"
                  ? "Tempo Traveller rental in Hyderabad by Mega City Tours and Travells"
                  : v.slug === "urbania"
                    ? "Urbania vehicle for group travel in Hyderabad by Mega City Tours and Travells."
                    : v.slug === "innova-crysta"
                      ? "Innova Crysta for family and outstation trips in Hyderabad."
                      : v.slug === "bus-22"
                        ? "22 seater bus rental in Hyderabad for small group travel"
                        : v.slug === "bus-28"
                          ? "28 seater bus rental in Hyderabad for medium group travel"
                          : v.slug === "bus-40"
                            ? "40 seater bus rental in Hyderabad for large group travel"
                            : v.slug === "bus-50"
                              ? "50 seater bus rental in Hyderabad by Mega City Tours and Travells"
                              : `${v.name} for hire in Hyderabad by Mega City Tours and Travells.`;
              return (
                <div
                  key={v.slug}
                  className="reveal hover-lift group overflow-hidden rounded-2xl bg-white border border-border/60 flex flex-col shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="relative overflow-hidden bg-secondary/30"
                    style={{ aspectRatio: "16 / 10" }}
                  >
                    <img
                      src={v.image}
                      alt={altText}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-card">
                      {v.category}
                    </span>
                    <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-[11px] font-bold">
                      {v.seats} Seater
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-bold text-primary leading-tight">
                      {v.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground/80">Best for:</span> {v.bestFor}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                      <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
                        {v.ac}
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
                        {v.count} available
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
                        Driver included
                      </span>
                    </div>
                    <div className="mt-4 text-sm font-semibold text-primary/80">
                      Price on Request
                    </div>
                    <a
                      href={whatsappLink(
                        `Hi Mega City, please share the price for the ${v.name} (${v.seats} seater).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center justify-center gap-2 w-full rounded-lg bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold hover:shadow-glow transition-shadow"
                    >
                      <WhatsAppIcon className="h-4 w-4" /> Ask for Price
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing note */}
          <div
            className="mt-10 rounded-2xl border p-5 md:p-6 flex items-start gap-4"
            style={{ backgroundColor: "#F4E8D6", borderColor: "#D9B08C" }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Info className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-display text-base md:text-lg font-bold text-primary">
                Why we share prices on request
              </h4>
              <p className="mt-1 text-sm md:text-[15px] text-foreground/80 leading-relaxed">
                Final cost depends on route, vehicle type, travel date, group size, tolls, parking,
                permits, state taxes, and driver allowance. Share your trip details and we will
                send a clear quote.
              </p>
            </div>
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
                className="reveal hover-lift rounded-2xl bg-card border border-border/60 p-6 text-center flex flex-col items-center shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                  <o.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-base font-bold text-primary leading-tight">
                  {o.title}
                </h3>
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

      {/* POPULAR ROUTES FROM HYDERABAD */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Popular Routes"
            title="Popular Routes from Hyderabad"
            subtitle="Choose a common route or ask for a custom quote based on your vehicle, date, and group size."
          />
          <div
            className="mb-10 relative overflow-hidden rounded-2xl shadow-card border border-border/60"
            style={{ aspectRatio: "21 / 9" }}
          >
            <img
              src={volvoBus}
              alt="Bus for outstation and pilgrimage trips from Hyderabad."
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 60%" }}
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(74,44,32,0.78) 0%, rgba(74,44,32,0.45) 55%, rgba(74,44,32,0.15) 100%)",
              }}
            />
            <div className="relative h-full flex items-center px-6 md:px-10">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan">
                  Outstation & Pilgrimage
                </p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                  Comfortable buses for long-distance group travel
                </h3>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularRoutes.map((r) => {
              const dest = r.title.toLowerCase().includes("hyderabad to")
                ? r.title.replace(/^Hyderabad to\s+/i, "")
                : null;
              return (
                <div
                  key={r.title}
                  className="reveal hover-lift rounded-2xl bg-card border border-border/60 p-6 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-block rounded-full bg-accent/10 text-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                      {r.category}
                    </span>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      {r.tripType}
                    </span>
                  </div>

                  {dest ? (
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary/90">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>Hyderabad</span>
                      <span
                        aria-hidden
                        className="flex-1 mx-1 border-t border-dashed"
                        style={{ borderColor: "color-mix(in oklab, var(--brand-rust) 50%, transparent)" }}
                      />
                      <ArrowRight className="h-4 w-4 text-accent" />
                      <span>{dest}</span>
                    </div>
                  ) : (
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary/90">
                      <Compass className="h-4 w-4 text-accent" />
                      <span>{r.title}</span>
                    </div>
                  )}

                  <h3 className="mt-3 font-display text-lg font-bold text-primary leading-tight">
                    {dest ? r.title : "Group Travel Option"}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground/80">Best for:</span> {r.bestFor}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground/80">Suggested vehicles:</span>{" "}
                    {r.vehicles}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-primary/80">Price on Request</p>
                  <a
                    href={whatsappLink(`Hi Mega City, please share the price for: ${r.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full rounded-lg bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold hover:shadow-glow transition-shadow"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Ask for Price
                  </a>
                </div>
              );
            })}
          </div>

          {/* What to share for a quick quote */}
          <div
            className="mt-12 rounded-2xl border p-6 md:p-8"
            style={{ backgroundColor: "#F4E8D6", borderColor: "#D9B08C" }}
          >
            <div className="grid gap-6 md:grid-cols-[1.2fr_2fr] md:items-center">
              <div>
                <span className="inline-block rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Quick Quote
                </span>
                <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-primary leading-tight">
                  What to Share for a Quick Quote
                </h3>
                <p className="mt-2 text-sm md:text-base text-foreground/75 leading-relaxed">
                  Send these details on WhatsApp and our team will suggest the right vehicle.
                </p>
                <a
                  href={whatsappLink(
                    "Hi Mega City, I would like a quick quote. Here are my trip details:",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg text-white px-5 py-2.5 text-sm font-bold shadow-card"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <WhatsAppIcon className="h-4 w-4" /> Send Details on WhatsApp
                </a>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {quoteChecklist.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-center gap-3 rounded-xl bg-white border border-border/60 px-3 py-2.5 shadow-card"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-primary">{c.label}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              Trusted travel, every trip, every time
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Owned Fleet of 33+ Vehicles",
                sub: "From 4-seater Brezza to 50-seater buses. No third-party vehicles.",
              },
              {
                title: "Drivers with 20–30 Years Experience",
                sub: "Calm, courteous and route-aware drivers on every trip.",
              },
              {
                title: "AC & Non-AC, Local & Outstation",
                sub: "One team for city sightseeing, weekend getaways, and long trips.",
              },
              {
                title: "Available 24/7, 365 Days",
                sub: "Last-minute trips, early-morning pickups, late-night returns, all covered.",
              },
              {
                title: "Transparent Per-KM Pricing",
                sub: "Tolls, parking, permits, and driver allowance always disclosed upfront.",
              },
              {
                title: "Easy WhatsApp Booking",
                sub: "Share trip details on WhatsApp. Get vehicle options in minutes.",
              },
            ].map((p) => (
              <li key={p.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tan text-[#4A2C20]">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white leading-tight">
                    {p.title}
                  </h3>
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
          <SectionHeader eyebrow="How It Works" title="Book your trip in 4 easy steps" />
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
              ["Start Travel", "Driver arrives on time. Enjoy the trip."],
            ].map(([title, desc], i) => (
              <div
                key={title}
                className="relative rounded-2xl bg-card p-6 shadow-card border border-border/60 text-center lg:text-left"
              >
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
          <SectionHeader eyebrow="FAQs" title="Common questions, clear answers" />
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

      <AreasServed />

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
                Tell us about your trip: pickup, destination, group size, and travel date. Our team
                will respond with vehicle options and a clear quote.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-white border border-border p-4 hover:border-accent transition-colors"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      WhatsApp
                    </div>
                    <div className="font-display text-lg font-bold text-primary">
                      +91 {site.whatsapp}
                    </div>
                  </div>
                </a>
                <a
                  href={`tel:+91${site.phones[0]}`}
                  className="flex items-center gap-4 rounded-xl bg-white border border-border p-4 hover:border-accent transition-colors"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: "#A0522D" }}
                  >
                    <Phone className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Call Us
                    </div>
                    <div className="font-display text-lg font-bold text-primary">
                      +91 {site.phones[0]}
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl bg-white border border-border p-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Hours
                    </div>
                    <div className="font-display text-base font-semibold text-primary">
                      {site.hours} · 365 days
                    </div>
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
