import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "./ui/Type";

const paths = [
  {
    title: "Repair it",
    href: "/repair-or-replace#repair",
    when: "The frame is sound, the glass is intact, and something specific has gone wrong. A fogged pane, a sagging hinge, a sash that won't stay up.",
    cta: "See what's repairable",
    image: "/photos/wood-texture-1.jpg",
    alt: "Close detail of natural wood grain",
  },
  {
    title: "Replace it",
    href: "/repair-or-replace#replace",
    when: "The frame itself has failed, the energy loss is chronic, or you're updating multiple windows or a door at once.",
    cta: "See replacement options",
    image: "/photos/window-modern-house-1.jpg",
    alt: "A house exterior with large modern replacement windows",
  },
];

export function RepairReplaceSplit() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
      <Eyebrow>The question most companies skip</Eyebrow>
      <SectionHeading as="h2" className="text-3xl sm:text-4xl max-w-2xl">
        Not sure if it needs fixing or replacing?
      </SectionHeading>
      <p className="mt-4 max-w-xl text-ink/70">
        Most window and door companies only sell replacement, so
        that&apos;s what they&apos;ll recommend, whether or not it&apos;s
        what you need. We do both, and we&apos;ll tell you honestly which
        one you&apos;re looking at.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {paths.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group rounded-lg border border-line bg-paper overflow-hidden hover:border-gold hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 46vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8 sm:p-10">
              <span className="font-display text-2xl sm:text-3xl font-bold text-ink group-hover:text-gold transition-colors">
                {p.title}
              </span>
              <p className="mt-4 text-sm text-ink/70">{p.when}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-gold">
                {p.cta} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
