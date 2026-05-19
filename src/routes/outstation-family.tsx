import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Bus,
  ShieldCheck,
  FileText,
  Route as RouteIcon,
  Snowflake,
  Clock,
  UserCheck,
  Star,
  ChevronDown,
  MapPin,
} from "lucide-react";

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
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
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

const vehicles = [
  {
    name: "Tempo Traveller",
    capacity: "12 & 16 Seater",
    tags: ["AC", "Push-back seats", "Luggage space"],
    use: "Best for families of 8–14",
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Mini Bus",
    capacity: "22 Seater",
    tags: ["AC", "Comfortable", "Group friendly"],
    use: "Best for joint family trips",
    img: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Standard Bus",
    capacity: "28 / 40 / 50 Seater",
    tags: ["AC", "Large luggage", "Multi-row"],
    use: "Best for weddings & large groups",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Urbania Luxury Van",
    capacity: "12 Seater",
    tags: ["Premium", "Captain seats", "Plush interior"],
    use: "Best for premium family travel",
    img: "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?auto=format&fit=crop&w=800&q=70",
  },
];

const routes = [
  { from: "Hyderabad", to: "Goa", note: "Beach holidays, 10–12 hr drive" },
  { from: "Hyderabad", to: "Tirupati", note: "Pilgrimage trips, 6–8 hr drive" },
  { from: "Hyderabad", to: "Kerala", note: "Backwater family holidays" },
  { from: "Hyderabad", to: "Coorg", note: "Hill station family getaway" },
  { from: "Hyderabad", to: "Pondicherry", note: "Beach & heritage tours" },
  { from: "Hyderabad", to: "Vijayawada", note: "Short trips & day visits" },
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

const testimonials = [
  {
    quote: "Testimonial coming soon — we're collecting recent customer reviews.",
    name: "— Verified Customer, Hyderabad",
    trip: "Family trip · 2026",
  },
  {
    quote: "Testimonial coming soon — we're collecting recent customer reviews.",
    name: "— Verified Customer, Hyderabad",
    trip: "Family trip · 2026",
  },
  {
    quote: "Testimonial coming soon — we're collecting recent customer reviews.",
    name: "— Verified Customer, Hyderabad",
    trip: "Family trip · 2026",
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

const fontStack = {
  fontFamily: "'Inter', system-ui, sans-serif",
} as const;
const serif = {
  fontFamily: "'Playfair Display', Georgia, serif",
} as const;

function WhatsAppBtn({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      className={className}
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
    <div
      style={{ ...fontStack, backgroundColor: "#FAF7F2", color: "#1F2937" }}
      className="min-h-screen pb-24 md:pb-0"
    >
      {/* Top bar */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: "#FAF7F2", borderColor: "rgba(15,61,92,0.1)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-md font-bold text-white"
              style={{ backgroundColor: "#0F3D5C" }}
            >
              M
            </div>
            <span
              style={{ ...serif, color: "#0F3D5C" }}
              className="text-base font-bold sm:text-lg"
            >
              Megacity Tours & Travels
            </span>
          </div>
          <PhoneBtn
            className="hidden items-center gap-2 text-sm font-semibold sm:flex"
          >
            <Phone className="h-4 w-4" style={{ color: "#0F3D5C" }} />
            <span style={{ color: "#0F3D5C" }}>99499 49993</span>
          </PhoneBtn>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1
              style={{ ...serif, color: "#0F3D5C" }}
              className="text-3xl font-bold leading-tight md:text-5xl"
            >
              Family Outstation Trips from Hyderabad
            </h1>
            <p className="mt-4 text-base leading-relaxed md:text-lg" style={{ color: "#1F2937" }}>
              Goa, Kerala, Tirupati, Coorg & more. AC Tempo Travellers, Mini Buses and Luxury Vans
              for 12 to 50 passengers. 20+ years of trusted family travel from Hyderabad.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppBtn
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
                {...{ style: { backgroundColor: "#F4A623" } as any }}
              >
                <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} fill="#25D366" />
                WhatsApp for Free Quote
              </WhatsAppBtn>
              <PhoneBtn
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-5 py-3.5 text-base font-semibold transition hover:bg-white"
                {...{ style: { borderColor: "#0F3D5C", color: "#0F3D5C" } as any }}
              >
                <Phone className="h-5 w-5" />
                Call 99499 49993
              </PhoneBtn>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=70"
              alt="Family outstation travel from Hyderabad"
              width={1000}
              height={700}
              loading="eager"
              className="h-64 w-full rounded-xl object-cover shadow-md md:h-96"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { icon: RouteIcon, label: "20+ Years in Business" },
            { icon: Bus, label: "25+ Vehicle Fleet" },
            { icon: ShieldCheck, label: "Verified Drivers" },
            { icon: FileText, label: "GST Billing Available" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <t.icon className="h-7 w-7 shrink-0" style={{ color: "#F4A623" }} />
              <span className="text-sm font-semibold md:text-base" style={{ color: "#0F3D5C" }}>
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicles */}
      <section id="vehicles" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <h2
          style={{ ...serif, color: "#0F3D5C" }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Choose the Right Vehicle for Your Family
        </h2>
        <p className="mt-3 text-center" style={{ color: "#6B7280" }}>
          From compact 12-seater Tempo Travellers to spacious 50-seater buses.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              <img
                src={v.img}
                alt={v.name}
                width={400}
                height={250}
                loading="lazy"
                className="h-36 w-full object-cover md:h-44"
              />
              <div className="p-4">
                <h3 className="font-semibold" style={{ color: "#0F3D5C" }}>
                  {v.name}
                </h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "#F4A623" }}>
                  {v.capacity}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2 py-0.5 text-[11px]"
                      style={{ backgroundColor: "#FAF7F2", color: "#6B7280" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs" style={{ color: "#6B7280" }}>
                  {v.use}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <WhatsAppBtn
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-sm"
            {...{ style: { backgroundColor: "#F4A623" } as any }}
          >
            <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} fill="#25D366" />
            Get Quote on WhatsApp
          </WhatsAppBtn>
        </div>
      </section>

      {/* Routes */}
      <section id="routes" className="px-4 py-12 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-6xl">
          <h2
            style={{ ...serif, color: "#0F3D5C" }}
            className="text-center text-3xl font-bold md:text-4xl"
          >
            Popular Outstation Routes from Hyderabad
          </h2>
          <p className="mt-3 text-center" style={{ color: "#6B7280" }}>
            We cover all major South Indian destinations and beyond.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {routes.map((r) => (
              <div
                key={r.to}
                className="rounded-xl p-5 transition hover:shadow-md"
                style={{ backgroundColor: "#FAF7F2" }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" style={{ color: "#F4A623" }} />
                  <span className="text-sm font-semibold" style={{ color: "#0F3D5C" }}>
                    {r.from} → {r.to}
                  </span>
                </div>
                <p className="mt-2 text-xs md:text-sm" style={{ color: "#6B7280" }}>
                  {r.note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-4 text-sm" style={{ color: "#6B7280" }}>
              Don't see your destination? We cover most South Indian routes — message us.
            </p>
            <WhatsAppBtn
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white"
              {...{ style: { backgroundColor: "#F4A623" } as any }}
            >
              <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} fill="#25D366" />
              WhatsApp Us
            </WhatsAppBtn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <h2
          style={{ ...serif, color: "#0F3D5C" }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
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
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: "#F4A623" }}
              >
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold" style={{ color: "#0F3D5C" }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "#6B7280" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-12 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-6xl">
          <h2
            style={{ ...serif, color: "#0F3D5C" }}
            className="text-center text-3xl font-bold md:text-4xl"
          >
            Why Hyderabad Families Trust Megacity
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#FAF7F2" }}
              >
                <w.icon className="h-7 w-7" style={{ color: "#F4A623" }} />
                <h3 className="mt-3 font-semibold" style={{ color: "#0F3D5C" }}>
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <h2
          style={{ ...serif, color: "#0F3D5C" }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          What Our Customers Say
        </h2>
        <p className="mt-3 text-center text-sm" style={{ color: "#6B7280" }}>
          Reviews are being collected from our recent customers. Check our Google Business Profile
          for live reviews.
        </p>
        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[80%] shrink-0 rounded-xl bg-white p-6 shadow-sm md:min-w-0"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4" fill="#F4A623" stroke="#F4A623" />
                ))}
              </div>
              <p className="mt-3 text-sm italic" style={{ color: "#1F2937" }}>
                "{t.quote}"
              </p>
              <p className="mt-4 text-sm font-semibold" style={{ color: "#0F3D5C" }}>
                {t.name}
              </p>
              <p className="text-xs" style={{ color: "#6B7280" }}>
                {t.trip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-12 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-3xl">
          <h2
            style={{ ...serif, color: "#0F3D5C" }}
            className="text-center text-3xl font-bold md:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="rounded-xl border"
                  style={{ borderColor: "rgba(15,61,92,0.1)", backgroundColor: "#FAF7F2" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-3 p-4 text-left"
                  >
                    <span className="text-sm font-semibold md:text-base" style={{ color: "#0F3D5C" }}>
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                      style={{ color: "#F4A623" }}
                    />
                  </button>
                  {open && (
                    <div className="px-4 pb-4 text-sm leading-relaxed" style={{ color: "#1F2937" }}>
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
      <section className="px-4 py-14 md:py-20" style={{ backgroundColor: "#F4A623" }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={serif} className="text-3xl font-bold text-white md:text-4xl">
            Ready to Plan Your Family Trip?
          </h2>
          <p className="mt-3 text-white/95">
            WhatsApp us now for a free quote. We typically respond within 10 minutes between 6 AM
            and 9 PM.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppBtn className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold shadow-sm"
              {...{ style: { color: "#F4A623" } as any }}
            >
              <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} fill="#25D366" />
              WhatsApp Us
            </WhatsAppBtn>
            <PhoneBtn className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3.5 text-base font-semibold text-white">
              <Phone className="h-5 w-5" />
              Call 99499 49993
            </PhoneBtn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0F3D5C" }} className="px-4 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <h3 style={serif} className="text-lg font-bold">
              Megacity Tours & Travels
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Trusted family outstation travel from Hyderabad.
            </p>
            <p className="mt-2 text-sm text-white/80">Open 6 AM – 9 PM, all days</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
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
              <li className="text-white/80">
                Sri Sai Residency, Shop No 3, Beside Sri Chaitanya High School, Boduppal Main Road,
                Hyderabad
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#vehicles" className="hover:underline">
                  Our Vehicles
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:underline">
                  Popular Routes
                </a>
              </li>
              <li>
                <a href="#how" className="hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6 text-center text-xs text-white/70">
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
          {...{ style: { backgroundColor: "#25D366" } as any }}
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </WhatsAppBtn>
        <PhoneBtn
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
          {...{ style: { backgroundColor: "#F4A623" } as any }}
        >
          <Phone className="h-5 w-5" />
          Call
        </PhoneBtn>
      </div>
    </div>
  );
}
