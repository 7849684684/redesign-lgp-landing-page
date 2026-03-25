"use client";

import { useMemo } from "react";
import rough from "roughjs";

interface SystemsMapProps {
  className?: string;
}

interface BoxDef {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fill?: string;
}

const BOXES: BoxDef[] = [
  { label: "ASSESS", x: 60, y: 40, w: 140, h: 55, fill: "rgba(255,244,141,0.4)" },
  { label: "CHALLENGE", x: 280, y: 30, w: 160, h: 55, fill: "rgba(255,184,198,0.3)" },
  { label: "STRATEGY", x: 180, y: 140, w: 160, h: 55, fill: "rgba(184,212,255,0.3)" },
  { label: "PRACTICE", x: 420, y: 130, w: 150, h: 55 },
  { label: "ADAPT", x: 300, y: 240, w: 130, h: 55, fill: "rgba(255,244,141,0.3)" },
];

// Arrow connections: [fromBoxIndex, toBoxIndex]
const ARROWS: [number, number][] = [
  [0, 1], // ASSESS -> CHALLENGE
  [0, 2], // ASSESS -> STRATEGY
  [1, 2], // CHALLENGE -> STRATEGY
  [2, 3], // STRATEGY -> PRACTICE
  [3, 4], // PRACTICE -> ADAPT
  [4, 2], // ADAPT -> STRATEGY (feedback loop)
];

export default function SystemsMap({ className = "" }: SystemsMapProps) {
  const svgW = 620;
  const svgH = 330;

  const { boxPaths, arrowPaths } = useMemo(() => {
    if (typeof document === "undefined") {
      return { boxPaths: [], arrowPaths: [] };
    }

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const rc = rough.svg(svg);

    // Draw boxes
    const bp = BOXES.map((box, i) => {
      const node = rc.rectangle(box.x, box.y, box.w, box.h, {
        stroke: "var(--color-ink-blue)",
        strokeWidth: 2,
        roughness: 1.8,
        seed: i * 10 + 1,
        fill: box.fill || "none",
        fillStyle: "solid",
      });
      const ds: { d: string; fill: string; stroke: string }[] = [];
      node.querySelectorAll("path").forEach((p) => {
        const d = p.getAttribute("d");
        if (d) {
          ds.push({
            d,
            fill: p.getAttribute("fill") || "none",
            stroke: p.getAttribute("stroke") || "var(--color-ink-blue)",
          });
        }
      });
      return ds;
    });

    // Draw arrows between box centres
    const ap = ARROWS.map(([from, to], i) => {
      const f = BOXES[from];
      const t = BOXES[to];
      const fx = f.x + f.w / 2;
      const fy = f.y + f.h / 2;
      const tx = t.x + t.w / 2;
      const ty = t.y + t.h / 2;

      // Calculate edge points (simplified - from centre to centre)
      const angle = Math.atan2(ty - fy, tx - fx);
      const startX = fx + Math.cos(angle) * (f.w / 2 + 5);
      const startY = fy + Math.sin(angle) * (f.h / 2 + 5);
      const endX = tx - Math.cos(angle) * (t.w / 2 + 5);
      const endY = ty - Math.sin(angle) * (t.h / 2 + 5);

      const node = rc.line(startX, startY, endX, endY, {
        stroke: "var(--color-ink-blue)",
        strokeWidth: 1.5,
        roughness: 1.5,
        seed: i * 10 + 100,
      });
      const ds: string[] = [];
      node.querySelectorAll("path").forEach((p) => {
        const d = p.getAttribute("d");
        if (d) ds.push(d);
      });
      return { ds, endX, endY, angle };
    });

    return { boxPaths: bp, arrowPaths: ap };
  }, []);

  return (
    <div className={`relative w-full ${className}`}>
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full h-auto max-w-2xl mx-auto"
        aria-hidden="true"
      >
        {/* Arrow lines */}
        {arrowPaths.map((arrow, i) => (
          <g key={`arrow-${i}`}>
            {arrow.ds.map((d, j) => (
              <path
                key={j}
                d={d}
                fill="none"
                stroke="var(--color-ink-blue)"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            ))}
            {/* Arrowhead */}
            <polygon
              points={`${arrow.endX},${arrow.endY} ${arrow.endX - 10 * Math.cos(arrow.angle - 0.4)},${arrow.endY - 10 * Math.sin(arrow.angle - 0.4)} ${arrow.endX - 10 * Math.cos(arrow.angle + 0.4)},${arrow.endY - 10 * Math.sin(arrow.angle + 0.4)}`}
              fill="var(--color-ink-blue)"
            />
          </g>
        ))}

        {/* Box shapes */}
        {boxPaths.map((paths, i) => (
          <g key={`box-${i}`}>
            {paths.map((p, j) => (
              <path
                key={j}
                d={p.d}
                fill={p.fill}
                stroke={p.stroke}
                strokeWidth={2}
              />
            ))}
          </g>
        ))}

        {/* Box labels */}
        {BOXES.map((box, i) => (
          <text
            key={`label-${i}`}
            x={box.x + box.w / 2}
            y={box.y + box.h / 2 + 5}
            textAnchor="middle"
            className="font-hand"
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "18px",
              fontWeight: 600,
              fill: "var(--color-ink-blue)",
            }}
          >
            {box.label}
          </text>
        ))}
      </svg>

      {/* "SYSTEMS MAP" label */}
      <div className="text-center mt-2">
        <span className="font-hand text-ink-blue text-lg font-semibold tracking-wide">
          SYSTEMS MAP
        </span>
      </div>
    </div>
  );
}
