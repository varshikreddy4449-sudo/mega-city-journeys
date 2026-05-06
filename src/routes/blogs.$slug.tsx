import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LogoWatermark } from "@/components/LogoWatermark";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getBlogBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Blog | Mega City Tours & Travells" }] };
    const p = loaderData.post;
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDescription },
        { name: "keywords", content: p.keywords.join(", ") },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "article" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-primary">Blog not found</h1>
      <Link to="/blogs" className="mt-4 inline-block text-accent font-semibold">
        ← Back to all blogs
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = post.related
    .map((s) => blogs.find((b) => b.slug === s))
    .filter(Boolean) as typeof blogs;

  return (
    <>
      <section className="bg-warm-gradient text-primary-foreground py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-brand-cream/85 hover:text-white text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> All Blogs
          </Link>
          <span className="mt-4 inline-block rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
            {post.h1}
          </h1>
          <p className="mt-4 text-brand-cream/85 text-base md:text-lg leading-relaxed">
            {post.summary}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-16">
        <LogoWatermark position="right" />
        <div className="relative mx-auto max-w-3xl px-4 md:px-6">
          <article className="rounded-2xl bg-white border border-border p-6 md:p-10" style={{ boxShadow: "0 12px 40px -16px rgba(13,92,99,0.18)" }}>
            <p className="text-base md:text-lg text-foreground leading-relaxed">{post.intro}</p>

            {post.sections.map((s, i) => (
              <div key={i} className="mt-8">
                <h2 className="font-display text-xl md:text-2xl font-bold text-primary">
                  {s.heading}
                </h2>
                {Array.isArray(s.body) ? (
                  <ul className="mt-3 space-y-2">
                    {s.body.map((item, j) => (
                      <li key={j} className="flex gap-2 text-foreground leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-foreground leading-relaxed">{s.body}</p>
                )}
              </div>
            ))}

            {post.recommendedVehicles.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-xl md:text-2xl font-bold text-primary">
                  Recommended vehicles
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.recommendedVehicles.map((v) => (
                    <Link
                      key={v}
                      to="/fleet"
                      className="rounded-full bg-secondary text-foreground px-3 py-1.5 text-sm font-semibold hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {v}
                    </Link>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Pricing on request based on route and dates.
                </p>
              </div>
            )}

            {post.faqs.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-xl md:text-2xl font-bold text-primary">
                  Frequently asked
                </h2>
                <div className="mt-4 space-y-4">
                  {post.faqs.map((f, i) => (
                    <div key={i} className="rounded-xl bg-secondary/50 p-4">
                      <div className="font-semibold text-primary">{f.q}</div>
                      <div className="mt-1 text-sm text-foreground/90">{f.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div
              className="mt-10 rounded-2xl p-5 md:p-6"
              style={{ backgroundColor: "#EAF3F4" }}
            >
              <h3 className="font-display text-lg md:text-xl font-bold text-primary">
                Ready to plan your trip?
              </h3>
              <p className="mt-1 text-sm text-foreground/90">
                Share your trip details on WhatsApp and our team will share suitable vehicle
                options.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(
                    `Hi Mega City, I read your guide "${post.title}" and would like a quote.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <WhatsAppIcon className="h-4 w-4" /> Get Quote on WhatsApp
                </a>
                <a
                  href={`tel:+91${site.phones[0]}`}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold border-2 border-primary text-primary"
                >
                  <Phone className="h-4 w-4" /> Call {site.phones[0]}
                </a>
              </div>
            </div>

            {/* Internal links */}
            <div className="mt-8 grid gap-2 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Explore more
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link to="/fleet" className="text-accent font-semibold hover:underline">
                  Fleet
                </Link>
                <Link to="/services" className="text-accent font-semibold hover:underline">
                  Services
                </Link>
                <Link to="/packages" className="text-accent font-semibold hover:underline">
                  Packages
                </Link>
                <Link to="/gallery" className="text-accent font-semibold hover:underline">
                  Gallery
                </Link>
                <Link to="/contact" className="text-accent font-semibold hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </article>

          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-primary">Related guides</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/blogs/$slug"
                    params={{ slug: r.slug }}
                    className="block rounded-xl bg-white border border-border p-4 hover:border-accent transition-colors"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {r.category}
                    </span>
                    <div className="mt-1 font-display font-bold text-primary leading-snug">
                      {r.title}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary">
                      Read <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
