import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Repair or Replace?",
  description:
    "A straight answer on whether your windows or doors need repair or full replacement — before you get a quote for either.",
};

const repairSigns = [
  "The frame is straight and structurally sound",
  "Glass is intact — the problem is the seal, the hardware, or the weatherstripping",
  "Only one or two units are affected, not the whole house",
  "The issue appeared suddenly, rather than building for years",
];

const replaceSigns = [
  "Visible rot, warping, or soft wood in the frame",
  "Cold air you can feel with your hand near a closed window or door",
  "The unit has been repaired more than once for the same issue",
  "You're renovating several openings at once anyway",
];

export default function RepairOrReplacePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16">
        <Eyebrow>The question most quotes skip</Eyebrow>
        <SectionHeading as="h1" className="text-4xl sm:text-5xl max-w-3xl">
          Repair or replace? Here&apos;s how to tell before you call anyone.
        </SectionHeading>
        <p className="mt-6 text-lg text-ink/75 max-w-2xl">
          Companies that only sell replacement will tell you to replace. Companies
          that only do repair will tell you to repair. We do both, so here&apos;s the
          honest version — figure out which camp you&apos;re in, then go straight to
          the right page.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-5 mb-24">
        <div id="repair" className="rounded-lg border border-line bg-paper p-8 sm:p-12 scroll-mt-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold">
            Lean repair if —
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-3">
            The bones are good
          </h2>
          <ul className="mt-6 space-y-3">
            {repairSigns.map((s) => (
              <li key={s} className="flex gap-3 text-ink/75 text-sm border-t border-line pt-3">
                <span className="text-gold font-sans">—</span>
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/windows/repair" className="text-xs">Window Repair</ButtonLink>
            <ButtonLink href="/doors/repair" variant="ghost-dark" className="text-xs">Door Repair</ButtonLink>
          </div>
        </div>

        <div id="replace" className="rounded-lg border border-line bg-paper p-8 sm:p-12 scroll-mt-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold">
            Lean replace if —
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-3">
            The unit has failed
          </h2>
          <ul className="mt-6 space-y-3">
            {replaceSigns.map((s) => (
              <li key={s} className="flex gap-3 text-ink/75 text-sm border-t border-line pt-3">
                <span className="text-gold font-sans">—</span>
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/windows/replacement" className="text-xs">Window Replacement</ButtonLink>
            <ButtonLink href="/doors/replacement" variant="ghost-dark" className="text-xs">Door Replacement</ButtonLink>
          </div>
        </div>
      </div>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Still not sure?</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          That&apos;s normal — most people can&apos;t tell from the inside.
        </SectionHeading>
        <p className="mt-5 text-ink/70 max-w-2xl">
          Send a couple of photos, or have someone come look. It&apos;s a five-minute
          call for us to make, and it&apos;s free either way — whether that call
          ends in a repair job or a replacement quote.
        </p>
        <ButtonLink href="/contact" className="mt-8">
          Ask Us Directly
        </ButtonLink>
        <p className="mt-6 text-sm text-ink/50">
          Also worth a look:{" "}
          <Link href="/old-homes" className="text-gold underline underline-offset-4">
            windows &amp; doors on older homes
          </Link>{" "}
          — the repair-vs-replace math is different there.
        </p>
      </section>
    </>
  );
}
