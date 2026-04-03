import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import SubscribeForm from "@/components/SubscribeForm";
import ScrollProgress from "@/components/ScrollProgress";
import TextHighlighter from "@/components/TextHighlighter";
import { getBlogPostBySlug, getBlogSlugs, getAdjacentPosts, getRelatedPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      ...(post.meta.heroImage && { images: [post.meta.heroImage] }),
    },
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  // Interactive pieces redirect to their standalone HTML
  if (post.meta.href) redirect(post.meta.href);

  const { prev, next } = getAdjacentPosts(slug);
  const related = getRelatedPosts(slug, post.meta.category);
  const formattedDate = new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "long", year: "numeric" }).format(new Date(post.meta.date));

  return (
    <Section>
      <div className="pt-12 pb-6 md:pt-16 md:pb-8 max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-text-tertiary hover:text-text-primary transition-colors mb-6 inline-block"
        >
          &larr; Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="label text-brand-teal">{post.meta.category}</span>
          <span className="text-xs text-text-tertiary">{formattedDate}</span>
          <span className="text-xs text-text-tertiary">{post.meta.readingTime} min read</span>
        </div>

        <h1 className="font-editorial text-3xl md:text-5xl font-normal text-text-primary leading-tight">
          {post.meta.title}
        </h1>

        {post.meta.description && (
          <p className="mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed">
            {post.meta.description}
          </p>
        )}

        <p className="mt-3 text-sm text-text-tertiary">{post.meta.author}</p>
      </div>

      {/* Article with scroll progress and text highlighting */}
      <div className="relative max-w-3xl md:grid md:grid-cols-[48px_1fr] md:gap-8">
        <ScrollProgress />
        <TextHighlighter slug={slug}>
          <article className="prose pb-16">
            <MDXRemote source={post.content} />
          </article>
        </TextHighlighter>
      </div>

      {/* Subscribe */}
      <div className="max-w-3xl">
        <SubscribeForm variant="inline" />
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="max-w-3xl border-t border-surface-2 pt-12 mt-4">
          <p className="label text-text-tertiary mb-6">Related articles</p>
          {related.map((r) => (
            <BlogCard key={r.slug} {...r} />
          ))}
        </div>
      )}

      {/* Prev/Next navigation */}
      {(prev || next) && (
        <div className="max-w-3xl grid grid-cols-2 gap-4 border-t border-surface-2 pt-8 pb-24 mt-8">
          {prev ? (
            <Link href={prev.href || `/blog/${prev.slug}`} className="group">
              <span className="text-xs text-text-tertiary">&larr; Previous</span>
              <p className="text-sm text-text-primary group-hover:text-brand-teal transition-colors mt-1">{prev.title}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={next.href || `/blog/${next.slug}`} className="group text-right">
              <span className="text-xs text-text-tertiary">Next &rarr;</span>
              <p className="text-sm text-text-primary group-hover:text-brand-teal transition-colors mt-1">{next.title}</p>
            </Link>
          ) : <div />}
        </div>
      )}
    </Section>
  );
}
