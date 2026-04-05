import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export const BLOG_CATEGORIES = ["Strategy", "Leadership", "Decision-Making", "Interactive"] as const;

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  author: string;
  featured: boolean;
  readingTime: number;
  heroImage?: string;
  href?: string;
  aiAssisted: boolean;
  originalDate?: string;
  tags?: string[];
}

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      category: data.category || "Strategy",
      author: data.author || "Daniel Eppa",
      featured: data.featured || false,
      readingTime: calculateReadingTime(content),
      heroImage: data.heroImage || undefined,
      href: data.href || undefined,
      aiAssisted: data.aiAssisted || false,
      originalDate: data.originalDate || undefined,
      tags: data.tags || [],
    };
  });
  // Featured first, then by date descending
  return posts.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getBlogPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      category: data.category || "Strategy",
      author: data.author || "Daniel Eppa",
      featured: data.featured || false,
      readingTime: calculateReadingTime(content),
      heroImage: data.heroImage || undefined,
      href: data.href || undefined,
      aiAssisted: data.aiAssisted || false,
      originalDate: data.originalDate || undefined,
      tags: data.tags || [],
    },
    content,
  };
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export function getAdjacentPosts(slug: string): { prev: BlogPostMeta | null; next: BlogPostMeta | null } {
  const posts = getAllBlogPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}

export function getRelatedPosts(slug: string, category: string, limit = 3): BlogPostMeta[] {
  return getAllBlogPosts().filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
}
