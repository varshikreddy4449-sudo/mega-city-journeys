import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ScrollReveal } from "@/components/ScrollReveal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-warm-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Mega City Tours & Travells | Group Travel & Per KM Trips from Hyderabad",
      },
      {
        name: "description",
        content:
          "Owned fleet from 4 to 50 seats for family trips, school travel, corporate outings, pilgrimages, weddings, and outstation journeys across Hyderabad and nearby regions.",
      },
      { name: "author", content: "Mega City Tours & Travells" },
      { name: "theme-color", content: "#0D5C63" },
      { name: "twitter:site", content: "@megacitytravells" },
      { property: "og:site_name", content: "Mega City Tours & Travells" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://megacitytoursandtravels.com/" },
      {
        property: "og:title",
        content:
          "Mega City Tours & Travells | Group Travel & Per KM Trips from Hyderabad",
      },
      {
        property: "og:description",
        content:
          "Owned fleet from 4 to 50 seats for family trips, school travel, corporate outings, pilgrimages, weddings, and outstation journeys across Hyderabad and nearby regions.",
      },
      {
        property: "og:image",
        content: "https://megacitytoursandtravels.com/og-image.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Mega City Tours & Travells — bus and Innova fleet from Hyderabad",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Mega City Tours & Travells | Group Travel & Per KM Trips from Hyderabad",
      },
      {
        name: "twitter:description",
        content:
          "Owned fleet from 4 to 50 seats for family trips, school travel, corporate outings, pilgrimages, weddings, and outstation journeys across Hyderabad and nearby regions.",
      },
      {
        name: "twitter:image",
        content: "https://megacitytoursandtravels.com/og-image.jpg",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <noscript>
        <style>{`.reveal,.reveal-img{opacity:1 !important;transform:none !important;}`}</style>
      </noscript>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollReveal />
    </div>
  );
}

