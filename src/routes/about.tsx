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
