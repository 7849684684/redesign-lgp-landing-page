import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
}

export default function ResourceCard({ title, description, date, category, slug }: ResourceCardProps) {
  return (
    <Link
      href={`/resources/${slug}`}
      className="group block border border-surface-2 rounded-[var(--radius-md)] p-6 transition-all duration-200 hover:border-brand-teal hover:shadow-sm"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="label text-brand-teal">{category}</span>
        <span className="text-xs text-text-tertiary">{date}</span>
      </div>
      <h3 className="font-editorial text-lg font-normal text-text-primary mb-2 group-hover:text-brand-teal transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </Link>
  );
}
