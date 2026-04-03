import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readingTime: number;
  featured?: boolean;
  href?: string;
}

export default function BlogCard({ slug, title, description, date, category, author, readingTime, featured, href }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
  const isInteractive = category === "Interactive";

  return (
    <Link
      href={href || `/blog/${slug}`}
      className={`group block py-8 blog-card ${featured ? "bg-surface-1 -mx-6 px-6 rounded-[var(--radius-md)]" : ""}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`label ${isInteractive ? "text-brand-amber" : "text-brand-teal"}`}>
          {category}
        </span>
        <span className="text-xs text-text-tertiary">{formattedDate}</span>
        <span className="text-xs text-text-tertiary">{readingTime} min read</span>
      </div>
      <h3 className="font-editorial text-xl font-normal text-text-primary mb-2 group-hover:text-brand-teal transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-2">{description}</p>
      <span className="text-xs text-text-tertiary">{author}</span>
    </Link>
  );
}
