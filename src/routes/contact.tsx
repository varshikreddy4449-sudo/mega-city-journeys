import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { vehicles } from "@/data/vehicles";
import { CTASection } from "@/components/CTASection";
import { LogoWatermark } from "@/components/LogoWatermark";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mega City Tours & Travells | Get Travel Quote in Hyderabad" },
      {
        name: "description",
        content:
          "Contact Mega City Tours & Travells in Hyderabad for group travel, per KM trips, and outstation bookings. Call, WhatsApp, or share your trip details.",
      },
      { property: "og:title", content: "Contact Mega City Tours & Travells" },
      {
        property: "og:description",
        content: "Get a travel quote on WhatsApp or by phone. Hyderabad based travel partner.",
      },
    ],
  }),
  component: ContactPage,
});

const tripTypes = [
  "Family Trip",
  "Group Travel",
  "School/College Trip",
  "Corporate Travel",
  "Pilgrimage Trip",
  "Wedding/Event Travel",
  "Local Trip",
  "Outstation Trip",
  "Other",
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{10,15}$/, "Enter a valid phone number"),
  travelDate: z.string().trim().max(50).optional().or(z.literal("")),
  pickup: z.string().trim().max(200).optional().or(z.literal("")),
  destination: z.string().trim().min(2, "Destination is required").max(200),
  groupSize: z.string().trim().max(50).optional().or(z.literal("")),
  vehicle: z.string().max(100).optional().or(z.literal("")),
  tripType: z.string().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      travelDate: String(fd.get("travelDate") || ""),
      pickup: String(fd.get("pickup") || ""),
      destination: String(fd.get("destination") || ""),
      groupSize: String(fd.get("groupSize") || ""),
      vehicle: String(fd.get("vehicle") || ""),
      tripType: String(fd.get("tripType") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = formSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as string;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});

    // Build a WhatsApp message and open it (no backend yet)
    const msg = `Hi Mega City Tours & Travells, I would like to get a quote for a trip.

Name: ${data.name}
Phone: ${data.phone}
Pickup Location: ${data.pickup || "-"}
Destination: ${data.destination}
Travel Date: ${data.travelDate || "-"}
Group Size: ${data.groupSize || "-"}
Vehicle Preference: ${data.vehicle || "Not Sure"}
Trip Type: ${data.tripType || "-"}
Message: ${data.message || "-"}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const inputCls =
    "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <>
      <section className="bg-warm-gradient text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Contact Us
          </h1>
          <p className="mt-3 text-brand-cream/85 max-w-2xl mx-auto">
            Tell us your trip details and our team will help with vehicle and pricing options.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <aside className="lg:col-span-2 space-y-4">
            <a
              href={`tel:+91${site.phones[0]}`}
              className="reveal hover-lift flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-card hover:shadow-soft transition-shadow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-warm-gradient text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Call
                </div>
                <div className="font-display text-base text-primary">{site.phones[0]}</div>
                <div className="font-display text-base text-primary">{site.phones[1]}</div>
              </div>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal hover-lift flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-card hover:shadow-soft transition-shadow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  WhatsApp
                </div>
                <div className="font-display text-base text-primary">{site.whatsapp}</div>
                <div className="text-xs text-muted-foreground">Tap to chat with us</div>
              </div>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="reveal hover-lift flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-card hover:shadow-soft transition-shadow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rust-gradient text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Email
                </div>
                <div className="font-display text-base text-primary break-all">{site.email}</div>
              </div>
            </a>
            <div className="reveal hover-lift flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Address
                </div>
                <div className="text-sm text-foreground/85">{site.address}</div>
              </div>
            </div>
            <div className="reveal hover-lift flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Business Hours
                </div>
                <div className="text-sm text-foreground/85">Open daily, {site.hours}</div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-card aspect-[4/3]">
              <iframe
                title="Mega City Tours & Travells location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl bg-card border border-border/60 p-6 md:p-8 shadow-soft">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-4 font-display text-2xl text-primary">Thank you!</h2>
                <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                  Your enquiry has been received. Our team will contact you shortly with vehicle and
                  pricing options. We've also opened WhatsApp so you can send the same details to us
                  directly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h2 className="font-display text-2xl text-primary">Request a quote</h2>
                <p className="text-sm text-muted-foreground -mt-2">
                  Share trip details. We usually respond within business hours ({site.hours}).
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name *" error={errors.name}>
                    <input
                      name="name"
                      required
                      maxLength={100}
                      className={inputCls}
                      placeholder="Your full name"
                    />
                  </Field>
                  <Field label="Phone Number *" error={errors.phone}>
                    <input
                      name="phone"
                      required
                      maxLength={15}
                      className={inputCls}
                      placeholder="10-digit mobile"
                    />
                  </Field>
                  <Field label="Travel Date">
                    <input type="date" name="travelDate" className={inputCls} />
                  </Field>
                  <Field label="Group Size">
                    <input
                      name="groupSize"
                      maxLength={50}
                      className={inputCls}
                      placeholder="e.g. 25 people"
                    />
                  </Field>
                  <Field label="Pickup Location">
                    <input
                      name="pickup"
                      maxLength={200}
                      className={inputCls}
                      placeholder="e.g. Kukatpally, Hyderabad"
                    />
                  </Field>
                  <Field label="Destination *" error={errors.destination}>
                    <input
                      name="destination"
                      required
                      maxLength={200}
                      className={inputCls}
                      placeholder="e.g. Srisailam"
                    />
                  </Field>
                  <Field label="Vehicle Preference">
                    <select name="vehicle" defaultValue="" className={inputCls}>
                      <option value="">Not Sure</option>
                      {vehicles.map((v) => (
                        <option key={v.slug} value={`${v.name} - ${v.seats} Seater`}>
                          {v.name} - {v.seats} Seater
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Trip Type">
                    <select name="tripType" defaultValue="" className={inputCls}>
                      <option value="">Select trip type</option>
                      {tripTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Message">
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className={inputCls}
                    placeholder="Anything else we should know? (route, stops, timings...)"
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-rust-gradient text-primary-foreground px-7 py-3 font-semibold shadow-glow"
                >
                  <Send className="h-4 w-4" /> Send Enquiry
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting, your trip details will be sent to our team via WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-primary">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
