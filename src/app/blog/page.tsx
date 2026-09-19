import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { formatPostDate, posts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Straight answers on window and door repair and replacement, from ${site.name} in ${site.serviceCounty}.`,
};

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-12">
        <Eyebrow>The blog</Eyebrow>
        <SectionHeading as="h1" className="text-4xl sm:text-5xl max-w-2xl">
          Windows &amp; doors, explained honestly.
        </SectionHeading>
        <p className="mt-6 text-lg text-ink/75 max-w-2xl">
          What&apos;s actually wrong before you call anyone, what things cost, and
          when repair beats replacement. Written by the crew that does the work,
          not a marketing team.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-lg border border-line bg-paper overflow-hidden p-2 hover:border-gold transition-colors"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded">
            <Image
              src={featured.heroImage}
              alt={featured.heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div className="p-4 sm:p-6 lg:pr-10">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold">
              Start here
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-balance">
              {featured.title}
            </h2>
            <p className="mt-4 text-ink/70 max-w-lg">{featured.dek}</p>
            <div className="mt-5 font-sans text-sm text-ink/45">
              {formatPostDate(featured.date)} · {featured.readMinutes} min read
            </div>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-lg border border-line bg-paper overflow-hidden hover:border-gold transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="font-sans text-xs text-ink/45">
                  {formatPostDate(post.date)} · {post.readMinutes} min read
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 line-clamp-2">{post.dek}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
