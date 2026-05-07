import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  CheckCircle2,
  Phone,
  Bus,
  Users,
  Award,
  CalendarCheck,
  Heart,
  GraduationCap,
  Briefcase,
  Sparkles,
  Mountain,
  MapPin,
  Route as RouteIcon,
  Package,
  ClipboardList,
  Lightbulb,
  CheckSquare,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { LogoWatermark } from "@/components/LogoWatermark";
import { CTASection } from "@/components/CTASection";
import { whatsappLink, telLink, site } from "@/data/site";
import heroImg from "@/assets/hero-travel.webp";
import brandedBus from "@/assets/bus-22-main.png";
import tempoInterior from "@/assets/tempo-interior.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mega City Tours & Travells | Hyderabad Travel Agency" },
      {
        name: "description",
        content:
          "Mega City Tours & Travells is a Hyderabad-based travel company with an owned fleet of 4 to 50 seater vehicles, experienced drivers, and easy WhatsApp booking for local and outstation trips.",
      },
      { property: "og:title", content: "About Mega City Tours & Travells" },
      {
        property: "og:description",
        content:
          "Hyderabad-based travel partner with owned, branded fleet and experienced drivers.",
      },
      { property: "og:image", content: brandedBus },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Bus, value: "33+", label: "Owned Vehicles" },
  { icon: Users, value: "4 to 50", label: "Seater Options" },
  { icon: Award, value: "20 to 30 yrs", label: "Experienced Drivers" },
  { icon: CalendarCheck, value: "365", label: "Days Available" },
];

const trustBullets = [
  "Owned and branded fleet",
  "Drivers included with all vehicles",
  "Local and outstation support",
  "Easy WhatsApp and phone booking",
  "Hyderabad-based team",
  "Available 365 days",
];

const helpItems = [
  {
    icon: Heart,
    title: "Family Trips",
    desc: "Comfortable vehicles for weekend getaways and family outings.",
  },
  {
    icon: GraduationCap,
    title: "School and College Trips",
    desc: "Safe group transport for excursions and educational visits.",
  },
  {
    icon: Briefcase,
    title: "Corporate Outings",
    desc: "Reliable team movement for offsites and company events.",
  },
  {
    icon: Sparkles,
    title: "Wedding Guest Transport",
    desc: "On-time pickups and drops for wedding parties and guests.",
  },
  {
    icon: Mountain,
    title: "Pilgrimage Trips",
    desc: "Trusted vehicles for temple yatras and spiritual journeys.",
  },
  {
    icon: MapPin,
    title: "Local Hyderabad Sightseeing",
    desc: "City tours covering popular Hyderabad landmarks.",
  },
  {
    icon: RouteIcon,
    title: "Outstation Per KM Trips",
    desc: "One-way and round-trip travel across nearby states.",
  },
  {
    icon: Package,
    title: "Custom Group Packages",
    desc: "Tailored multi-day plans built around your group needs.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Understand Your Trip",
    desc: "We ask for pickup location, destination, travel date, group size, and vehicle preference.",
  },
  {
    icon: Lightbulb,
    title: "Suggest the Right Vehicle",
    desc: "We recommend the right vehicle based on comfort, group size, route, and budget.",
  },
  {
    icon: CheckSquare,
    title: "Confirm Details",
    desc: "The team confirms timing, vehicle, driver, pricing structure, and any advance requirement.",
  },
  {
    icon: ShieldCheck,
    title: "Travel with Confidence",
    desc: "The driver arrives on time and the trip is handled with clear communication.",
  },
];

const whyPoints = [
  "Owned fleet from 4 to 50 seats",
  "Clean interiors and comfortable seating",
  "Experienced drivers",
  "Budget-friendly travel options",
  "Local and outstation trip support",
  "Suitable for families, schools, colleges, companies, weddings, and pilgrimages",
  "Easy quote through WhatsApp or phone",
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-32">
          <span className="inline-block rounded-full bg-brand-cream/15 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-cream uppercase tracking-wider">
            About Us
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-brand-cream leading-tight max-w-3xl text-balance">
            A Hyderabad Travel Partner You Can Rely On
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-brand-cream/85 leading-relaxed">
            Mega City Tours & Travells helps families, schools, colleges, companies, wedding groups,
            and pilgrimage groups arrange reliable vehicles for local and outstation travel.
          </p>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Who We Are"
            title="Built Around Real Vehicles, Real Drivers, and Real Travel Needs"
            subtitle="Mega City Tours & Travells is a Hyderabad-based travel company focused on practical, comfortable, and budget-friendly group travel. From small family trips to large group movement, the team helps customers choose the right vehicle based on destination, group size, route, and schedule."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group relative rounded-2xl bg-card p-6 border border-border/60 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">
                  {value}
                </div>
                <div className="mt-2 text-sm md:text-base text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET-BACKED TWO COLUMN */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div
              className="reveal relative overflow-hidden rounded-2xl shadow-soft border border-border/60"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={brandedBus}
                alt="Mega City Tours and Travells branded bus in Hyderabad."
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-brand-brown/85 backdrop-blur px-4 py-3 text-brand-cream">
                <div className="text-xs uppercase tracking-wider opacity-80">Branded Fleet</div>
                <div className="font-display text-lg font-semibold">
                  Recognisable at every pickup
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                Our Fleet
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-balance leading-tight">
                A Fleet-Backed Travel Company, Not Just a Booking Contact
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                Every vehicle carries the Mega City Tours & Travells identity, making it easier for
                customers to recognize the vehicle at pickup. The company supports local trips,
                outstation journeys, group travel, school and college trips, corporate movement,
                weddings, and pilgrimages.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {trustBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm md:text-base text-foreground/90"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-secondary/50">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="What We Help With"
            title="Travel Support for Every Kind of Group"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal hover-lift rounded-2xl bg-card p-6 border border-border/60 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="How We Work" title="Simple, Clear, and Practical Trip Planning" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={title}
                className="relative rounded-2xl bg-card p-6 border border-border/60 shadow-card"
              >
                <div className="absolute -top-3 -right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rust-gradient text-primary-foreground font-display font-bold shadow-glow">
                  {idx + 1}
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-brown text-brand-cream mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS CHOOSE US (DARK) */}
      <section className="bg-warm-gradient py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-brand-cream/15 text-brand-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-cream text-balance leading-tight">
                Why Customers Choose Mega City
              </h2>
              <ul className="mt-8 space-y-3.5">
                {whyPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-brand-cream/90 text-base md:text-lg"
                  >
                    <CheckCircle2 className="h-6 w-6 text-brand-tan shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="reveal relative overflow-hidden rounded-2xl shadow-soft border border-brand-cream/10"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={tempoInterior}
                alt="Tempo Traveller interior for group travel in Hyderabad"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-3xl bg-card border border-border/60 shadow-soft p-8 md:p-12 text-center">
            <SectionHeader
              eyebrow="Plan Your Trip"
              title="Planning a Trip from Hyderabad?"
              subtitle="Share your destination, travel date, pickup location, group size, and preferred vehicle. Our team will help you choose a suitable option."
              className="mb-8 mx-auto"
            />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground shadow-glow hover:opacity-95 transition"
              >
                <WhatsAppIcon className="h-5 w-5" /> Get Quote on WhatsApp
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-full bg-rust-gradient px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
              >
                <Phone className="h-5 w-5" /> Call {site.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
