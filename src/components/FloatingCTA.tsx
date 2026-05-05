import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { site, whatsappLink } from "@/data/site";

export function FloatingCTA() {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <a
          href={`tel:+91${site.phones[0]}`}
          aria-label="Call us"
          className="flex items-center justify-center text-white transition-transform hover:scale-110"
          style={{
            backgroundColor: "#001F3F",
            width: 56,
            height: 56,
            borderRadius: "50%",
            boxShadow: "0px 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center text-white transition-transform hover:scale-110"
          style={{
            backgroundColor: "#25D366",
            width: 56,
            height: 56,
            borderRadius: "50%",
            boxShadow: "0px 4px 16px rgba(37,211,102,0.4)",
          }}
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile bottom CTA bar */}
      <div
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white"
        style={{ borderTop: "1px solid #E9E7EB", boxShadow: "0px -2px 8px rgba(0,31,63,0.08)" }}
      >
        <div className="grid grid-cols-2 gap-2 p-3 safe-bottom">
          <a
            href={`tel:+91${site.phones[0]}`}
            className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-white"
            style={{ backgroundColor: "#001F3F", borderRadius: "8px" }}
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-white"
            style={{ backgroundColor: "#25D366", borderRadius: "8px" }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
