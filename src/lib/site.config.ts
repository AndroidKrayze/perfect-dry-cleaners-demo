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
    "https://www.google.com/maps/search/?api=1&query=55+Abbey+Road+London+NW8+0AD",
  mapsEmbed:
    "https://maps.google.com/maps?q=55%20Abbey%20Road%2C%20London%20NW8%200AD&z=16&output=embed",
  areaServed: ["St John's Wood", "Abbey Road", "Swiss Cottage", "Maida Vale", "NW8"],
  ownerDisplayName: "Emad",
  claimedDomain: "perfectdrycleaners.com",
  domainStatusNote:
    "Directories still list perfectdrycleaners.com — right now that URL returns a 502. This page is what guests should see.",
  collectionNote:
    "Free collection & delivery — ask about today’s threshold (often mentioned around £25).",
  collectionConfirm: "CONFIRM with Emad before stating a hard £25 rule as current policy.",
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
    "Abbey Road",
    "Same-day",
    "Collection & delivery",
    "Loved by locals",
  ],
  services: [
    {
      id: "dry-cleaning",
      title: "Dry cleaning",
      blurb: "Everyday suiting to delicate fabrics — careful, quiet care.",
      collection: true,
    },
    {
      id: "shirts",
      title: "Shirt service",
      blurb: "Crisp shirts ready for the week. Call ahead for same-day.",
      collection: true,
    },
    {
      id: "laundry",
      title: "Laundry wash",
      blurb: "Wash, dry and fold — neighbourhood convenience.",
      collection: true,
    },
    {
      id: "alterations",
      title: "Alterations & repairs",
      blurb: "Hems, zips and small repairs finished with care.",
      collection: false,
    },
    {
      id: "household",
      title: "Household",
      blurb: "Curtains, rugs, duvets — ask about collection.",
      collection: true,
    },
    {
      id: "bridal",
      title: "Bridal & wedding",
      blurb: "Wedding dress cleaning treated with quiet precision.",
      collection: false,
    },
    {
      id: "leather",
      title: "Leather & suede",
      blurb: "Jackets, bags and soft goods — enquire for care.",
      collection: false,
    },
    {
      id: "shoes",
      title: "Shoe repair",
      blurb: "Sole, heel and small leather repairs.",
      collection: false,
    },
    {
      id: "same-day",
      title: "Same-day",
      blurb: "When possible — call ahead and we’ll do our best.",
      collection: false,
    },
  ],
  reviews: [
    {
      quote:
        "Nothing is ever too much trouble. Friendly staff and owners — we’ve been coming for years.",
      attribution: "Local regular",
      source: "Public review",
    },
    {
      quote:
        "Convenient pickup and delivery. Reasonably priced for St John’s Wood, and the quality is always there.",
      attribution: "Faisal L.",
      source: "CleanersCentral",
    },
    {
      quote:
        "Free pickup & delivery made life easy. Reliable neighbourhood dry cleaners on Abbey Road.",
      attribution: "Sonia K.",
      source: "Directory review",
    },
    {
      quote:
        "Long-standing favourite — shirts come back crisp and the team always remembers you.",
      attribution: "Neighbourhood guest",
      source: "Public review",
    },
  ],
  priceLine: "Enquire or call for today’s prices — quality care for Abbey Road.",
  demoBy: "Demo site",
} as const;

export type SiteConfig = typeof siteConfig;
