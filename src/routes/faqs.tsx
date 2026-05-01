import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Travel Booking FAQs | Mega City Tours & Travells Hyderabad" },
      {
        name: "description",
        content:
          "Answers to common questions about bookings, pricing, vehicles, routes, payments, and group travel from Hyderabad.",
      },
      { property: "og:title", content: "Travel Booking FAQs — Mega City Tours & Travells" },
      {
        property: "og:description",
        content: "Booking, pricing, vehicles, routes, payments, group travel — all answered.",
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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-brand-cream/85 max-w-2xl mx-auto">
            Everything you need to know about booking, pricing, vehicles, and travel with Mega City
            Tours & Travells.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  active === c
                    ? "bg-warm-gradient text-primary-foreground shadow-card"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <FAQAccordion items={list} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
