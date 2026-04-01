import fs from "fs";
import path from "path";
import matter from "gray-matter";

const RESOURCES_DIR = path.join(process.cwd(), "src/content/resources");

export interface ResourceMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  href?: string;
}

export function getAllResources(): ResourceMeta[] {
  if (!fs.existsSync(RESOURCES_DIR)) return [];

  const files = fs.readdirSync(RESOURCES_DIR).filter((f) => f.endsWith(".mdx"));

  const resources = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(RESOURCES_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      category: data.category || "article",
      href: data.href || undefined,
    };
  });

  return resources.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getResourceBySlug(slug: string) {
  const filePath = path.join(RESOURCES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      category: data.category || "article",
    },
    content,
  };
}

export function getResourceSlugs(): string[] {
  if (!fs.existsSync(RESOURCES_DIR)) return [];

  return fs
    .readdirSync(RESOURCES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
