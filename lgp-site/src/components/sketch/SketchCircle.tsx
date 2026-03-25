"use client";

import { useMemo } from "react";
import rough from "roughjs";

interface SketchCircleProps {
  width: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  seed?: number;
  className?: string;
}

export default function SketchCircle({
  width,
  height,
  strokeColor = "var(--color-ink-blue)",
  strokeWidth = 2,
  seed = 1,
  className = "",
}: SketchCircleProps) {
  const h = height ?? width;
  const padding = strokeWidth * 2;
  const svgW = width + padding * 2;
  const svgH = h + padding * 2;

  const paths = useMemo(() => {
    if (typeof document === "undefined") return [];
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const rc = rough.svg(svg);
    const node = rc.ellipse(svgW / 2, svgH / 2, width, h, {
      stroke: strokeColor,
      strokeWidth,
      roughness: 1.5,
      seed,
      fill: "none",
    });
    const ds: string[] = [];
    node.querySelectorAll("path").forEach((p) => {
      const d = p.getAttribute("d");
      if (d) ds.push(d);
    });
    return ds;
  }, [width, h, strokeColor, strokeWidth, seed, svgW, svgH]);

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox={`0 0 ${svgW} ${svgH}`}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      ))}
    </svg>
  );
}
