import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  MapPinned,
  Calculator,
  Receipt,
  ClipboardList,
  Users,
  MapPin,
  ShieldCheck,
  Snowflake,
  Info,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { LogoWatermark } from "@/components/LogoWatermark";
import { services } from "@/data/services";
import { whatsappLink, telLink, site } from "@/data/site";
import logoImg from "@/assets/logo.webp";
import tempoImg from "@/assets/vehicle-tempo.webp";
import urbaniaImg from "@/assets/vehicle-urbania.webp";
import heroBusImg from "@/assets/services-hero-megacity.png";
import bus40Img from "@/assets/vehicle-bus-40.webp";
import tempoExteriorImg from "@/assets/tempo-exterior-side.webp";
import { AreasServed } from "@/components/AreasServed";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Travel Services in Hyderabad | Group, Corporate, School & Outstation Trips" },
      {
        name: "description",
        content:
          "Group travel agency Hyderabad offering per KM travels, local sightseeing, outstation travel, corporate travel services, employee transportation, school and college trip transport, pilgrimage travel, and wedding guest transport from Hyderabad.",
      },
      { property: "og:title", content: "Travel Services in Hyderabad" },
      {
        property: "og:description",
        content:
          "Group travel, corporate travel services, school and college trip transport, pilgrimage and outstation travel from Hyderabad.",
      },
    ],
  }),
  component: ServicesPage,
});

const TEAL = "#0D5C63";
const TEAL_SOFT = "#3CAEA3";
const AQUA = "#ABDADC";
const CORAL = "#FF7A59";

const chooseCards = [
  { q: "Need a vehicle for family or friends?", a: "Choose Group Travel", slug: "group-travel" },
  {
    q: "Travelling outside Hyderabad?",
    a: "Choose Per KM or Outstation Trips",
    slug: "per-km-travel",
  },
  {
    q: "Planning a school or college trip?",
    a: "Choose School & College Trips",
    slug: "school-college-trips",
  },
  {
    q: "Moving wedding guests?",
    a: "Choose Wedding & Event Transport",
    slug: "wedding-event-transport",
  },
  { q: "Planning temple travel?", a: "Choose Pilgrimage Trips", slug: "pilgrimage-trips" },
  { q: "Need office or team transport?", a: "Choose Corporate Travel", slug: "corporate-travel" },
];

const pricingCards = [
  {
    icon: MapPinned,
    title: "Local Trips",
    desc: "Package-based pricing for in-city sightseeing and short rentals.",
  },
  {
    icon: Calculator,
    title: "Outstation Trips",
    desc: "Per KM-based pricing depending on route, vehicle, and trip type.",
  },
  {
    icon: Receipt,
    title: "Extra Charges",
    desc: "Tolls, parking, permits, state taxes, and driver allowance may be separate.",
  },
];

const quoteChecklist = [
  "Pickup location",
  "Destination",
  "Travel date",
  "Number of passengers",
  "Preferred vehicle",
  "One-way or round trip",
  "Local or outstation trip",
  "Any special requirements",
];

const featuredImages: Record<string, string> = {
  "group-travel": tempoImg,
  "per-km-travel": urbaniaImg,
  "outstation-trips": bus40Img,
};

function enquireLink(title: string) {
  return whatsappLink(`Hi Mega City Tours & Travells, I would like to enquire about ${title}.`);
}

type ServiceItem = (typeof services)[number];

function ServiceListCard({ service: s }: { service: ServiceItem }) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-soft transition-all"
      style={{ border: "1px solid rgba(13,92,99,0.10)" }}
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-1"
        style={{ background: `linear-gradient(90deg, ${TEAL}, ${TEAL_SOFT}, ${CORAL})` }}
      />

      {s.image && (
        <div className="relative h-40 w-full overflow-hidden bg-secondary/30 sm:h-44">
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-7">
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${AQUA}, rgba(60,174,163,0.35))`,
            color: TEAL,
          }}
        >
          <s.icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl font-bold leading-snug" style={{ color: TEAL }}>
            {s.title}
          </h3>
          <p className="mt-1.5 text-sm text-foreground/75 leading-relaxed">{s.short}</p>
        </div>
      </div>

      <dl className="mt-5 divide-y" style={{ borderColor: "rgba(13,92,99,0.08)" }}>
        {[
          { label: "Best for", value: s.bestFor },
          { label: "Vehicles", value: s.vehicles },
          { label: "Ideal use", value: s.needs },
        ].map((row) => (
          <div key={row.label} className="grid grid-cols-[88px_1fr] gap-3 py-2.5 first:pt-0">
            <dt
              className="text-[10.5px] font-bold uppercase tracking-wider pt-0.5"
              style={{ color: CORAL }}
            >
              {row.label}
            </dt>
            <dd className="text-sm leading-relaxed" style={{ color: "#1f2937" }}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <a
        href={enquireLink(s.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white self-start transition-transform hover:scale-[1.02]"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 6px 14px rgba(37,211,102,0.25)",
        }}
      >
        <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
      </a>
      </div>
    </div>
  );
}

function ServicesPage() {
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <>
      {/* HERO — Ocean Breeze theme matching home */}
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
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 hidden md:block"
          style={{
            width: "520px",
            transform: "translate(-50%, -50%)",
            opacity: 0.04,
            filter: "grayscale(100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            {/* LEFT */}
            <div>
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: AQUA, color: TEAL }}
                >
                  <ShieldCheck className="h-3.5 w-3.5" /> 20 Years Experience
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: TEAL_SOFT }}
                >
                  <Snowflake className="h-3.5 w-3.5" /> AC / Non-AC Options
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold"
                  style={{ color: TEAL, border: "1px solid rgba(13,92,99,0.18)" }}
                >
                  <MapPin className="h-3.5 w-3.5" /> Hyderabad Based
                </span>
              </div>

              <h1
                className="mt-5 font-display text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] text-balance"
                style={{ color: TEAL }}
              >
                Travel Services from Hyderabad
              </h1>
              <p className="mt-4 text-base md:text-[17px] text-foreground/75 max-w-xl leading-relaxed">
                Flexible transport solutions for families, schools, companies, pilgrimages, and
                outstation travel across Hyderabad and nearby regions.
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
                  <WhatsAppIcon className="h-5 w-5" /> Get Quote on WhatsApp
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: TEAL,
                    borderRadius: "10px",
                    padding: "13px 22px",
                    boxShadow: "0 6px 18px rgba(13,92,99,0.28)",
                  }}
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>
            </div>

            {/* RIGHT — visual card */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[28px] hidden sm:block"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 60%, rgba(255,122,89,0.18), rgba(255,122,89,0) 70%)",
                  filter: "blur(8px)",
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden bg-white"
                style={{
                  border: "1px solid rgba(13,92,99,0.12)",
                  boxShadow:
                    "0 24px 48px -20px rgba(13,92,99,0.25), 0 8px 20px -10px rgba(60,174,163,0.18)",
                }}
              >
                <img
                  src={heroBusImg}
                  alt="Mega City Tempo Traveller for group travel and outstation trips from Hyderabad"
                  className="block w-full"
                  style={{ maxHeight: "380px", objectFit: "cover", objectPosition: "center" }}
                  loading="eager"
                />
                <div className="p-5 grid grid-cols-3 gap-3">
                  {[
                    { icon: Users, label: "4–50 Seats" },
                    { icon: Snowflake, label: "AC / Non-AC" },
                    { icon: ShieldCheck, label: "Trained Drivers" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center text-center gap-1.5"
                    >
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ backgroundColor: AQUA, color: TEAL }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[11px] font-semibold" style={{ color: TEAL }}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="py-10 md:py-14 bg-white border-b" style={{ borderColor: "rgba(13,92,99,0.08)" }}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: CORAL }}>
              Quick Navigation
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold" style={{ color: TEAL }}>
              Jump to a Service
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-card hover:-translate-y-0.5 transition-all"
                style={{
                  border: "1px solid rgba(13,92,99,0.15)",
                  color: TEAL,
                }}
              >
                <s.icon className="h-4 w-4" style={{ color: CORAL }} />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F7F9FA" }}>
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Most Requested"
            title="Featured Travel Services"
            subtitle="The three services our customers ask for most often."
          />
          <div className="stagger grid gap-6 lg:grid-cols-3">
            {featured.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="reveal hover-lift group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-soft transition-all scroll-mt-24"
                style={{ border: "1px solid rgba(13,92,99,0.10)" }}
              >
                <div className="relative h-48 overflow-hidden bg-secondary/30">
                  <img
                    src={featuredImages[s.slug]}
                    alt={`${s.title} vehicle option from Mega City Tours & Travells.`}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span
                    className="absolute top-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow"
                    style={{ backgroundColor: CORAL }}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-tight" style={{ color: TEAL }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-foreground/80 leading-relaxed">
                    {s.short}
                  </p>

                  <div className="mt-4 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(171,218,220,0.25)" }}>
                    <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: CORAL }}>
                      Best for
                    </div>
                    <div className="mt-0.5 text-sm" style={{ color: TEAL }}>{s.bestFor}</div>
                  </div>

                  <a
                    href={enquireLink(s.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                    style={{
                      backgroundColor: "#25D366",
                      boxShadow: "0 6px 18px rgba(37,211,102,0.28)",
                    }}
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-white">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader eyebrow="Full Service List" title="All Travel Services We Offer" />

          {/* Mobile: horizontal snap carousel */}
          <div className="md:hidden">
            <div
              className="mb-3 flex items-center justify-center gap-2 text-xs font-medium"
              style={{ color: TEAL }}
            >
              <span className="opacity-70">Swipe to explore services</span>
              <ArrowRight className="h-3.5 w-3.5 animate-pulse" style={{ color: CORAL }} />
            </div>
            <div className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {rest.map((s) => (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="snap-start shrink-0 basis-[86%] scroll-mt-24"
                >
                  <ServiceListCard service={s} />
                </article>
              ))}
              <div className="shrink-0 w-1" aria-hidden="true" />
            </div>
          </div>

          {/* Desktop: 2-column grid */}
          <div className="stagger hidden md:grid gap-6 md:grid-cols-2">
            {rest.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="reveal hover-lift scroll-mt-24 h-full"
              >
                <ServiceListCard service={s} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHICH SERVICE SHOULD I CHOOSE */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F7F9FA" }}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Help Me Pick"
            title="Which Service Should I Choose?"
            subtitle="A quick guide to help you find the right service for your trip."
          />
          <div className="stagger grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chooseCards.map((c) => (
              <a
                key={c.q}
                href={`#${c.slug}`}
                className="reveal hover-lift group flex flex-col justify-between rounded-2xl bg-white p-6 shadow-card hover:shadow-soft transition-all"
                style={{ border: "1px solid rgba(13,92,99,0.10)" }}
              >
                <div className="text-sm font-medium text-muted-foreground">{c.q}</div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="font-display text-lg font-semibold leading-snug" style={{ color: TEAL }}>
                    {c.a}
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: CORAL }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Pricing"
            title="How Pricing Works"
            subtitle="Local trips are usually package-based. Outstation trips are generally calculated per KM."
          />
          <div className="stagger grid gap-5 md:grid-cols-3">
            {pricingCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal hover-lift rounded-2xl bg-white p-6 shadow-card text-center"
                style={{ border: "1px solid rgba(13,92,99,0.10)" }}
              >
                <div
                  className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-4 text-white"
                  style={{ backgroundColor: CORAL, boxShadow: "0 6px 18px rgba(255,122,89,0.30)" }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold" style={{ color: TEAL }}>
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 mx-auto max-w-3xl rounded-2xl p-5 flex items-start gap-3"
            style={{
              backgroundColor: "rgba(171,218,220,0.30)",
              border: "1px solid rgba(13,92,99,0.15)",
            }}
          >
            <Info className="h-5 w-5 shrink-0 mt-0.5" style={{ color: TEAL }} />
            <p className="text-sm leading-relaxed" style={{ color: TEAL }}>
              Prices are shared on request because final cost depends on route, vehicle type,
              travel date, group size, tolls, parking, permits, state taxes, and driver allowance.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO SHARE FOR A QUOTE */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F7F9FA" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ backgroundColor: AQUA, color: TEAL }}
              >
                Quick Quote
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-balance leading-tight" style={{ color: TEAL }}>
                What to Share for a Quick Quote
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                The more details you share, the faster we can suggest the right vehicle and confirm
                pricing.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {quoteChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl bg-white px-4 py-3 shadow-card"
                    style={{ border: "1px solid rgba(13,92,99,0.10)" }}
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: CORAL }} />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: "#25D366",
                    boxShadow: "0 6px 18px rgba(37,211,102,0.28)",
                  }}
                >
                  <WhatsAppIcon className="h-5 w-5" /> Send Details on WhatsApp
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: TEAL,
                    boxShadow: "0 6px 18px rgba(13,92,99,0.28)",
                  }}
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl bg-white"
              style={{
                aspectRatio: "4 / 5",
                border: "1px solid rgba(13,92,99,0.12)",
                boxShadow: "0 24px 48px -20px rgba(13,92,99,0.25)",
              }}
            >
              <img
                src={tempoExteriorImg}
                alt="Tempo Traveller booking support — Mega City Tours and Travells, Hyderabad"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 backdrop-blur"
                style={{ backgroundColor: "rgba(255,255,255,0.92)", border: "1px solid rgba(13,92,99,0.12)" }}
              >
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold" style={{ color: CORAL }}>
                  <ClipboardList className="h-3.5 w-3.5" /> Booking Made Simple
                </div>
                <div className="font-display text-base font-semibold mt-0.5" style={{ color: TEAL }}>
                  We respond on WhatsApp within working hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AreasServed />

      {/* BOTTOM CTA */}
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
            Need Help Choosing the Right Vehicle?
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Share your trip type, date, group size, and vehicle preference. Our team will help you
            choose the right option.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-bold text-white transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: "#25D366",
                boxShadow: "0 6px 18px rgba(37,211,102,0.28)",
              }}
            >
              <WhatsAppIcon className="h-5 w-5" /> Get Quote on WhatsApp
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-bold text-white transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: TEAL,
                boxShadow: "0 6px 18px rgba(13,92,99,0.28)",
              }}
            >
              <Phone className="h-5 w-5" /> Call {site.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
