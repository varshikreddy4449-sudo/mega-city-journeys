import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import logo from "@/assets/logo.webp";

const quickLinks = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Services"],
  ["/packages", "Packages"],
  ["/fleet", "Fleet"],
  ["/gallery", "Gallery"],
  ["/faqs", "FAQs"],
  ["/contact", "Contact"],
] as const;

const serviceLinks = [
  ["/services#group-travel", "Group Travel"],
  ["/services#per-km-travel", "Per KM Trips"],
  ["/services#corporate-travel", "Corporate Travel"],
  ["/services#school-college-trips", "School Trips"],
  ["/services#pilgrimage-trips", "Pilgrimage Trips"],
  ["/services#outstation-trips", "Outstation Trips"],
  ["/services#wedding-event-transport", "Wedding & Event Transport"],
] as const;

export function Footer() {
  return (
    <footer className="text-white pb-24 lg:pb-0" style={{ backgroundColor: "#000613" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div
          className="stagger grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10"
          style={{ columnGap: 40 }}
        >
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Mega City Tours & Travells logo"
                className="object-contain rounded-lg bg-white p-1.5"
                style={{ width: 120, height: "auto" }}
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Hyderabad-based travel partner for group travel, per KM trips, local tours, and
              outstation journeys across Telangana and nearby states.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"
              style={{
                backgroundColor: "#25D366",
                borderRadius: "8px",
                padding: "12px 22px",
              }}
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <div className="reveal">
            <h4 className="font-display text-base mb-4 font-bold" style={{ color: "#FFFFFF" }}>
              Quick Links
            </h4>
            <ul className="space-y-1">
              {quickLinks.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[14px] transition-colors hover:[color:#FF9832]"
                    style={{ color: "rgba(255,255,255,0.65)", lineHeight: "2em" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <h4 className="font-display text-base mb-4 font-bold" style={{ color: "#FFFFFF" }}>
              Services
            </h4>
            <ul className="space-y-1">
              {serviceLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[14px] transition-colors hover:[color:#FF9832]"
                    style={{ color: "rgba(255,255,255,0.65)", lineHeight: "2em" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <h4 className="font-display text-base mb-4 font-bold" style={{ color: "#FFFFFF" }}>
              Contact
            </h4>
            <ul
              className="space-y-3 text-[14px]"
              style={{ color: "rgba(255,255,255,0.75)", lineHeight: "1.7" }}
            >
              <li className="flex gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#FF9832" }} />
                <div>
                  <a href={`tel:+91${site.phones[0]}`} className="block hover:underline">
                    {site.phones[0]}
                  </a>
                  <a href={`tel:+91${site.phones[1]}`} className="block hover:underline">
                    {site.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex gap-2">
                <WhatsAppIcon className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#FF9832" }} />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp: {site.whatsapp}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#FF9832" }} />
                <a href={`mailto:${site.email}`} className="hover:underline break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#FF9832" }} />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#FF9832" }} />
                <span>Open daily, {site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <p>© {new Date().getFullYear()} Mega City Tours & Travells. All rights reserved.</p>
          <p>
            Website by DAV Dev Studio ·{" "}
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
