import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { Eyebrow, SectionHeading, Divider } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import {
  PARENT_LABEL,
  getCategoriesFor,
  type ServiceCategory,
} from "@/lib/services";
import { site } from "@/lib/site";

export function ServiceCategoryPage({
  category,
  Content,
}: {
  category: ServiceCategory;
  Content?: ComponentType;
}) {
  const siblings = getCategoriesFor(category.parent).filter(
    (c) => c.slug !== category.slug
  );
  const parentHref = `/${category.parent}`;
  const parentLabel = PARENT_LABEL[category.parent];
  const isRepair = category.parent.endsWith("repair");
  const counterpartHref = isRepair
    ? `/${category.parent.split("/")[0]}/replacement`
    : `/${category.parent.split("/")[0]}/repair`;
  const counterpartLabel = isRepair
    ? "Needs full replacement instead?"
    : "Might only need a repair?";

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-16">
        <Link
          href={parentHref}
          className="font-sans text-xs tracking-[0.2em] uppercase text-ink/50 hover:text-gold transition-colors"
        >
          ← {parentLabel}
        </Link>

        <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow>{parentLabel}</Eyebrow>
            <SectionHeading as="h1" className="text-4xl sm:text-5xl">
              {category.h1}
            </SectionHeading>
            <p className="mt-6 text-lg text-ink/75 max-w-lg">{category.dek}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Get a Quote</ButtonLink>
              <ButtonLink href={counterpartHref} variant="ghost-dark">
                {counterpartLabel} →
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={category.heroImage}
              alt={category.heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      {Content && (
        <div className="article mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <Content />
        </div>
      )}

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Get a number</Eyebrow>
          <SectionHeading as="h2" className="text-2xl sm:text-3xl max-w-md">
            Measured on site, quoted in writing.
          </SectionHeading>
          <p className="mt-5 text-ink/70 max-w-md">
            {site.license} — licensed and insured across {site.serviceCounty} and
            five neighboring counties. The crew that measures the job is usually
            the crew that does it, and a written quote is good for 30 days.
          </p>
        </div>
        <QuoteForm compact />
      </section>

      <Divider className="max-w-7xl mx-auto" />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <Eyebrow>Also under {parentLabel}</Eyebrow>
        <SectionHeading as="h2" className="text-xl sm:text-2xl mb-8">
          Related options
        </SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siblings.map((s) => (
            <Link
              key={s.slug}
              href={`${parentHref}/${s.slug}`}
              className="lift-on-hover group block rounded-lg border border-line bg-paper p-6 hover:border-gold"
            >
              <span className="font-display text-lg font-semibold group-hover:text-gold transition-colors">
                {s.name}
              </span>
              <p className="mt-2 text-sm text-ink/65">{s.cardDetail}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href={parentHref} variant="ghost-dark">
            Back to {parentLabel}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
