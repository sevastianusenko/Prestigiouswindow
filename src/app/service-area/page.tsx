import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { coreTowns } from "@/lib/towns";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area",
  description: `Windows and doors, serving ${site.serviceCounty} from our base in ${site.baseTown}.`,
};

export default function ServiceAreaPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-24">
      <Eyebrow>Service Area</Eyebrow>
      <SectionHeading as="h1" className="text-4xl sm:text-5xl max-w-2xl">
        Based in East Earl. Working the towns around it.
      </SectionHeading>
      <p className="mt-6 text-lg text-graphite/75 max-w-2xl">
        We started with the towns closest to our shop, on purpose — it&apos;s easier
        to show up fast and stand behind the work when we&apos;re not driving an hour
        each way. This list will grow. For now, it&apos;s these six.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mist">
        {coreTowns.map((t) => (
          <Link
            key={t.slug}
            href={`/service-area/${t.slug}`}
            className="bg-quartz p-7 hover:bg-cream transition-colors group"
          >
            <span className="font-display text-2xl font-semibold group-hover:text-gold transition-colors">
              {t.name}
            </span>
            <p className="mt-1 text-xs font-mono uppercase tracking-wide text-graphite/50">
              {t.county} · {t.minutesFromBase} min
            </p>
            <p className="mt-3 text-sm text-graphite/70">{t.character}</p>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-sm text-graphite/60 max-w-xl">
        Outside these six but close by — Ephrata, Denver, Leola, Lititz, and
        neighboring Berks and Chester County towns? Call {site.phoneDisplay} and ask;
        we take jobs outside the core list case by case.
      </p>
    </section>
  );
}
