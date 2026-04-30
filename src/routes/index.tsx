import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin, Users, Star, Shield, Wrench, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import { site, whatsappLink } from "@/data/site";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { vehicles } from "@/data/vehicles";
import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import tripFamily from "@/assets/trip-family.jpg";
import tripSchool from "@/assets/trip-school.jpg";
import tripCorp from "@/assets/trip-corporate.jpg";
import tripWedding from "@/assets/trip-wedding.jpg";
import destHyd from "@/assets/dest-hyderabad.jpg";
import destSri from "@/assets/dest-srisailam.jpg";
import destYad from "@/assets/dest-yadadri.jpg";
import destNag from "@/assets/dest-nagarjuna.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mega City Tours & Travells | Group Travel & Per KM Trips in Hyderabad" },
      {
        name: "description",
        content:
          "Mega City Tours & Travells offers group travel, per KM trips, local tours, outstation travel, corporate trips, school tours, pilgrimage travel, and vehicle bookings from Hyderabad across Telangana and nearby states.",
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

const trustBadges = [
  "Hyderabad Based",
  "Owned Fleet",
  "Experienced Drivers",
  "Local & Outstation",
  "4 to 50 Seater Vehicles",
  "Easy WhatsApp Booking",
];

const tripTypes = [
  { title: "Family Trips", img: tripFamily },
  { title: "School & College Trips", img: tripSchool },
  { title: "Corporate Outings", img: tripCorp },
  { title: "Wedding Guest Transport", img: tripWedding },
  { title: "Pilgrimage Trips", img: destSri },
  { title: "Weekend Getaways", img: destNag },
  { title: "Outstation Group Trips", img: destYad },
  { title: "Local Hyderabad Trips", img: destHyd },
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
            alt="Mega City Tours & Travells fleet at Charminar Hyderabad"
            className="h-full w-full object-cover"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-cream/15 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-cream uppercase tracking-wider">
              <MapPin className="h-3.5 w-3.5" /> Hyderabad's Trusted Travel Partner
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-brand-cream text-balance">
              Reliable Group Travel & Per KM Trips from Hyderabad
            </h1>
            <p className="mt-5 text-base md:text-lg text-brand-cream/85 max-w-2xl leading-relaxed">
              Comfortable travel for families, schools, colleges, companies, weddings, pilgrimage
              groups, and outstation journeys across Telangana and nearby states.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rust-gradient px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="h-5 w-5" /> Get Quote on WhatsApp
              </a>
              <a
                href={`tel:+91${site.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cream text-brand-brown px-7 py-3.5 font-semibold shadow-soft hover:scale-[1.02] transition-transform"
              >
                <Phone className="h-5 w-5" /> Call {site.phones[0]}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-cream/10 backdrop-blur px-3 py-1.5 text-xs font-medium text-brand-cream border border-brand-cream/20"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-tan" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TRUST CARDS */}
      <section className="relative -mt-12 md:-mt-16 z-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Group Travel Specialists", desc: "Families, schools, colleges, companies, functions, and events." },
              { icon: Wrench, title: "Flexible Per KM Pricing", desc: "Outstation pricing based on distance, vehicle, route, and trip needs." },
              { icon: Shield, title: "Owned Vehicle Fleet", desc: "Cars, SUVs, tempo travellers, Urbania, and buses from 4 to 50 seats." },
              { icon: MessageCircle, title: "Easy Booking Support", desc: "Share trip details over WhatsApp or call for quick vehicle options." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card p-6 shadow-soft border border-border/60">
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

      {/* SERVICES OVERVIEW */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Travel built around your group and route"
            subtitle="From short local trips to large group travel, we help you plan comfortable journeys based on destination, group size, and budget."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s) => (
              <div
                key={s.slug}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warm-gradient text-primary-foreground mb-4 group-hover:scale-105 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{s.short}</p>
                <a
                  href={whatsappLink(`Hi Mega City Tours & Travells, I would like to enquire about ${s.title}.`)}
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

      {/* TRIP TYPES */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Trip Types"
            title="Trips designed for every group"
            subtitle="Whether it's a family weekend, a school excursion, or a corporate offsite — we have the right vehicle and driver for it."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tripTypes.map((t) => (
              <div
                key={t.title}
                className="group relative overflow-hidden rounded-2xl shadow-card aspect-[4/5]"
              >
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/90 via-brand-brown/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold text-brand-cream leading-tight">
                    {t.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="How It Works"
            title="Book your trip in 4 easy steps"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
            {[
              ["Share Trip Details", "Tell us your pickup, destination, travel date, group size, and vehicle preference."],
              ["Get Vehicle Options", "We suggest the right vehicle based on your group size, route, and budget."],
              ["Confirm Booking", "Finalize route, timing, vehicle, and advance payment if required."],
              ["Start Travel", "Our driver reaches on time and you enjoy a comfortable trip."],
            ].map(([title, desc], i) => (
              <div key={title} className="relative rounded-2xl bg-card p-6 shadow-card border border-border/60">
                <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-rust-gradient text-primary-foreground font-display font-bold shadow-soft">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
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
            title="Popular routes & packages from Hyderabad"
            subtitle="Pricing varies by route, vehicle, group size, dates, and inclusions. Share your trip details for a custom quote."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.slug}
                className="group overflow-hidden rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-brand-cream/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-brand-brown">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-primary">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground"><strong>Best for:</strong> {p.bestFor}</p>
                  <p className="mt-1 text-xs text-muted-foreground"><strong>Vehicles:</strong> {p.vehicles}</p>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed line-clamp-2">{p.description}</p>
                  <a
                    href={whatsappLink(`Hi Mega City Tours & Travells, I would like a quote for: ${p.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center w-full rounded-full bg-warm-gradient text-primary-foreground py-2.5 text-sm font-semibold shadow-card hover:shadow-glow transition-shadow"
                  >
                    Ask for Price
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Fleet"
            title="Vehicles for every group size"
            subtitle="Owned, well-maintained vehicles from 4-seater cars to 50-seater buses — with experienced drivers included."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <div key={v.slug} className="overflow-hidden rounded-2xl bg-card border border-border/60 shadow-card">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={v.image} alt={v.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-primary">{v.name}</h3>
                    <span className="text-sm font-semibold text-accent">{v.seats} Seater</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{v.bestFor}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">{v.ac}</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">{v.count} available</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">Driver included</span>
                  </div>
                  <a
                    href={whatsappLink(`Hi Mega City Tours & Travells, I would like to enquire about the ${v.name} (${v.seats} seater).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center w-full rounded-full border border-border bg-background py-2.5 text-sm font-semibold text-primary hover:bg-secondary transition-colors"
                  >
                    Enquire Vehicle
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-warm-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            light
            eyebrow="Why Mega City"
            title="Why choose Mega City Tours & Travells?"
            subtitle="A Hyderabad-based travel team focused on safe, comfortable, and budget-friendly group travel."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Hyderabad-based travel company",
              "Owned fleet from 4 to 50 seats",
              "Drivers included with all vehicles",
              "20–30 years experienced drivers",
              "Clean and well-maintained interiors",
              "Budget-friendly travel options",
              "Local and outstation support",
              "Flexible custom packages",
              "Easy phone & WhatsApp communication",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-xl bg-brand-cream/10 backdrop-blur p-4 border border-brand-cream/15">
                <CheckCircle2 className="h-5 w-5 text-brand-tan shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-brand-cream/95">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Customer Reviews"
            title="What our customers say"
            subtitle="Real customer reviews will be added here once shared by the client or pulled from the Google Business Profile."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-dashed border-border bg-card/50 p-6 text-center"
                data-placeholder="real-google-reviews"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent">
                  <Star className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  Placeholder · Real customer review will appear here once added by the client
                  or connected to Google Business Profile.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-16 md:py-24 bg-secondary/40">
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

      <CTASection />
    </>
  );
}
