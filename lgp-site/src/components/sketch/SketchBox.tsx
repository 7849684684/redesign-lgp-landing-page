"use client";

import { useMemo } from "react";
import rough from "roughjs";

interface SketchBoxProps {
  width: number;
  height: number;
  fill?: string;
  strokeColor?: string;
  strokeWidth?: number;
  seed?: number;
  className?: string;
}

export default function SketchBox({
  width,
  height,
  fill,
  strokeColor = "var(--color-ink-blue)",
  strokeWidth = 2,
  seed = 1,
  className = "",
}: SketchBoxProps) {
  const padding = strokeWidth * 2;
  const svgW = width + padding * 2;
  const svgH = height + padding * 2;

  const paths = useMemo(() => {
    if (typeof document === "undefined") return [];
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const rc = rough.svg(svg);
    const node = rc.rectangle(padding, padding, width, height, {
      stroke: strokeColor,
      strokeWidth,
      roughness: 1.5,
      seed,
      fill: fill || "none",
      fillStyle: fill ? "solid" : undefined,
    });
    const result: { d: string; fill?: string; stroke?: string }[] = [];
    node.querySelectorAll("path").forEach((p) => {
      const d = p.getAttribute("d");
      if (d) {
        result.push({
          d,
          fill: p.getAttribute("fill") || "none",
          stroke: p.getAttribute("stroke") || strokeColor,
        });
      }
    });
    return result;
  }, [width, height, fill, strokeColor, strokeWidth, seed, padding]);

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox={`0 0 ${svgW} ${svgH}`}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill={p.fill}
          stroke={p.stroke}
          strokeWidth={strokeWidth}
        />
      ))}
    </svg>
  );
}
