import { MapPin } from "lucide-react";

const areas = [
  "Hitech City",
  "Gachibowli",
  "Madhapur",
  "Patancheru",
  "Cherlapally",
  "Jeedimetla",
  "Uppal",
  "Adibatla",
];

export function AreasServed() {
  return (
    <section className="py-14 md:py-20 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
        <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
          Travel Support Across Hyderabad Business Areas
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-balance leading-tight">
          Serving Hyderabad, Telangana, and Nearby Business Areas
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          From Hitech City, Gachibowli, and Madhapur to Patancheru, Cherlapally, Jeedimetla, Uppal,
          and Adibatla, Mega City Tours &amp; Travells helps customers arrange cars, Urbania, tempo
          travellers, and buses for local, corporate, group, and outstation travel needs.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {areas.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/85 shadow-card"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
