import { useState } from "react";
import { Send } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

type Variant = "compact" | "full";

const vehicleOptions = [
  "Any / Need suggestion",
  "Maruti Brezza (4 seater)",
  "Innova Crysta (7 seater)",
  "Toyota Fortuner (7 seater)",
  "Tempo Traveller (12 seater)",
  "Force Urbania (12 seater)",
  "22 Seater Bus",
  "28 Seater Bus",
  "40 Seater Bus",
  "50 Seater Bus",
];

export function QuoteForm({
  variant = "compact",
  title,
  subtitle,
  ctaLabel = "Get Quote",
}: {
  variant?: Variant;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    groupSize: "",
    vehicle: vehicleOptions[0],
    message: "",
  });

  const isFull = variant === "full";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildMessage = () => {
    const lines = [
      `Hi Mega City Tours & Travells, I would like a trip quote.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Pickup: ${form.pickup}`,
      `Destination: ${form.destination}`,
      `Travel Date: ${form.date}`,
      `Group Size: ${form.groupSize}`,
      `Vehicle Preference: ${form.vehicle}`,
    ];
    if (isFull && form.message) lines.push(``, `Message: ${form.message}`);
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-5 md:p-6 border border-border"
      style={{ boxShadow: "0 12px 40px -12px rgba(74,44,32,0.25)" }}
    >
      {title && (
        <div className="mb-4">
          <h3 className="font-display text-xl md:text-2xl font-bold text-primary leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </div>
      )}

      <div className={isFull ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
        <div>
          <label className="sr-only" htmlFor="qf-name">
            Name
          </label>
          <input
            id="qf-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            maxLength={80}
            placeholder="Your Name *"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="qf-phone">
            Phone Number
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={handleChange}
            required
            maxLength={15}
            pattern="[0-9+\s-]{10,15}"
            placeholder="Phone Number *"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="qf-pickup">
            Pickup Location
          </label>
          <input
            id="qf-pickup"
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            maxLength={120}
            placeholder="Pickup Location"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="qf-destination">
            Destination
          </label>
          <input
            id="qf-destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            maxLength={120}
            placeholder="Destination"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="qf-date">
            Travel Date
          </label>
          <input
            id="qf-date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="qf-group">
            Group Size
          </label>
          <input
            id="qf-group"
            name="groupSize"
            type="number"
            min={1}
            max={500}
            value={form.groupSize}
            onChange={handleChange}
            placeholder="Group Size"
            className={fieldClass}
          />
        </div>
        <div className={isFull ? "sm:col-span-2" : ""}>
          <label className="sr-only" htmlFor="qf-vehicle">
            Vehicle Preference
          </label>
          <select
            id="qf-vehicle"
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            className={fieldClass}
          >
            {vehicleOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        {isFull && (
          <div className="sm:col-span-2">
            <label className="sr-only" htmlFor="qf-message">
              Message
            </label>
            <textarea
              id="qf-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              maxLength={500}
              rows={3}
              placeholder="Anything else we should know? (optional)"
              className={fieldClass + " resize-none"}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-card hover:bg-accent/90 transition-colors"
      >
        <Send className="h-4 w-4" />
        {ctaLabel}
      </button>
      <p className="mt-2 text-[11px] text-muted-foreground text-center">
        Submitting opens WhatsApp to {site.whatsapp} with your details prefilled.
      </p>
    </form>
  );
}
