export type FaqItem = { q: string; a: string };

// Reusable FAQ list for service pages — plain q/a stack with FAQPage
// schema, styled to match the site's existing divide-y list pattern
// (see the "what we actually fix" lists on the repair pages) rather
// than the blog's separately-styled .article FAQ block.
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
    <div className="mt-10 divide-y divide-line">
      {items.map((item) => (
        <div key={item.q} className="py-6">
          <h3 className="font-display text-lg font-semibold text-ink">{item.q}</h3>
          <p className="mt-2 text-sm text-ink/70 max-w-2xl leading-relaxed">{item.a}</p>
        </div>
      ))}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
