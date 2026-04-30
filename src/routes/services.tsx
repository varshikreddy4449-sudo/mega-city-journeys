import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import { whatsappLink } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Travel Services in Hyderabad | Group, Corporate, School & Outstation Trips" },
      {
        name: "description",
        content:
          "Group travel, per KM trips, local sightseeing, outstation tours, corporate travel, school and college trips, pilgrimage, and wedding transport from Hyderabad.",
      },
      { property: "og:title", content: "Travel Services in Hyderabad" },
      { property: "og:description", content: "Group, corporate, school, pilgrimage and outstation travel from Hyderabad." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-warm-gradient text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <span className="inline-block rounded-full bg-brand-cream/15 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Services
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight text-balance">
            Travel services from Hyderabad
          </h1>
          <p className="mt-5 text-base md:text-lg text-brand-cream/85 max-w-2xl mx-auto">
            From short local trips to large group travel, we help you plan comfortable journeys based
            on destination, group size, and budget.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-6">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-card scroll-mt-24"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rust-gradient text-primary-foreground shadow-card">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">{s.title}</h2>
                <p className="mt-2 text-foreground/85 leading-relaxed">{s.short}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-secondary/60 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">Best for</div>
                    <div className="mt-1 text-sm">{s.bestFor}</div>
                  </div>
                  <div className="rounded-xl bg-secondary/60 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">Share with us</div>
                    <div className="mt-1 text-sm">{s.needs}</div>
                  </div>
                </div>
              </div>
              <div className="md:self-center">
                <a
                  href={whatsappLink(`Hi Mega City Tours & Travells, I would like to enquire about ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-warm-gradient text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-card whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4" /> Enquire Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
