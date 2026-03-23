import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-sm font-medium text-sm tracking-wide transition-colors duration-150";
  const variants = {
    primary: "bg-blue text-white hover:bg-blue-hover",
    secondary: "border border-rule text-ink hover:border-ink hover:bg-surface",
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
