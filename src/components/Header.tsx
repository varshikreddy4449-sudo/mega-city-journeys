import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
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
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-background/80 backdrop-blur",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Mega City Tours & Travells logo"
            className="h-11 w-11 md:h-12 md:w-12 object-contain rounded-lg bg-white p-1 shadow-card"
          />
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-primary md:text-lg">
              Mega City
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">
              Tours & Travells
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "text-accent font-semibold" }}
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
            className="inline-flex items-center gap-2 rounded-full bg-rust-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Get Quote on WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
                activeProps={{ className: "text-accent font-semibold bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-rust-gradient px-5 py-3 text-base font-semibold text-primary-foreground shadow-glow"
            >
              <MessageCircle className="h-5 w-5" />
              Get Quote on WhatsApp
            </a>
            <a
              href={`tel:+91${site.phones[0]}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-semibold text-primary"
            >
              Call {site.phones[0]}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
