export const site = {
  name: "Prestigious Windows & Doors",
  shortName: "Prestigious",
  tagline: "Windows & Doors",
  domain: "prestigiouswindowsdoors.com",
  // Canonical origin. The apex 308-redirects to www, so www is the real home —
  // metadata, sitemap and robots must all agree on this one.
  url: "https://www.prestigiouswindowsdoors.com",
  // Placeholder — 555 exchange is reserved for fiction, replace before launch.
  phoneDisplay: "(717) 555-0142",
  phoneHref: "tel:+17175550142",
  email: "hello@prestigiouswindowsdoors.com",
  // Placeholder license number — replace with the real PA HIC registration before launch.
  license: "PA HIC #PA000000",
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
