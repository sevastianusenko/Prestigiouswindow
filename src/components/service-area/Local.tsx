import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Building blocks used inside per-town and per-county injected content
 * (src/content/service-area/towns/<slug>.tsx and .../counties/<slug>.tsx).
 * Kept separate from the blog's Article components since these carry
 * location-specific shapes (fact strips, landmark callouts).
 */

export function FactStrip({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="my-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line rounded-lg overflow-hidden border border-line">
      {items.map((item) => (
        <div key={item.label} className="bg-paper p-5">
          <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold">
            {item.label}
          </div>
          <div className="mt-1.5 text-sm text-ink/80 leading-snug">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

export function Landmark({
  eyebrow = "Worth knowing",
  children,
}: {
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-10 rounded-lg border border-line bg-fog px-6 py-6 sm:px-8 sm:py-7">
      <span className="block font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">
        {eyebrow}
      </span>
      <div className="text-ink/85 leading-relaxed space-y-3 [&_p]:!mt-0 [&_p+p]:!mt-3">
        {children}
      </div>
    </div>
  );
}

export function LocalPhoto({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 672px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-ink/55 font-sans">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export type LocalFaqItem = { q: string; a: string };

export function LocalFaq({ items }: { items: LocalFaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="my-10">
      <h2>Frequently asked questions</h2>
      <div className="mt-2 divide-y divide-line">
        {items.map((item) => (
          <div key={item.q} className="py-5">
            <h3 className="!mt-0 !mb-2">{item.q}</h3>
            <p className="!mt-0 text-ink/75">{item.a}</p>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
