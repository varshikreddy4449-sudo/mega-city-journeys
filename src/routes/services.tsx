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
  Route as RouteIcon,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";
import { whatsappLink, telLink, site } from "@/data/site";
import tempoImg from "@/assets/vehicle-tempo.jpg";
import urbaniaImg from "@/assets/vehicle-urbania.jpg";
import bus40Img from "@/assets/vehicle-bus-40.jpg";
import tempoInteriorImg from "@/assets/tempo-interior.jpg";
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

const heroPills = ["Group Travel", "Per KM Trips", "Outstation Travel"];

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
    desc: "Package-based pricing for in-city and short rentals.",
  },
  {
    icon: Calculator,
    title: "Outstation Trips",
    desc: "Per KM-based pricing depending on route and vehicle.",
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
  "wedding-event-transport": bus40Img,
  "pilgrimage-trips": bus40Img,
};

function enquireLink(title: string) {
  return whatsappLink(`Hi Mega City Tours & Travells, I would like to enquire about ${title}.`);
}

function ServicesPage() {
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-brand-cream"
        style={{
          background: "linear-gradient(120deg, #4A2C20 0%, #4A2C20 55%, #6B3422 78%, #A0522D 100%)",
        }}
      >
        {/* Sage glow accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25"
          style={{ background: "#8FA68F" }}
        />
        {/* Subtle dotted route pattern */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#F4F1EA" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 C220,240 380,340 560,260 C740,180 880,310 1080,220 C1160,190 1200,210 1200,210"
            fill="none"
            stroke="#D9B08C"
            strokeWidth="1.5"
            strokeDasharray="5 9"
          />
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 lg:py-20 min-h-[420px] md:min-h-[460px] flex items-center">
          <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            {/* LEFT */}
            <div>
              <span className="inline-block rounded-full bg-brand-tan/20 text-brand-tan border border-brand-tan/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                Services
              </span>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance text-brand-cream">
                Travel Services from Hyderabad
              </h1>
              <p className="mt-4 text-sm md:text-base text-brand-cream/85 max-w-xl leading-relaxed">
                Comfortable vehicle arrangements for families, schools, colleges, companies,
                weddings, pilgrimages, and outstation journeys from Hyderabad.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {heroPills.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-brand-cream/25 bg-brand-cream/10 backdrop-blur px-3 py-1.5 text-xs font-medium text-brand-cream"
                  >
                    {p}
                  </span>
                ))}
              </div>

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

            {/* RIGHT - Service summary card */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl border border-brand-cream/15 bg-brand-cream/[0.07] backdrop-blur-md p-6 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-tan">
                    Popular Services
                  </div>
                  <div className="text-xs text-brand-cream/70">Hyderabad based</div>
                </div>
                <ul className="space-y-2.5">
                  {[
                    { icon: Users, label: "Group Travel" },
                    { icon: RouteIcon, label: "Per KM Trips" },
                    { icon: MapPin, label: "Outstation Trips" },
                    { icon: GraduationCap, label: "School & College Trips" },
                  ].map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 rounded-xl bg-brand-brown/40 border border-brand-cream/10 px-4 py-3"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-rust/90 text-brand-cream shrink-0">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="text-sm font-medium text-brand-cream">{label}</span>
                      <ArrowRight className="ml-auto h-4 w-4 text-brand-tan" />
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs text-brand-cream/70">
                  4 to 50 seater vehicles. Local and outstation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="py-10 md:py-14 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Quick Navigation
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-primary">
              Jump to a Service
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card hover:bg-accent hover:text-accent-foreground hover:border-accent px-4 py-2 text-sm font-medium text-foreground/90 transition-colors shadow-card"
              >
                <s.icon className="h-4 w-4" />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Most Requested"
            title="Featured Travel Services"
            subtitle="The three services our customers ask for most often."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="reveal hover-lift group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card hover:shadow-soft transition-all scroll-mt-24"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={featuredImages[s.slug]}
                    alt={`${s.title} vehicle option from Mega City Tours & Travells.`}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 via-brand-brown/20 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rust-gradient text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl font-bold text-brand-cream leading-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    {s.short}
                  </p>

                  <dl className="mt-5 space-y-3 text-sm">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                        Best for
                      </dt>
                      <dd className="mt-1 text-foreground/90">{s.bestFor}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                        Suggested vehicles
                      </dt>
                      <dd className="mt-1 text-foreground/90">{s.vehicles}</dd>
                    </div>
                  </dl>

                  <a
                    href={enquireLink(s.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-rust-gradient text-primary-foreground px-5 py-3 text-sm font-semibold shadow-card hover:shadow-glow transition"
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
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Full Service List" title="All Travel Services We Offer" />
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 md:p-7 shadow-card hover:shadow-soft transition-shadow scroll-mt-24"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-primary leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-foreground/85 leading-relaxed">
                      {s.short}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent shrink-0 w-28 pt-0.5">
                      Best for
                    </span>
                    <span className="text-foreground/90">{s.bestFor}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent shrink-0 w-28 pt-0.5">
                      Vehicles
                    </span>
                    <span className="text-foreground/90">{s.vehicles}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent shrink-0 w-28 pt-0.5">
                      Share with us
                    </span>
                    <span className="text-foreground/90">{s.needs}</span>
                  </li>
                </ul>

                <a
                  href={enquireLink(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-warm-gradient text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-card hover:shadow-glow transition self-start"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHICH SERVICE SHOULD I CHOOSE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Help Me Pick"
            title="Which Service Should I Choose?"
            subtitle="A quick guide to help you find the right service for your trip."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chooseCards.map((c) => (
              <a
                key={c.q}
                href={`#${c.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-card hover:shadow-soft hover:border-accent/40 transition-all"
              >
                <div className="text-sm font-medium text-muted-foreground">{c.q}</div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="font-display text-lg font-semibold text-primary leading-snug">
                    {c.a}
                  </span>
                  <ArrowRight className="h-5 w-5 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Pricing"
            title="How Pricing Works"
            subtitle="Local trips are usually package-based. Outstation trips are generally calculated per KM. Final pricing depends on route, vehicle type, date, group size, tolls, parking, permits, state taxes, and driver allowance."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {pricingCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal hover-lift rounded-2xl bg-card border border-border/60 p-6 shadow-card text-center"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rust-gradient text-primary-foreground mb-4 shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Final price confirmed after sharing your trip details. Ask for Price on WhatsApp.
          </p>
        </div>
      </section>

      {/* WHAT TO SHARE FOR A QUOTE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                Quick Quote
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-balance leading-tight">
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
                    className="flex items-start gap-2.5 rounded-xl bg-card border border-border/60 px-4 py-3 shadow-card"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3 font-semibold shadow-glow"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Send Details on WhatsApp
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
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={tempoInteriorImg}
                alt="Tempo Traveller interior for group travel in Hyderabad"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-brand-brown/85 backdrop-blur px-4 py-3 text-brand-cream">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider opacity-80">
                  <ClipboardList className="h-3.5 w-3.5" /> Booking Made Simple
                </div>
                <div className="font-display text-lg font-semibold mt-0.5">
                  We respond on WhatsApp within working hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AreasServed />

      {/* BOTTOM CTA */}
      <section className="bg-rust-gradient text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground text-balance leading-tight">
            Need Help Choosing the Right Vehicle?
          </h2>
          <p className="mt-5 text-base md:text-lg text-brand-cream/90 max-w-2xl mx-auto leading-relaxed">
            Share your route, travel date, group size, and vehicle preference. Our team will suggest
            the right option for your trip.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
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
        </div>
      </section>
    </>
  );
}
