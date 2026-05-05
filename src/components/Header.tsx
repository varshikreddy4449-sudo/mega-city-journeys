import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink, site } from "@/data/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/fleet", label: "Fleet" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

// Ocean Breeze palette
const TEAL = "#0D5C63";
const TEAL_HOVER = "#3CABA3";
const CORAL = "#FF7A59";
const OFFWHITE = "#F7F9FA";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "backdrop-blur-md backdrop-saturate-150",
      )}
      style={{
        backgroundColor: scrolled ? "rgba(247, 249, 250, 0.95)" : "rgba(247, 249, 250, 0.88)",
        borderBottom: scrolled
          ? "1px solid rgba(13, 92, 99, 0.12)"
          : "1px solid rgba(13, 92, 99, 0.06)",
        boxShadow: scrolled ? "0 6px 24px rgba(13, 92, 99, 0.10)" : "none",
      }}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6 transition-all duration-300",
          scrolled ? "py-2 md:py-2.5" : "py-3 md:py-3.5",
        )}
      >
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Mega City Tours & Travells logo"
            className={cn(
              "object-contain rounded-lg bg-white p-1 transition-all duration-300",
              scrolled ? "h-10 w-10" : "h-11 w-11 md:h-12 md:w-12",
            )}
            style={{ boxShadow: "0 2px 6px rgba(13, 92, 99, 0.12)" }}
          />
          <span
            aria-hidden
            className="hidden sm:block h-8 w-px"
            style={{ backgroundColor: "rgba(13, 92, 99, 0.18)" }}
          />
          <div className="leading-tight">
            <div
              className="font-display text-base font-bold md:text-lg"
              style={{ color: TEAL, letterSpacing: "-0.01em" }}
            >
              Mega City
            </div>
            <div
              className="text-[10px] font-semibold uppercase md:text-[11px]"
              style={{ color: TEAL_HOVER, letterSpacing: "0.14em" }}
            >
              Tours & Travells
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link relative rounded-md px-3 py-2 text-sm font-semibold transition-colors"
              style={{ color: TEAL }}
              onMouseEnter={(e) => (e.currentTarget.style.color = TEAL_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.color = TEAL)}
              activeProps={{
                className:
                  "nav-link nav-link-active relative rounded-md px-3 py-2 text-sm font-bold transition-colors",
                style: {
                  color: CORAL,
                  borderBottom: `2px solid ${CORAL}`,
                  borderRadius: 0,
                },
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: CORAL,
              borderRadius: "9999px",
              padding: "10px 20px",
              boxShadow: "0 4px 14px rgba(255, 122, 89, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 122, 89, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(255, 122, 89, 0.35)";
            }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get Quote on WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 lg:hidden transition-colors"
          style={{ color: TEAL }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0",
        )}
        style={{
          borderTop: open ? "1px solid rgba(13, 92, 99, 0.10)" : "none",
          backgroundColor: OFFWHITE,
          backdropFilter: "blur(8px)",
        }}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium transition-colors"
              style={{ color: TEAL }}
              activeProps={{
                style: {
                  color: CORAL,
                  fontWeight: 700,
                  backgroundColor: "rgba(171, 218, 220, 0.35)",
                },
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 text-base font-bold text-white"
            style={{
              backgroundColor: CORAL,
              borderRadius: "9999px",
              padding: "14px 28px",
              boxShadow: "0 4px 14px rgba(255, 122, 89, 0.35)",
            }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Get Quote on WhatsApp
          </a>
          <a
            href={`tel:+91${site.phones[0]}`}
            className="mt-2 inline-flex items-center justify-center gap-2 text-base font-bold"
            style={{
              border: `2px solid ${TEAL}`,
              color: TEAL,
              borderRadius: "9999px",
              padding: "12px 28px",
            }}
          >
            Call {site.phones[0]}
          </a>
        </nav>
      </div>
    </header>
  );
}
