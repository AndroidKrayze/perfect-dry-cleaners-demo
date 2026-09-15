import { siteConfig } from "@/lib/site.config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["DryCleaningOrLaundry", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "London",
      addressRegion: "England",
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    areaServed: siteConfig.areaServed.map((a) => ({
      "@type": "Place",
      name: a,
    })),
    openingHoursSpecification: siteConfig.openingHoursSpecification.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    url: "https://androidkrayze.github.io/perfect-dry-cleaners-demo/",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
