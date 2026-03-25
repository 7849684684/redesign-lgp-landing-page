"use client";

import { CRAYON_SCRIBBLES } from "@/lib/sketch-paths";

interface CrayonScribbleProps {
  className?: string;
}

const colors = [
  "var(--color-crayon-orange)",
  "var(--color-crayon-purple)",
  "var(--color-crayon-teal)",
];

export default function CrayonScribble({ className = "" }: CrayonScribbleProps) {
  return (
    <svg
      viewBox="0 0 300 60"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {CRAYON_SCRIBBLES.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={colors[i % colors.length]}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.55}
        />
      ))}
    </svg>
  );
}
