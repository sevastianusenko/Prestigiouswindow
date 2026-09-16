import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Window Repair",
  description:
    "Window repair in Lancaster County, PA — fogged glass, failed seals, sash balances, and screens. We fix what's fixable instead of defaulting to replacement.",
};

const repairs = [
  {
    name: "Fogged or foggy glass",
    detail:
      "The seal between the panes has failed and moisture got in. Often the sash can be re-glazed with a new insulated unit — the frame stays.",
  },
  {
    name: "Sash won't stay up, or is painted shut",
    detail:
      "Usually a balance or spring issue, sometimes decades of repainting. Fixable without touching the frame.",
  },
  {
    name: "Drafts around a window that otherwise looks fine",
    detail: "Weatherstripping and glazing compound wear out long before the window does.",
  },
  {
    name: "Sliding or double-hung roller and track wear",
    detail: "Hardware replacement — a fraction of the cost of a new unit.",
  },
  {
    name: "Screen tears or bent frames",
    detail: "Rescreened on site or shop-repaired, usually same visit.",
  },
];

export default function WindowRepairPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>Windows / Repair</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl">
            Most window problems aren&apos;t window replacements.
          </SectionHeading>
          <p className="mt-6 text-lg text-ink/75 max-w-lg">
            Fogged glass, a stuck sash, a draft you can feel with your hand — most of
            what sends people looking for &quot;replacement windows&quot; is
            actually a repair. We tell you which one it is before we quote either.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href="/windows/replacement" variant="ghost-dark">
              Frame&apos;s actually failed? →
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photos/window-porch-pgt.jpg"
              alt="A double-hung window with tropical landscaping visible through clear glass"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>What we actually fix</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-2xl">
          If it&apos;s on this list, it&apos;s a repair — not a full replacement.
        </SectionHeading>
        <div className="mt-10 divide-y divide-line">
          {repairs.map((r) => (
            <div key={r.name} className="grid sm:grid-cols-[1fr_2fr] gap-3 sm:gap-10 py-6">
              <h3 className="font-display text-lg font-semibold">{r.name}</h3>
              <p className="text-ink/70 text-sm">{r.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/60 max-w-2xl">
          Frame rotted through, or you&apos;re updating several windows at once?{" "}
          <Link href="/windows/replacement" className="text-gold underline underline-offset-4">
            That&apos;s a replacement job
          </Link>
          .
        </p>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Old homes especially</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-md">
            If the window is original to the house, repair is often the better call.
          </SectionHeading>
          <p className="mt-5 text-ink/70 max-w-md">
            Original wood sashes on an older Lancaster County home are frequently
            better built than a big-box replacement unit — the wood is usually
            old-growth and denser than what&apos;s sold today. Where it makes sense,
            we restore rather than replace.
          </p>
          <ButtonLink href="/old-homes" variant="ghost-dark" className="mt-6">
            Windows &amp; doors for older homes
          </ButtonLink>
        </div>
        <QuoteForm />
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <p className="text-xs text-ink/50">{site.license} · {site.serviceCounty}</p>
      </div>
    </>
  );
}
