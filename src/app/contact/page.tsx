import type { Metadata } from "next";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: `Request a free, on-site window or door quote in ${site.serviceCounty}.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <Eyebrow>Get a Quote</Eyebrow>
        <SectionHeading as="h1" className="text-4xl sm:text-5xl">
          Tell us what&apos;s going on.
        </SectionHeading>
        <p className="mt-6 text-lg text-ink/75 max-w-md">
          Fill this out or call directly — either way, you&apos;ll hear from someone
          who actually does the work, not a call center reading a script.
        </p>

        <div className="mt-10 space-y-5 font-sans text-sm">
          <div className="flex gap-4 border-t border-line pt-4">
            <span className="text-gold w-16 shrink-0">Phone</span>
            <a href={site.phoneHref} className="hover:text-gold">{site.phoneDisplay}</a>
          </div>
          <div className="flex gap-4 border-t border-line pt-4">
            <span className="text-gold w-16 shrink-0">Email</span>
            <a href={`mailto:${site.email}`} className="hover:text-gold break-all">{site.email}</a>
          </div>
          <div className="flex gap-4 border-t border-line pt-4 border-b pb-4">
            <span className="text-gold w-16 shrink-0">Area</span>
            <span>{site.serviceCounty}, based in {site.baseTown}</span>
          </div>
        </div>
      </div>

      <QuoteForm />
    </section>
  );
}
