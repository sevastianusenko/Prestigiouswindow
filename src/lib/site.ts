export const site = {
  name: "Prestigious Windows & Doors",
  shortName: "Prestigious",
  tagline: "Windows & Doors",
  domain: "prestigiouswindowsdoors.com",
  // Canonical origin. The apex 308-redirects to www, so www is the real home —
  // metadata, sitemap and robots must all agree on this one.
  url: "https://www.prestigiouswindowsdoors.com",
  phoneDisplay: "(717) 679-1989",
  phoneHref: "tel:+17176791989",
  email: "office@prestigiouswindowsdoors.com",
  address: {
    street: "297 Black Creek Rd",
    city: "East Earl",
    region: "PA",
    zip: "17519",
  },
  hoursDisplay: "Mon–Sat 7am–6pm",
  // Official profiles — all emitted as schema sameAs so Google ties them to the business.
  // `social` ones also get footer icons; `listings` are schema-only.
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61595134870132",
    houzz: "https://www.houzz.com/pro/webuser-373924482/prestigious-windows-and-doors",
    nextdoor: "https://nextdoor.com/pages/prestigious-windows-doors-east-earl-pa/",
    provenexpert: "https://www.provenexpert.com/en-us/prestigious-windows-doors/",
  },
  listings: {
    manta: "https://www.manta.com/c/m1h3ldc/prestigious-windows-doors",
    alignable: "https://www.alignable.com/east-earl-pa/prestigious-windows-doors",
    brownbook: "https://www.brownbook.net/business/55588378/prestigious-windows-doors",
  },
  license: "PA HIC #PA227671",
  serviceCounty: "Lancaster County, PA",
  baseTown: "East Earl, PA",
};

export const primaryNav = [
  {
    label: "Windows",
    href: "/windows/replacement",
    children: [
      { label: "Replacement", href: "/windows/replacement" },
      { label: "Repair", href: "/windows/repair" },
    ],
  },
  {
    label: "Doors",
    href: "/doors/replacement",
    children: [
      { label: "Replacement", href: "/doors/replacement" },
      { label: "Repair", href: "/doors/repair" },
    ],
  },
  { label: "Repair or Replace?", href: "/repair-or-replace" },
  { label: "Service Area", href: "/service-area" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;
