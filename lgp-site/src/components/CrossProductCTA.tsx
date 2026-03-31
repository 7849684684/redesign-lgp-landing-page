import Link from "next/link";

interface CrossProductCTAProps {
  label?: string;
  product: string;
  description: string;
  href: string;
  external?: boolean;
}

export default function CrossProductCTA({
  label = "Go deeper",
  product,
  description,
  href,
  external = false,
}: CrossProductCTAProps) {
  const Tag = external ? "a" : Link;
  const linkProps = external
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };

  return (
    <Tag
      {...linkProps}
      className="group block bg-surface-1 border border-surface-2 rounded-md p-6 md:p-8 transition-all duration-200 hover:border-brand-teal"
    >
      <p className="label text-text-tertiary mb-3">{label}</p>
      <p className="font-editorial text-xl text-text-primary mb-1 group-hover:text-brand-teal transition-colors">
        {product}
      </p>
      <p className="text-sm text-text-secondary mb-4">{description}</p>
      <span className="text-sm font-medium text-brand-teal">
        Try it &rarr;
      </span>
    </Tag>
  );
}
