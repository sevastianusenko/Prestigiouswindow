import Link from "next/link";
import Image from "next/image";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import {
  WindowIcon,
  DoorIcon,
  QuoteIcon,
  DraftIcon,
  FogIcon,
  BillIcon,
  StuckIcon,
  RotIcon,
  NoiseIcon,
  CrewIcon,
  DetailIcon,
  RepeatIcon,
  StarIcon,
} from "@/components/Icons";
import { BrandMark } from "@/components/BrandMark";
import { coreTowns } from "@/lib/towns";
import { site } from "@/lib/site";

const stages = [
  {
    icon: WindowIcon,
    title: "Find your window or door",
    body: "Just getting started — help me see what fits my house.",
    href: "/windows/replacement",
    cta: "See options",
  },
  {
    icon: DoorIcon,
    title: "Repair or replace?",
    body: "Something's wrong with one — not sure which one I need.",
    href: "/repair-or-replace",
    cta: "Find out",
  },
  {
    icon: QuoteIcon,
    title: "Looking for a quote",
    body: "Ready to connect and get a real, measured number.",
    href: "/contact",
    cta: "Request a quote",
  },
];

const signs = [
  {
    icon: DraftIcon,
    title: "Drafts you can feel",
    body: "Cold air near a closed window or door, even with the heat running.",
  },
  {
    icon: FogIcon,
    title: "Fogged or cloudy glass",
    body: "Moisture trapped between the panes means the seal has failed for good.",
  },
  {
    icon: BillIcon,
    title: "Rising energy bills",
    body: "If nothing else in the house changed but the bill went up, this is often why.",
  },
  {
    icon: StuckIcon,
    title: "Hard to open or close",
    body: "A warped frame, a stuck sash, or a door that needs a shoulder to shut.",
  },
  {
    icon: RotIcon,
    title: "Visible rot or damage",
    body: "Soft wood, cracked frames, or water stains around the opening.",
  },
  {
    icon: NoiseIcon,
    title: "Outside noise gets through",
    body: "Old glass and worn seals let in more sound than a newer unit would.",
  },
];

const reasons = [
  {
    icon: CrewIcon,
    title: "Real crew, not subcontractors",
    body: "Reviews name our actual installers because they're the same people who show up every time, not a rotating cast of subs.",
  },
  {
    icon: DetailIcon,
    title: "The kind of detail people notice",
    body: "Customers bring up things like clean caulk lines without being asked. That's not an accident, it's the standard.",
  },
  {
    icon: RepeatIcon,
    title: "People call us back",
    body: "More than one customer has hired us twice, once for windows and doors, later for something else entirely.",
  },
  {
    icon: StarIcon,
    title: "Five stars, unedited",
    body: "Every review on our Google profile is five stars. We don't write them and we don't hide the bad ones, because there aren't any yet.",
  },
];

const reviews = [
  {
    name: "Nicholas Obert",
    time: "5 months ago",
    text: "From the windows to the doors to the amazing siding and shutters, Tim and his guy's work is absolutely prestigious. Me and my wife couldn't be happier with everything that has been done to make our house a new home.",
  },
  {
    name: "Lois Domanico",
    time: "4 weeks ago",
    text: "I just had a new slider door installed and I am so thrilled with the way it turned out. Vlad and Nick were my installers and they did an excellent job. They were friendly, very neat, and paid attention to the small details like the caulking.",
  },
  {
    name: "Lou Sala",
    time: "1 month ago",
    text: "After Tim installed new windows and sliders at my home, I used Prestigious Home again on two complete bathroom remodels at my mother's condo and couldn't be happier. As a second time customer, I knew there wouldn't be an issue using him again.",
  },
  {
    name: "Broken Wheel",
    time: "4 months ago",
    text: "Tim and his crew have gone above and beyond for me. I couldn't be happier.",
  },
];

const products = [
  {
    label: "Doors first — shorter cycle, less contested market",
    title: "Doors",
    body: "A door gets used more than almost anything else in a house — opened, slammed, leaned on, left in the sun. Entry, patio, sliding, and storm doors, fitted so they still close right in five years.",
    image: "/photos/door-glass-decorative.jpg",
    alt: "A white entry door with a decorative glass panel, installed and trimmed",
    links: [
      { label: "Replacement", href: "/doors/replacement" },
      { label: "Repair", href: "/doors/repair" },
    ],
  },
  {
    label: "Full replacement, or a targeted fix",
    title: "Windows",
    body: "Full replacement when the frame has failed, targeted repair when it hasn't — fogged glass, broken seals, sashes that won't balance. On older homes, we work with the original opening.",
    image: "/photos/window-tree-reflection.jpg",
    alt: "A double-hung window, glass clear and freshly sealed",
    links: [
      { label: "Replacement", href: "/windows/replacement" },
      { label: "Repair", href: "/windows/repair" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed photo, bold caps headline, two pill CTAs */}
      <section className="relative isolate">
        <div className="relative h-[520px] sm:h-[600px] overflow-hidden">
          <Image
            src="/photos/hero-farmhouse-autumn.webp"
            alt="A two-story home with dormer windows, dark shutters, and a covered porch decorated for fall"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" aria-hidden />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="font-display font-bold uppercase text-balance leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl">
                Trust your home to Prestigious
              </h1>
              <p className="mt-5 text-lg text-white/90 max-w-md">
                High-quality windows and doors, installed and repaired by a
                licensed local crew. Based in {site.baseTown}, serving{" "}
                {site.serviceCounty}.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/windows/replacement">Explore windows</ButtonLink>
                <ButtonLink href="/doors/replacement">Explore doors</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEUTRAL INTRO — plain text, no image, no hard CTA */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20 text-center">
        <p className="text-lg sm:text-xl text-ink/80 leading-relaxed">
          Prestigious Home Improvements installs and repairs windows and
          doors across {site.serviceCounty}, based in {site.baseTown}. Every
          job starts with an in-person measurement, not a guess over the
          phone. Whether it&apos;s one window, a full house, or a single
          entry door, the crew that measures the job is the crew that
          installs it.
        </p>
      </section>

      {/* STAGE PICKER — icon + heading + body + pill link, 3 columns */}
      <section className="bg-fog py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BrandMark className="h-6 w-auto mx-auto mb-6" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-center text-ink">
            Where are you in your project?
          </h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-10 sm:gap-8">
            {stages.map((s) => (
              <div key={s.title} className="flex flex-col items-center text-center">
                <s.icon />
                <h3 className="mt-5 font-display font-bold text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/60 max-w-[220px]">{s.body}</p>
                <ButtonLink href={s.href} className="mt-6 text-sm">
                  {s.cta}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS — photo top, label, title, body, pill links */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink text-center mb-14">
          The right fit for your project
        </h2>
        <div className="grid sm:grid-cols-2 gap-10 sm:gap-8">
          {products.map((p) => (
            <div key={p.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 640px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink/50">
                {p.label}
              </p>
              <h3 className="mt-1 font-display font-bold text-2xl text-ink">{p.title}</h3>
              <p className="mt-3 text-ink/70 max-w-md">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <ButtonLink key={l.href} href={l.href} variant="ghost-dark" className="text-sm">
                    {l.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNS TO REPLACE */}
      <section className="bg-fog py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:sticky lg:top-24">
            <Image
              src="/photos/window-blue-shutters-gables.jpg"
              alt="A house exterior with several multi-pane windows and painted shutters"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Why replace</Eyebrow>
            <SectionHeading as="h2" className="text-3xl sm:text-4xl max-w-xl">
              Signs your windows or doors are due for a change
            </SectionHeading>
            <p className="mt-4 max-w-xl text-ink/70">
              One or two of these on their own is usually a repair. Several
              at once, on the same window or door, usually means it&apos;s
              time to replace it.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {signs.map((s) => (
                <div key={s.title} className="border-t border-line pt-5">
                  <div className="-ml-2 scale-75 origin-left">
                    <s.icon />
                  </div>
                  <h3 className="-mt-2 font-display font-bold text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE QUOTE */}
      <section className="bg-fog py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photos/door-iford-manor.jpg"
              alt="A paneled door set in a stone archway"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>How we quote</Eyebrow>
            <SectionHeading as="h2" className="text-3xl sm:text-4xl">
              Measured on site. Priced once you&apos;ve seen the number.
            </SectionHeading>
            <p className="mt-5 text-ink/70 max-w-md">
              We don&apos;t price over the phone, and we don&apos;t do a
              &quot;today-only&quot; discount to force a signature. Someone comes out,
              measures the actual opening, and gives you a written number for the
              actual work.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex gap-4 border-t border-line pt-4">
                <dt className="text-gold font-bold w-6">01</dt>
                <dd className="text-ink/80">Call or request a quote online</dd>
              </div>
              <div className="flex gap-4 border-t border-line pt-4">
                <dt className="text-gold font-bold w-6">02</dt>
                <dd className="text-ink/80">On-site measurement, no obligation</dd>
              </div>
              <div className="flex gap-4 border-t border-line pt-4">
                <dt className="text-gold font-bold w-6">03</dt>
                <dd className="text-ink/80">Written quote — materials, timeline, price</dd>
              </div>
              <div className="flex gap-4 border-t border-line pt-4 border-b pb-4">
                <dt className="text-gold font-bold w-6">04</dt>
                <dd className="text-ink/80">Install, cleanup, and a final walkthrough</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <BrandMark className="h-6 w-auto mb-6" />
        <Eyebrow>Why choose us</Eyebrow>
        <SectionHeading as="h2" className="text-3xl sm:text-4xl max-w-2xl">
          What our customers actually notice
        </SectionHeading>
        <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {reasons.map((r) => (
            <div key={r.title} className="border-t border-line pt-5">
              <div className="-ml-2 scale-75 origin-left">
                <r.icon />
              </div>
              <h3 className="-mt-2 font-display font-bold text-lg text-ink">{r.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>What people say</Eyebrow>
          <SectionHeading as="h2" className="text-3xl sm:text-4xl text-white max-w-2xl">
            Real reviews, straight from Google
          </SectionHeading>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-lg border border-white/15 bg-white/5 p-6 sm:p-8">
                <span className="text-gold tracking-wide" aria-hidden>
                  ★★★★★
                </span>
                <p className="mt-4 text-white/85 text-sm leading-relaxed">
                  &quot;{r.text}&quot;
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/50">
                  {r.name} · {r.time}
                </p>
              </div>
            ))}
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
            className="text-sm font-semibold text-ink hover:text-gold"
          >
            Full service area →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreTowns.map((t) => (
            <Link
              key={t.slug}
              href={`/service-area/${t.slug}`}
              className="rounded-lg border border-line bg-white p-6 hover:border-gold transition-colors"
            >
              <span className="font-display font-bold text-xl">{t.name}, PA</span>
              <p className="mt-2 text-sm text-ink/60">{t.minutesFromBase} min from East Earl</p>
            </Link>
          ))}
        </div>
      </section>

      <Divider className="max-w-7xl mx-auto" />

      {/* OLD HOMES */}
      <section className="relative isolate my-20 sm:my-28">
        <div className="relative h-[480px] sm:h-[560px] overflow-hidden">
          <Image
            src="/photos/door-glass-sidelights.webp"
            alt="A traditional entry door with decorative glass and matching sidelights"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/5"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-14 sm:pb-16 w-full">
            <div className="max-w-xl">
              <Eyebrow>An honest gap</Eyebrow>
              <h2 className="font-display font-bold text-balance leading-[1.1] text-white text-3xl sm:text-4xl">
                Old house? The opening usually doesn&apos;t need to change.
              </h2>
              <p className="mt-4 text-white/85 max-w-md">
                A lot of companies quote older homes like new construction —
                resize everything, lose the original proportions. We measure
                the existing opening first and work with it whenever the
                structure allows.
              </p>
              <ButtonLink href="/old-homes" variant="ghost-light" className="mt-6">
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
          <p className="mt-5 text-ink/70 max-w-md">
            No pressure quote, no call-center hand-off — you&apos;ll hear back from
            someone who actually does the work.
          </p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
