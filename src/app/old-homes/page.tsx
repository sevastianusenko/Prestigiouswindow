import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Windows & Doors for Older Homes",
  description:
    "Window and door work on older Lancaster County homes — restoration where it makes sense, replacement that respects the original opening.",
};

export default function OldHomesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>Older Homes</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl">
            Between &quot;restore it&quot; and &quot;replace it,&quot; there&apos;s a
            gap. We work in it.
          </SectionHeading>
          <p className="mt-6 text-lg text-ink/75 max-w-lg">
            Restoration specialists won&apos;t touch a full replacement. Replacement
            companies quote every old house like new construction. On an older
            Lancaster County home, the right answer is usually neither extreme — and
            depends on the specific window or door in front of us.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photos/house-jasper-st.jpg"
              alt="A historic house with original-proportion windows"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Eyebrow>How we think about it</Eyebrow>
        <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-2xl">
          Three questions before we recommend anything
        </SectionHeading>
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          <div className="rounded-lg border border-line bg-paper p-7">
            <h3 className="font-display text-lg font-semibold">Is the opening original?</h3>
            <p className="mt-2 text-sm text-ink/70">
              If it is, we measure it and try to match it — resizing a 100-year-old
              opening to fit a standard unit changes the whole facade.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7">
            <h3 className="font-display text-lg font-semibold">Is the wood actually bad?</h3>
            <p className="mt-2 text-sm text-ink/70">
              Old-growth wood sashes often outlast their glazing and hardware by
              decades. Rotted glazing putty isn&apos;t the same problem as rotted
              wood.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7">
            <h3 className="font-display text-lg font-semibold">What does the house need?</h3>
            <p className="mt-2 text-sm text-ink/70">
              A historic-district street front and a back-of-house utility window
              don&apos;t need the same answer, even on the same building.
            </p>
          </div>
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>What this looks like in practice</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-md">
            Repair the sash, replace the storm, leave the frame alone.
          </SectionHeading>
          <p className="mt-5 text-ink/70 max-w-md">
            That&apos;s a common outcome on a pre-1950s Lancaster County home — the
            original window gets re-glazed and weatherstripped, a proper storm window
            goes in front of it for the energy performance, and the exterior
            proportions never change. It&apos;s not the only outcome, but it&apos;s
            the one we check for first.
          </p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
