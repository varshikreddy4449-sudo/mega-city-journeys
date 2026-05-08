import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Phone, MessageCircleQuestion } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { LogoWatermark } from "@/components/LogoWatermark";
import { whatsappLink, site } from "@/data/site";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Vehicle Rental & Group Travel Bookings Hyderabad | Mega City" },
      {
        name: "description",
        content:
          "Answers about bus rental, tempo traveller and Urbania bookings, pricing, vehicles, routes, payments and group travel from Hyderabad with Mega City Tours & Travells.",
      },
      { property: "og:title", content: "Travel Booking FAQs | Mega City Tours & Travells" },
      {
        property: "og:description",
        content: "Booking, pricing, vehicles, routes, payments, group travel — all answered.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Travel Booking FAQs | Mega City Tours & Travells" },
      {
        name: "twitter:description",
        content: "Booking, pricing, vehicles, routes, payments, group travel — all answered.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(faqs.map((f) => f.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const list = active === "All" ? faqs : faqs.filter((f) => f.category === active);

  return (
    <>
      <section className="bg-warm-gradient text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <span className="inline-block rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Frequently Asked
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-brand-cream/85 max-w-2xl mx-auto">
            Everything you need to know about booking, pricing, vehicles, and travel with Mega City
            Tours &amp; Travells.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-16">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-4xl px-4 md:px-6">
          {/* Filter chips — horizontally scrollable on mobile */}
          <div className="-mx-4 md:mx-0 mb-8">
            <div className="flex gap-2 overflow-x-auto px-4 md:flex-wrap md:justify-center md:px-0 scrollbar-hide">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    active === c
                      ? "bg-warm-gradient text-primary-foreground shadow-card"
                      : "bg-card text-foreground border border-border hover:bg-secondary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <FAQAccordion items={list} />

          {/* Still have questions */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-secondary to-card border border-border p-6 md:p-10 text-center shadow-card">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <MessageCircleQuestion className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-primary">
              Still have questions?
            </h3>
            <p className="mt-2 text-foreground/75 max-w-xl mx-auto">
              Get a quick answer on WhatsApp or call us directly — our team is happy to help.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-warm-gradient text-primary-foreground px-7 py-3 text-sm font-semibold shadow-card hover-lift"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
              </a>
              <a
                href={`tel:+91${site.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3 text-sm font-semibold shadow-card hover-lift"
              >
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
