import { site } from "@/data/site";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    image: `${site.url}/og-image.jpg`,
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
    openingHours: "Mo-Su 09:00-21:00",
    areaServed: [
      "Hyderabad",
      "Telangana",
      "Andhra Pradesh",
      "Karnataka",
      "Tamil Nadu",
      "Maharashtra",
    ],
    priceRange: "₹₹",
    sameAs: [],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
