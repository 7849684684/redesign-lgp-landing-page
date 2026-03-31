import Link from "next/link";

interface ProductCardProps {
  name: string;
  tagline: string;
  audience: string;
  href: string;
  accentColor: string;
  tier: string;
  size?: "compact" | "featured";
}

export default function ProductCard({
  name,
  tagline,
  audience,
  href,
  accentColor,
  tier,
  size = "compact",
}: ProductCardProps) {
  const isInternal = href.startsWith("/");
  const isCompact = size === "compact";

  const card = (
    <>
      <span
        className="label text-xs px-2 py-0.5 rounded-full inline-block mb-3"
        style={{
          color: accentColor,
          backgroundColor: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
        }}
      >
        {tier}
      </span>
      <h3 className={`font-editorial font-normal text-text-primary mb-1 group-hover:text-brand-teal transition-colors ${isCompact ? "text-lg" : "text-xl"}`}>
        {name}
      </h3>
      <p className={`font-editorial italic font-light text-text-secondary ${isCompact ? "text-sm mb-2" : "text-base mb-3"}`}>
        {tagline}
      </p>
      <p className="text-xs text-text-tertiary mb-4">{audience}</p>
      <span className="text-sm font-medium text-brand-teal group-hover:underline">
        {isInternal ? "Learn more" : "Try it"} &rarr;
      </span>
    </>
  );

  const classes = `group block transition-all duration-200 hover:border-brand-teal ${
    isCompact
      ? "py-4"
      : "bg-surface-0 border border-surface-2 rounded-md p-6 hover:shadow-sm"
  }`;

  if (isInternal) {
    return <Link href={href} className={classes}>{card}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {card}
    </a>
  );
}
