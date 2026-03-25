interface StickyNoteProps {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue";
  rotation?: number;
  className?: string;
}

const colorMap = {
  yellow: "bg-sticky-yellow",
  pink: "bg-highlight-pink",
  blue: "bg-highlight-blue",
};

export default function StickyNote({
  children,
  color = "yellow",
  rotation = -2,
  className = "",
}: StickyNoteProps) {
  return (
    <div
      className={`relative inline-block ${colorMap[color]} px-5 py-4 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Tape strip */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/50 backdrop-blur-sm"
        style={{ transform: "rotate(2deg)" }}
        aria-hidden="true"
      />
      <div className="font-hand text-ink font-semibold text-sm md:text-base uppercase leading-tight text-center">
        {children}
      </div>
    </div>
  );
}
