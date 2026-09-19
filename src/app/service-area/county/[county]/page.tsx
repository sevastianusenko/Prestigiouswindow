import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import { counties, getCounty } from "@/lib/counties";
import { getTownsByCounty } from "@/lib/towns";
import { site } from "@/lib/site";
import { countyContentMap } from "@/content/service-area/counties";

export function generateStaticParams() {
  return counties.map((c) => ({ county: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/service-area/county/[county]">
): Promise<Metadata> {
  const { county: slug } = await props.params;
  const county = getCounty(slug);
  if (!county) return {};
  return {
    title: `Windows & Doors in ${county.name}, PA`,
    description: `Window and door replacement and repair across ${county.name}, PA. ${county.blurb}`,
  };
}

export default async function CountyPage(
  props: PageProps<"/service-area/county/[county]">
) {
  const { county: slug } = await props.params;
  const county = getCounty(slug);
  if (!county) notFound();

  const townsHere = getTownsByCounty(county.slug);
  const otherCounties = counties.filter((c) => c.slug !== county.slug);
  const Content = countyContentMap[county.slug];

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>Service Area · {county.distanceNote}</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl">
            Windows &amp; doors in {county.name}, PA
          </SectionHeading>
          <p className="mt-6 text-lg text-ink/75 max-w-lg">{county.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href="/repair-or-replace" variant="ghost-dark">
              Repair or Replace?
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={county.heroImage}
            alt={county.heroAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <Eyebrow>Towns we cover</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          {county.name}, town by town
        </SectionHeading>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {townsHere.map((t) => (
            <Link
              key={t.slug}
              href={`/service-area/${t.slug}`}
              className="rounded-lg border border-line bg-paper p-6 hover:bg-fog transition-colors group"
            >
              <span className="font-display text-xl font-semibold group-hover:text-gold transition-colors">
                {t.name}
              </span>
              <p className="mt-1 text-xs font-sans uppercase tracking-wide text-ink/50">
                {t.minutesFromBase} min from East Earl
              </p>
              <p className="mt-3 text-sm text-ink/70">{t.character}</p>
            </Link>
          ))}
        </div>
      </section>

      {Content && (
        <>
          <Divider className="max-w-7xl mx-auto" />
          <div className="article mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
            <Content />
          </div>
        </>
      )}

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Serving {county.name}</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-md">
            {county.distanceNote}
          </SectionHeading>
          <p className="mt-5 text-ink/70 max-w-md">
            {site.license} — licensed and insured to work throughout {county.name}.
            We measure on site before quoting, and the crew that quotes the job is
            usually the crew that shows up to do it.
          </p>
        </div>
        <QuoteForm compact />
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <Eyebrow>Also serving</Eyebrow>
        <SectionHeading as="h2" className="text-xl sm:text-2xl mb-8">
          The rest of our service area
        </SectionHeading>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm">
          {otherCounties.map((c) => (
            <Link
              key={c.slug}
              href={`/service-area/county/${c.slug}`}
              className="text-ink hover:text-gold"
            >
              {c.name} →
            </Link>
          ))}
          <Link href="/service-area" className="text-ink/60 hover:text-gold">
            Full service area →
          </Link>
        </div>
      </section>
    </>
  );
}
