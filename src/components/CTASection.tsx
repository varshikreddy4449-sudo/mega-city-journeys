import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export function CTASection({
  title = "Planning a Group Trip?",
  text = "Share your destination, travel date, pickup location, group size, and vehicle preference. Our team will help you choose the right travel option.",
}: { title?: string; text?: string }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FF9832" }}
    >
      <div className="relative mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 text-center">
        <h2
          className="font-display font-bold text-balance"
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            lineHeight: 1.15,
            color: "#FFFFFF",
          }}
        >
          {title}
        </h2>
        <p
          className="mt-5 text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {text}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold text-white transition-transform hover:scale-[1.02]"
            style={{
              backgroundColor: "#001F3F",
              borderRadius: "8px",
              padding: "16px 48px",
              fontSize: "16px",
            }}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp to Quote
          </a>
          <a
            href={`tel:+91${site.phones[0]}`}
            className="inline-flex items-center justify-center gap-2 font-bold transition-colors hover:bg-white/10"
            style={{
              border: "2px solid #FFFFFF",
              color: "#FFFFFF",
              borderRadius: "8px",
              padding: "14px 46px",
              fontSize: "16px",
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
