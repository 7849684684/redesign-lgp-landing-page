import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://longgameproject.org";

  const staticPages = [
    "",
    "/about",
    "/team",
    "/contact",
    "/blog",
    "/consulting",
    "/mastermind",
    "/publishing-integrity",
    "/privacy",
    "/terms",
  ];

  const posts = getAllBlogPosts();
  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1.0 : 0.8,
    })),
    ...blogEntries,
  ];
}
