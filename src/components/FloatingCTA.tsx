import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export function FloatingCTA() {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow transition-transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={`tel:+91${site.phones[0]}`}
          aria-label="Call us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile bottom CTA bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border shadow-soft">
        <div className="grid grid-cols-2 gap-2 p-3 safe-bottom">
          <a
            href={`tel:+91${site.phones[0]}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-3 font-semibold text-sm shadow-card"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp text-whatsapp-foreground py-3 font-semibold text-sm shadow-card"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
