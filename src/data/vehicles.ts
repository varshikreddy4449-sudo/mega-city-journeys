import brezza from "@/assets/vehicle-brezza-front.webp";
import innova from "@/assets/vehicle-innova.webp";
import fortuner from "@/assets/vehicle-fortuner-side.webp";
import tempoFront from "@/assets/tempo-exterior-front.webp";
import tempoRear from "@/assets/tempo-exterior-rear.webp";
import urbania from "@/assets/vehicle-urbania.webp";
import bus21Main from "@/assets/bus-21-main.png";
import bus22Main from "@/assets/bus-22-main.png";
import busBlue from "@/assets/vehicle-bus-28.webp";
import busRed from "@/assets/vehicle-bus-40.webp";
import busYellow from "@/assets/vehicle-bus-22.webp";
import bus40RedFront from "@/assets/bus-40-red-front.png";
import bus50 from "@/assets/bus-50-main.png";
import busWhite from "@/assets/bus-40-white-main.png";
import bus40EicherFront from "@/assets/bus-40-eicher-front.png";

export type VehicleCategory = "Car" | "SUV" | "Traveller" | "Bus";

export type Vehicle = {
  slug: string;
  name: string;
  category: VehicleCategory;
  seats: number;
  count: number;
  image: string;
  bestFor: string;
  ac: string;
  startingPrice: string;
  tag?: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "breeza",
    category: "Car",
    name: "Maruti Brezza",
    seats: 4,
    count: 4,
    image: brezza,
    bestFor: "Small families, airport transfers, city trips",
    ac: "AC / Non-AC",
    startingPrice: "₹14/km",
  },
  {
    slug: "innova-crysta",
    category: "SUV",
    name: "Innova Crysta",
    seats: 7,
    count: 4,
    image: innova,
    bestFor: "Family trips, airport transfers, comfortable outstation travel, and small groups",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "fortuner",
    category: "SUV",
    name: "Toyota Fortuner",
    seats: 7,
    count: 1,
    image: fortuner,
    bestFor: "Premium family / corporate outstation travel",
    ac: "AC / Non-AC",
    startingPrice: "₹26/km",
  },
  {
    slug: "tempo-traveller-12",
    category: "Traveller",
    name: "Tempo Traveller",
    seats: 12,
    count: 1,
    image: tempoFront,
    bestFor: "Group trips, school and college trips, pilgrimage trips, and family outings",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "urbania",
    category: "Traveller",
    name: "Urbania",
    seats: 12,
    count: 4,
    image: urbania,
    bestFor: "Comfortable group travel, corporate trips, family outings, and outstation travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "tempo-traveller-16",
    category: "Traveller",
    name: "Tempo Traveller",
    seats: 16,
    count: 1,
    image: tempoRear,
    bestFor: "Larger group trips, wedding transport, pilgrimage trips, and outstation travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "bus-21",
    category: "Bus",
    name: "Bus",
    seats: 21,
    count: 1,
    image: bus21Main,
    bestFor: "Small groups, family trips, school outings, and short group travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "bus-22",
    category: "Bus",
    name: "Bus",
    seats: 22,
    count: 4,
    image: bus22Main,
    bestFor: "Small groups, school trips, family events, and short group travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "bus-28",
    category: "Bus",
    name: "Bus",
    seats: 28,
    count: 3,
    image: busRed,
    bestFor: "Medium groups, school trips, family functions, and local or outstation group travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
  {
    slug: "bus-40",
    category: "Bus",
    name: "Bus",
    seats: 40,
    count: 9,
    image: bus40RedFront,
    bestFor: "Small groups, school trips, family events, and short group travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
    tag: "Hi-Tech Bus – For Corporate Travel",
  },
  {
    slug: "bus-40-yellow",
    category: "Bus",
    name: "Bus",
    seats: 40,
    count: 1,
    image: busYellow,
    bestFor: "Group tours, school trips, family functions, and comfortable group travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
    tag: "Hi-Tech Bus – Perfect for Long Journeys",
  },
  {
    slug: "bus-40-white",
    category: "Bus",
    name: "Bus",
    seats: 40,
    count: 1,
    image: busWhite,
    bestFor: "Group tours, school travel, family events, and comfortable mid-size movement",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
    tag: "Hi-Tech Bus – For Family Trips",
  },
  {
    slug: "bus-40-eicher",
    category: "Bus",
    name: "Bus",
    seats: 40,
    count: 1,
    image: bus40EicherFront,
    bestFor: "Group tours, school trips, family functions, and comfortable group travel",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
    tag: "Newly Added",
  },
  {
    slug: "bus-50",
    category: "Bus",
    name: "Bus",
    seats: 50,
    count: 2,
    image: bus50,
    bestFor:
      "Large events, school and college trips, weddings, corporate outings, and big group movement",
    ac: "AC / Non-AC",
    startingPrice: "Ask for Price",
  },
];
