import brezza from "@/assets/vehicle-brezza.jpg";
import innova from "@/assets/vehicle-innova.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";
import tempo from "@/assets/vehicle-tempo.jpg";
import urbania from "@/assets/vehicle-urbania.jpg";
import bus from "@/assets/vehicle-bus.jpg";
import bus28 from "@/assets/vehicle-bus-28.jpg";
import bus40 from "@/assets/vehicle-bus-40.jpg";

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
    startingPrice: "₹14/km",
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    seats: 7,
    count: 4,
    image: innova,
    bestFor: "Family trips, airport transfers, comfortable outstation travel, and small groups",
    ac: "AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "fortuner",
    name: "Toyota Fortuner",
    seats: 7,
    count: 1,
    image: fortuner,
    bestFor: "Premium family / corporate outstation travel",
    ac: "AC",
    startingPrice: "₹26/km",
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    seats: 12,
    count: 2,
    image: tempo,
    bestFor: "Group trips, school/college trips, pilgrimage trips, and family outings",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "urbania",
    name: "Urbania",
    seats: 12,
    count: 4,
    image: urbania,
    bestFor: "Comfortable group travel, corporate trips, family outings, and outstation travel",
    ac: "AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "bus-22",
    name: "Mini Bus",
    seats: 22,
    count: 4,
    image: bus,
    bestFor: "Mid-size groups, school events, corporate",
    ac: "AC / Non-AC",
    startingPrice: "₹35/km",
  },
  {
    slug: "bus-28",
    name: "Bus",
    seats: 28,
    count: 3,
    image: bus28,
    bestFor: "Medium groups, school trips, family functions, and local/outstation travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "bus-40",
    name: "Bus",
    seats: 40,
    count: 9,
    image: bus40,
    bestFor: "Large groups, weddings, school/college trips, corporate outings, and pilgrimages",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "bus-50",
    name: "Bus",
    seats: 50,
    count: 2,
    image: bus,
    bestFor: "Large groups, weddings, school/college trips, corporate outings, and pilgrimages",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
];
