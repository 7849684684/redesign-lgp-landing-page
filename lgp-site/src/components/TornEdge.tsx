import { TORN_EDGE_TOP, TORN_EDGE_BOTTOM } from "@/lib/sketch-paths";

interface TornEdgeProps {
  children: React.ReactNode;
  edge?: "top" | "bottom" | "both";
  className?: string;
}

export default function TornEdge({
  children,
  edge = "both",
  className = "",
}: TornEdgeProps) {
  const showTop = edge === "top" || edge === "both";
  const showBottom = edge === "bottom" || edge === "both";

  return (
    <div className={`relative ${className}`}>
      {showTop && (
        <div className="absolute -top-[20px] left-0 right-0 h-[40px] overflow-hidden pointer-events-none z-10" aria-hidden="true">
          <svg
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path d={TORN_EDGE_TOP} fill="var(--color-cream)" />
          </svg>
        </div>
      )}
      {children}
      {showBottom && (
        <div className="absolute -bottom-[20px] left-0 right-0 h-[40px] overflow-hidden pointer-events-none z-10" aria-hidden="true">
          <svg
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path d={TORN_EDGE_BOTTOM} fill="var(--color-cream)" />
          </svg>
        </div>
      )}
    </div>
  );
}
