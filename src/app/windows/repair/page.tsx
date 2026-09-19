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
  title: "Window Repair",
  description:
    "Window repair in Lancaster County, PA — fogged glass, cracked panes, failed seals, sash balances, screens, and storm windows. We fix what's fixable instead of defaulting to replacement.",
};

const repairs = [
  {
    name: "Fogged or cloudy glass",
    detail:
      "The seal between the panes has failed and moisture got in — what's called a window seal repair. The haze sits on the inside faces of the glass, which is why it never wipes off. In most modern windows we replace the insulated glass unit inside the existing sash and frame, so the trim, the operation, and the exterior stay exactly as they are.",
  },
  {
    name: "Cracked or broken glass",
    detail:
      "A single cracked pane is a glass replacement, custom-cut to your opening, not a reason to replace the frame around it. We match thickness, tint, and any Low-E coating so the repaired opening doesn't read differently from the ones next to it. Tempered glass goes back where code requires it, near doors, tubs, and low sills.",
  },
  {
    name: "Sash won't stay up, or is painted shut",
    detail:
      "Usually a balance or spring issue, sometimes decades of repainting. Spiral and constant-force balances are stock parts on most vinyl windows; on older wood double-hungs it's a sash cord, a pulley, and a weight still sitting in the wall pocket. Either way it's hardware, not the window.",
  },
  {
    name: "Drafts around a window that otherwise looks fine",
    detail:
      "Weatherstripping and glazing compound wear out long before the window does. We check the sash seal, the meeting rail, and the perimeter caulk separately, because all three feel identical to a hand held near the glass and only one of them is usually the actual leak.",
  },
  {
    name: "Sliding or double-hung roller and track wear",
    detail:
      "Hardware replacement — a fraction of the cost of a new unit. Rollers flat-spot and tracks pack with grit, and a window that's been forced for a year usually needs the track straightened as well as the roller swapped.",
  },
  {
    name: "Screen tears or bent frames",
    detail:
      "Rescreened on site or shop-repaired, usually same visit. Standard sizes get new mesh in the existing frame; older or custom openings get a frame built to match, since a hardware-store screen almost never fits a house that predates standard sizing.",
  },
  {
    name: "Storm windows that won't open, close, or seal",
    detail:
      "Storm windows get painted shut and lose their seals the same way the primary window does — we service them as their own repair, not an afterthought. On older homes a working storm window plus fresh weatherstripping often does more for comfort than replacing the sash behind it.",
  },
  {
    name: "A window that's lost its gas fill",
    detail:
      "If an insulated unit has lost its argon or krypton fill, that's the same seal failure as fogged glass — it just hasn't fogged yet. It's a glass job, not something that gets \"recharged.\" Nobody can top the gas back up through a sealed unit, and we'll say so rather than sell a service that doesn't hold.",
  },
];

const included = [
  {
    name: "Protecting the room first",
    detail:
      "Drop cloths, and glass work contained rather than swept up afterward. A broken pane means fragments, and we'd rather spend ten minutes up front than find them in a rug later.",
  },
  {
    name: "The old material leaves with us",
    detail:
      "Broken glass, old balances, torn screen mesh, spent weatherstripping. None of it gets left at the curb for you to deal with.",
  },
  {
    name: "Tested before we leave",
    detail:
      "The sash gets opened, closed, latched, and left where it should stay on its own. A repair that works while we're standing there and fails the next week isn't finished.",
  },
  {
    name: "A straight answer on what's next",
    detail:
      "If the repair buys you a few years rather than fixing it permanently, we say which one it is, so a replacement conversation later isn't a surprise.",
  },
];

const materials = [
  {
    name: "Vinyl",
    detail:
      "The most common frame material in the county, and usually the easiest to source hardware and glass for. Balances, sweeps, and rollers are typically stock parts.",
  },
  {
    name: "Wood",
    detail:
      "Older wood sashes, especially old-growth lumber, often outlast the vinyl that replaced them elsewhere in the same house. Re-glazing and fresh weatherstripping usually beats a swap.",
  },
  {
    name: "Aluminum",
    detail:
      "Common on mid-century homes and additions. Doesn't rot, but corrodes and pits over time, and conducts cold more than vinyl — repair has to account for that.",
  },
  {
    name: "Fiberglass",
    detail:
      "Less common here but shows up on some newer builds. Holds paint and glazing compound differently than wood or vinyl, worth knowing before a repair starts, not after.",
  },
];

const process = [
  {
    n: "01",
    text: "Diagnose on site — most issues are visible or testable in a few minutes: glass, hardware, weatherstripping, or frame.",
  },
  {
    n: "02",
    text: "Parts ordered if needed — glass is custom-cut to your opening, most hardware is in stock.",
  },
  {
    n: "03",
    text: "Fixed, usually in one visit — a second trip only if custom glass or a specific part has to come in first.",
  },
];

const faqs = [
  {
    q: "How much does window repair typically cost?",
    a: "It depends entirely on what's actually wrong. A hardware fix like a balance or roller is a fraction of a glass replacement, and glass is always custom-cut to your exact opening. We give you a real number after looking at it, not a phone estimate — most of the same cost factors from our window replacement pricing guide apply here too, just at a smaller scale.",
  },
  {
    q: "Do you repair windows you didn't originally install?",
    a: "Yes. Most of our repair calls are on windows another company installed, sometimes years or decades ago. We don't need to have done the original work to fix it.",
  },
  {
    q: "Can a window with a foggy or failed seal actually be fixed?",
    a: "Usually, yes — by replacing the insulated glass unit inside the existing sash and frame rather than the whole window. It's a more involved job than a hardware fix, but it's still a repair, not a replacement.",
  },
  {
    q: "What if you get here and the window actually needs replacing?",
    a: "We tell you plainly and quote replacement separately. We don't talk anyone into a repair that won't hold, and we don't quote a replacement that wasn't necessary.",
  },
  {
    q: "Do you work on wood windows, or just vinyl?",
    a: "Both, along with aluminum and fiberglass. Older wood windows are frequently worth repairing rather than replacing, especially on homes built before modern construction lumber took over.",
  },
  {
    q: "How long does a typical window repair take?",
    a: "Most repairs are done in a single visit. If custom glass or a specific part has to be ordered first, that adds lead time before a second, shorter visit to install it.",
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

      <TrustBar />

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
          . Want the longer version of any of these? We&apos;ve written up{" "}
          <Link href="/blog/foggy-window-seal-repair" className="text-gold underline underline-offset-4">
            fogged glass
          </Link>
          ,{" "}
          <Link href="/blog/window-wont-stay-up-balance-repair" className="text-gold underline underline-offset-4">
            balance repair
          </Link>
          , and{" "}
          <Link href="/blog/gas-filled-window-panes-explained" className="text-gold underline underline-offset-4">
            gas fill loss
          </Link>{" "}
          in more detail on the blog.
        </p>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>By material</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          What we&apos;re repairing changes how we repair it
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-ink/70">
          Glass and hardware behave differently depending on the frame material, so
          the repair approach isn&apos;t identical across a house with a mixed
          window history.
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
            What a repair visit actually looks like
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
            The parts of a repair nobody quotes, but everybody notices
          </SectionHeading>
          <p className="mt-4 max-w-xl text-ink/70">
            The fix itself is usually the short part of the visit. These are the
            rest of it.
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
            src="/photos/window-tree-reflection.jpg"
            alt="A white double-hung window with clear, undamaged glass reflecting trees and sky"
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
          We do both jobs, so there&apos;s no reason for us to stretch a repair
          that won&apos;t hold. There are a few situations where we&apos;ll say
          plainly that repair is throwing money at a window that&apos;s already
          finished: when the frame or sill has rot running through it rather than
          sitting on the surface, when the sash has racked far enough out of square
          that no amount of hardware brings it back, when a previous &quot;repair&quot;
          nailed or caulked the unit permanently shut, or when you&apos;re looking
          at four or five failed seals in the same room and the units are all the
          same age.
        </p>
        <p className="mt-4 text-ink/70 max-w-2xl">
          Two or three individual repairs across a house is normal maintenance.
          Two or three on the same window inside a year is usually the window
          telling you something.
        </p>
        <ButtonLink href="/repair-or-replace" variant="ghost-dark" className="mt-8">
          Repair or replace? →
        </ButtonLink>
      </section>

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

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Questions</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          Window repair, frequently asked
        </SectionHeading>
        <Faq items={faqs} />
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <p className="text-xs text-ink/50">{site.license} · {site.serviceCounty}</p>
      </div>
    </>
  );
}
