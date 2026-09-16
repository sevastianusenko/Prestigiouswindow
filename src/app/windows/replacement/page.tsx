import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Window Replacement",
  description:
    "Full window replacement in Lancaster County, PA — vinyl, double-hung, casement, bay, and egress windows, measured and installed by a licensed local crew.",
};

const options = [
  {
    name: "Double-hung",
    detail: "The default for most homes — both sashes move, tilts in for cleaning from inside.",
  },
  {
    name: "Casement",
    detail: "Crank-out, seals tighter than double-hung when closed. Good over sinks and counters.",
  },
  {
    name: "Bay & bow",
    detail: "Multi-panel projection — adds floor space and light. More structural planning up front.",
  },
  {
    name: "Egress",
    detail: "Code-sized for basement bedrooms. We check the opening against code before quoting, not after.",
  },
];

const signs = [
  "Windows feel cold to stand near, even with the heat on",
  "Condensation or fog between the panes — the seal has failed",
  "Sashes are painted shut, won't stay up, or are hard to operate",
  "Visible rot or soft spots in the frame or sill",
  "Your energy bill jumped and nothing else in the house changed",
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
              src="/photos/window-modern-house-1.jpg"
              alt="A house exterior with large modern replacement windows"
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
          {options.map((o) => (
            <div key={o.name} className="rounded-lg border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">{o.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{o.detail}</p>
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
              no obligation attached.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
