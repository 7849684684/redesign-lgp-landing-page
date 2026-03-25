"use client";

import { useMemo } from "react";
import rough from "roughjs";

interface SketchUnderlineProps {
  width: number;
  color?: string;
  strokeWidth?: number;
  seed?: number;
  className?: string;
}

export default function SketchUnderline({
  width,
  color = "var(--color-ink-blue)",
  strokeWidth = 2.5,
  seed = 1,
  className = "",
}: SketchUnderlineProps) {
  const svgH = 16;

  const paths = useMemo(() => {
    if (typeof document === "undefined") return [];
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const rc = rough.svg(svg);
    const node = rc.line(4, svgH / 2, width - 4, svgH / 2, {
      stroke: color,
      strokeWidth,
      roughness: 2,
      seed,
      bowing: 2,
    });
    const ds: string[] = [];
    node.querySelectorAll("path").forEach((p) => {
      const d = p.getAttribute("d");
      if (d) ds.push(d);
    });
    return ds;
  }, [width, color, strokeWidth, seed]);

  return (
    <svg
      width={width}
      height={svgH}
      viewBox={`0 0 ${width} ${svgH}`}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
