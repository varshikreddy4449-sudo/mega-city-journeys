import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Mega City Tours & Travells" },
      {
        name: "description",
        content:
          "Terms and conditions for travel bookings with Mega City Tours & Travells, Hyderabad.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-bold text-primary">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-5 text-foreground/90 leading-relaxed">
        <h2 className="font-display text-xl text-primary">Bookings</h2>
        <p>
          Quotes are estimates based on the trip details shared. Final pricing is confirmed at the
          time of booking.
        </p>
        <h2 className="font-display text-xl text-primary">Pricing</h2>
        <p>
          Local trips are usually package-based, while outstation trips are calculated per KM with a
          minimum daily KM average of approximately 300 KM. Tolls, parking, permits, state taxes,
          and driver allowance are charged separately unless explicitly included in the quote.
        </p>
        <h2 className="font-display text-xl text-primary">Payments</h2>
        <p>
          Advance payment may be required depending on the total trip amount, especially for large
          bookings. UPI, cash, and bank transfer are accepted.
        </p>
        <h2 className="font-display text-xl text-primary">Cancellations</h2>
        <p>
          Cancellation terms are shared at the time of booking confirmation and depend on the trip
          size, vehicle, and dates.
        </p>
        <h2 className="font-display text-xl text-primary">Liability</h2>
        <p>
          While we take every care to ensure safe and timely travel, Mega City Tours & Travells is
          not liable for delays caused by traffic, weather, vehicle breakdowns beyond reasonable
          control, or events of force majeure.
        </p>
        <h2 className="font-display text-xl text-primary">Contact</h2>
        <p>
          For booking or terms-related questions, contact 9949949993 or megacitytravells@gmail.com.
        </p>
      </div>
    </article>
  );
}
