import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Door Repair",
  description:
    "Door repair in Lancaster County, PA — sticking doors, rotted jambs, sliding door rollers, and storm door hardware.",
};

const repairs = [
  {
    name: "Door sticks, drags, or won't latch",
    detail: "Usually a settled frame or worn hinge, not a reason to replace the whole unit.",
  },
  {
    name: "Rot at the bottom of the jamb or threshold",
    detail: "Common where a door faces weather directly — often repairable if caught before it spreads.",
  },
  {
    name: "Sliding door won't glide, or has come off the track",
    detail: "Rollers and tracks wear out well before the door panel does.",
  },
  {
    name: "Storm door closer, hinge, or screen damage",
    detail: "Hardware-level fixes, usually done in one visit.",
  },
  {
    name: "Draft around a door that looks fine",
    detail: "Weatherstripping and threshold adjustment — cheap, and often the whole fix.",
  },
];

export default function DoorRepairPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>Doors / Repair</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl">
            Before you replace a door, have someone actually look at it.
          </SectionHeading>
          <p className="mt-6 text-lg text-ink/75 max-w-lg">
            A door that sticks or won&apos;t latch is almost never the whole unit
            failing — it&apos;s a hinge, a settled frame, or a worn roller. We fix
            what&apos;s fixable and say so plainly when it isn&apos;t.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href="/doors/replacement" variant="ghost-dark">
              Door&apos;s actually done? →
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photos/door-waverly.jpg"
              alt="A paneled wood entry door with transom window and iron railings"
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
          Common calls, and what they usually turn out to be
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
          Jamb rotted through completely, or the door&apos;s been out of square for
          years?{" "}
          <Link href="/doors/replacement" className="text-gold underline underline-offset-4">
            That one&apos;s a replacement
          </Link>
          .
        </p>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Get it looked at</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-md">
            A five-minute look usually tells us which one it is.
          </SectionHeading>
          <p className="mt-5 text-ink/70 max-w-md">
            Send a couple of photos or have us out for a quick look — most door
            repairs are diagnosed on sight, before any quote is written.
          </p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
