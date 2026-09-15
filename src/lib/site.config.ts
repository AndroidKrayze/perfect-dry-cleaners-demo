export const siteConfig = {
  name: "Perfect Dry Cleaners",
  shortName: "Perfect",
  tagline: "Quiet luxury on Abbey Road.",
  description:
    "Premium dry cleaning, shirt service, household, bridal and leather care on Abbey Road, St John's Wood. Same-day when possible. Collection & delivery on request.",
  phoneDisplay: "020 7624 3420",
  phoneTel: "+442076243420",
  phoneHref: "tel:+442076243420",
  address: {
    line1: "55 Abbey Road",
    line2: "St John's Wood",
    city: "London",
    postcode: "NW8 0AD",
    full: "55 Abbey Road, St John's Wood, London NW8 0AD",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Perfect+Dry+Cleaners+55+Abbey+Road+London+NW8+0AD",
  mapsEmbed:
    "https://maps.google.com/maps?q=Perfect%20Dry%20Cleaners%2C%2055%20Abbey%20Road%2C%20London%20NW8%200AD&z=16&output=embed",
  googleMapsPlaceUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJg80KQZ8adkgRtMSBoJ6T5ck",
  google: {
    rating: 4.1,
    reviewCount: 56,
    ratingLabel: "4.1",
    source: "Google",
  },
  areaServed: ["St John's Wood", "Abbey Road", "Swiss Cottage", "Maida Vale", "NW8"],
  ownerDisplayName: "Emad",
  claimedDomain: "perfectdrycleaners.com",
  domainStatusNote:
    "Directories still list perfectdrycleaners.com — that address currently returns a 502. Call or visit us on Abbey Road in the meantime.",
  suggestedDomains: [
    { domain: "perfectdrycleaners.com", note: "Fix / claim" },
    { domain: "perfectdrycleaners.co.uk", note: "Available to secure" },
    { domain: "abbeyroadperfect.co.uk", note: "Available to secure" },
  ],
  collectionNote:
    "Collection & delivery available on request for St John's Wood and nearby NW8 — call to arrange.",
  hoursNote: "Hours may vary — call us to confirm before you visit.",
  // HOURS CONFLICT: Google Maps pack (2026-09-15) lists Mon–Sat 8AM–6PM, Sun closed.
  // Earlier directories listed Mon–Fri 8–7 / Sat 8–6. Using Google hours as demo default;
  // keep soft confirm note above. Verify with the shop before printing materials.
  hours: [
    { days: "Monday – Saturday", open: "08:00", close: "18:00", closed: false },
    { days: "Sunday", open: "", close: "", closed: true },
  ],
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  amenities: [
    { label: "Debit cards", confirm: true },
    { label: "Street parking", confirm: true },
    { label: "Free Wi-Fi", confirm: true },
    { label: "Bike parking", confirm: true },
  ],
  trustStrip: [
    "Google 4.1 · 56 reviews",
    "Abbey Road · NW8",
    "Same-day when possible",
    "Collection & delivery",
  ],
  services: [
    {
      id: "dry-cleaning",
      title: "Dry cleaning",
      blurb:
        "Suits, coats and everyday pieces returned with a careful finish — the quiet standard Abbey Road expects.",
      collection: true,
    },
    {
      id: "shirts",
      title: "Shirt service",
      blurb:
        "Crisp, hand-finished shirts ready for the week. Call ahead when you need them same-day.",
      collection: true,
    },
    {
      id: "laundry",
      title: "Laundry wash",
      blurb:
        "Wash, dry and fold without the fuss — neighbourhood convenience with boutique attention.",
      collection: true,
    },
    {
      id: "alterations",
      title: "Alterations & repairs",
      blurb:
        "Hems, zips, soles and small repairs finished properly — the kind of care that keeps favourites in rotation.",
      collection: false,
    },
    {
      id: "household",
      title: "Household",
      blurb:
        "Curtains, rugs, duvets and bedding — ask about collection so larger pieces never leave you stranded.",
      collection: true,
    },
    {
      id: "bridal",
      title: "Bridal & wedding",
      blurb:
        "Wedding dresses and formal wear treated with quiet precision — from cleaning to careful packaging.",
      collection: false,
    },
    {
      id: "leather",
      title: "Leather & suede",
      blurb:
        "Jackets, bags and soft goods looked after with specialist care. Enquire before you drop them in.",
      collection: false,
    },
    {
      id: "shoes",
      title: "Shoe repair",
      blurb:
        "Heels, soles and polish that bring shoes back to life — locals return for the extra mile.",
      collection: false,
    },
    {
      id: "same-day",
      title: "Same-day",
      blurb:
        "When the diary allows, we move quickly. Call ahead and we'll do everything we can.",
      collection: false,
    },
  ],
  reviews: [
    {
      quote:
        "Took three of my shoes here to have them re-heeled and soled. Now they're like new! They even cleaned and polished my leather boots. Really appreciated the extra mile. Will return.",
      attribution: "May Hoang",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "As a customer I have been going to this Dry Cleaners for many years, even since I moved to a different part of London, I still go back to perfect dry cleaners. Their customer service is excellent, and, most importantly, the quality of their work.",
      attribution: "A K A",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "Very professional and reasonable price, I have been using their services since 2009, I have not once been disappointed. I really do recommend them. Great job guys, keep it up!",
      attribution: "Sofia Peterson",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "I have been a customer for more than 5 years. Ari and his team are amazing. They are focused on the customer and have always made sure my items are handled with care. I highly recommend these folks.",
      attribution: "Sean Sears",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "The staff and the owners are very friendly and helpful, I have been using this service for many years. Nothing ever too much trouble, and they're great at removing stains — great value for money. Clean and tidy.",
      attribution: "Noor food Yorkshire",
      source: "Google",
      stars: 5,
    },
  ],
  // Gallery: hero + shop-1..5 + interior-1/2 + photo-6 (finished garment).
  // Skipped photo-3/4/5/7 — customer complaint / damaged-goods close-ups, not pitch-fit.
  gallery: [
    {
      src: "/assets/hero.jpg",
      alt: "Perfect Dry Cleaners storefront at 55 Abbey Road, St John's Wood",
      caption: "55 Abbey Road",
    },
    {
      src: "/assets/shop-1.jpg",
      alt: "Service counter and team at Perfect Dry Cleaners",
      caption: "At the counter",
    },
    {
      src: "/assets/interior-1.jpg",
      alt: "Garment rails and service counter inside Perfect Dry Cleaners",
      caption: "Ready for collection",
    },
    {
      src: "/assets/interior-2.jpg",
      alt: "Team at the counter inside Perfect Dry Cleaners on Abbey Road",
      caption: "The team",
    },
    {
      src: "/assets/shop-2.jpg",
      alt: "Interior rails and garment care at Perfect Dry Cleaners",
      caption: "Inside the shop",
    },
    {
      src: "/assets/shop-3.jpg",
      alt: "Perfect Dry Cleaners on Abbey Road with neighbouring cafés",
      caption: "On the high street",
    },
    {
      src: "/assets/shop-4.jpg",
      alt: "Street view of Perfect Dry Cleaners at 55 Abbey Road",
      caption: "Abbey Road frontage",
    },
    {
      src: "/assets/shop-5.jpg",
      alt: "Close view of Perfect Dry Cleaners shopfront and window services",
      caption: "Shopfront detail",
    },
    {
      src: "/assets/photo-6.jpg",
      alt: "Freshly cleaned blouse with Perfect Dry Cleaners care tag",
      caption: "Finished with care",
    },
  ],
  priceLine: "Call for today's prices — quality care, Abbey Road standards.",
} as const;

export type SiteConfig = typeof siteConfig;
