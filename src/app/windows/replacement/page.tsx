import type { Metadata } from "next";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import { Faq } from "@/components/ui/Faq";
import { WindowIcon, CasementIcon, BayIcon, EgressIcon } from "@/components/Icons";
import { getCategoriesFor } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Window Replacement",
  description:
    "Full window replacement in Lancaster County, PA — vinyl, wood, fiberglass, and aluminum windows, double-hung, casement, bay, and egress, measured and installed by a licensed local crew.",
};

const typeIcons: Record<string, ComponentType> = {
  "double-hung": WindowIcon,
  casement: CasementIcon,
  "bay-and-bow": BayIcon,
  egress: EgressIcon,
};

const options = getCategoriesFor("windows/replacement", "type");
const materials = getCategoriesFor("windows/replacement", "material");

const signs = [
  "Windows feel cold to stand near, even with the heat on",
  "Condensation or fog between the panes — the seal has failed",
  "Sashes are painted shut, won't stay up, or are hard to operate",
  "Visible rot or soft spots in the frame or sill",
  "Your energy bill jumped and nothing else in the house changed",
];

const rooms = [
  {
    room: "Kitchen",
    typical: "Casement or double-hung, usually above the sink or counter",
    detail:
      "A crank-out casement means you're not reaching over a full sink to pull a sash down. Grease and steam near the stove also mean we pay closer attention to the caulk line so it doesn't fail early.",
  },
  {
    room: "Basement",
    typical: "Egress, hopper, or slider, depending on how the space is used",
    detail:
      "If the room is used for sleeping, code requires an egress window: a minimum opening size you could climb out of. That often means cutting a larger opening and adding a window well. A storage or utility basement usually just needs the existing hopper or slider swapped, no code trigger involved. We check which situation applies before quoting either one.",
  },
  {
    room: "Bedroom",
    typical: "Double-hung or casement, sized to meet egress code",
    detail:
      "Any window in a room used for sleeping has to meet the same minimum clear opening as a basement egress window. Casement units often open wider for the same rough opening, which matters if the frame is already tight against code.",
  },
  {
    room: "Living or family room",
    typical: "Picture windows, or bay and bow units",
    detail:
      "This is where bay and bow windows show up most, plus large fixed picture windows. Bigger units mean more structural planning up front, since the header above the opening may need to be resized to carry the load.",
  },
  {
    room: "Bathroom",
    typical: "Awning or hopper, often with obscure glass",
    detail:
      "Privacy is the driver here: frosted or obscure glass, usually a smaller unit that vents from the top without giving a clear sightline in. Humidity means frame material and sealant matter more in a bathroom than almost anywhere else.",
  },
  {
    room: "Sunroom or three-season room",
    typical: "A run of sliding or casement units across one wall",
    detail:
      "Less about one opening, more about matching a whole run of windows so the sightlines and reveals line up across the wall. We measure the full run together, not one unit at a time.",
  },
];

const methods = [
  {
    name: "Insert replacement",
    also: "Also called pocket replacement",
    detail:
      "The new window fits inside the existing frame, which stays in place. Faster, less invasive, keeps the existing interior and exterior trim intact. Works when the old frame is still square and structurally sound.",
  },
  {
    name: "Full-frame replacement",
    also: "Down to the rough opening",
    detail:
      "Everything comes out, including the old frame, down to the rough opening in the wall. Needed when there's rot, when the size or style is changing, or on older construction where there's no modern frame left to insert into.",
  },
];

const included = [
  {
    name: "Removal and disposal of the old units",
    detail:
      "The old windows leave with us. That includes the sashes, the frames on a full-frame job, and the packaging the new units arrive in.",
  },
  {
    name: "Insulating and sealing the opening",
    detail:
      "The gap between a new unit and the rough opening gets insulated and sealed rather than stuffed and covered. This is the step that quietly decides whether the new window actually performs like the label says it will.",
  },
  {
    name: "Interior and exterior trim",
    detail:
      "Exterior capping or trim to shed water, and interior trim finished to match what's already in the room. On insert jobs we work to keep the existing interior casing intact.",
  },
  {
    name: "Caulk lines you'd look at twice",
    detail:
      "Customers bring this up in reviews unprompted, which is a strange thing to be known for and also exactly the point.",
  },
  {
    name: "Cleanup and a walkthrough",
    detail:
      "Every window opened, closed, locked, and tilted with you there before we call the job done.",
  },
];

const glassOptions = [
  {
    name: "Low-E coating",
    detail:
      "A microscopically thin coating that reflects heat back where it came from, keeping warmth inside in winter and solar gain outside in summer. Standard on what we install, not an upsell line.",
  },
  {
    name: "Argon or krypton gas fill",
    detail:
      "Denser than air, so it slows heat moving across the gap between panes. Argon is the normal choice; krypton performs better in the narrower gaps of triple-pane units.",
  },
  {
    name: "Grilles and grids",
    detail:
      "Between the glass for easy cleaning, or applied for a more traditional look. Pattern and bar width can be matched to the windows you're keeping.",
  },
  {
    name: "Obscure and tempered glass",
    detail:
      "Frosted or patterned glass for bathrooms, and tempered safety glass wherever code requires it, near doors, tubs, stairs, and low sills.",
  },
];

const faqs = [
  {
    q: "How much does window replacement cost?",
    a: "It depends on the material, the size and number of openings, insert versus full-frame work, and whether the crew finds rot once the old unit is out. We break down what actually moves the price in our window cost guide on the blog — the honest answer is we measure first and give you a real written number, not a phone estimate.",
  },
  {
    q: "How long does a typical window replacement take?",
    a: "A single insert replacement is usually a few hours. A full-house job runs anywhere from one to several days depending on how many openings and whether any of them need full-frame work. We give you a real timeline once we've measured, not before.",
  },
  {
    q: "Do I need a permit to replace windows?",
    a: "Sometimes, depending on the township and whether the opening size is changing. We handle this as part of the job rather than leaving it for you to sort out.",
  },
  {
    q: "What's the difference between insert and full-frame replacement?",
    a: "Insert replacement fits a new window inside your existing frame, which stays in place — faster and less invasive. Full-frame replacement removes everything down to the rough opening, which is what rot, a size change, or older construction usually requires. We decide which one applies during the on-site measurement.",
  },
  {
    q: "Can you match the style of my existing windows?",
    a: "In most cases, yes — grille pattern, frame color, and glass tint can all be matched or coordinated, especially useful when you're replacing a few windows now and the rest later.",
  },
  {
    q: "Do you install energy-efficient, Low-E windows?",
    a: "Yes, Low-E coatings and gas-filled insulated glass are standard options on the units we install, not an upcharge add-on. We can walk you through what that actually changes about comfort and your energy bill.",
  },
];

export default function WindowReplacementPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>Windows / Replacement</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl">
            Window replacement, measured for the house you actually have.
          </SectionHeading>
          <p className="mt-6 text-lg text-ink/75 max-w-lg">
            When a window&apos;s problem is the frame itself — failed seals, rot, a
            unit that was never installed square — repair isn&apos;t the honest
            answer. We replace one window or a whole house, vinyl or wood-clad,
            measured on site before anything is ordered.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href="/windows/repair" variant="ghost-dark">
              Might just need repair? →
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photos/window-double-hung.jpg"
              alt="A newly installed double-hung window, trimmed and caulked"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Signs it&apos;s replacement, not repair</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-2xl">
          If more than one of these sounds familiar, replacement is usually the
          cheaper answer long-term.
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
          Only one or two? It might be a seal or balance issue —{" "}
          <Link href="/windows/repair" className="text-gold underline underline-offset-4">
            worth checking repair first
          </Link>
          , or read our full{" "}
          <Link href="/blog/house-window-repair-guide" className="text-gold underline underline-offset-4">
            window repair diagnosis guide
          </Link>
          .
        </p>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Window types</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          What we install
        </SectionHeading>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {options.map((o) => {
            const Icon = typeIcons[o.slug];
            return (
              <Link
                key={o.slug}
                href={`/windows/replacement/${o.slug}`}
                className="lift-on-hover group block rounded-lg border border-line bg-paper p-6 sm:p-8 hover:border-gold"
              >
                <div className="-ml-2 scale-75 origin-left">{Icon && <Icon />}</div>
                <h3 className="-mt-2 font-display text-xl font-semibold group-hover:text-gold transition-colors">
                  {o.name}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{o.cardDetail}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold">
                  More on {o.name.toLowerCase()} →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Frame materials</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          What it&apos;s made of matters as much as the style
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-ink/70">
          We install all four. What&apos;s right for one opening on your house
          isn&apos;t always right for another.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {materials.map((m) => (
            <Link
              key={m.slug}
              href={`/windows/replacement/${m.slug}`}
              className="lift-on-hover group block rounded-lg border border-line bg-paper p-6 sm:p-8 hover:border-gold"
            >
              <h3 className="font-display text-xl font-semibold group-hover:text-gold transition-colors">
                {m.name}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{m.cardDetail}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold">
                More on {m.name.toLowerCase()} windows →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      {/* WINDOWS BY ROOM */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow>By room</Eyebrow>
            <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-2xl">
              What usually goes where
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-ink/70">
              Every house is different, but the room usually points to the
              window type and, on a few rooms, to a code question worth
              settling before we quote.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photos/window-modern-house-2.jpg"
              alt="A house exterior with several windows of different sizes"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 divide-y divide-line">
          {rooms.map((r) => (
            <div key={r.room} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-10 py-7">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{r.room}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink/50">{r.typical}</p>
              </div>
              <p className="text-sm text-ink/70 max-w-xl">{r.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/60 max-w-2xl">
          Basement bedroom or full egress dig-out? We cover that in more depth in our{" "}
          <Link href="/blog/basement-window-installation-repair" className="text-gold underline underline-offset-4">
            basement window guide
          </Link>
          .
        </p>
      </section>

      {/* HOW WE REPLACE */}
      <section className="bg-fog py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>How</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
            Two ways to replace a window
          </SectionHeading>
          <p className="mt-4 max-w-2xl text-ink/70">
            We decide which one applies during the on-site measurement, not
            before.
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
        <Eyebrow>Glass &amp; efficiency</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          What&apos;s actually in the glass
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-ink/70">
          Most of a window&apos;s performance comes from the glass package, not
          the frame around it. These are the options worth understanding before
          you compare two quotes.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {glassOptions.map((g) => (
            <div key={g.name} className="rounded-lg border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">{g.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{g.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/60 max-w-2xl">
          More on what a gas fill does, and what happens when one fails, in our{" "}
          <Link href="/blog/gas-filled-window-panes-explained" className="text-gold underline underline-offset-4">
            explainer on gas-filled panes
          </Link>
          .
        </p>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>What&apos;s included</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-2xl">
          A replacement quote from us covers the whole job, not just the window
        </SectionHeading>
        <div className="mt-10 divide-y divide-line">
          {included.map((item) => (
            <div key={item.name} className="grid sm:grid-cols-[1fr_2fr] gap-3 sm:gap-10 py-6">
              <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
              <p className="text-sm text-ink/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <QuoteForm />
          <div>
            <Eyebrow>What it costs</Eyebrow>
            <SectionHeading as="h2" className="text-2xl sm:text-3xl text-white">
              We don&apos;t post prices — here&apos;s why
            </SectionHeading>
            <p className="mt-4 text-white/70 max-w-md">
              Two houses with &quot;the same&quot; window can price differently
              depending on the opening, the trim work, and whether the old unit
              comes out clean. A number without a measurement isn&apos;t a real
              quote — it&apos;s a guess with a phone number attached.
            </p>
            <p className="mt-4 text-white/70 max-w-md">
              We measure on site, first — that quote is free, in {site.serviceCounty},
              no obligation attached. A written quote is good for 30 days.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>Questions</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          Window replacement, frequently asked
        </SectionHeading>
        <Faq items={faqs} />
      </section>
    </>
  );
}
