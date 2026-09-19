import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { formatPostDate, type BlogPost } from "@/lib/blog";

export function PostHero({ post }: { post: BlogPost }) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-12">
      <Link
        href="/blog"
        className="font-sans text-xs tracking-[0.2em] uppercase text-ink/50 hover:text-gold transition-colors"
      >
        ← All posts
      </Link>

      <div className="mt-6 max-w-3xl">
        <Eyebrow>Windows &amp; Doors, Explained</Eyebrow>
        <SectionHeading as="h1" className="text-3xl sm:text-4xl lg:text-[2.75rem]">
          {post.title}
        </SectionHeading>
        <p className="mt-5 text-lg text-ink/70 max-w-2xl">{post.dek}</p>
        <div className="mt-6 flex items-center gap-3 font-sans text-sm text-ink/50">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min read</span>
        </div>
      </div>

      <div className="mt-10 relative aspect-[16/8] overflow-hidden rounded-lg border border-line">
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
