import Link from "next/link";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { getPost } from "@/lib/blog";

// A short list of blog posts that answer the questions people arrive at a
// service or town page with. Slugs are passed in so each page picks its own.
export function RelatedPosts({
  slugs,
  heading = "Before you call",
}: {
  slugs: string[];
  heading?: string;
}) {
  const items = slugs.map(getPost).filter((p) => p !== undefined);
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
      <Eyebrow>From the blog</Eyebrow>
      <SectionHeading as="h2" className="text-xl sm:text-2xl mb-8">
        {heading}
      </SectionHeading>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="block h-full rounded-lg border border-line bg-paper p-6 hover:bg-fog transition-colors group"
            >
              <span className="font-display text-lg font-semibold leading-snug group-hover:text-gold transition-colors">
                {p.title}
              </span>
              <p className="mt-3 text-sm text-ink/65">{p.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
