import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mega City Tours & Travells" },
      { name: "description", content: "Privacy Policy for Mega City Tours & Travells, Hyderabad. How we collect, use, and protect your information." },
      { property: "og:title", content: "Privacy Policy | Mega City Tours & Travells" },
      { property: "og:description", content: "How Mega City Tours & Travells collects, uses, and protects your booking information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-bold text-primary">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-5 text-foreground/90 leading-relaxed">
        <p>
          Mega City Tours & Travells ("we", "our", "us") respects your privacy. This policy
          describes how we collect, use, and protect personal information you share with us when
          enquiring or booking a trip.
        </p>
        <h2 className="font-display text-xl text-primary">Information we collect</h2>
        <p>
          Name, phone number, email, travel date, pickup, destination, group size, vehicle
          preference, and any details you share via the website, WhatsApp, email, or phone.
        </p>
        <h2 className="font-display text-xl text-primary">How we use your information</h2>
        <p>
          To respond to enquiries, prepare quotes, confirm bookings, coordinate vehicles and
          drivers, send trip updates, and provide customer support.
        </p>
        <h2 className="font-display text-xl text-primary">Sharing</h2>
        <p>
          We do not sell your information. We share trip details only with the assigned driver and
          team members required to fulfil your booking.
        </p>
        <h2 className="font-display text-xl text-primary">Contact</h2>
        <p>
          For privacy-related questions, write to us at megacitytravells@gmail.com or call
          9949949993.
        </p>
      </div>
    </article>
  );
}
