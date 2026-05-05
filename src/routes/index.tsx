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
} from "lucide-react";
import heroImg from "@/assets/hero-fleet-clean.webp";
import logoImg from "@/assets/logo.webp";
import { useState } from "react";
import { VehicleDetailModal } from "@/components/VehicleDetailModal";
import type { Vehicle } from "@/data/vehicles";
import fleetImg from "@/assets/megacity-fleet.webp";
import { site, whatsappLink } from "@/data/site";
import { vehicles } from "@/data/vehicles";
import { SectionHeader } from "@/components/SectionHeader";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { QuoteForm } from "@/components/QuoteForm";

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

const popularRoutes = [
  { title: "Hyderabad to Srisailam", tripType: "Outstation / Per KM", category: "Pilgrimage" },
  { title: "Hyderabad to Yadadri", tripType: "One-Day Round Trip", category: "Pilgrimage" },
  { title: "Hyderabad to Warangal", tripType: "Outstation / Per KM", category: "Family" },
  { title: "Hyderabad to Vijayawada", tripType: "One-Way or Round Trip", category: "Outstation" },
  { title: "Hyderabad to Nagarjuna Sagar", tripType: "One-Day Round Trip", category: "Family" },
  { title: "Hyderabad Local Sightseeing", tripType: "Local / Day Rental", category: "Local" },
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

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Mega City Tours and Travells fleet of bus and Innova in Hyderabad."
            className="h-full w-full object-cover lg:hidden"
            style={{ objectPosition: "70% bottom" }}
            width={1920}
            height={1280}
          />
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="hidden lg:block h-full w-full object-cover"
            style={{ objectPosition: "center center" }}
            width={1920}
            height={1080}
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,30,32,0.92) 0%, rgba(10,40,44,0.78) 35%, rgba(13,92,99,0.35) 65%, rgba(13,92,99,0.45) 100%)",
            }}
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,30,32,0.85) 0%, rgba(10,40,44,0.65) 50%, rgba(13,92,99,0.5) 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-12 pb-14 md:pt-24 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_minmax(0,380px)] lg:gap-14 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5" /> Hyderabad's Trusted Travel Partner
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white text-balance">
                Reliable Group Travel & Per KM Trips from Hyderabad
              </h1>
              <p className="mt-5 text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
                AC and Non-AC vehicles from 4 to 50 seats with experienced drivers, for families,
                schools, companies, weddings, pilgrimage groups, and outstation journeys.
              </p>

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
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02] bg-accent"
                  style={{ borderRadius: "8px", padding: "16px 28px" }}
                >
                  <Phone className="h-5 w-5" /> Call {site.phones[0]}
                </a>
              </div>
            </div>

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

      {/* TRUST STATS */}
      <section className="py-10 md:py-14 bg-secondary/40">
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
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { icon: Snowflake, label: "AC & Non-AC" },
              { icon: ShieldCheck, label: "Experienced Drivers" },
              { icon: Calendar, label: "Available 365 Days" },
              { icon: MapPin, label: "Hyderabad Based" },
            ].map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/85 shadow-card"
              >
                <t.icon className="h-3.5 w-3.5 text-accent" />
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VEHICLES */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -left-24 top-10 w-[480px] md:w-[640px] opacity-[0.05]"
        />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Vehicles"
            title="Available Vehicles"
            subtitle="AC and Non-AC vehicles from 4 to 50 seats. Driver included on every trip."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <img
                      src={v.image}
                      alt={`${title} for hire in Hyderabad by Mega City Tours and Travells.`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-[11px] font-bold">
                      {v.seats} Seater
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-bold text-primary leading-tight">
                      {title}
                    </h3>
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
                        <Info className="h-4 w-4" /> Explore
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
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
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

      {/* WHY CHOOSE MEGA CITY */}
      <section
        className="relative overflow-hidden py-16 md:py-24 text-white"
        style={{ backgroundColor: "#0D5C63" }}
      >
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] md:w-[680px] opacity-[0.07]"
        />
        <div className="relative mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Why Choose Mega City
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
              Trusted travel, every trip, every time
            </h2>
          </div>
          <ul className="mt-14 grid gap-8 md:grid-cols-2">
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
              <li key={p.title} className="flex items-start gap-4">
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Travel built around your group"
            subtitle="From short local trips to large group travel."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Popular Routes"
            title="Popular Routes from Hyderabad"
            subtitle="Choose a common route or ask for a custom quote."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularRoutes.map((r) => {
              const dest = r.title.replace(/^Hyderabad to\s+/i, "");
              const isFromHyd = /^Hyderabad to/i.test(r.title);
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
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary/90">
                    {isFromHyd ? (
                      <>
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>Hyderabad</span>
                        <ArrowRight className="h-4 w-4 text-accent" />
                        <span>{dest}</span>
                      </>
                    ) : (
                      <>
                        <Compass className="h-4 w-4 text-accent" />
                        <span>{r.title}</span>
                      </>
                    )}
                  </div>
                  <a
                    href={whatsappLink(`Hi Mega City, please share the price for: ${r.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-lg bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold hover:shadow-glow transition-shadow"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Ask for Price
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
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

            <QuoteForm variant="full" ctaLabel="Submit Enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
