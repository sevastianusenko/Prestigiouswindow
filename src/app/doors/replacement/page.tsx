import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import { Faq } from "@/components/ui/Faq";
import { DoorIcon, PatioSliderIcon, FrenchDoorIcon, StormDoorIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Door Replacement",
  description:
    "Entry, patio, sliding, French, and storm door replacement in Lancaster County, PA — fiberglass, steel, wood, and vinyl, fitted and hung by a licensed local crew.",
};

const doorTypes = [
  {
    icon: DoorIcon,
    name: "Entry doors",
    detail: "Fiberglass, steel, or wood — the door that gets used, and judged, the most.",
  },
  {
    icon: PatioSliderIcon,
    name: "Patio & sliding doors",
    detail: "Full-panel replacement, track and frame included — not just the glass.",
  },
  {
    icon: FrenchDoorIcon,
    name: "French doors",
    detail: "Paired doors, hung to close flush against each other without a gap or a fight.",
  },
  {
    icon: StormDoorIcon,
    name: "Storm doors",
    detail: "Added protection and ventilation ahead of an entry door — sized to match, not generic.",
  },
];

const signs = [
  "The door drafts or feels cold to stand near, even with weatherstripping",
  "It's been repaired more than once for the same hinge, lock, or latch issue",
  "Visible rot, warping, or soft wood anywhere in the frame or panel",
  "The frame itself is out of square, not just the door hung wrong",
  "Glass in the door or sidelights is cracked, fogged, or beyond a spot repair",
];

const materials = [
  {
    name: "Fiberglass",
    detail:
      "Holds up to weather and temperature swings better than wood, takes paint or a wood-grain finish well, and is the most common entry door material we install today.",
  },
  {
    name: "Steel",
    detail:
      "The most affordable option with real security, dents more easily than fiberglass but is straightforward to repaint if it does.",
  },
  {
    name: "Wood",
    detail:
      "Still the right call on older or historic homes where the original look matters, at the cost of more regular maintenance than fiberglass or steel.",
  },
  {
    name: "Vinyl-frame sliders",
    detail:
      "Standard for patio and sliding doors — low maintenance, good insulation, and the frame material most sliding door hardware is built around.",
  },
];

const methods = [
  {
    name: "Pre-hung replacement",
    also: "New door and frame as one unit",
    detail:
      "The door arrives already hung in its own frame, which gets set into your existing rough opening. Faster than building a frame on site, and the standard approach when the opening itself is still square.",
  },
  {
    name: "Full frame & sill replacement",
    also: "Down to the rough opening",
    detail:
      "Needed when there's rot in the jamb or sill, when the opening size is changing, or on older construction where the existing frame isn't square enough to set a new pre-hung unit into cleanly.",
  },
];

const included = [
  {
    name: "The opening is never left open overnight",
    detail:
      "A door replacement is staged so your house is closed and locked at the end of the day, every day, including on a full frame and sill rebuild.",
  },
  {
    name: "Removal and disposal of the old door",
    detail:
      "Slab, frame, hardware, and packaging all leave with the crew. Nothing gets stacked against the garage for you to deal with later.",
  },
  {
    name: "Sill, flashing, and weather sealing",
    detail:
      "The threshold gets set and flashed so water runs out rather than under. This is the part that decides whether a door still seals in five years, and it's invisible the day it's done.",
  },
  {
    name: "Hardware fitted and adjusted",
    detail:
      "Lockset and deadbolt bored, strike plates set, hinges shimmed so the door swings and latches without being pushed or pulled.",
  },
  {
    name: "Interior and exterior trim",
    detail:
      "Casing and exterior trim finished to match the house, not just enough to cover the gap.",
  },
];

const hardware = [
  {
    name: "Locksets and handlesets",
    detail:
      "Standard keyed entry, keypad, or smart locks. We fit what you choose rather than what a single supplier wants to bundle.",
  },
  {
    name: "Sidelights and transoms",
    detail:
      "Glass panels flanking or above the door. Replacing one usually means matching the glass pattern across all of them, which is worth knowing before ordering.",
  },
  {
    name: "Decorative glass inserts",
    detail:
      "Clear, obscure, textured, or leaded patterns set into the door slab, and tempered where code requires it.",
  },
  {
    name: "Sweeps, thresholds, and weatherstripping",
    detail:
      "The parts that do the actual sealing, and the first parts to wear. Adjustable thresholds mean the seal can be reset years later without replacing anything.",
  },
];

const faqs = [
  {
    q: "How much does door replacement cost?",
    a: "It depends on the door type, material, and whether it's a straightforward pre-hung swap or a full frame and sill replacement. We measure on site and give you a written number, the same honest approach we take with window pricing.",
  },
  {
    q: "How long does a door replacement take?",
    a: "A single pre-hung door is usually done in a few hours. A full frame replacement, or a patio door with a damaged sill, can take the better part of a day. We give you a real timeline after measuring, not before.",
  },
  {
    q: "Can you match my existing door style or hardware?",
    a: "In most cases, yes, especially useful for French doors and storm doors where matching the existing opening and trim matters as much as the door itself.",
  },
  {
    q: "Do you install storm doors, or just entry doors?",
    a: "Both, along with patio, sliding, and French doors. Storm doors are sized to the specific entry door behind them, not sold as a generic fit.",
  },
  {
    q: "What's the difference between a pre-hung door and a full frame replacement?",
    a: "A pre-hung door arrives already set in its own frame and gets installed into your existing rough opening — faster, and the right call when that opening is still square. A full frame replacement rebuilds the opening itself, needed when there's rot or the size is changing. We determine which one applies during the on-site measurement.",
  },
  {
    q: "Is a cellar or bulkhead door something you replace?",
    a: "Yes, we can quote bulkhead and cellar entry replacement alongside standard doors — reach out and we'll take a look.",
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
              <div className="-ml-2 scale-75 origin-left">
                <d.icon />
              </div>
              <h3 className="-mt-2 font-display text-xl font-semibold">{d.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Signs it&apos;s replacement, not repair</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-2xl">
          One issue is usually fixable. A few at once usually isn&apos;t.
        </SectionHeading>
        <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {signs.map((s) => (
            <li key={s} className="flex gap-3 text-ink/75 border-t border-line pt-4">
              <span className="text-gold font-sans">—</span>
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-ink/60 max-w-2xl">
          Only one of these, or the door mostly works fine?{" "}
          <Link href="/doors/repair" className="text-gold underline underline-offset-4">
            Worth checking repair first
          </Link>
          , especially for a{" "}
          <Link href="/blog/patio-sliding-door-repair" className="text-gold underline underline-offset-4">
            sliding door that just won&apos;t glide
          </Link>
          .
        </p>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Materials</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          Fiberglass, steel, wood, or vinyl
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-ink/70">
          We install all four. What&apos;s right depends on the opening, the
          house, and how much upkeep you actually want to do.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {materials.map((m) => (
            <div key={m.name} className="rounded-lg border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">{m.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="bg-fog py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>How</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
            Two ways to replace a door
          </SectionHeading>
          <p className="mt-4 max-w-2xl text-ink/70">
            We decide which one applies during the on-site measurement, not
            before — same as we do with windows.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {methods.map((m) => (
              <div key={m.name} className="rounded-lg border border-line bg-paper p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {m.also}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold">{m.name}</h3>
                <p className="mt-3 text-sm text-ink/70">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Hardware &amp; glass</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          The parts you actually touch every day
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-ink/70">
          A door is a slab, a frame, and a short list of parts that decide how it
          feels to use. These are the ones worth deciding on deliberately.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {hardware.map((h) => (
            <div key={h.name} className="rounded-lg border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">{h.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-start">
        <div>
          <Eyebrow>What&apos;s included</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
            A door quote from us covers the opening, not just the door
          </SectionHeading>
          <div className="mt-8 divide-y divide-line">
            {included.map((item) => (
              <div key={item.name} className="py-5">
                <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 text-sm text-ink/70 max-w-xl">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:sticky lg:top-24">
          <Image
            src="/photos/door-glass-decorative.jpg"
            alt="A white entry door with a decorative diamond-patterned glass insert and black hardware"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
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

      <section className="bg-ink text-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>What it costs</Eyebrow>
            <SectionHeading as="h2" className="text-2xl sm:text-3xl text-white">
              Same rule as windows — we measure before we price
            </SectionHeading>
            <p className="mt-4 text-white/70 max-w-md">
              A door price depends on the material, the hardware, and whether the
              existing opening is still square. A number without seeing the
              opening is a guess, not a quote.
            </p>
            <p className="mt-4 text-white/70 max-w-md">
              We measure on site, first — that quote is free, in {site.serviceCounty},
              no obligation attached. A written quote is good for 30 days.
            </p>
          </div>
          <ButtonLink href="/contact" variant="ghost-light" className="justify-self-start">
            Get a Quote
          </ButtonLink>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Questions</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          Door replacement, frequently asked
        </SectionHeading>
        <Faq items={faqs} />
      </section>
    </>
  );
}
