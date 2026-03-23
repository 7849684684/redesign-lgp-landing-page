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
      className="group block border border-rule/60 rounded-sm p-6 transition-colors duration-150 hover:border-ink/30 hover:bg-surface/40"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-blue">
          {category}
        </span>
        <span className="text-xs text-muted">{date}</span>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-blue transition-colors duration-150">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
