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
import urbaniaInterior2 from "@/assets/urbania-interior-2.png";
import urbaniaInterior3 from "@/assets/urbania-interior-3.png";
import bus22Main from "@/assets/bus-22-main.png";
import bus22Front from "@/assets/bus-22-front.png";
import bus22InteriorMaroon from "@/assets/bus-22-interior-maroon.png";
import bus22InteriorBeige from "@/assets/bus-22-interior-beige.png";
import busRed from "@/assets/vehicle-bus-40.webp";
import busYellow from "@/assets/vehicle-bus-22.webp";
import bus40RedFront from "@/assets/bus-40-red-front.png";
import bus40RedFront2 from "@/assets/bus-40-red-front2.png";
import bus40RedRear from "@/assets/bus-40-red-rear.png";
import bus40RedInterior from "@/assets/bus-40-red-interior.png";
import busWhite from "@/assets/bus-40-white-main.png";
import bus40EicherNewSide from "@/assets/bus-40-eicher-new-side.png";
import bus40EicherNewFront from "@/assets/bus-40-eicher-new-front.png";
import bus40EicherNewInterior from "@/assets/bus-40-eicher-new-interior.png";
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
  urbania: [urbania, urbaniaInterior, urbaniaInterior2, urbaniaInterior3],
  
  "bus-22": [bus22Main, bus22Front, bus22InteriorMaroon, bus22InteriorBeige],
  "bus-28": [busRed, bus40Front, busInterior],
  "bus-40": [bus40RedFront, bus40RedFront2, bus40RedRear, bus40RedInterior],
  "bus-40-yellow": [busYellow, bus40Side, bus40RearYellow],
  "bus-50": [bus50, bus50Front, bus50Interior],
  "bus-40-white": [busWhite, bus40WhiteFront, bus40WhiteRear, bus40WhiteInterior],
  "bus-40-eicher": [bus40EicherNewSide, bus40EicherNewFront, bus40EicherNewInterior],
};
