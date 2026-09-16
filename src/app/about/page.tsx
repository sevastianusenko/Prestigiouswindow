import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — licensed and insured window and door replacement and repair, based in ${site.baseTown}.`,
};

const facts = [
  { k: "License", v: site.license },
  { k: "Insurance", v: "General liability & workers' comp on file — certificate on request" },
  { k: "Based", v: `${site.baseTown}` },
  { k: "Service area", v: site.serviceCounty },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>About</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl">
            We&apos;re new here. The standard isn&apos;t.
          </SectionHeading>
          <p className="mt-6 text-lg text-ink/75 max-w-lg">
            Prestigious Home Improvements is a new company name in {site.serviceCounty}
            — but the work behind it isn&apos;t a first attempt. We&apos;re licensed,
            insured, and we measure every job on site before we quote it. No
            fabricated review count, no &quot;family-owned since&quot; story we made
            up for the homepage — just what we can actually stand behind.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photos/process-rough-opening.jpg"
              alt="A rough opening squared and leveled mid-construction, ready for a window or door"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
        </div>
      </section>

      <section className="bg-ink text-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((f) => (
            <div key={f.k}>
              <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold">
                {f.k}
              </div>
              <div className="mt-1.5 text-sm text-white/85">{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 max-w-3xl">
        <Eyebrow>How we work</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-xl">
          Three things we won&apos;t do
        </SectionHeading>
        <div className="mt-10 space-y-8">
          <div className="border-t border-line pt-6">
            <h3 className="font-display text-lg font-semibold">
              Quote replacement when it&apos;s actually a repair
            </h3>
            <p className="mt-2 text-ink/70 text-sm max-w-xl">
              We do both, so there&apos;s no reason to push the more expensive job
              when the cheaper one solves it.
            </p>
          </div>
          <div className="border-t border-line pt-6">
            <h3 className="font-display text-lg font-semibold">
              Price over the phone without seeing the opening
            </h3>
            <p className="mt-2 text-ink/70 text-sm max-w-xl">
              A number without a measurement is a guess. We&apos;d rather give you a
              real one.
            </p>
          </div>
          <div className="border-t border-line pt-6 border-b pb-6">
            <h3 className="font-display text-lg font-semibold">
              Use &quot;today-only&quot; pricing to rush a decision
            </h3>
            <p className="mt-2 text-ink/70 text-sm max-w-xl">
              A written quote from us is good for 30 days. Take the time you need.
            </p>
          </div>
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 text-center">
        <SectionHeading as="h2" className="text-2xl sm:text-3xl">
          Have a project? Let&apos;s look at it together.
        </SectionHeading>
        <ButtonLink href="/contact" className="mt-8 inline-flex">
          Get a Quote
        </ButtonLink>
      </section>
    </>
  );
}
