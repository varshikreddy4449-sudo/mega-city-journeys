import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Phone, CheckCircle2, Users } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import type { Vehicle } from "@/data/vehicles";
import { useState } from "react";

import brezzaFront from "@/assets/vehicle-brezza-front.webp";
import brezzaRear from "@/assets/vehicle-brezza-rear.webp";
import innovaExtFront from "@/assets/innova-exterior-front.webp";
import innovaExtRear from "@/assets/innova-exterior-rear.webp";
import innovaIntFront from "@/assets/innova-interior-front.webp";
import innovaIntRear from "@/assets/innova-interior-rear.webp";
import fortunerSide from "@/assets/vehicle-fortuner-side.webp";
import fortunerFront from "@/assets/vehicle-fortuner-front.webp";
import fortunerAngle from "@/assets/vehicle-fortuner-angle.webp";
import tempoFront from "@/assets/tempo-exterior-front.webp";
import tempoSide from "@/assets/tempo-exterior-side.webp";
import tempoRear from "@/assets/tempo-exterior-rear.webp";
import tempoInterior from "@/assets/tempo-interior.webp";
import urbania from "@/assets/vehicle-urbania.webp";
import urbaniaInterior from "@/assets/urbania-interior.webp";
import bus21Main from "@/assets/bus-21-main.png";
import bus21Side from "@/assets/bus-21-side.png";
import bus21Interior from "@/assets/bus-21-interior.png";
import bus22Main from "@/assets/bus-22-main.png";
import bus22Front from "@/assets/bus-22-front.png";
import bus22InteriorMaroon from "@/assets/bus-22-interior-maroon.png";
import bus22InteriorBeige from "@/assets/bus-22-interior-beige.png";
import busBlue from "@/assets/vehicle-bus-28.webp";
import busRed from "@/assets/vehicle-bus-40.webp";
import busYellow from "@/assets/vehicle-bus-22.webp";
import busWhite from "@/assets/bus-40-white-main.png";
import bus40WhiteFront from "@/assets/bus-40-white-front.png";
import bus40WhiteRear from "@/assets/bus-40-white-rear.png";
import bus40WhiteInterior from "@/assets/bus-40-white-interior.png";
import bus40EicherFront from "@/assets/bus-40-eicher-front.png";
import bus40EicherInteriorBlue from "@/assets/bus-40-eicher-interior-blue.png";
import bus40EicherInteriorYellow from "@/assets/bus-40-eicher-interior-yellow.png";
import bus40RedFront from "@/assets/bus-40-red-front.png";
import bus40RedFront2 from "@/assets/bus-40-red-front2.png";
import bus40RedRear from "@/assets/bus-40-red-rear.png";
import bus40RedInterior from "@/assets/bus-40-red-interior.png";
import bus40Front from "@/assets/bus-40-front.webp";
import bus40Side from "@/assets/bus-40-side.webp";
import bus40Rear from "@/assets/bus-40-rear.webp";
import bus40RearYellow from "@/assets/bus-40-rear-yellow.webp";
import bus50 from "@/assets/bus-50-main.png";
import bus50Front from "@/assets/bus-50-front.png";
import bus50Interior from "@/assets/bus-50-interior-new.png";
import busInterior from "@/assets/bus-interior.webp";

const galleries: Record<string, string[]> = {
  breeza: [brezzaFront, brezzaRear],
  "innova-crysta": [innovaExtFront, innovaExtRear, innovaIntFront, innovaIntRear],
  fortuner: [fortunerSide, fortunerFront, fortunerAngle],
  "tempo-traveller-12": [tempoFront, tempoSide, tempoInterior],
  "tempo-traveller-16": [tempoRear, tempoSide, tempoInterior],
  urbania: [urbania, urbaniaInterior],
  "bus-21": [bus21Main, bus21Side, bus21Interior],
  "bus-22": [bus22Main, bus22Front, bus22InteriorMaroon, bus22InteriorBeige],
  "bus-28": [busRed, bus40Front, busInterior],
  "bus-40": [bus40RedFront, bus40RedFront2, bus40RedRear, bus40RedInterior],
  "bus-50": [bus50, bus50Front, bus50Interior],
  "bus-40-white": [busWhite, bus40WhiteFront, bus40WhiteRear, bus40WhiteInterior],
  "bus-40-eicher": [bus40EicherFront, bus40EicherInteriorBlue, bus40EicherInteriorYellow],
};

const useCases: Record<string, string[]> = {
  breeza: ["Airport pickup / drop", "Local city sightseeing", "Short family outings", "Pickup & drop trips"],
  "innova-crysta": ["Family outstation trips", "Airport transfers", "Comfortable group of 6–7", "Pilgrimage trips"],
  fortuner: ["Premium corporate travel", "VIP guest pickup", "Outstation family trips", "Wedding guest transport"],
  "tempo-traveller-12": ["School & college trips", "Pilgrimage groups", "Family outings", "Outstation group travel"],
  "tempo-traveller-16": ["Wedding guest movement", "Larger family groups", "Outstation travel", "Pilgrimage groups"],
  urbania: ["Corporate offsites", "Comfortable group travel", "Family functions", "Outstation journeys"],
  "bus-21": ["Small group trips", "Family outings", "School trips", "Short group travel"],
  "bus-22": ["Small group trips", "School picnics", "Family events", "Short group travel"],
  "bus-28": ["Medium group travel", "School / college trips", "Family functions", "Local & outstation"],
  "bus-40": ["Small group trips", "School picnics", "Family events", "Short group travel"],
  "bus-50": ["Large weddings", "School & college trips", "Corporate events", "Big group movement"],
  "bus-40-white": ["Group tours", "School trips", "Pilgrimage movement", "Outstation travel"],
  "bus-40-eicher": ["Group tours", "School trips", "Family functions", "Outstation travel"],
};

export function VehicleDetailModal({
  vehicle,
  open,
  onOpenChange,
}: {
  vehicle: Vehicle | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [active, setActive] = useState(0);
  if (!vehicle) return null;
  const images = galleries[vehicle.slug] ?? [vehicle.image];
  const cases = useCases[vehicle.slug] ?? [];
  const title = vehicle.category === "Bus" ? `${vehicle.seats} Seater Bus` : vehicle.name;
  const waMsg = `Hi Mega City, I would like to enquire about the ${title} (${vehicle.seats} seater).`;

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setActive(0);
      }}
    >
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <div className="p-6 pb-0">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl md:text-3xl text-primary">
              {title}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-accent font-semibold">
              <Users className="h-4 w-4" /> {vehicle.seats} Seater
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 mt-4">
          <div className="relative overflow-hidden rounded-xl bg-secondary/30" style={{ aspectRatio: "16 / 10" }}>
            <img
              src={images[active]}
              alt={`${title} - Mega City Tours & Travells`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative overflow-hidden rounded-lg border-2 transition ${
                    i === active ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  style={{ aspectRatio: "16 / 10" }}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 py-5 space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Best For</h4>
            <p className="mt-1 text-sm md:text-base text-foreground/85">{vehicle.bestFor}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground text-center">
              {vehicle.ac}
            </div>
            <div className="rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground text-center">
              Driver included
            </div>
            <div className="rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground text-center">
              {vehicle.count} available
            </div>
          </div>

          {cases.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Suggested Use Cases</h4>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cases.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-lg bg-secondary/50 px-3 py-2 text-xs text-muted-foreground">
            Final price depends on route, date, group size, tolls, parking, permits, state taxes, and driver allowance.
          </div>
        </div>

        <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4 flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:+91${site.phones[0]}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-semibold hover:opacity-90 transition"
          >
            <Phone className="h-4 w-4" /> Call {site.phones[0]}
          </a>
          <a
            href={whatsappLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Enquiry
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
