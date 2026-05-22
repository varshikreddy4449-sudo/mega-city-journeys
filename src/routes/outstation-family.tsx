import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Bus,
  ShieldCheck,
  FileText,
  Route as RouteIcon,
  Snowflake,
  Clock,
  UserCheck,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import heroImg from "@/assets/vehicle-urbania.webp";
import logoImg from "@/assets/logo.webp";
import imgTempo from "@/assets/tempo-exterior-front.webp";
import imgMiniBus from "@/assets/bus-22-main.png";
import imgStandardBus from "@/assets/vehicle-bus-40.webp";
import imgUrbania from "@/assets/vehicle-urbania.webp";
// Route destination images (only those present in /assets/routes are used; others fall back to icon-only)
import routeTirupati from "@/assets/routes/tirupati.png";
import routePondicherry from "@/assets/routes/pondicherry.png";
import routeVijayawada from "@/assets/routes/vijayawada.png";
// TODO: No project assets exist for Goa, Kerala, Coorg — keep these as icon-only cards.

const WA_URL =
  "https://wa.me/918919900181?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20an%20outstation%20family%20trip%20from%20Hyderabad";
const TEL_URL = "tel:9949949993";

const ldJson = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Megacity Tours & Travels",
  image: "https://megacitytoursandtravels.com/og-image.jpg",
  telephone: "+919949949993",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Sri Sai Residency, Shop No 3, Beside Sri Chaitanya High School, Boduppal Main Road",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500092",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.4126, longitude: 78.5614 },
  openingHours: "Mo-Su 06:00-21:00",
  url: "https://megacitytravells.in/outstation-family/",
};

export const Route = createFileRoute("/outstation-family")({
  head: () => ({
    meta: [
      {
        title:
          "Family Outstation Trips from Hyderabad | Megacity Tours & Travels",
      },
      {
        name: "description",
        content:
          "Book family outstation trips from Hyderabad to Goa, Kerala, Tirupati, Coorg and more. AC Tempo Travellers, Mini Buses, Luxury Vans for 12–50 passengers. 20+ years of trusted service.",
      },
      {
        property: "og:title",
        content:
          "Family Outstation Trips from Hyderabad | Megacity Tours & Travels",
      },
      {
        property: "og:description",
        content:
          "AC Tempo Travellers, Mini Buses, Luxury Vans for 12–50 passengers. 20+ years of trusted family travel from Hyderabad.",
      },
      {
        property: "og:image",
        content: "https://megacitytoursandtravels.com/og-image.jpg",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/outstation-family/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://megacitytravells.in/outstation-family/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ldJson),
      },
    ],
  }),
  component: OutstationFamilyPage,
});

type VehicleCard = {
  name: string;
  capacity: string;
  tags: string[];
  use: string;
  img: string;
};

const vehicles: VehicleCard[] = [
  {
    name: "Tempo Traveller",
    capacity: "12 & 16 Seater",
    tags: ["AC", "Push-back seats", "Luggage space"],
    use: "Best for families of 8–14",
    img: imgTempo,
  },
  {
    name: "Mini Bus",
    capacity: "22 Seater",
    tags: ["AC", "Comfortable", "Group friendly"],
    use: "Best for joint family trips",
    img: imgMiniBus,
  },
  {
    name: "Standard Bus",
    capacity: "28 / 40 / 50 Seater",
    tags: ["AC", "Large luggage", "Multi-row"],
    use: "Best for weddings & large groups",
    img: imgStandardBus,
  },
  {
    name: "Urbania Luxury Van",
    capacity: "12 Seater",
    tags: ["Premium", "Captain seats", "Plush interior"],
    use: "Best for premium family travel",
    img: imgUrbania,
  },
];

type RouteCard = { from: string; to: string; note: string; img?: string };

const routes: RouteCard[] = [
  {
    from: "Hyderabad",
    to: "Goa",
    note: "Beach holidays, 10–12 hr drive",
    // Free-stock destination photo (Unsplash) — Goa beach
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=70&fm=webp&auto=format&fit=crop",
  },
  {
    from: "Hyderabad",
    to: "Tirupati",
    note: "Pilgrimage trips, 6–8 hr drive",
    img: routeTirupati,
  },
  {
    from: "Hyderabad",
    to: "Kerala",
    note: "Backwater family holidays.",
    // Free-stock destination photo (Unsplash) — Kerala backwaters / houseboat
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=70&fm=webp&auto=format&fit=crop",
  },
  {
    from: "Hyderabad",
    to: "Coorg",
    note: "Hill station family getaway.",
    // Free-stock destination photo (Unsplash) — misty Western Ghats hills
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=70&fm=webp&auto=format&fit=crop",
  },
  {
    from: "Hyderabad",
    to: "Pondicherry",
    note: "Beach & heritage tours.",
    img: routePondicherry,
  },
  {
    from: "Hyderabad",
    to: "Vijayawada",
    note: "Short trips & day visits.",
    img: routeVijayawada,
  },
];

const whyUs = [
  {
    icon: RouteIcon,
    title: "Two Decades of Experience",
    body: "Two decades of running family trips from Hyderabad means we know the routes, the rest stops, and what families need.",
  },
  {
    icon: Bus,
    title: "Wide Vehicle Choice",
    body: "25+ vehicles across 4 types means we have the right size and comfort level for your group.",
  },
  {
    icon: UserCheck,
    title: "Trained & Verified Drivers",
    body: "Our drivers know the outstation routes well and speak Telugu, Hindi, and English.",
  },
  {
    icon: Snowflake,
    title: "AC & Non-AC Options",
    body: "Choose what suits your budget and weather preference.",
  },
  {
    icon: FileText,
    title: "GST Bill Included",
    body: "Get a proper GST invoice for every trip — useful for corporate or reimbursement claims.",
  },
  {
    icon: Clock,
    title: "Same-Day Quote Response",
    body: "WhatsApp us anytime between 6 AM and 9 PM. We respond fast.",
  },
];


const faqs = [
  {
    q: "What types of vehicles do you offer?",
    a: "We have 25+ vehicles including Tempo Travellers (12 and 16 seater), Mini Buses (22 seater), Standard Buses (28, 40 and 50 seater), and Urbania Luxury Vans (12 seater). Most vehicles come with AC; non-AC options are available on request.",
  },
  {
    q: "Is the driver included in the booking?",
    a: "Yes. Every booking includes an experienced driver who knows the outstation route.",
  },
  {
    q: "How is the price calculated?",
    a: "Pricing depends on the vehicle type, distance, number of days, and destination. Some routes are quoted per-kilometre and some as fixed packages. Toll, parking, and driver allowance are charged separately as applicable. WhatsApp us with your trip details for an exact quote.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2–3 days in advance for outstation trips, and earlier during peak seasons (holidays, long weekends, festival weeks).",
  },
  {
    q: "Do you provide AC vehicles?",
    a: "Yes. Most of our fleet is AC. Non-AC options are available if you prefer.",
  },
  {
    q: "What languages do your drivers speak?",
    a: "Our drivers speak Telugu, Hindi, and English.",
  },
  {
    q: "Will I get a GST invoice?",
    a: "Yes. We provide a proper GST invoice for every booking — useful for corporate trips and reimbursements.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Please contact us directly to discuss cancellations. We try to be flexible with families based on the situation and the notice period.",
  },
  {
    q: "Do you operate beyond Hyderabad?",
    a: "We're based in Hyderabad and run outstation trips across South India and beyond — Goa, Kerala, Tamil Nadu, Karnataka, and more.",
  },
  {
    q: "How do I confirm a booking?",
    a: "Once you accept the quote, a small advance amount confirms the booking. We share driver and vehicle details before the trip.",
  },
];

// WhatsApp brand green — kept verbatim per requirements for CTA recognition.
const WHATSAPP_GREEN = "#25D366";

function WhatsAppBtn({
  className = "",
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      className={className}
      style={{ backgroundColor: WHATSAPP_GREEN, ...style }}
    >
      {children}
    </a>
  );
}

function PhoneBtn({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={TEL_URL} data-cta="phone" className={className}>
      {children}
    </a>
  );
}

function OutstationFamilyPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0 font-sans">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Megacity Tours & Travels logo"
              width={36}
              height={36}
              decoding="async"
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-base font-bold text-primary sm:text-lg">
              Megacity Tours & Travels
            </span>
          </a>
          <a
            href={TEL_URL}
            data-cta="phone"
            aria-label="Call 99499 49993"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-4"
            style={{ backgroundColor: "#D4A843" }}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">99499 49993</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-background mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="font-display text-3xl font-bold leading-tight text-primary md:text-5xl text-balance">
              Family Outstation Trips from Hyderabad
            </h1>
            <p className="mt-4 text-base leading-relaxed text-foreground md:text-lg">
              Goa, Kerala, Tirupati, Coorg & more. AC Tempo Travellers, Mini Buses and Luxury Vans
              for 12 to 50 passengers. 20+ years of trusted family travel from Hyderabad.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppBtn
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-base font-semibold text-white transition hover:opacity-95"
                {...{ style: { backgroundColor: WHATSAPP_GREEN } as React.CSSProperties }}
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp for Free Quote
              </WhatsAppBtn>
              <PhoneBtn className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-5 py-3.5 text-base font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
                <Phone className="h-5 w-5" />
                Call 99499 49993
              </PhoneBtn>
            </div>
          </div>
          <div>
            <img
              src={heroImg}
              alt="Megacity Tours Urbania luxury van — outstation family travel from Hyderabad"
              width={1000}
              height={700}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-64 w-full rounded-xl object-cover shadow-soft md:h-96"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-background mx-auto max-w-6xl px-4 pb-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { icon: RouteIcon, label: "20+ Years in Business" },
            { icon: Bus, label: "25+ Vehicle Fleet" },
            { icon: ShieldCheck, label: "Verified Drivers" },
            { icon: FileText, label: "GST Billing Available" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <t.icon className="h-7 w-7 shrink-0 text-accent" />
              <span className="text-sm font-semibold text-primary md:text-base">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicles */}
      <section id="vehicles" className="bg-background mx-auto max-w-6xl px-4 py-12 md:py-20">
        <h2 className="font-display text-center text-3xl font-bold text-primary md:text-4xl">
          Choose the Right Vehicle for Your Family
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          From compact 12-seater Tempo Travellers to spacious 50-seater buses.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:shadow-soft"
            >
              <img
                src={v.img}
                alt={v.name}
                width={400}
                height={250}
                loading="lazy"
                decoding="async"
                className="h-36 w-full object-cover md:h-44"
              />
              <div className="p-4">
                <h3 className="font-display font-semibold text-primary">
                  {v.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {v.capacity}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  {v.use}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <WhatsAppBtn
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white"
            {...{ style: { backgroundColor: WHATSAPP_GREEN } as React.CSSProperties }}
          >
            <FaWhatsapp className="h-5 w-5" />
            Get Quote on WhatsApp
          </WhatsAppBtn>
        </div>
      </section>

      {/* Routes */}
      <section id="routes" className="bg-secondary/40 px-4 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-primary md:text-4xl">
            Popular Outstation Routes from Hyderabad
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            We cover all major South Indian destinations and beyond.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {routes.map((r) => (
              <div
                key={r.to}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-card transition hover:shadow-soft"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-secondary/40">
                  {r.img && (
                    <img
                      src={r.img}
                      alt={`${r.to} outstation destination from Hyderabad`}
                      width={400}
                      height={250}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-primary">
                      {r.from} → {r.to}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                    {r.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Don't see your destination? We cover most South Indian routes — message us.
            </p>
            <WhatsAppBtn
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white"
              {...{ style: { backgroundColor: WHATSAPP_GREEN } as React.CSSProperties }}
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Us
            </WhatsAppBtn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-background mx-auto max-w-6xl px-4 py-12 md:py-20">
        <h2 className="font-display text-center text-3xl font-bold text-primary md:text-4xl">
          Booking Your Trip is Simple
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Message or Call Us",
              body: "Tell us your travel dates, destination, and number of passengers.",
            },
            {
              title: "Receive Your Quote",
              body: "We'll share a transparent quote with vehicle options and inclusions, typically within 10 minutes.",
            },
            {
              title: "Confirm & Travel",
              body: "Pay an advance to confirm. Driver arrives on time. Enjoy your trip.",
            },
          ].map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-card"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {i + 1}
              </div>
              <h3 className="font-display mt-4 font-semibold text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary/40 px-4 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-primary md:text-4xl">
            Why Hyderabad Families Trust Megacity
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-border bg-background p-6 shadow-card"
              >
                <w.icon className="h-7 w-7 text-accent" />
                <h3 className="font-display mt-3 font-semibold text-primary">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background mx-auto max-w-6xl px-4 py-12 md:py-20">
        <h2 className="font-display text-center text-3xl font-bold text-primary md:text-4xl">
          What Our Customers Say
        </h2>
        <div className="mt-10 max-w-xl mx-auto rounded-xl border border-border bg-card p-6 shadow-card text-center">
          <p className="text-sm text-foreground">
            Reviews are being collected — see live reviews on our{" "}
            <a
              href="#" // TODO: Replace with Google Business Profile URL when available
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Google Business Profile
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/40 px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-center text-3xl font-bold text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="rounded-xl border border-border bg-background shadow-card"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-3 p-4 text-left"
                  >
                    <span className="font-display text-sm font-semibold text-primary md:text-base">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open && (
                    <div className="px-4 pb-4 text-sm leading-relaxed text-foreground">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-warm-gradient px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Plan Your Family Trip?
          </h2>
          <p className="mt-3 text-primary-foreground/90">
            WhatsApp us now for a free quote. We typically respond within 10 minutes between 6 AM
            and 9 PM.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppBtn
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white"
              {...{ style: { backgroundColor: WHATSAPP_GREEN } as React.CSSProperties }}
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Us
            </WhatsAppBtn>
            <PhoneBtn className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground px-6 py-3.5 text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5" />
              Call 99499 49993
            </PhoneBtn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary px-4 py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold text-primary-foreground">
              Megacity Tours & Travels
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Trusted family outstation travel from Hyderabad.
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">Open 6 AM – 9 PM, all days</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={TEL_URL} data-cta="phone" className="hover:underline">
                  📞 99499 49993
                </a>
              </li>
              <li>
                <a
                  href={WA_URL}
                  data-cta="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  💬 +91 89199 00181
                </a>
              </li>
              <li className="text-primary-foreground/80">
                Sri Sai Residency, Shop No 3, Beside Sri Chaitanya High School, Boduppal Main Road,
                Hyderabad
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#vehicles" className="hover:underline">Our Vehicles</a></li>
              <li><a href="#routes" className="hover:underline">Popular Routes</a></li>
              <li><a href="#how" className="hover:underline">How It Works</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/70">
          <p>© 2026 Megacity Tours & Travels · GSTIN: 36AAYFM6402CIZ7</p>
          <p className="mt-2">
            By messaging or calling us, you consent to our team contacting you about your travel
            enquiry.
          </p>
        </div>
      </footer>

      {/* Sticky mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden">
        <WhatsAppBtn
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
          {...{ style: { backgroundColor: WHATSAPP_GREEN } as React.CSSProperties }}
        >
          <FaWhatsapp className="h-5 w-5" />
          WhatsApp
        </WhatsAppBtn>
        <PhoneBtn className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground">
          <Phone className="h-5 w-5" />
          Call
        </PhoneBtn>
      </div>
    </div>
  );
}
