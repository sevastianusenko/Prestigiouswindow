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
  // Official profiles — also emitted as schema sameAs so Google ties them to the business.
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61595134870132",
    houzz: "https://www.houzz.com/pro/webuser-373924482/prestigious-windows-and-doors",
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
