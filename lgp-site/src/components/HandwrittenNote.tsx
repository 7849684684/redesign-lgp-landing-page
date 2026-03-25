interface HandwrittenNoteProps {
  children: React.ReactNode;
  color?: string;
  rotation?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-base md:text-lg",
  md: "text-lg md:text-xl",
  lg: "text-xl md:text-2xl",
};

export default function HandwrittenNote({
  children,
  color = "var(--color-ink-blue)",
  rotation = 0,
  className = "",
  size = "md",
}: HandwrittenNoteProps) {
  return (
    <span
      className={`font-hand font-semibold ${sizeMap[size]} ${className}`}
      style={{
        color,
        transform: rotation !== 0 ? `rotate(${rotation}deg)` : undefined,
        display: "inline-block",
      }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
