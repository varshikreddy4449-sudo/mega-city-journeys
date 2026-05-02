import {
  Users,
  Route,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  PartyPopper,
  Package,
  Plane,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  bestFor: string;
  needs: string;
  vehicles: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "group-travel",
    title: "Group Travel",
    short:
      "Comfortable group transport for families, friends, and large gatherings, with vehicles from 4 to 50 seats and experienced drivers.",
    bestFor: "Families, friend groups, community travel, function transport",
    needs: "Pickup, destination, travel date, group size, AC or Non-AC preference",
    vehicles: "Tempo Traveller, Urbania, 22 to 50 seater buses",
    icon: Users,
    featured: true,
  },
  {
    slug: "per-km-travel",
    title: "Per KM Travel",
    short:
      "Distance-based pricing for outstation trips. You pay based on actual route, vehicle type, and trip type.",
    bestFor: "Outstation journeys, long-distance travel, multi-day trips",
    needs: "Route, travel dates, vehicle type, one-way or round trip",
    vehicles: "Car, SUV, Tempo Traveller, Bus",
    icon: Route,
    featured: true,
  },
  {
    slug: "outstation-trips",
    title: "Outstation Trips",
    short:
      "Comfortable outstation travel across Telangana, Andhra Pradesh, Karnataka, Maharashtra, and beyond.",
    bestFor: "Weekend getaways, multi-day tours, intercity travel",
    needs: "Destination, travel dates, group size, vehicle preference",
    vehicles: "Innova, Fortuner, Urbania, Tempo Traveller, Bus",
    icon: Plane,
    featured: true,
  },
  {
    slug: "local-trips",
    title: "Local Trips",
    short:
      "Hyderabad city sightseeing, day trips, and short local rentals on a flexible package basis.",
    bestFor: "Sightseeing, day rentals, in-city travel",
    needs: "Pickup time, places to cover, vehicle preference",
    vehicles: "Brezza, Innova, Tempo Traveller",
    icon: MapPin,
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    short:
      "Mega City Tours & Travells supports corporate travel services in Hyderabad, including office team outings, employee movement, company events, business meetings, and monthly staff transport requirements.",
    bestFor:
      "Office team outings, employee transportation services, company outings, business meetings, monthly staff transport",
    needs: "Number of employees, route, schedule, AC vehicle preference",
    vehicles: "Urbania, Tempo Traveller, Corporate bus rental Hyderabad (22 to 50 seater)",
    icon: Briefcase,
  },
  {
    slug: "school-college-trips",
    title: "School & College Trips",
    short:
      "Safe, on-time transport for educational excursions, picnics, and study tours with experienced drivers.",
    bestFor: "School picnics, college tours, educational trips",
    needs: "Number of students, destination, date, accompanying staff count",
    vehicles: "22, 28, 40, 50 seater buses",
    icon: GraduationCap,
  },
  {
    slug: "pilgrimage-trips",
    title: "Pilgrimage Trips",
    short:
      "Comfortable pilgrimage travel to Srisailam, Yadadri, Tirupati, Shirdi, and other temple destinations.",
    bestFor: "Family pilgrimages, group temple tours",
    needs: "Temples to visit, dates, number of travellers, accommodation needs",
    vehicles: "Innova, Tempo Traveller, Urbania, Bus",
    icon: Heart,
  },
  {
    slug: "wedding-event-transport",
    title: "Wedding & Event Transport",
    short:
      "Group transport for wedding guests, baraat, sangeet, and event logistics across Hyderabad and outside.",
    bestFor: "Weddings, receptions, event guest transport",
    needs: "Event date, guest count, pickup points, drop locations",
    vehicles: "Tempo Traveller, Urbania, 28 to 50 seater buses",
    icon: PartyPopper,
  },
  {
    slug: "custom-packages",
    title: "Custom Packages",
    short:
      "Tailored travel packages built around your group size, route, vehicle preference, and budget.",
    bestFor: "Multi-day group travel, special itineraries",
    needs: "Itinerary outline, dates, group size, budget range",
    vehicles: "Any vehicle from 4 to 50 seats",
    icon: Package,
  },
];
