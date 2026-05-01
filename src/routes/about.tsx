import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { site, whatsappLink } from "@/data/site";
import heroImg from "@/assets/hero-travel.jpg";
import brandedBus from "@/assets/megacity-branded-bus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mega City Tours & Travells | Hyderabad Travel Agency" },
      {
        name: "description",
        content:
          "Mega City Tours & Travells is a Hyderabad-based travel agency offering group travel, per KM trips, and outstation journeys with an owned fleet of 4 to 50 seater vehicles and experienced drivers.",
      },
      { property: "og:title", content: "About Mega City Tours & Travells" },
      { property: "og:description", content: "Hyderabad-based travel partner with owned fleet and experienced drivers." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28">
          <span className="inline-block rounded-full bg-brand-cream/15 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-cream uppercase tracking-wider">
            About Us
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-brand-cream leading-tight max-w-3xl text-balance">
            A Hyderabad travel partner you can rely on
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-brand-cream/85 leading-relaxed">
            Mega City Tours & Travells is built around comfortable, on-time, and budget-friendly
            group travel for families, schools, colleges, companies, and outstation travellers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionHeader
            align="left"
            eyebrow="Our Story"
            title="Trusted travel from the heart of Hyderabad"
            subtitle={`Founded by ${site.owner}, Mega City Tours & Travells is a locally rooted travel company serving Hyderabad and the surrounding regions. We focus on what matters for group travel — clean vehicles, on-time pickup, experienced drivers, and clear communication.`}
          />
          <div className="prose prose-stone max-w-none text-foreground/90 leading-relaxed text-base md:text-lg">
            <p>
              Whether you are planning a family weekend, a temple yatra, a school picnic, a
              corporate offsite, or a wedding logistics plan, our team helps you choose the right
              vehicle and route based on your group size, dates, and budget.
            </p>
            <p>
              We own and operate our fleet — from 4-seater Brezza and Innova Crysta to 50-seater
              buses — and our drivers carry 20 to 30 years of road experience. Combined with simple
              WhatsApp-based booking, this lets us serve everything from short local trips to
              multi-day outstation journeys.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND PROOF BANNER */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-soft border border-border/60" style={{ aspectRatio: "3 / 4" }}>
              <img
                src={brandedBus}
                alt="Mega City Tours and Travells branded bus in Hyderabad."
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
                loading="lazy"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                Brand You Can Recognise
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-balance">
                Owned, branded, and built around our customers
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                Every vehicle in our fleet carries the Mega City Tours & Travells branding —
                a sign of accountability, ownership, and the same team you spoke to on the phone.
                When our bus arrives at your pickup point, you know exactly who you're travelling with.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Owned & branded fleet",
                  "Direct contact with the owner",
                  "Hyderabad based, locally rooted",
                  "Available 365 days, 24/7",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm md:text-base text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="What We Do" title="Travel support for every kind of group" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Family trips and weekend getaways",
              "School and college excursions",
              "Corporate offsites and team transport",
              "Wedding and event guest transport",
              "Pilgrimage trips across Telangana & nearby states",
              "Outstation per-KM trips, one-way and round-trip",
              "Hyderabad local sightseeing",
              "Custom multi-day group packages",
              "24/7 vehicle availability with drivers",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border/60 shadow-card">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <SectionHeader
            eyebrow="Ready to Travel?"
            title="Tell us about your trip"
            subtitle="Share your pickup location, destination, dates, and group size on WhatsApp — we'll respond with vehicle and price options."
          />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rust-gradient px-7 py-3.5 font-semibold text-primary-foreground shadow-glow"
          >
            <MessageCircle className="h-5 w-5" /> Get Quote on WhatsApp
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
