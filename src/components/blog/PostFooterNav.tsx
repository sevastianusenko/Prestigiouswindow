import Image from "next/image";
import Link from "next/link";
import { Divider, Eyebrow, SectionHeading } from "@/components/ui/Type";
import { ButtonLink } from "@/components/ui/Button";
import { formatPostDate, posts, type BlogPost } from "@/lib/blog";

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
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
      <div className="p-5">
        <div className="font-sans text-xs text-ink/45">{formatPostDate(post.date)}</div>
        <h3 className="mt-2 font-display text-base font-semibold leading-snug">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

export function PostFooterNav({ currentSlug }: { currentSlug: string }) {
  const others = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <>
      <Divider className="max-w-7xl mx-auto" />
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <Eyebrow>Keep reading</Eyebrow>
        <SectionHeading as="h2" className="text-xl sm:text-2xl mb-8">
          More from the blog
        </SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href="/contact">Get a Quote</ButtonLink>
          <ButtonLink href="/blog" variant="ghost-dark">
            See all posts
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
