import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "amber" | "outline" | "teal";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "amber",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-150";
  const variants = {
    amber: `bg-brand-amber text-white hover:bg-brand-amber-light rounded-[${`var(--radius-sm)`}]`,
    outline: `border border-surface-2 text-text-primary hover:border-brand-teal hover:text-brand-teal rounded-[${`var(--radius-sm)`}]`,
    teal: `bg-brand-teal text-white hover:bg-brand-teal-light rounded-[${`var(--radius-sm)`}]`,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
