export const site = {
  name: "Mega City Tours & Travells",
  shortName: "Mega City Travells",
  tagline: "Reliable Group Travel & Per KM Trips from Hyderabad",
  owner: "M Kondal Reddy",
  address:
    "Sri Sai Residency, Shop No.3, Beside More Super Market, Near Boduppa Kanan, Hyderabad - 500092",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500092",
  phones: ["9949949993", "9348889993"],
  whatsapp: "8919900181",
  email: "megacitytravells@gmail.com",
  hours: "9 AM to 9 PM",
  url: "https://megacitytoursandtravels.com",
} as const;

export const whatsappPrefill = `Hi Mega City Tours & Travells, I would like to get a quote for a trip.

Pickup Location:
Destination:
Travel Date:
Group Size:
Vehicle Preference:
Trip Type:`;

export const whatsappLink = (msg: string = whatsappPrefill) =>
  `https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = (phone: string = site.phones[0]) => `tel:+91${phone}`;
