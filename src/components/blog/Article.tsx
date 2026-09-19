import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Building blocks used inside individual post bodies
 * (src/content/blog/<slug>.tsx). Everything else in a post body is plain
 * semantic HTML (h2, h3, p, ul, ol, strong, a) styled globally by the
 * `.article` rules in globals.css — these components cover the pieces
 * that need their own layout.
 */

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="!mt-0 text-lg sm:text-xl leading-relaxed text-ink font-medium border-l-2 border-gold pl-5">
      {children}
    </p>
  );
}

export function ArticleFigure({
  src,
  alt,
  caption,
  priority,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
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

export function Opinion({
  label = "Our take",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-10 rounded-lg border border-line bg-fog px-6 py-6 sm:px-8 sm:py-7">
      <span className="block font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">
        {label}
      </span>
      <div className="text-ink/85 leading-relaxed space-y-3 [&_p]:!mt-0 [&_p+p]:!mt-3">
        {children}
      </div>
    </div>
  );
}

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
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

export function ArticleCTA({
  heading,
  body,
  href,
  label,
}: {
  heading: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <div className="my-10 rounded-lg bg-ink text-white px-6 py-8 sm:px-10 sm:py-10">
      <h3 className="!mt-0 font-display text-xl sm:text-2xl font-semibold text-white">
        {heading}
      </h3>
      <p className="mt-3 text-white/75 max-w-lg">{body}</p>
      <ButtonLink href={href} variant="ghost-light" className="mt-6">
        {label}
      </ButtonLink>
    </div>
  );
}

export function SourceNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-10 text-sm text-ink/50 border-t border-line pt-5">
      {children}
    </p>
  );
}
