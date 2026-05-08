import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LogoWatermark } from "@/components/LogoWatermark";
import { blogs } from "@/data/blogs";
import { whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      {
        title: "Blogs | Travel Guides & Vehicle Booking Tips from Hyderabad",
      },
      {
        name: "description",
        content:
          "Travel guides and vehicle booking tips for group travel, school and college trips, weddings, pilgrimages, corporate travel and outstation trips from Hyderabad.",
      },
      {
        property: "og:title",
        content: "Travel Guides from Hyderabad | Mega City Tours & Travells",
      },
      {
        property: "og:description",
        content: "Vehicle booking tips and travel guides for trips from Hyderabad.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Travel Guides from Hyderabad | Mega City Tours & Travells" },
      { name: "twitter:description", content: "Vehicle booking tips and travel guides for trips from Hyderabad." },
    ],
  }),
  component: BlogsIndex,
});

function BlogsIndex() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogs.map((b) => b.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const list = active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <>
      <section className="bg-warm-gradient text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <span className="inline-block rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Blogs
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Travel Guides &amp; Vehicle Booking Tips from Hyderabad
          </h1>
          <p className="mt-3 text-brand-cream/85 max-w-2xl mx-auto">
            Helpful answers for planning group travel, outstation trips, school travel, corporate
            movement, weddings, pilgrimages, and vehicle rentals from Hyderabad.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-16">
        <LogoWatermark position="center" />
        <div className="relative mx-auto max-w-5xl px-4 md:px-6">
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

          <div className="grid gap-5 md:grid-cols-2">
            {list.map((b) => (
              <article
                key={b.slug}
                className="group rounded-2xl bg-white border border-border p-6 transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 10px 30px -16px rgba(13,92,99,0.18)" }}
              >
                <span className="inline-block rounded-full bg-accent/10 text-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">
                  {b.category}
                </span>
                <h2 className="mt-3 font-display text-xl md:text-2xl font-bold text-primary leading-snug">
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: b.slug }}
                    className="hover:text-accent transition-colors"
                  >
                    {b.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: b.slug }}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent transition-colors"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={whatsappLink(
                      `Hi Mega City, I read your guide "${b.title}" and would like a quote.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    Get Quote
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
