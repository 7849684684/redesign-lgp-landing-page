"use client";

import { useMemo } from "react";
import rough from "roughjs";

interface SketchArrowProps {
  /** SVG path d attribute for the arrow body */
  path: string;
  /** viewBox dimensions [width, height] */
  viewBox: [number, number];
  color?: string;
  strokeWidth?: number;
  seed?: number;
  className?: string;
  /** Show arrowhead at end */
  showHead?: boolean;
}

export default function SketchArrow({
  path,
  viewBox,
  color = "var(--color-ink-blue)",
  strokeWidth = 2.5,
  seed = 1,
  className = "",
  showHead = true,
}: SketchArrowProps) {
  // For the arrow body, we use the provided SVG path directly with a hand-drawn stroke style
  // rough.js is used to add wobble to straight lines for the arrowhead
  const arrowheadPaths = useMemo(() => {
    if (!showHead || typeof document === "undefined") return [];
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const rc = rough.svg(svg);
    // Small arrowhead lines near the end of the path
    // These are approximate - the actual position depends on where the path ends
    const node1 = rc.line(0, 0, -10, -6, {
      stroke: color,
      strokeWidth: strokeWidth * 0.8,
      roughness: 1.2,
      seed,
    });
    const node2 = rc.line(0, 0, -10, 6, {
      stroke: color,
      strokeWidth: strokeWidth * 0.8,
      roughness: 1.2,
      seed: seed + 1,
    });
    const ds: string[] = [];
    [node1, node2].forEach((n) => {
      n.querySelectorAll("path").forEach((p) => {
        const d = p.getAttribute("d");
        if (d) ds.push(d);
      });
    });
    return ds;
  }, [showHead, color, strokeWidth, seed]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${viewBox[0]} ${viewBox[1]}`}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
