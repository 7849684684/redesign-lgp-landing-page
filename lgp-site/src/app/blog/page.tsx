import type { Metadata } from "next";
import { Suspense } from "react";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import CategoryFilter from "@/components/CategoryFilter";
import SubscribeForm from "@/components/SubscribeForm";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on strategy, decision-making, and building teams that think well under pressure.",
};

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const allPosts = getAllBlogPosts();
  const posts = category ? allPosts.filter((p) => p.category === category) : allPosts;

  return (
    <>
      <Section>
        <div className="pt-12 pb-8 md:pt-16 md:pb-12 max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Articles on strategy, decision-making, and building teams that think well under pressure.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl pb-6">
          <Suspense fallback={null}>
            <CategoryFilter />
          </Suspense>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="max-w-3xl">
          {posts.length > 0 ? (
            <>
              {posts.map((post, i) => (
                <div key={post.slug}>
                  <BlogCard {...post} />
                  {i === 2 && posts.length > 3 && (
                    <SubscribeForm variant="card" />
                  )}
                </div>
              ))}
              {posts.length <= 3 && (
                <SubscribeForm variant="card" />
              )}
            </>
          ) : (
            <p className="text-text-tertiary py-8">No posts in this category yet.</p>
          )}
        </div>
      </Section>
    </>
  );
}
