import Link from "next/link";
import Image from "next/image";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { TrustBar } from "@/components/TrustBar";
import { RepairReplaceSplit } from "@/components/RepairReplaceSplit";
import { QuoteForm } from "@/components/QuoteForm";
import { coreTowns } from "@/lib/towns";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO — dark, full-bleed, no eyebrow-heading-paragraph template cadence */}
      <section className="bg-graphite text-quartz">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 sm:pt-24 pb-0 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-end">
          <div className="pb-14 sm:pb-20">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold">
              {site.serviceCounty}
            </span>
            <h1 className="font-display font-semibold text-balance leading-[0.98] text-quartz mt-5 text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem]">
              Fitted
              <br />
              precisely.
            </h1>
            <p className="mt-8 text-lg text-quartz/70 max-w-md">
              Windows and doors — replaced and repaired by people who measure
              twice. Based in {site.baseTown}, working across {site.serviceCounty}.
              Not a franchise, not a script.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Get a Quote</ButtonLink>
              <ButtonLink href="/repair-or-replace" variant="ghost-light">
                Repair or Replace?
              </ButtonLink>
            </div>
          </div>

          <div className="relative p-2 self-end">
            <div className="frame-line frame-line-light absolute inset-0" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/photos/hero-townhouse.jpg"
                alt="A well-kept brick home with dark-trimmed double-hung windows and a paneled entry door"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* DOORS / WINDOWS — big graphic numerals carry the "two trades" idea */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="space-y-24">
          <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-10 items-center">
            <span
              aria-hidden
              className="font-display font-semibold text-gold/25 leading-none text-[6rem] sm:text-[9rem] lg:text-[11rem] -mb-4 lg:mb-0 select-none"
            >
              01
            </span>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                Doors
              </h2>
              <p className="mt-4 text-graphite/70 max-w-sm">
                A door gets used more than almost anything else in a house —
                opened, slammed, leaned on, left in the sun. Entry, patio,
                sliding, and storm doors, fitted so they still close right in
                five years.
              </p>
              <div className="mt-6 flex gap-6 font-mono text-xs tracking-wide uppercase">
                <Link href="/doors/replacement" className="text-graphite hover:text-gold">
                  Replacement →
                </Link>
                <Link href="/doors/repair" className="text-graphite hover:text-gold">
                  Repair →
                </Link>
              </div>
            </div>
            <div className="relative p-2">
              <div className="frame-line absolute inset-0" aria-hidden />
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/photos/door-waverly.jpg"
                  alt="A paneled wood entry door with transom window and iron railings"
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-10 items-center">
            <span
              aria-hidden
              className="font-display font-semibold text-gold/25 leading-none text-[6rem] sm:text-[9rem] lg:text-[11rem] -mb-4 lg:mb-0 select-none lg:hidden"
            >
              02
            </span>
            <div className="relative p-2 lg:order-1">
              <div className="frame-line absolute inset-0" aria-hidden />
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/photos/window-green-shutters.jpg"
                  alt="A house exterior with multi-pane double-hung windows and painted shutters"
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <span
              aria-hidden
              className="hidden lg:block font-display font-semibold text-gold/25 leading-none text-[11rem] select-none lg:order-2"
            >
              02
            </span>
            <div className="lg:order-3">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                Windows
              </h2>
              <p className="mt-4 text-graphite/70 max-w-sm">
                Full replacement when the frame has failed, targeted repair
                when it hasn&apos;t — fogged glass, broken seals, sashes that
                won&apos;t balance. On older homes, we work with the original
                opening instead of resizing it.
              </p>
              <div className="mt-6 flex gap-6 font-mono text-xs tracking-wide uppercase">
                <Link href="/windows/replacement" className="text-graphite hover:text-gold">
                  Replacement →
                </Link>
                <Link href="/windows/repair" className="text-graphite hover:text-gold">
                  Repair →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RepairReplaceSplit />

      {/* DARK MATERIAL SECTION */}
      <section className="bg-graphite text-quartz py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative p-2">
            <div className="frame-line frame-line-light absolute inset-0" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/photos/wood-texture-2.jpg"
                alt="Close detail of natural wood grain"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <Eyebrow>How we quote</Eyebrow>
            <SectionHeading as="h2" className="text-3xl sm:text-4xl text-quartz">
              Measured on site. Priced once you&apos;ve seen the number.
            </SectionHeading>
            <p className="mt-5 text-quartz/70 max-w-md">
              We don&apos;t price over the phone, and we don&apos;t do a
              &quot;today-only&quot; discount to force a signature. Someone comes out,
              measures the actual opening, and gives you a written number for the
              actual work.
            </p>
            <dl className="mt-8 space-y-4 font-mono text-sm">
              <div className="flex gap-4 border-t border-quartz/15 pt-4">
                <dt className="text-gold w-6">01</dt>
                <dd className="text-quartz/80">Call or request a quote online</dd>
              </div>
              <div className="flex gap-4 border-t border-quartz/15 pt-4">
                <dt className="text-gold w-6">02</dt>
                <dd className="text-quartz/80">On-site measurement, no obligation</dd>
              </div>
              <div className="flex gap-4 border-t border-quartz/15 pt-4">
                <dt className="text-gold w-6">03</dt>
                <dd className="text-quartz/80">Written quote — materials, timeline, price</dd>
              </div>
              <div className="flex gap-4 border-t border-quartz/15 pt-4 border-b pb-4">
                <dt className="text-gold w-6">04</dt>
                <dd className="text-quartz/80">Install, cleanup, and a final walkthrough</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICE AREA TEASER */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Where we work</Eyebrow>
            <SectionHeading as="h2" className="text-3xl sm:text-4xl">
              Based in East Earl. Not stretched thin.
            </SectionHeading>
          </div>
          <Link
            href="/service-area"
            className="font-mono text-xs tracking-[0.2em] uppercase text-graphite hover:text-gold"
          >
            Full service area →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mist">
          {coreTowns.map((t) => (
            <Link
              key={t.slug}
              href={`/service-area/${t.slug}`}
              className="bg-quartz p-6 hover:bg-cream transition-colors"
            >
              <span className="font-display text-xl font-semibold">{t.name}, PA</span>
              <p className="mt-2 text-sm text-graphite/60">{t.minutesFromBase} min from East Earl</p>
            </Link>
          ))}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      {/* OLD HOMES — full-bleed image with overlay, a genuinely different
          section shape than the boxed side-by-sides used elsewhere */}
      <section className="relative isolate my-20 sm:my-28">
        <div className="relative h-[560px] sm:h-[620px] overflow-hidden">
          <Image
            src="/photos/house-jasper-st.jpg"
            alt="A period American home with original window proportions intact"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-graphite/95 via-graphite/55 to-graphite/10"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-14 sm:pb-20 w-full">
            <div className="max-w-xl">
              <Eyebrow>An honest gap</Eyebrow>
              <h2 className="font-display font-semibold text-balance leading-[1.05] text-quartz text-3xl sm:text-5xl">
                Old house? The opening usually doesn&apos;t need to change.
              </h2>
              <p className="mt-5 text-quartz/80 max-w-md">
                A lot of companies quote older homes like new construction —
                resize everything, lose the original proportions. We measure
                the existing opening first and work with it whenever the
                structure allows.
              </p>
              <ButtonLink href="/old-homes" variant="ghost-light" className="mt-7">
                Windows &amp; doors for older homes
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Start here</Eyebrow>
          <SectionHeading as="h2" className="text-3xl sm:text-4xl">
            Tell us what&apos;s going on. We&apos;ll tell you what it needs.
          </SectionHeading>
          <p className="mt-5 text-graphite/70 max-w-md">
            No pressure quote, no call-center hand-off — you&apos;ll hear back from
            someone who actually does the work.
          </p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
