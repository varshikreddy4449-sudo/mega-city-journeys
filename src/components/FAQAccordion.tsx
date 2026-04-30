import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FAQ } from "@/data/faqs";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {items.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`item-${i}`}
          className="rounded-xl border border-border bg-card px-5 shadow-card data-[state=open]:shadow-soft"
        >
          <AccordionTrigger className="text-left font-display text-base md:text-lg text-primary hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
