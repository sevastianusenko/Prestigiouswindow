import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Everything on this site is public marketing content: no admin area, no search
// result pages, no faceted URLs. There is nothing worth hiding from crawlers,
// and AI assistants are left allowed on purpose — being quoted in an answer about
// window repair in Lancaster County is free distribution, not a leak.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
