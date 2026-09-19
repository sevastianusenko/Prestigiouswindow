import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { towns, getTown, getTownsByCounty } from "@/lib/towns";
import { getCounty } from "@/lib/counties";
import { site } from "@/lib/site";
import { townContentMap } from "@/content/service-area/towns";

const photoByFocus = {
  windows: "/photos/window-double-hung.jpg",
  doors: "/photos/door-slider-black-frame.jpg",
  both: "/photos/hero-finished-exterior.jpg",
} as const;

export function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

export async function generateMetadata(
  props: PageProps<"/service-area/[town]">
): Promise<Metadata> {
  const { town: slug } = await props.params;
  const town = getTown(slug);
  if (!town) return {};
  return {
    title: `Windows & Doors in ${town.name}, PA`,
    description: `Window and door replacement and repair in ${town.name}, PA. ${town.blurb}`,
  };
}

export default async function TownPage(props: PageProps<"/service-area/[town]">) {
  const { town: slug } = await props.params;
  const town = getTown(slug);
  if (!town) notFound();

  const others = getTownsByCounty(town.countySlug).filter((t) => t.slug !== town.slug);
  const county = getCounty(town.countySlug);
  const Content = townContentMap[town.slug];

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>{town.county} · {town.minutesFromBase} min from East Earl</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl">
            Windows &amp; doors in {town.name}, PA
          </SectionHeading>
          <p className="mt-6 text-lg text-ink/75 max-w-lg">{town.blurb}</p>
          <p className="mt-4 text-ink/60 max-w-lg">
            {town.name} is {town.character}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href="/repair-or-replace" variant="ghost-dark">
              Repair or Replace?
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={photoByFocus[town.focus]}
              alt="Recent window and door installation work by Prestigious Windows & Doors"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Window Replacement", href: "/windows/replacement" },
          { label: "Window Repair", href: "/windows/repair" },
          { label: "Door Replacement", href: "/doors/replacement" },
          { label: "Door Repair", href: "/doors/repair" },
        ].map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-lg border border-line bg-paper p-6 hover:bg-fog transition-colors font-display text-lg font-semibold"
          >
            {s.label} →
          </Link>
        ))}
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
          <Eyebrow>Serving {town.name}</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-md">
            {site.baseTown === town.name + ", PA"
              ? "Right in our own backyard."
              : `${town.minutesFromBase} minutes from our shop in ${site.baseTown}.`}
          </SectionHeading>
          <p className="mt-5 text-ink/70 max-w-md">
            {site.license} — licensed and insured to work in {town.county}. We
            measure on site before quoting, and the crew that quotes the job is
            usually the crew that shows up to do it.
          </p>
        </div>
        <QuoteForm compact />
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <Eyebrow>Nearby</Eyebrow>
        <SectionHeading as="h2" className="text-xl sm:text-2xl mb-8">
          Also serving
        </SectionHeading>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm">
          {others.map((t) => (
            <Link key={t.slug} href={`/service-area/${t.slug}`} className="text-ink hover:text-gold">
              {t.name}, PA →
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
