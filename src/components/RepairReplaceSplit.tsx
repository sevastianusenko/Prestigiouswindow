import Link from "next/link";
import { Eyebrow, SectionHeading } from "./ui/Type";

const paths = [
  {
    title: "Repair it",
    href: "/repair-or-replace#repair",
    when: "The frame is sound, the glass is intact, and something specific has gone wrong — a fogged pane, a sagging hinge, a sash that won't stay up.",
    cta: "See what's repairable",
  },
  {
    title: "Replace it",
    href: "/repair-or-replace#replace",
    when: "The frame itself has failed, the energy loss is chronic, or you're updating multiple windows or a door at once.",
    cta: "See replacement options",
  },
];

export function RepairReplaceSplit() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
      <Eyebrow>The question most companies skip</Eyebrow>
      <SectionHeading as="h2" className="text-3xl sm:text-4xl max-w-2xl">
        Not sure if it needs fixing or replacing?
      </SectionHeading>
      <p className="mt-4 max-w-xl text-graphite/70">
        Most window and door companies only sell replacement — so that&apos;s what
        they&apos;ll recommend, whether or not it&apos;s what you need. We do both, and
        we&apos;ll tell you honestly which one you&apos;re looking at.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-px bg-mist">
        {paths.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group bg-quartz p-8 sm:p-10 hover:bg-graphite transition-colors duration-300"
          >
            <span className="font-display text-2xl sm:text-3xl font-semibold text-graphite group-hover:text-gold transition-colors">
              {p.title}
            </span>
            <p className="mt-4 text-sm text-graphite/70 group-hover:text-quartz/70 transition-colors">
              {p.when}
            </p>
            <span className="mt-6 inline-block font-mono text-xs tracking-[0.2em] uppercase text-gold">
              {p.cta} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
