import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import logo from "@/assets/logo.jpg";

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
    <footer className="bg-warm-gradient text-primary-foreground pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Mega City Tours & Travells logo"
                className="h-12 w-12 object-contain rounded-lg bg-white p-1"
              />
              <div className="leading-tight">
                <div className="font-display text-lg font-bold">Mega City</div>
                <div className="text-[11px] uppercase tracking-wider text-brand-cream/70">
                  Tours & Travells
                </div>
              </div>
            </div>
            <p className="text-sm text-brand-cream/80 leading-relaxed">
              Hyderabad-based travel partner for group travel, per KM trips, local tours, and
              outstation journeys across Telangana and nearby states.
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-display text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-brand-cream/80 hover:text-primary-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-display text-base mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-brand-cream/80 hover:text-primary-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-display text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-brand-cream/85">
              <li className="flex gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <a href={`tel:+91${site.phones[0]}`} className="block hover:underline">{site.phones[0]}</a>
                  <a href={`tel:+91${site.phones[1]}`} className="block hover:underline">{site.phones[1]}</a>
                </div>
              </li>
              <li className="flex gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp: {site.whatsapp}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:underline break-all">{site.email}</a>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Open daily, {site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-cream/15 pt-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-brand-cream/70">
          <p>© {new Date().getFullYear()} Mega City Tours & Travells. All rights reserved.</p>
          <p>
            Website by DAV Dev Studio ·{" "}
            <Link to="/privacy" className="hover:underline">Privacy</Link> ·{" "}
            <Link to="/terms" className="hover:underline">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
