import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { counties } from "@/lib/counties";
import { serviceCategories } from "@/lib/services";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";

const BASE = site.url;

// Google only trusts <lastmod> when it is accurate, so we set it solely where a
// real date exists (blog publication dates) and leave it off everywhere else
// rather than stamping every page with the build time on each deploy.
// Posts sit on an editorial calendar, so some carry a publication date that has
// not arrived yet. A future <lastmod> is invalid, and substituting the build
// time would restamp every post on every deploy until Google stopped believing
// any of our dates. Omitting it is the honest answer.
function publishedAt(date: string): Date | undefined {
  const parsed = new Date(`${date}T00:00:00Z`);
  return parsed > new Date() ? undefined : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/windows/replacement`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/windows/repair`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/doors/replacement`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/doors/repair`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/repair-or-replace`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/old-homes`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/service-area`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/sitemap`, changeFrequency: "monthly", priority: 0.2 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const categoryPages: MetadataRoute.Sitemap = serviceCategories.map((c) => ({
    url: `${BASE}/${c.parent}/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const countyPages: MetadataRoute.Sitemap = counties.map((c) => ({
    url: `${BASE}/service-area/county/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const townPages: MetadataRoute.Sitemap = towns.map((t) => ({
    url: `${BASE}/service-area/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: publishedAt(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...countyPages,
    ...townPages,
    ...blogPages,
  ];
}
