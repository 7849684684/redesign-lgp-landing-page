interface ProductCardProps {
  name: string;
  tagline: string;
  audience: string;
  href: string;
  accentColor: string;
  tier: string;
}

export default function ProductCard({
  name,
  tagline,
  audience,
  href,
  accentColor,
  tier,
}: ProductCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-surface-0 border border-surface-2 rounded-[var(--radius-md)] p-6 transition-all duration-200 hover:border-brand-teal hover:shadow-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="label text-xs px-2 py-0.5 rounded-full"
          style={{
            color: accentColor,
            backgroundColor: `${accentColor}15`,
          }}
        >
          {tier}
        </span>
      </div>
      <h3 className="font-editorial text-xl font-normal text-text-primary mb-1 group-hover:text-brand-teal transition-colors">
        {name}
      </h3>
      <p className="font-editorial text-sm italic font-light text-text-secondary mb-3">
        {tagline}
      </p>
      <p className="text-xs text-text-tertiary mb-4">{audience}</p>
      <span className="text-sm font-medium text-brand-teal group-hover:underline">
        Try it &rarr;
      </span>
    </a>
  );
}
