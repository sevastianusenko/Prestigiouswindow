import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import { Faq } from "@/components/ui/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Door Repair",
  description:
    "Door repair in Lancaster County, PA — sticking doors, rotted jambs, cracked glass panels, sliding door rollers, and storm door hardware.",
};

const repairs = [
  {
    slug: "sticking-doors",
    name: "Door sticks, drags, or won't latch",
    detail:
      "Usually a settled frame or worn hinge, not a reason to replace the whole unit. A door that rubs at the top corner and one that rubs along the latch edge are two different problems with two different fixes, which is why we look before quoting anything.",
  },
  {
    slug: "jamb-rot",
    name: "Rot at the bottom of the jamb or threshold",
    detail:
      "Common where a door faces weather directly — often repairable if caught before it spreads. Surface rot in the bottom few inches of a jamb can be cut out and pieced in. Rot that's traveled up the leg or into the subfloor underneath is a different conversation, and we'll say which one you have.",
  },
  {
    slug: "sliding-door-rollers",
    name: "Sliding door won't glide, or has come off the track",
    detail:
      "Rollers and tracks wear out well before the door panel does — usually a hardware fix. The panel's full weight rides on two small wheels, so they flat-spot, and a track packed with grit will chew through a new set in a season if it isn't cleaned out at the same time.",
  },
  {
    slug: "door-glass",
    name: "Cracked or broken glass in a door or sidelight",
    detail:
      "Decorative and plain glass inserts are custom-ordered to that door's pattern and size — a glass job, not a new door. Matching an existing decorative pattern isn't always possible on older doors, and when it isn't, we'll tell you that before ordering rather than after.",
  },
  {
    slug: "lock-alignment",
    name: "Lock, deadbolt, or strike plate won't align",
    detail:
      "Almost always a settled hinge side, not a bad lock — realigning the jamb usually fixes it in one visit. If you're lifting or leaning on the door to get the deadbolt to throw, the lock is fine and the frame has moved.",
  },
  {
    slug: "french-door-alignment",
    name: "French doors that don't close flush against each other",
    detail:
      "A hinge or astragal adjustment, not a reason to replace a matched pair. French doors are less forgiving than a single door because any error shows up doubled right down the middle where both edges meet.",
  },
  {
    slug: "storm-door-hardware",
    name: "Storm door closer, hinge, or screen damage",
    detail:
      "Hardware-level fixes, usually done in one visit. Closers are the most common: they lose tension, slam, or stop holding the door open, and they're a cheap, quick swap rather than a new storm door.",
  },
  {
    slug: "door-weatherstripping",
    name: "Draft around a door that looks fine",
    detail:
      "Weatherstripping and threshold adjustment — cheap, and often the whole fix. Most adjustable thresholds have screws that raise the sill back up against the sweep after years of compression, and most people never know they're there.",
  },
];

const included = [
  {
    name: "We work around the opening being in use",
    detail:
      "An entry door is the way in and out of your house. Most repairs are staged so the opening isn't standing open longer than it has to be, and never overnight.",
  },
  {
    name: "Hardware gets reused where it's good",
    detail:
      "A solid handleset or deadbolt doesn't need replacing because a hinge failed. We reuse what's still right and only price what actually has to change.",
  },
  {
    name: "The door is left operating, not just closed",
    detail:
      "It opens, latches, locks, and seals against the stop before we leave. A door that closes but needs a shoulder isn't a finished repair.",
  },
  {
    name: "Old material leaves with us",
    detail:
      "Broken glass, spent weatherstripping, bent hardware, and rotted jamb pieces go with the crew, not to your curb.",
  },
];

const doorTypes = [
  {
    name: "Entry doors",
    detail: "The door that gets used and judged the most — hinges, locks, and weatherstripping wear fastest here.",
  },
  {
    name: "Patio & sliding doors",
    detail: "Rollers, tracks, and alignment first, before assuming the whole panel or frame needs replacing.",
  },
  {
    name: "Storm doors",
    detail: "Closers, hinges, and screens — small parts that fail long before the door itself.",
  },
  {
    name: "French & cellar doors",
    detail: "Paired-door alignment, or hardware on a bulkhead/cellar entry — less common calls, still ones we take.",
  },
];

const process = [
  {
    n: "01",
    text: "Look at it — most door problems are diagnosed on sight: the jamb, the hinges, the hardware, or the weather seal.",
  },
  {
    n: "02",
    text: "Parts ordered if needed — glass is custom-matched, most hinges and hardware are stock.",
  },
  {
    n: "03",
    text: "Fixed, usually in one visit — a settled jamb or worn roller rarely needs a second trip.",
  },
];

const faqs = [
  {
    q: "Can a sliding door be repaired without replacing the whole thing?",
    a: "Almost always. The rollers and track carry the weight and wear out first, and both are serviceable without touching the glass panel or the frame around it.",
  },
  {
    q: "How much does door repair typically cost?",
    a: "It depends on what's actually wrong — a hinge or roller adjustment costs far less than a glass replacement, and glass is always custom-matched to that door. We give you a real number after we've looked at it.",
  },
  {
    q: "Do you repair storm doors and screen doors too?",
    a: "Yes. Closers, hinges, and screens are some of our most common calls, and they're usually a same-visit fix rather than a full storm door replacement.",
  },
  {
    q: "Can a door that's out of square actually be fixed?",
    a: "Often, yes. A settled or racked jamb can usually be reset and shimmed so the door hangs and latches correctly again — full replacement is only the answer once the jamb itself has failed structurally.",
  },
  {
    q: "Do you repair doors you didn't originally install?",
    a: "Yes. Most of our repair calls are on doors someone else installed, sometimes years earlier. We don't need to have hung the door originally to fix it.",
  },
  {
    q: "What if the door actually needs to be replaced?",
    a: "We say so plainly and quote replacement separately, with no pressure to decide on the spot.",
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
              src="/photos/door-black-hardware.jpg"
              alt="A door with black lever hardware, set in a stucco wall"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>What we actually fix</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-2xl">
          Common calls, and what they usually turn out to be
        </SectionHeading>
        <div className="mt-10 divide-y divide-line">
          {repairs.map((r) => (
            <Link
              key={r.slug}
              href={`/doors/repair/${r.slug}`}
              className="group grid sm:grid-cols-[1fr_2fr] gap-3 sm:gap-10 py-6 hover:bg-fog/60 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold group-hover:text-gold transition-colors">
                {r.name}
              </h3>
              <div>
                <p className="text-ink/70 text-sm">{r.detail}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-gold">
                  How we fix it →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/60 max-w-2xl">
          Jamb rotted through completely, or the door&apos;s been out of square for
          years?{" "}
          <Link href="/doors/replacement" className="text-gold underline underline-offset-4">
            That one&apos;s a replacement
          </Link>
          . For the longer version, we&apos;ve written up{" "}
          <Link href="/blog/patio-sliding-door-repair" className="text-gold underline underline-offset-4">
            sliding door repair
          </Link>{" "}
          and{" "}
          <Link href="/blog/cracked-window-glass-repair-cost" className="text-gold underline underline-offset-4">
            cracked glass repair
          </Link>{" "}
          on the blog.
        </p>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>By door type</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          What we repair
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

      <section className="bg-fog py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>How</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
            What a door repair visit actually looks like
          </SectionHeading>
          <dl className="mt-10 grid sm:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.n} className="border-t border-line pt-5">
                <dt className="text-gold font-display font-bold text-2xl">{step.n}</dt>
                <dd className="mt-2 text-sm text-ink/70">{step.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-start">
        <div>
          <Eyebrow>What&apos;s included</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
            The parts of a door repair that don&apos;t show up on a line item
          </SectionHeading>
          <p className="mt-4 max-w-xl text-ink/70">
            The adjustment itself is often ten minutes. These are the rest of the
            visit.
          </p>
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
            src="/photos/detail-door-hinge.jpg"
            alt="A close-up of a door hinge and jamb during a hardware repair, with visible screws and exposed wood"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Being straight about it</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-2xl">
          When we&apos;ll tell you to replace instead
        </SectionHeading>
        <p className="mt-5 text-ink/70 max-w-2xl">
          We hang new doors and we fix old ones, so there&apos;s nothing in it for
          us in stretching a repair that won&apos;t last. The honest cutoffs: rot
          that has gone through the jamb leg rather than sitting in the bottom few
          inches, a frame that has racked far enough out of square that shimming it
          back would fight the wall around it, a slab that&apos;s warped across its
          width so no hinge adjustment brings the edge flat to the stop, and steel
          doors that have rusted through from the bottom up rather than just at the
          surface.
        </p>
        <p className="mt-4 text-ink/70 max-w-2xl">
          Everything short of that list is usually worth fixing first, and we
          don&apos;t need you to commit to a replacement before we&apos;re willing
          to come look.
        </p>
        <ButtonLink href="/repair-or-replace" variant="ghost-dark" className="mt-8">
          Repair or replace? →
        </ButtonLink>
      </section>

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

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Questions</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          Door repair, frequently asked
        </SectionHeading>
        <Faq items={faqs} />
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <p className="text-xs text-ink/50">{site.license} · {site.serviceCounty}</p>
      </div>
    </>
  );
}
