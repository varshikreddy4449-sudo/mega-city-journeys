import { site } from "@/data/site";

const services = [
  "Group Travel",
  "Per KM Trips",
  "Local Trips",
  "Outstation Trips",
  "Corporate Travel",
  "School and College Trips",
  "Pilgrimage Trips",
  "Wedding and Event Transport",
  "Tempo Traveller Rental",
  "Bus Rental",
  "Urbania Rental",
];

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    image: `${site.url}/android-chrome-512x512.png`,
    logo: `${site.url}/android-chrome-512x512.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sri Sai Residency, Shop No.3, Beside More Super Market, Near Boduppa Kanan",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: site.pincode,
      addressCountry: "IN",
    },
    telephone: site.phones.map((p) => `+91${p}`),
    email: site.email,
    url: site.url,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+91${site.phones[0]}`,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "te", "hi"],
      },
      {
        "@type": "ContactPoint",
        telephone: `+91${site.whatsapp}`,
        contactType: "WhatsApp",
        areaServed: "IN",
        availableLanguage: ["en", "te", "hi"],
      },
    ],
    areaServed: [
      "Hyderabad",
      "Telangana",
      "Andhra Pradesh",
      "Karnataka",
      "Tamil Nadu",
      "Maharashtra",
    ],
    priceRange: "₹₹",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
    sameAs: [],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
