import {
  Users, Route, MapPin, Briefcase, GraduationCap, Heart, PartyPopper, Package, Plane,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  bestFor: string;
  needs: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "group-travel",
    title: "Group Travel",
    short:
      "Comfortable group transport for families, friends, and large gatherings — vehicles from 4 to 50 seats with experienced drivers.",
    bestFor: "Families, friend groups, community travel, function transport",
    needs: "Pickup, destination, travel date, group size, AC/Non-AC preference",
    icon: Users,
  },
  {
    slug: "per-km-travel",
    title: "Per KM Travel",
    short:
      "Transparent per-KM pricing for outstation trips — pay based on actual distance, route, and vehicle type.",
    bestFor: "Outstation journeys, long-distance travel, multi-day trips",
    needs: "Route, travel dates, vehicle type, one-way or round trip",
    icon: Route,
  },
  {
    slug: "local-trips",
    title: "Local Trips",
    short:
      "Hyderabad city sightseeing, day trips, and short local rentals on flexible package basis.",
    bestFor: "Sightseeing, day rentals, in-city travel",
    needs: "Pickup time, places to cover, vehicle preference",
    icon: MapPin,
  },
  {
    slug: "outstation-trips",
    title: "Outstation Trips",
    short:
      "Comfortable outstation travel across Telangana, Andhra Pradesh, Karnataka, Maharashtra, and beyond.",
    bestFor: "Weekend getaways, multi-day tours, intercity travel",
    needs: "Destination, travel dates, group size, vehicle preference",
    icon: Plane,
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    short:
      "Reliable group transport for company offsites, conferences, training events, and team outings.",
    bestFor: "Company outings, offsites, training, employee transport",
    needs: "Number of employees, route, schedule, AC vehicle preference",
    icon: Briefcase,
  },
  {
    slug: "school-college-trips",
    title: "School & College Trips",
    short:
      "Safe, on-time transport for educational excursions, picnics, and study tours with experienced drivers.",
    bestFor: "School picnics, college tours, educational trips",
    needs: "Number of students, destination, date, accompanying staff count",
    icon: GraduationCap,
  },
  {
    slug: "pilgrimage-trips",
    title: "Pilgrimage Trips",
    short:
      "Comfortable pilgrimage travel to Srisailam, Yadadri, Tirupati, Shirdi, and other temple destinations.",
    bestFor: "Family pilgrimages, group temple tours",
    needs: "Temples to visit, dates, number of travellers, accommodation needs",
    icon: Heart,
  },
  {
    slug: "wedding-event-transport",
    title: "Wedding & Event Transport",
    short:
      "Group transport for wedding guests, baraat, sangeet, and event logistics across Hyderabad and outside.",
    bestFor: "Weddings, receptions, event guest transport",
    needs: "Event date, guest count, pickup points, drop locations",
    icon: PartyPopper,
  },
  {
    slug: "custom-packages",
    title: "Custom Packages",
    short:
      "Tailored travel packages built around your group size, route, vehicle preference, and budget.",
    bestFor: "Multi-day group travel, special itineraries",
    needs: "Itinerary outline, dates, group size, budget range",
    icon: Package,
  },
];
