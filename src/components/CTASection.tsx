import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export function CTASection({
  title = "Planning a Group Trip?",
  text = "Share your destination, travel date, pickup location, group size, and vehicle preference. Our team will help you choose the right travel option.",
}: { title?: string; text?: string }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #C8602F 0%, #A0522D 55%, #7A3A1F 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-25" aria-hidden>
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-cream blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-tan blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 text-center text-primary-foreground">
        <h2
          className="font-display font-bold text-primary-foreground text-balance"
          style={{ fontSize: "clamp(28px, 5vw, 40px)", lineHeight: 1.15 }}
        >
          {title}
        </h2>
        <p className="mt-5 text-base md:text-lg text-brand-cream/90 max-w-2xl mx-auto">{text}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full text-white font-bold shadow-soft hover:scale-[1.02] transition-transform"
            style={{
              padding: "16px 48px",
              fontSize: "16px",
              backgroundColor: "#25D366",
            }}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp to Quote
          </a>
          <a
            href={`tel:+91${site.phones[0]}`}
            className="inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors hover:bg-white/10"
            style={{
              padding: "14px 46px",
              fontSize: "16px",
              border: "2px solid #FFFFFF",
              color: "#FFFFFF",
              backgroundColor: "transparent",
            }}
          >
            <Phone className="h-5 w-5" />
            Call: +91 {site.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
