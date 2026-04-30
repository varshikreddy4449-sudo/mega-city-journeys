import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export function CTASection({
  title = "Planning a Group Trip?",
  text = "Share your destination, travel date, pickup location, group size, and vehicle preference. Our team will help you choose the right travel option.",
}: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-rust-gradient">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-cream blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-brown blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 text-center text-primary-foreground">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
          {title}
        </h2>
        <p className="mt-4 text-base md:text-lg text-brand-cream/90 max-w-2xl mx-auto">{text}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cream text-brand-brown px-7 py-3.5 font-semibold shadow-soft hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="h-5 w-5" />
            Get Quote on WhatsApp
          </a>
          <a
            href={`tel:+91${site.phones[0]}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-brown text-primary-foreground px-7 py-3.5 font-semibold shadow-soft hover:scale-[1.02] transition-transform"
          >
            <Phone className="h-5 w-5" />
            Call {site.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
