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
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <Eyebrow>{site.serviceCounty} · Windows &amp; Doors</Eyebrow>
          <SectionHeading as="h1" className="text-4xl sm:text-5xl lg:text-[3.4rem]">
            Fitted precisely.
            <br />
            Built to be forgotten about.
          </SectionHeading>
          <p className="mt-6 text-lg text-graphite/75 max-w-lg">
            Replacement and repair for windows and doors, done by people who measure
            twice and show up when they say they will. Based in {site.baseTown},
            working across {site.serviceCounty}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href="/repair-or-replace" variant="ghost-dark">
              Repair or Replace?
            </ButtonLink>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative p-2">
          <div className="frame-line absolute inset-0" aria-hidden />
          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
            <Image
              src="/photos/hero-townhouse.jpg"
              alt="A well-kept brick home with dark-trimmed double-hung windows and a paneled entry door"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* DOORS / WINDOWS asymmetric split */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <Eyebrow>What we do</Eyebrow>
        <SectionHeading as="h2" className="text-3xl sm:text-4xl max-w-xl">
          Two trades, held to the same standard.
        </SectionHeading>

        <div className="mt-14 space-y-20">
          {/* Doors first — matches demand: shorter sales cycle, less contested market */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative p-2">
              <div className="frame-line absolute inset-0" aria-hidden />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/photos/door-waverly.jpg"
                  alt="A paneled wood entry door with transom window and iron railings"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
                01 — Doors
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-3">
                Entry, patio, and storm doors
              </h3>
              <p className="mt-4 text-graphite/70 max-w-md">
                A door gets used more than almost anything else in a house — opened,
                slammed, leaned on, left in the sun. We install and repair entry
                doors, sliding and patio doors, and storm doors, fitted so they still
                close right in five years.
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
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="lg:order-2 relative p-2">
              <div className="frame-line absolute inset-0" aria-hidden />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/photos/window-green-shutters.jpg"
                  alt="A house exterior with multi-pane double-hung windows and painted shutters"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
                02 — Windows
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-3">
                Replacement, repair, and restoration
              </h3>
              <p className="mt-4 text-graphite/70 max-w-md">
                Full replacement when the frame has failed, targeted repair when it
                hasn&apos;t — fogged glass, broken seals, sashes that won&apos;t
                balance. On older homes, we work with the original opening instead of
                resizing it whenever we can.
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
            <div className="absolute inset-0 border border-gold/30" aria-hidden />
            <div className="absolute inset-2 border border-gold/15" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden m-2">
              <Image
                src="/photos/wood-texture-1.jpg"
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

      {/* OLD HOMES CALLOUT */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>An honest gap</Eyebrow>
          <SectionHeading as="h2" className="text-3xl sm:text-4xl">
            Old house? The opening usually doesn&apos;t need to change.
          </SectionHeading>
          <p className="mt-5 text-graphite/70 max-w-md">
            A lot of companies quote older homes like new construction — resize
            everything, lose the original proportions. We measure the existing
            opening first and work with it whenever the structure allows.
          </p>
          <ButtonLink href="/old-homes" variant="ghost-dark" className="mt-6">
            Windows &amp; doors for older homes
          </ButtonLink>
        </div>
        <div className="relative p-2">
          <div className="frame-line absolute inset-0" aria-hidden />
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/photos/house-jasper-st.jpg"
              alt="A historic American home with original window proportions intact"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
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
