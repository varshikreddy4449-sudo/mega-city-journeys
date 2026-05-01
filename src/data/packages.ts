export type PkgCategory =
  | "Local"
  | "Pilgrimage"
  | "Family"
  | "School/College"
  | "Corporate"
  | "Wedding/Event"
  | "Custom";

export type Pkg = {
  slug: string;
  title: string;
  from?: string;
  to?: string;
  bestFor: string;
  vehicles: string;
  tripType: string;
  category: PkgCategory;
};

export const packages: Pkg[] = [
  {
    slug: "hyderabad-local-sightseeing",
    title: "Hyderabad Local Sightseeing",
    from: "Hyderabad",
    to: "City Tour",
    bestFor: "Families, guests, local city tours",
    vehicles: "Car, SUV, Traveller, Bus",
    tripType: "Local package",
    category: "Local",
  },
  {
    slug: "hyderabad-to-srisailam",
    title: "Hyderabad to Srisailam",
    from: "Hyderabad",
    to: "Srisailam",
    bestFor: "Pilgrimage groups and family temple trips",
    vehicles: "SUV, Traveller, Bus",
    tripType: "Outstation, per KM",
    category: "Pilgrimage",
  },
  {
    slug: "hyderabad-to-yadadri",
    title: "Hyderabad to Yadadri",
    from: "Hyderabad",
    to: "Yadadri",
    bestFor: "Temple visits and family groups",
    vehicles: "Car, SUV, Traveller, Bus",
    tripType: "Local or outstation depending on route",
    category: "Pilgrimage",
  },
  {
    slug: "hyderabad-to-warangal",
    title: "Hyderabad to Warangal",
    from: "Hyderabad",
    to: "Warangal",
    bestFor: "Heritage trips, college tours, family travel",
    vehicles: "SUV, Traveller, Bus",
    tripType: "Outstation, per KM",
    category: "Family",
  },
  {
    slug: "hyderabad-to-vijayawada",
    title: "Hyderabad to Vijayawada",
    from: "Hyderabad",
    to: "Vijayawada",
    bestFor: "Family trips and business travel",
    vehicles: "Car, SUV, Urbania",
    tripType: "Outstation, per KM",
    category: "Family",
  },
  {
    slug: "hyderabad-to-nagarjuna-sagar",
    title: "Hyderabad to Nagarjuna Sagar",
    from: "Hyderabad",
    to: "Nagarjuna Sagar",
    bestFor: "Weekend getaways and school or college tours",
    vehicles: "SUV, Traveller, Bus",
    tripType: "Outstation, per KM",
    category: "Family",
  },
  {
    slug: "school-college-one-day-trip",
    title: "School / College One-Day Trip",
    bestFor: "Student groups and educational outings",
    vehicles: "22, 28, 40, and 50 seater buses",
    tripType: "Local or outstation",
    category: "School/College",
  },
  {
    slug: "corporate-group-outing",
    title: "Corporate Group Outing",
    bestFor: "Office teams and company outings",
    vehicles: "Urbania, Traveller, Bus",
    tripType: "Local or outstation",
    category: "Corporate",
  },
  {
    slug: "wedding-guest-transport",
    title: "Wedding Guest Transport",
    bestFor: "Guest pickup, drop, and event movement",
    vehicles: "Car, SUV, Traveller, Bus",
    tripType: "Local package",
    category: "Wedding/Event",
  },
  {
    slug: "custom-telangana-tour",
    title: "Custom Telangana Tour",
    bestFor: "Custom route planning",
    vehicles: "Based on group size",
    tripType: "Custom",
    category: "Custom",
  },
];
