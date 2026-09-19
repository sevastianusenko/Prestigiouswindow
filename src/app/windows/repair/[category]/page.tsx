import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceCategoryPage } from "@/components/ServiceCategoryPage";
import { getCategoriesFor, getCategory } from "@/lib/services";
import { serviceContentMap } from "@/content/services";

const PARENT = "windows/repair" as const;

export function generateStaticParams() {
  return getCategoriesFor(PARENT).map((c) => ({ category: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/windows/repair/[category]">
): Promise<Metadata> {
  const { category: slug } = await props.params;
  const category = getCategory(PARENT, slug);
  if (!category) return {};
  return { title: category.h1, description: category.description };
}

export default async function Page(
  props: PageProps<"/windows/repair/[category]">
) {
  const { category: slug } = await props.params;
  const category = getCategory(PARENT, slug);
  if (!category) notFound();

  return (
    <ServiceCategoryPage
      category={category}
      Content={serviceContentMap[`${PARENT}/${slug}`]}
    />
  );
}
