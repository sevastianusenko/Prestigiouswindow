import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { coreTowns } from "@/lib/towns";
import { counties } from "@/lib/counties";
import { getTownsByCounty } from "@/lib/towns";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area",
  description: `Windows and doors, serving ${site.serviceCounty} and five neighboring counties from our base in ${site.baseTown}.`,
};

export default function ServiceAreaPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16">
        <Eyebrow>Service Area</Eyebrow>
        <SectionHeading as="h1" className="text-4xl sm:text-5xl max-w-2xl">
          Based in East Earl. Working six counties around it.
        </SectionHeading>
        <p className="mt-6 text-lg text-ink/75 max-w-2xl">
          We started with the towns closest to our shop, on purpose — it&apos;s
          easier to show up fast and stand behind the work when we&apos;re not
          driving an hour each way. That&apos;s still true, and it&apos;s still
          where we&apos;re fastest. But Lancaster County isn&apos;t an island:
          Berks, Chester, Lebanon, Dauphin, and York Counties all meet nearby,
          and we take jobs in every one of them.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-16">
        <Eyebrow>The six closest towns</Eyebrow>
        <SectionHeading as="h2" className="text-xl sm:text-2xl mb-8 max-w-xl">
          Where we&apos;re fastest
        </SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreTowns.map((t) => (
            <Link
              key={t.slug}
              href={`/service-area/${t.slug}`}
              className="rounded-lg border border-line bg-paper p-7 hover:bg-fog transition-colors group"
            >
              <span className="font-display text-2xl font-semibold group-hover:text-gold transition-colors">
                {t.name}
              </span>
              <p className="mt-1 text-xs font-sans uppercase tracking-wide text-ink/50">
                {t.county} · {t.minutesFromBase} min
              </p>
              <p className="mt-3 text-sm text-ink/70">{t.character}</p>
            </Link>
          ))}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <Eyebrow>The full service area</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          Six counties, thirty towns
        </SectionHeading>
        <p className="mt-4 text-ink/70 max-w-2xl">
          Every county below has its own page with real drive times and what
          actually makes it different to work in. Every town listed under it
          does too.
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {counties.map((county) => {
            const townsHere = getTownsByCounty(county.slug);
            return (
              <div
                key={county.slug}
                className="rounded-lg border border-line bg-paper p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <Link
                    href={`/service-area/county/${county.slug}`}
                    className="font-display text-2xl font-bold hover:text-gold transition-colors"
                  >
                    {county.name}
                  </Link>
                  <span className="font-sans text-xs uppercase tracking-wide text-ink/50">
                    {county.distanceNote}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink/70 max-w-2xl">{county.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 font-sans text-sm">
                  {townsHere.map((t, i) => (
                    <span key={t.slug} className="flex items-center gap-2">
                      <Link
                        href={`/service-area/${t.slug}`}
                        className="text-ink hover:text-gold underline underline-offset-4 decoration-line"
                      >
                        {t.name}
                      </Link>
                      {i !== townsHere.length - 1 && (
                        <span className="text-ink/30" aria-hidden>
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <p className="text-sm text-ink/60 max-w-xl">
          Don&apos;t see your town on one of these six county lists? Call{" "}
          {site.phoneDisplay} and ask — we take jobs outside this list case by
          case, especially if you&apos;re close to one of the towns above.
        </p>
      </section>
    </>
  );
}
