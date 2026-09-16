import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Door Replacement",
  description:
    "Entry, patio, sliding, and storm door replacement in Lancaster County, PA — fitted and hung by a licensed local crew.",
};

const doorTypes = [
  {
    name: "Entry doors",
    detail: "Fiberglass, steel, or wood — the door that gets used, and judged, the most.",
  },
  {
    name: "Patio & sliding doors",
    detail: "Full-panel replacement, track and frame included — not just the glass.",
  },
  {
    name: "French doors",
    detail: "Paired doors, hung to close flush against each other without a gap or a fight.",
  },
  {
    name: "Storm doors",
    detail: "Added protection and ventilation ahead of an entry door — sized to match, not generic.",
  },
];

export default function DoorReplacementPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>Doors / Replacement</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl">
            A door that closes the same way in July and January.
          </SectionHeading>
          <p className="mt-6 text-lg text-ink/75 max-w-lg">
            Entry, patio, sliding, and storm doors — replaced and hung so the frame
            stays square through a full range of Pennsylvania weather, not just on
            install day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href="/doors/repair" variant="ghost-dark">
              Just needs a repair? →
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photos/door-slider-white-patio.jpg"
              alt="A white multi-panel sliding patio door opening onto a brick patio"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>What we install</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          Doors, by type
        </SectionHeading>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {doorTypes.map((d) => (
            <div key={d.name} className="rounded-lg border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">{d.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Why doors first</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-md">
            We treat doors as their own trade, not an add-on to a window job.
          </SectionHeading>
          <p className="mt-5 text-ink/70 max-w-md">
            A door gets hung, not just installed — the hinge-side jamb has to sit
            plumb or the door fights you every day after. It&apos;s a smaller job than
            a full window replacement, but getting it wrong is more noticeable, every
            single day.
          </p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
