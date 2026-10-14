import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostHero } from "@/components/blog/PostHero";
import { PostFooterNav } from "@/components/blog/PostFooterNav";
import { TrustBar } from "@/components/TrustBar";
import { getPost, posts } from "@/lib/blog";
import { contentMap } from "@/content/blog";
import { site } from "@/lib/site";
import { BUSINESS_ID, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

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
    // Post titles already run 60–75 characters; the brand suffix would only
    // get truncated, so blog pages drop it.
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", images: [{ url: post.heroImage }] },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  const Content = contentMap[slug];
  if (!post || !Content) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: url,
    url,
    headline: post.title,
    description: post.description,
    image: `${site.url}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: site.owner,
      jobTitle: "Owner",
      worksFor: { "@id": BUSINESS_ID },
    },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo-real.png` },
    },
  };

  return (
    <>
      <JsonLd
        data={[
          schema,
          breadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
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
