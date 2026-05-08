import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Phone,
  MapPin,
  Users,
  CheckCircle2,
  Briefcase,
  Plane,
  Compass,
  Route as RouteIcon,
  Info,
  ArrowRight,
  Snowflake,
  Calendar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logoImg from "@/assets/logo.webp";
import heroVehicle from "@/assets/vehicle-urbania.webp";
import { useState } from "react";
import { VehicleDetailModal } from "@/components/VehicleDetailModal";
import type { Vehicle } from "@/data/vehicles";
import fleetImg from "@/assets/megacity-fleet.webp";
import { VehicleImageCarousel } from "@/components/VehicleImageCarousel";
import { vehicleGalleries } from "@/data/vehicleGalleries";
import routeSrisailam from "@/assets/routes/srisailam.png";
import routeYadadri from "@/assets/routes/yadadri.png";
import routeWarangal from "@/assets/routes/warangal.png";
import routeVijayawada from "@/assets/routes/vijayawada.png";
import routeNagarjunaSagar from "@/assets/routes/nagarjuna-sagar.png";
import routeHyderabadLocal from "@/assets/routes/hyderabad-local.png";
import { site, whatsappLink } from "@/data/site";
import { vehicles } from "@/data/vehicles";
import { SectionHeader } from "@/components/SectionHeader";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { QuoteForm } from "@/components/QuoteForm";
import { LogoWatermark } from "@/components/LogoWatermark";
import ClientsBelt from "@/components/ClientsBelt";
import { Link } from "@tanstack/react-router";
import { blogs } from "@/data/blogs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mega City Tours & Travells | Bus Rental & Tempo Traveller Rental Hyderabad" },
      {
        name: "description",
        content:
          "Group travel agency Hyderabad with bus rental, tempo traveller, Urbania, and 22 to 50 seater bus rental. AC and Non-AC vehicles for outstation, family, school, wedding, pilgrimage, and corporate travel.",
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
  { num: "33+", label: "Our Vehicles" },
  { num: "4–50", label: "Seater Options" },
  { num: "20 yrs", label: "Driver Experience" },
  { num: "365", label: "Days Available" },
];

const popularRoutes: Array<{
  title: string;
  tripType: string;
  category: string;
  bestFor: string;
  vehicles: string;
  image?: string;
}> = [
  {
    title: "Hyderabad to Srisailam",
    tripType: "Outstation / Per KM",
    category: "Pilgrimage",
    bestFor: "Pilgrimage / family trips",
    vehicles: "Innova, Urbania, Tempo Traveller, Bus",
    image: routeSrisailam,
  },
  {
    title: "Hyderabad to Yadadri",
    tripType: "One-Day Round Trip",
    category: "Pilgrimage",
    bestFor: "Same-day darshan trips",
    vehicles: "Innova, Tempo Traveller, 22/28 Seater Bus",
    image: routeYadadri,
  },
  {
    title: "Hyderabad to Warangal",
    tripType: "Outstation / Per KM",
    category: "Family",
    bestFor: "Family & heritage trips",
    vehicles: "Innova, Urbania, Tempo Traveller",
    image: routeWarangal,
  },
  {
    title: "Hyderabad to Vijayawada",
    tripType: "One-Way or Round Trip",
    category: "Outstation",
    bestFor: "Outstation & business travel",
    vehicles: "Innova, Urbania, 22/28 Seater Bus",
    image: routeVijayawada,
  },
  {
    title: "Hyderabad to Nagarjuna Sagar",
    tripType: "One-Day Round Trip",
    category: "Family",
    bestFor: "Family day-out trips",
    vehicles: "Innova, Tempo Traveller, Urbania",
    image: routeNagarjunaSagar,
  },
  {
    title: "Hyderabad Local Sightseeing",
    tripType: "Local / Day Rental",
    category: "Local",
    bestFor: "City tours & day rentals",
    vehicles: "Brezza, Innova, Tempo Traveller",
    image: routeHyderabadLocal,
  },
];

const services = [
  {
    icon: Users,
    title: "Group Travel",
    desc: "Vehicles for families, schools, companies, weddings, and group outings.",
  },
  {
    icon: RouteIcon,
    title: "Per KM Trips",
    desc: "Distance-based pricing for outstation journeys, one-way or round trip.",
  },
  {
    icon: Plane,
    title: "Outstation Trips",
    desc: "Comfortable AC & Non-AC travel across Telangana, Andhra, Karnataka, and beyond.",
  },
  {
    icon: Briefcase,
    title: "Corporate & Events",
    desc: "Offsites, conferences, weddings, and pilgrimage group transport.",
  },
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

      {/* HERO — clean split layout (Stitch-inspired) */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#F7F9FA",
          backgroundImage: [
            // Soft light aqua gradient from top-right toward center
            "linear-gradient(215deg, rgba(171,218,220,0.55) 0%, rgba(171,218,220,0.18) 32%, rgba(247,249,250,0) 60%)",
            // Faint teal radial glow behind the quote form (right)
            "radial-gradient(620px 420px at 88% 30%, rgba(60,174,163,0.18), rgba(60,174,163,0) 70%)",
            // Faint coral glow near the vehicle/CTA area (left-bottom)
            "radial-gradient(560px 380px at 18% 88%, rgba(255,122,89,0.14), rgba(255,122,89,0) 70%)",
            // Subtle deep-teal wash bottom
            "radial-gradient(900px 500px at 50% 110%, rgba(13,92,99,0.06), rgba(13,92,99,0) 70%)",
          ].join(", "),
        }}
      >
        {/* Soft curved abstract shapes — very low opacity, hidden on mobile */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full hidden md:block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 700"
          fill="none"
        >
          <path
            d="M -50 520 C 280 360, 560 660, 880 460 S 1380 300, 1520 420"
            stroke="#0D5C63"
            strokeOpacity="0.08"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M -50 580 C 320 440, 620 700, 940 520 S 1380 380, 1520 480"
            stroke="#3CAEA3"
            strokeOpacity="0.10"
            strokeWidth="1.25"
            strokeDasharray="2 6"
            fill="none"
          />
          <circle cx="1240" cy="160" r="180" fill="#ABDADC" fillOpacity="0.18" />
          <circle cx="200" cy="80" r="120" fill="#3CAEA3" fillOpacity="0.08" />
        </svg>

        {/* Centered logo watermark — extremely subtle */}
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 hidden md:block"
          style={{
            width: "560px",
            transform: "translate(-50%, -50%)",
            opacity: 0.04,
            filter: "grayscale(100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-8 pb-12 md:pt-14 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,460px)] lg:gap-14 lg:items-start">
            {/* LEFT */}
            <div>
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "#ABDADC", color: "#0D5C63" }}
                >
                  <ShieldCheck className="h-3.5 w-3.5" /> 20 Years Experience
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "#3CABA3", color: "#ffffff" }}
                >
                  <Snowflake className="h-3.5 w-3.5" /> AC / Non-AC Options
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#0D5C63",
                    border: "1px solid rgba(13,92,99,0.18)",
                  }}
                >
                  <MapPin className="h-3.5 w-3.5" /> Hyderabad Based
                </span>
              </div>

              <h1
                className="mt-5 font-display text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] text-balance"
                style={{ color: "#0D5C63" }}
              >
                Reliable Group Travel &amp; Per KM Trips from Hyderabad
              </h1>
              <p className="mt-4 text-base md:text-[17px] text-foreground/75 max-w-xl leading-relaxed">
                Safe, comfortable, and professional transport solutions for groups from 4 to 50
                seats. Local expertise you can trust.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: "#25D366",
                    borderRadius: "10px",
                    padding: "13px 22px",
                    boxShadow: "0 6px 18px rgba(37,211,102,0.28)",
                  }}
                >
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
                </a>
                <a
                  href={`tel:+91${site.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: "#0D5C63",
                    borderRadius: "10px",
                    padding: "13px 22px",
                    boxShadow: "0 6px 18px rgba(13,92,99,0.28)",
                  }}
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>

              {/* Vehicle image — soft glow card, borderless */}
              <div className="relative mt-8 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[28px] hidden sm:block"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 60%, rgba(255,122,89,0.18), rgba(255,122,89,0) 70%)",
                    filter: "blur(8px)",
                  }}
                />
                <img
                  src={heroVehicle}
                  alt="Force Urbania for premium group travel in Hyderabad — Mega City Tours & Travells"
                  className="relative block w-full rounded-2xl"
                  style={{
                    maxHeight: "300px",
                    objectFit: "cover",
                    boxShadow:
                      "0 18px 40px -12px rgba(13,92,99,0.30), 0 6px 16px -8px rgba(255,122,89,0.20)",
                  }}
                  loading="eager"
                />
              </div>
            </div>

            {/* RIGHT — Quick Quote card */}
            <div className="lg:sticky lg:top-24">
              <div
                className="rounded-2xl"
                style={{
                  border: "1px solid rgba(13,92,99,0.12)",
                  boxShadow:
                    "0 24px 48px -20px rgba(13,92,99,0.25), 0 8px 20px -10px rgba(60,174,163,0.18)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,1) 100%)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <QuoteForm
                  variant="compact"
                  title="Quick Quote"
                  ctaLabel="Get Quote on WhatsApp"
                  vehiclePlaceholder="Type of Vehicle"
                  vehicleOptions={[
                    "Brezza",
                    "Innova Crysta",
                    "Fortuner",
                    "Urbania",
                    "Tempo Traveller",
                    "Bus",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* TRUST STATS */}
      <section
        className="py-10 md:py-14 bg-white border-y"
        style={{ borderColor: "rgba(13,92,99,0.08)" }}
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, num: "33+", label: "Vehicles" },
              { icon: Users, num: "4–50", label: "Seater Options" },
              { icon: Calendar, num: "365", label: "Days Available" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-2xl bg-white border px-5 py-4 shadow-card"
                style={{ borderColor: "rgba(13,92,99,0.10)" }}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#ABDADC", color: "#0D5C63" }}
                >
                  <s.icon className="h-6 w-6" />
                </span>
                <div>
                  <div
                    className="font-display text-2xl font-bold leading-none"
                    style={{ color: "#0D5C63" }}
                  >
                    {s.num}
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground/70">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VEHICLES */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Vehicles"
            title="Available Vehicles"
            subtitle="AC and Non-AC vehicles from 4 to 50 seats. Driver included on every trip."
          />

          <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => {
              const title = v.category === "Bus" ? `${v.seats} Seater Bus` : v.name;
              return (
                <div
                  key={v.slug}
                  className="reveal hover-lift group overflow-hidden rounded-2xl bg-white border border-border/60 flex flex-col shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="relative overflow-hidden bg-secondary/30"
                    style={{ aspectRatio: "16 / 10" }}
                  >
                    <VehicleImageCarousel
                      images={vehicleGalleries[v.slug] ?? [v.image]}
                      alt={`${title} for hire in Hyderabad by Mega City Tours and Travells.`}
                    />
                    <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-[11px] font-bold">
                      {v.seats} Seater
                    </span>
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 text-primary px-2.5 py-1 text-[11px] font-bold shadow-sm">
                      <Snowflake className="h-3 w-3 text-accent" /> {v.ac}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-bold text-primary leading-tight">
                      {title}
                    </h3>
                    {v.tag && (
                      <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-accent/15 to-primary/10 border border-accent/40 px-2.5 py-1 text-[11px] font-semibold text-primary">
                        <Sparkles className="h-3 w-3 text-accent" /> {v.tag}
                      </span>
                    )}
                    <div className="mt-1.5 flex items-center gap-3 text-xs font-semibold text-foreground/70">
                      <span className="inline-flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-accent" /> {v.seats} Seater
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Snowflake className="h-3.5 w-3.5 text-accent" /> {v.ac}
                      </span>
                    </div>

                    <div className="mt-auto pt-5 grid grid-cols-3 gap-2">
                      <a
                        href={`tel:+91${site.phones[0]}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary text-primary-foreground py-2.5 text-xs font-semibold hover:opacity-90 transition"
                        aria-label={`Call about ${title}`}
                      >
                        <Phone className="h-4 w-4" /> Call
                      </a>
                      <a
                        href={whatsappLink(
                          `Hi Mega City, please share the price for the ${title}.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold text-white hover:opacity-90 transition"
                        style={{ backgroundColor: "#25D366" }}
                        aria-label={`WhatsApp about ${title}`}
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => openVehicle(v)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-accent/60 bg-accent/5 text-primary py-2.5 text-xs font-semibold hover:bg-accent/10 transition"
                      >
                        <Info className="h-4 w-4" /> More Info
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT MEGA CITY */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-secondary/40">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div
              className="reveal relative overflow-hidden rounded-2xl shadow-soft border border-border/60"
              style={{ aspectRatio: "4 / 3" }}
            >
              <img
                src={fleetImg}
                alt="Mega City Tours and Travells fleet in Hyderabad."
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
                One trusted team for every group trip
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                Owned and operated by M Kondal Reddy from {site.city}, Mega City Tours & Travells
                runs an in-house fleet of 33+ AC and Non-AC vehicles, from 4-seater Brezza to
                50-seater buses. Drivers carry 20 years of experience across local sightseeing,
                outstation journeys, pilgrimage yatras, school excursions, and corporate travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS / TRAVEL NETWORK */}
      <ClientsBelt />

      {/* WHY CHOOSE MEGA CITY */}
      <section
        className="relative overflow-hidden py-16 md:py-24 text-white"
        style={{ backgroundColor: "#0D5C63" }}
      >
        <LogoWatermark position="center" invert />
        <div className="relative mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Why Choose Mega City
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
              Trusted travel, every trip, every time
            </h2>
          </div>
          <ul className="stagger mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "33+ Owned Vehicles",
                sub: "From 4-seater Brezza to 50-seater buses. No third-party vehicles.",
              },
              {
                title: "Drivers with 20 Years Experience",
                sub: "Calm, courteous and route-aware drivers on every trip.",
              },
              {
                title: "AC & Non-AC Options",
                sub: "Pick the comfort and budget that suits your group and route.",
              },
              {
                title: "Available 24/7, 365 Days",
                sub: "Last-minute trips, early-morning pickups, late-night returns.",
              },
            ].map((p) => (
              <li key={p.title} className="reveal flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-base md:text-lg text-white/80 leading-relaxed">{p.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Travel built around your group"
            subtitle="From short local trips to large group travel."
          />
          {/* Mobile swipe hint */}
          <div className="md:hidden mb-3 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
            <span>Swipe to explore</span>
            <span aria-hidden="true" className="inline-block animate-pulse">→</span>
          </div>

          {/* Mobile: horizontal snap carousel. Desktop/tablet: original grid */}
          <div
            className="md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="snap-start shrink-0 basis-[82%] rounded-2xl border border-border/60 bg-card p-6 text-center shadow-card"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                  <s.icon className="h-8 w-8" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
            <div aria-hidden="true" className="shrink-0 w-1" />
          </div>

          <div className="hidden md:grid stagger gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="reveal hover-lift rounded-2xl border border-border/60 bg-card p-7 text-center shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-5">
                  <s.icon className="h-10 w-10" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-secondary/40">
        <LogoWatermark position="center" />
        {/* Subtle map/route background pattern — very low opacity */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full hidden md:block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
          fill="none"
        >
          <path
            d="M -40 700 C 260 540, 520 820, 820 620 S 1320 460, 1500 580"
            stroke="#0D5C63"
            strokeOpacity="0.07"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M -40 760 C 320 600, 640 880, 980 660 S 1340 520, 1500 640"
            stroke="#3CAEA3"
            strokeOpacity="0.10"
            strokeWidth="1.25"
            strokeDasharray="2 8"
            fill="none"
          />
          <path
            d="M 80 180 C 380 80, 700 320, 1020 200 S 1360 120, 1480 220"
            stroke="#FF7A59"
            strokeOpacity="0.06"
            strokeWidth="1.25"
            strokeDasharray="3 7"
            fill="none"
          />
          {/* tiny location pins */}
          {[
            [120, 200],
            [1020, 200],
            [820, 620],
            [260, 540],
            [1340, 520],
          ].map(([cx, cy], i) => (
            <g key={i} opacity="0.18">
              <circle cx={cx} cy={cy} r="6" fill="#FF7A59" />
              <circle cx={cx} cy={cy} r="2" fill="#FFFFFF" />
            </g>
          ))}
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Popular Routes"
            title="Popular Routes from Hyderabad"
            subtitle="Choose a common route or ask for a custom quote."
          />

          <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularRoutes.map((r) => {
              const isFromHyd = /^Hyderabad to/i.test(r.title);
              const dest = isFromHyd ? r.title.replace(/^Hyderabad to\s+/i, "") : r.title;
              return (
                <article
                  key={r.title}
                  className="reveal hover-lift group relative overflow-hidden rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-soft transition-all flex flex-col"
                >
                  {r.image && (
                    <div className="relative w-full overflow-hidden bg-secondary/30" style={{ aspectRatio: "16 / 9" }}>
                      <img
                        src={r.image}
                        alt={`${r.title} - Mega City Tours & Travells`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="relative flex flex-1 flex-col p-6">
                    {/* faint dotted route line in card background */}
                    <svg
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-6 -bottom-6 w-40 h-40 opacity-[0.07]"
                      viewBox="0 0 160 160"
                      fill="none"
                    >
                      <path
                        d="M 10 140 C 50 90, 90 130, 150 40"
                        stroke="#0D5C63"
                        strokeWidth="2"
                        strokeDasharray="3 6"
                        fill="none"
                      />
                    </svg>

                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide"
                        style={{ backgroundColor: "#ABDADC", color: "#0D5C63" }}
                      >
                        {r.category}
                      </span>
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
                        style={{ backgroundColor: "#F7F9FA", color: "#0D5C63", border: "1px solid rgba(13,92,99,0.15)" }}
                      >
                        {r.tripType}
                      </span>
                    </div>

                    {/* Route — From → To */}
                    <div className="mt-5 relative">
                      {isFromHyd ? (
                        <div className="flex items-start gap-3">
                          <div className="flex flex-col items-center pt-1">
                            <MapPin className="h-4 w-4" style={{ color: "#FF7A59" }} />
                            <span
                              className="my-1 block w-px h-6"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to bottom, rgba(255,122,89,0.8) 50%, transparent 50%)",
                                backgroundSize: "1px 6px",
                              }}
                            />
                            <MapPin className="h-4 w-4" style={{ color: "#0D5C63" }} fill="#0D5C63" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                              From
                            </div>
                            <div className="font-display text-base font-bold leading-tight" style={{ color: "#0D5C63" }}>
                              Hyderabad
                            </div>
                            <div className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                              To
                            </div>
                            <div className="font-display text-lg md:text-xl font-bold leading-tight" style={{ color: "#0D5C63" }}>
                              {dest}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Compass className="h-5 w-5" style={{ color: "#FF7A59" }} />
                          <div className="font-display text-lg md:text-xl font-bold leading-tight" style={{ color: "#0D5C63" }}>
                            {dest}
                          </div>
                        </div>
                      )}
                    </div>

                    <dl className="mt-5 space-y-2 text-sm">
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                          Best for
                        </dt>
                        <dd className="mt-0.5 text-foreground/85">{r.bestFor}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                          Suggested vehicles
                        </dt>
                        <dd className="mt-0.5 text-foreground/85">{r.vehicles}</dd>
                      </div>
                    </dl>

                    <a
                      href={whatsappLink(`Hi Mega City, I would like a quote for: ${r.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-5 inline-flex"
                    >
                      <span
                        className="mt-1 inline-flex items-center justify-center gap-2 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-glow"
                        style={{ backgroundColor: "#25D366" }}
                      >
                        <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Quote note */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs md:text-sm text-muted-foreground leading-relaxed">
            Final quote depends on route, vehicle type, travel date, group size, tolls, parking,
            permits, state taxes, and driver allowance.
          </p>

          {/* Custom route CTA */}
          <div
            className="reveal mt-8 rounded-2xl border p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "rgba(13,92,99,0.15)",
              boxShadow: "0 8px 24px -12px rgba(13,92,99,0.18)",
            }}
          >
            <div className="flex items-start gap-3">
              <span
                className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#ABDADC", color: "#0D5C63" }}
              >
                <RouteIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold" style={{ color: "#0D5C63" }}>
                  Don&apos;t see your route?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Share your pickup, destination, date, and group size. We&apos;ll suggest the right
                  vehicle.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:shrink-0">
              <a
                href={whatsappLink(
                  "Hi Mega City, I'd like a custom quote. My pickup, destination, date, and group size are: ",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: "#25D366" }}
              >
                <WhatsAppIcon className="h-4 w-4" /> Get Custom Quote
              </a>
              <a
                href={`tel:+91${site.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: "#0D5C63" }}
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
            <div>
              <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
                Travel Guides
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight">
                Travel Guides from Hyderabad
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Helpful answers before booking your vehicle.
              </p>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
            >
              View All Blogs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile horizontal scroll, desktop grid */}
          <div className="-mx-4 md:mx-0">
            <div className="flex gap-4 overflow-x-auto px-4 pb-2 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 scrollbar-hide snap-x snap-mandatory">
              {blogs.slice(0, 6).map((b) => (
                <Link
                  key={b.slug}
                  to="/blogs/$slug"
                  params={{ slug: b.slug }}
                  className="snap-start shrink-0 w-[78%] sm:w-[55%] md:w-auto rounded-2xl bg-white border border-border p-5 hover:-translate-y-0.5 transition-transform"
                  style={{ boxShadow: "0 10px 30px -16px rgba(13,92,99,0.18)" }}
                >
                  <span className="inline-block rounded-full bg-accent/10 text-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                    {b.category}
                  </span>
                  <div className="mt-2 font-display text-base md:text-lg font-bold text-primary leading-snug">
                    {b.title}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground line-clamp-2">{b.summary}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    Read More <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EAF3F4" }}>
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative">
              <img
                src={logoImg}
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute hidden lg:block"
                style={{
                  width: "320px",
                  maxWidth: "85%",
                  opacity: 0.05,
                  filter: "grayscale(100%)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />
              <div className="relative">
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
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
