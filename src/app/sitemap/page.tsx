import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { posts } from "@/lib/blog";
import { counties } from "@/lib/counties";
import { getCategoriesFor, PARENT_LABEL, type ServiceParent } from "@/lib/services";
import { site } from "@/lib/site";
import { getTownsByCounty } from "@/lib/towns";

export const metadata: Metadata = {
  title: "Sitemap",
  description: `Every page on ${site.name}: window and door services, the towns and counties we cover, and the full archive of guides.`,
  alternates: { canonical: "/sitemap" },
};

const SERVICE_PARENTS: ServiceParent[] = [
  "windows/replacement",
  "windows/repair",
  "doors/replacement",
  "doors/repair",
];

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function LinkList({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="text-ink/75 hover:text-gold underline-offset-4 hover:underline">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-24">
      <Eyebrow>Sitemap</Eyebrow>
      <SectionHeading as="h1" className="text-4xl sm:text-5xl">
        Everything on this site, in one list.
      </SectionHeading>
      <p className="mt-6 text-lg text-ink/75 max-w-2xl">
        If you came looking for something specific and the menu didn&apos;t have
        it, it&apos;s almost certainly here. There&apos;s also an{" "}
        <a
          href="/sitemap.xml"
          className="text-gold underline underline-offset-4"
        >
          XML version
        </a>{" "}
        for search engines.
      </p>

      <div className="mt-14 space-y-12">
        <Block title="Windows &amp; doors">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PARENTS.map((parent) => (
              <div key={parent}>
                <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
                  <Link href={`/${parent}`} className="hover:text-ink">
                    {PARENT_LABEL[parent]}
                  </Link>
                </h3>
                <LinkList
                  links={getCategoriesFor(parent).map((c) => ({
                    href: `/${parent}/${c.slug}`,
                    label: c.name,
                  }))}
                />
              </div>
            ))}
          </div>
        </Block>

        <Block title="Deciding what to do">
          <LinkList
            links={[
              { href: "/repair-or-replace", label: "Repair or replace? How we tell the difference" },
              { href: "/old-homes", label: "Windows for older homes" },
            ]}
          />
        </Block>

        <Block title="Where we work">
          <p className="text-sm text-ink/60 mb-6">
            Based in {site.baseTown}, working across {site.serviceCounty} and the
            counties next to it.
          </p>
          <LinkList links={[{ href: "/service-area", label: "Service area overview" }]} />
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {counties.map((county) => (
              <div key={county.slug}>
                <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
                  <Link href={`/service-area/county/${county.slug}`} className="hover:text-ink">
                    {county.name}
                  </Link>
                </h3>
                <LinkList
                  links={getTownsByCounty(county.slug).map((t) => ({
                    href: `/service-area/${t.slug}`,
                    label: `${t.name}, PA`,
                  }))}
                />
              </div>
            ))}
          </div>
        </Block>

        <Block title="Guides &amp; articles">
          <LinkList
            links={[
              { href: "/blog", label: "All articles" },
              ...posts.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
            ]}
          />
        </Block>

        <Block title="Company">
          <LinkList
            links={[
              { href: "/about", label: "About us" },
              { href: "/contact", label: "Get a quote" },
              { href: "/privacy", label: "Privacy policy" },
              { href: "/terms", label: "Terms of use" },
            ]}
          />
        </Block>
      </div>
    </div>
  );
}
