import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Section from "@/components/Section";
import { getResourceBySlug, getResourceSlugs } from "@/lib/resources";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getResourceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};

  return {
    title: resource.meta.title,
    description: resource.meta.description,
  };
}

export default async function ResourceArticle({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return (
    <Section>
      <div className="pt-32 pb-6 md:pt-40 md:pb-8">
        <Link
          href="/resources"
          className="text-sm text-muted hover:text-ink transition-colors duration-150 mb-6 inline-block"
        >
          &larr; Back to resources
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue">
            {resource.meta.category}
          </span>
          <span className="text-xs text-muted">{resource.meta.date}</span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
          {resource.meta.title}
        </h1>

        {resource.meta.description && (
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
            {resource.meta.description}
          </p>
        )}
      </div>

      <article className="prose pb-24">
        <MDXRemote source={resource.content} />
      </article>
    </Section>
  );
}
