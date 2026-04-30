import hyd from "@/assets/dest-hyderabad.jpg";
import sri from "@/assets/dest-srisailam.jpg";
import yad from "@/assets/dest-yadadri.jpg";
import war from "@/assets/dest-warangal.jpg";
import vij from "@/assets/dest-vijayawada.jpg";
import nag from "@/assets/dest-nagarjuna.jpg";
import school from "@/assets/trip-school.jpg";
import corp from "@/assets/trip-corporate.jpg";
import family from "@/assets/trip-family.jpg";

export type PkgCategory =
  | "Local Trips"
  | "Pilgrimage Trips"
  | "Family Trips"
  | "Corporate Trips"
  | "School/College Trips"
  | "Custom Packages";

export type Pkg = {
  slug: string;
  title: string;
  bestFor: string;
  vehicles: string;
  description: string;
  image: string;
  category: PkgCategory;
};

export const packages: Pkg[] = [
  {
    slug: "hyderabad-local-sightseeing",
    title: "Hyderabad Local Sightseeing",
    bestFor: "Families, tourists, weekend visitors",
    vehicles: "Brezza, Innova, Tempo Traveller",
    description:
      "Charminar, Golconda, Salar Jung, Birla Mandir, Hussain Sagar and more — flexible day package with driver.",
    image: hyd,
    category: "Local Trips",
  },
  {
    slug: "hyderabad-to-srisailam",
    title: "Hyderabad to Srisailam",
    bestFor: "Pilgrimage groups, families",
    vehicles: "Innova, Tempo Traveller, Bus",
    description:
      "One-day or two-day Srisailam temple yatra with comfortable transport and experienced drivers.",
    image: sri,
    category: "Pilgrimage Trips",
  },
  {
    slug: "hyderabad-to-yadadri",
    title: "Hyderabad to Yadadri",
    bestFor: "Pilgrimage day trips",
    vehicles: "Brezza, Innova, Tempo, Bus",
    description:
      "Quick same-day darshan trip to Yadagirigutta Lakshmi Narasimha Temple with flexible pickup.",
    image: yad,
    category: "Pilgrimage Trips",
  },
  {
    slug: "hyderabad-to-warangal",
    title: "Hyderabad to Warangal",
    bestFor: "Heritage tours, family trips",
    vehicles: "Innova, Tempo Traveller, Bus",
    description:
      "Thousand Pillar Temple, Warangal Fort, Bhadrakali Temple — one or two-day cultural tour.",
    image: war,
    category: "Family Trips",
  },
  {
    slug: "hyderabad-to-vijayawada",
    title: "Hyderabad to Vijayawada",
    bestFor: "Family trips, business travel",
    vehicles: "Innova, Fortuner, Urbania",
    description:
      "Comfortable Hyderabad–Vijayawada outstation travel one-way or round trip with optional Kanaka Durga darshan.",
    image: vij,
    category: "Family Trips",
  },
  {
    slug: "hyderabad-to-nagarjuna-sagar",
    title: "Hyderabad to Nagarjuna Sagar",
    bestFor: "Weekend getaways, families",
    vehicles: "Innova, Tempo, Bus",
    description:
      "Day trip or overnight to Nagarjuna Sagar Dam, Ethipothala Falls, and surroundings.",
    image: nag,
    category: "Family Trips",
  },
  {
    slug: "school-college-one-day-trip",
    title: "School / College One-Day Trip",
    bestFor: "Schools, colleges, study tours",
    vehicles: "Bus 22 / 28 / 40 / 50 seater",
    description:
      "Safe, on-time bus transport for picnics, educational visits, and one-day excursions.",
    image: school,
    category: "School/College Trips",
  },
  {
    slug: "corporate-group-outing",
    title: "Corporate Group Outing",
    bestFor: "Companies, teams, offsites",
    vehicles: "Urbania, Tempo Traveller, Bus",
    description:
      "Pickup–drop offsite logistics with AC vehicles and professional drivers for company groups.",
    image: corp,
    category: "Corporate Trips",
  },
  {
    slug: "custom-telangana-tour",
    title: "Custom Telangana Tour",
    bestFor: "Multi-day groups, family circles",
    vehicles: "Tempo, Urbania, Bus",
    description:
      "Build your own multi-day Telangana itinerary across temples, forts, and getaways — fully custom.",
    image: family,
    category: "Custom Packages",
  },
];
