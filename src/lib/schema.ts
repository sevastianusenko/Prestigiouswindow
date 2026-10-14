import { site } from "@/lib/site";

// Page-level JSON-LD builders. The sitewide business entity lives in
// app/layout.tsx under `${site.url}/#business`; everything here points at it
// instead of repeating address and phone on every page.

export const BUSINESS_ID = `${site.url}/#business`;

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path === "/" ? "/" : c.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  path,
  description,
  area,
}: {
  name: string;
  path: string;
  description?: string;
  /** Defaults to Lancaster County. Pass a City for town pages. */
  area?: { type: "City" | "AdministrativeArea"; name: string };
}) {
  const served = area ?? { type: "AdministrativeArea", name: site.serviceCounty };
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    url: `${site.url}${path}`,
    ...(description ? { description } : {}),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": served.type, name: served.name },
  };
}
