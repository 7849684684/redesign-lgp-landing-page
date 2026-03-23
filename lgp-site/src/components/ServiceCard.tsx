import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  label?: string;
}

export default function ServiceCard({ title, description, href, label }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block border border-rule/60 rounded-sm p-6 md:p-8 transition-colors duration-150 hover:border-ink/30 hover:bg-surface/40"
    >
      {label && (
        <span className="text-xs font-mono uppercase tracking-widest text-muted mb-3 block">
          {label}
        </span>
      )}
      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-3 group-hover:text-blue transition-colors duration-150">
        {title}
      </h3>
      <p className="text-muted leading-relaxed text-[0.95rem]">
        {description}
      </p>
      <span className="inline-block mt-4 text-sm text-blue font-medium">
        Learn more &rarr;
      </span>
    </Link>
  );
}
