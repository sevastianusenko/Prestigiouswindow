import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostHero } from "@/components/blog/PostHero";
import { PostFooterNav } from "@/components/blog/PostFooterNav";
import { TrustBar } from "@/components/TrustBar";
import { getPost, posts } from "@/lib/blog";
import { contentMap } from "@/content/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  const Content = contentMap[slug];
  if (!post || !Content) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PostHero post={post} />
      <TrustBar />
      <div className="article mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16">
        <Content />
      </div>
      <PostFooterNav currentSlug={post.slug} />
    </>
  );
}
