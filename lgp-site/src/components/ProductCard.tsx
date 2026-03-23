interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  status?: string;
}

export default function ProductCard({ title, description, href, status }: ProductCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-rule/60 rounded-sm p-6 md:p-8 transition-colors duration-150 hover:border-ink/30 hover:bg-surface/40"
    >
      {status && (
        <span className="inline-block text-xs font-mono uppercase tracking-widest text-blue mb-3">
          {status}
        </span>
      )}
      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-3 group-hover:text-blue transition-colors duration-150">
        {title}
      </h3>
      <p className="text-muted leading-relaxed text-[0.95rem] mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm text-blue font-medium">
        Visit
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3h7v7M13 3L6 10" />
        </svg>
      </span>
    </a>
  );
}
