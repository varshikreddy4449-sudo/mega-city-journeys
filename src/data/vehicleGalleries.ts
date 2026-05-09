import brezzaFront from "@/assets/vehicle-brezza-front.webp";
import brezzaRear from "@/assets/vehicle-brezza-rear.webp";
import innovaExtFront from "@/assets/innova-exterior-front.webp";
import innovaExtRear from "@/assets/innova-exterior-rear.webp";
import innovaIntFront from "@/assets/innova-interior-front.webp";
import innovaIntRear from "@/assets/innova-interior-rear.webp";
import fortunerSide from "@/assets/vehicle-fortuner-side.webp";
import fortunerFront from "@/assets/vehicle-fortuner-front.webp";
import fortunerAngle from "@/assets/vehicle-fortuner-angle.webp";
import tempo12Home from "@/assets/tempo-12-home.jpeg";
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
import busRed from "@/assets/vehicle-bus-40.webp";
import busYellow from "@/assets/vehicle-bus-22.webp";
import bus40MegaFront from "@/assets/bus-40-mega-front.png";
import bus40MegaRear from "@/assets/bus-40-mega-rear.png";
import busWhite from "@/assets/bus-40-white-main.png";
import bus40EicherFront from "@/assets/bus-40-eicher-front.png";
import bus40EicherInteriorBlue from "@/assets/bus-40-eicher-interior-blue.png";
import bus40EicherInteriorYellow from "@/assets/bus-40-eicher-interior-yellow.png";
import bus40WhiteFront from "@/assets/bus-40-white-front.png";
import bus40WhiteRear from "@/assets/bus-40-white-rear.png";
import bus40WhiteInterior from "@/assets/bus-40-white-interior.png";
import bus40Front from "@/assets/bus-40-front.webp";
import bus40Side from "@/assets/bus-40-side.webp";
import bus40RearYellow from "@/assets/bus-40-rear-yellow.webp";
import bus50 from "@/assets/bus-50-main.png";
import bus50Front from "@/assets/bus-50-front.png";
import bus50Interior from "@/assets/bus-50-interior-new.png";
import busInterior from "@/assets/bus-interior.webp";

export const vehicleGalleries: Record<string, string[]> = {
  breeza: [brezzaFront, brezzaRear],
  "innova-crysta": [innovaExtFront, innovaExtRear, innovaIntFront, innovaIntRear],
  fortuner: [fortunerSide, fortunerFront, fortunerAngle],
  "tempo-traveller-12": [tempoSide, tempo12Home, tempoFront, tempoInterior],
  "tempo-traveller-16": [tempoRear, tempoSide, tempoInterior],
  urbania: [urbania, urbaniaInterior],
  "bus-21": [bus21Main, bus21Side, bus21Interior],
  "bus-22": [bus22Main, bus22Front, bus22InteriorMaroon, bus22InteriorBeige],
  "bus-28": [busRed, bus40Front, busInterior],
  "bus-40": [bus40MegaFront, bus40MegaRear, bus40Side],
  "bus-40-yellow": [busYellow, bus40Front, bus40Side, bus40RearYellow],
  "bus-50": [bus50, bus50Front, bus50Interior],
  "bus-40-white": [busWhite, bus40WhiteFront, bus40WhiteRear, bus40WhiteInterior],
  "bus-40-eicher": [bus40EicherFront, bus40EicherInteriorBlue, bus40EicherInteriorYellow],
};
