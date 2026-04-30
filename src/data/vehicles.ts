import brezza from "@/assets/vehicle-brezza.jpg";
import innova from "@/assets/vehicle-innova.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";
import tempo from "@/assets/vehicle-tempo.jpg";
import urbania from "@/assets/vehicle-urbania.jpg";
import bus from "@/assets/vehicle-bus.jpg";

export type Vehicle = {
  slug: string;
  name: string;
  seats: number;
  count: number;
  image: string;
  bestFor: string;
  ac: string;
  startingPrice: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "breeza",
    name: "Maruti Brezza",
    seats: 4,
    count: 4,
    image: brezza,
    bestFor: "Small families, airport transfers, city trips",
    ac: "AC",
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    seats: 7,
    count: 4,
    image: innova,
    bestFor: "Family trips, outstation comfort travel",
    ac: "AC",
  },
  {
    slug: "fortuner",
    name: "Toyota Fortuner",
    seats: 7,
    count: 1,
    image: fortuner,
    bestFor: "Premium family / corporate outstation travel",
    ac: "AC",
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    seats: 12,
    count: 2,
    image: tempo,
    bestFor: "Small groups, weekend trips, pilgrimage",
    ac: "AC / Non-AC",
  },
  {
    slug: "urbania",
    name: "Force Urbania",
    seats: 12,
    count: 4,
    image: urbania,
    bestFor: "Premium small-group outstation travel",
    ac: "AC",
  },
  {
    slug: "bus-22",
    name: "Mini Bus",
    seats: 22,
    count: 4,
    image: bus,
    bestFor: "Mid-size groups, school events, corporate",
    ac: "AC / Non-AC",
  },
  {
    slug: "bus-28",
    name: "Bus",
    seats: 28,
    count: 3,
    image: bus,
    bestFor: "Larger groups, weddings, school trips",
    ac: "AC / Non-AC",
  },
  {
    slug: "bus-40",
    name: "Bus",
    seats: 40,
    count: 9,
    image: bus,
    bestFor: "Big groups, school excursions, pilgrimages",
    ac: "AC / Non-AC",
  },
  {
    slug: "bus-50",
    name: "Bus",
    seats: 50,
    count: 2,
    image: bus,
    bestFor: "Large group travel, weddings, conferences",
    ac: "AC / Non-AC",
  },
];
