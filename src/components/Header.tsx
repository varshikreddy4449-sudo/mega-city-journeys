import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink, site } from "@/data/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

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
        backgroundColor: scrolled ? "rgba(244, 241, 234, 0.95)" : "rgba(244, 241, 234, 0.88)",
        borderBottom: scrolled
          ? "1px solid rgba(74, 44, 32, 0.10)"
          : "1px solid rgba(74, 44, 32, 0.06)",
        boxShadow: scrolled ? "0 6px 24px rgba(74, 44, 32, 0.10)" : "none",
      }}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6 transition-all duration-300",
          scrolled ? "py-2 md:py-2.5" : "py-3 md:py-3.5",
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Mega City Tours & Travells logo"
            className={cn(
              "object-contain rounded-lg bg-white p-1 transition-all duration-300",
              scrolled ? "h-10 w-10" : "h-11 w-11 md:h-12 md:w-12",
            )}
            style={{ boxShadow: "0 2px 6px rgba(74, 44, 32, 0.10)" }}
          />
          <span
            aria-hidden
            className="hidden sm:block h-8 w-px"
            style={{ backgroundColor: "rgba(74, 44, 32, 0.15)" }}
          />
          <div className="leading-tight">
            <div
              className="font-display text-base font-bold md:text-lg"
              style={{ color: "#4A2C20", letterSpacing: "-0.01em" }}
            >
              Mega City
            </div>
            <div
              className="text-[10px] font-semibold uppercase md:text-[11px]"
              style={{ color: "#8A6B5A", letterSpacing: "0.14em" }}
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
              style={{ color: "#4A2C20" }}
              activeProps={{
                className: "nav-link nav-link-active relative rounded-md px-3 py-2 text-sm font-bold transition-colors",
                style: { color: "#A0522D" },
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
              backgroundColor: "#A0522D",
              borderRadius: "9999px",
              padding: "10px 20px",
              boxShadow: "0 4px 14px rgba(160, 82, 45, 0.32)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(160, 82, 45, 0.42)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(160, 82, 45, 0.32)";
            }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get Quote on WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 lg:hidden transition-colors"
          style={{ color: "#4A2C20" }}
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
          borderTop: open ? "1px solid rgba(74, 44, 32, 0.08)" : "none",
          backgroundColor: "rgba(255, 255, 255, 0.96)",
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
              style={{ color: "#4A2C20" }}
              activeProps={{
                style: { color: "#A0522D", fontWeight: 700, backgroundColor: "#EDE6D8" },
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
              backgroundColor: "#A0522D",
              borderRadius: "9999px",
              padding: "14px 28px",
              boxShadow: "0 4px 14px rgba(160, 82, 45, 0.32)",
            }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Get Quote on WhatsApp
          </a>
          <a
            href={`tel:+91${site.phones[0]}`}
            className="mt-2 inline-flex items-center justify-center gap-2 text-base font-bold"
            style={{
              border: "2px solid #4A2C20",
              color: "#4A2C20",
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
