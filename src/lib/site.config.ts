export const siteConfig = {
  name: "Perfect Dry Cleaners",
  shortName: "Perfect",
  tagline: "Quiet luxury care on Abbey Road.",
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
  hours: [
    { days: "Monday – Friday", open: "08:00", close: "19:00", closed: false },
    { days: "Saturday", open: "08:00", close: "18:00", closed: false },
    { days: "Sunday", open: "", close: "", closed: true },
  ],
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      dayOfWeek: "Saturday",
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
        "Never in a million years did I anticipate writing a review of a dry cleaners! What a wonderful experience. The staff are friendly, helpful, kind and considerate. I went in with my 3 children. Each of them were made to feel special. Plus my cleaning and alterations were excellently done.",
      attribution: "Hannah Bateman",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "Absolutely impeccable service. Offered amazing advice on my vintage clothing items and went above and beyond to help — even though I arrived shortly before close. Felt like a very valued customer.",
      attribution: "Laura Jacobs",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "Brilliant service — they collected my wife's wedding dress for cleaning and what really impressed me was the way it was packaged when it was delivered back. Really neat.",
      attribution: "Grant Whiting",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "Took three of my shoes here to have them re-heeled and soled. Now they're like new! They even cleaned and polished my leather boots. Really appreciated the extra mile. Will return.",
      attribution: "May Hoang",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "The staff and the owners are very friendly and helpful. I've been using this service for many years. Nothing is ever too much trouble, and they're great at removing stains — clean, tidy, and recommended without any doubt.",
      attribution: "Noor F.",
      source: "Google",
      stars: 5,
    },
    {
      quote:
        "As a customer I have been going to this dry cleaners for many years. Even since I moved to a different part of London, I still go back. Their customer service is excellent — and most importantly, the quality of their work.",
      attribution: "A K A",
      source: "Google",
      stars: 5,
    },
  ],
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
  ],
  priceLine: "Call for today's prices — quality care, Abbey Road standards.",
} as const;

export type SiteConfig = typeof siteConfig;
