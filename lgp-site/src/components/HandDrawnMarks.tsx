"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarkProps {
  className?: string;
  color?: "blue" | "ink" | "cream" | "pencil";
  delay?: number;
  trigger?: string;
  strokeWidth?: number;
}

const colorMap = {
  blue: "#0066FF",
  ink: "#1A1A1A",
  cream: "#FAF8F5",
  pencil: "#3A3632",
};

function useDrawIn(
  ref: React.RefObject<SVGPathElement | null>,
  containerRef: React.RefObject<SVGSVGElement | null>,
  trigger?: string,
  delay = 0,
  duration = 0.7
) {
  useEffect(() => {
    const path = ref.current;
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const config = {
      strokeDashoffset: 0,
      duration,
      delay,
      ease: "power2.inOut",
    };

    if (trigger === "load") {
      gsap.to(path, config);
    } else {
      gsap.to(path, {
        ...config,
        scrollTrigger: {
          trigger: trigger || containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, [ref, containerRef, trigger, delay, duration]);
}

// Rough, organic circle - like someone drew it quickly with a pen
// Multiple path variants for variety
export function DrawnCircle({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
  strokeWidth = 2,
  variant = 0,
  width = 200,
  height = 70,
}: MarkProps & { variant?: number; width?: number; height?: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useDrawIn(pathRef, svgRef, trigger, delay, 0.9);

  // Different organic circle shapes - none are symmetric
  const paths = [
    // Loose, slightly tilted oval that doesn't quite close
    `M 18 ${height * 0.6} C 12 ${height * 0.18}, ${width * 0.35} ${-height * 0.05}, ${width * 0.62} ${height * 0.15} C ${width * 0.88} ${height * 0.32}, ${width - 8} ${height * 0.72}, ${width * 0.7} ${height * 0.88} C ${width * 0.42} ${height * 1.02}, 8 ${height * 0.85}, 14 ${height * 0.55}`,
    // Rounder, more energetic, overshoots slightly
    `M 22 ${height * 0.5} C 28 ${height * 0.08}, ${width * 0.55} ${-height * 0.08}, ${width * 0.78} ${height * 0.22} C ${width + 5} ${height * 0.55}, ${width * 0.82} ${height * 0.95}, ${width * 0.48} ${height + 2} C ${width * 0.15} ${height * 0.95}, 6 ${height * 0.6}, 20 ${height * 0.42}`,
    // Tighter, more deliberate
    `M 15 ${height * 0.55} C 10 ${height * 0.15}, ${width * 0.4} ${height * 0.02}, ${width * 0.65} ${height * 0.12} C ${width * 0.92} ${height * 0.25}, ${width - 5} ${height * 0.68}, ${width * 0.72} ${height * 0.85} C ${width * 0.45} ${height}, 12 ${height * 0.78}, 18 ${height * 0.5}`,
  ];

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={{ overflow: "visible" }}
    >
      <path
        ref={pathRef}
        d={paths[variant % paths.length]}
        stroke={colorMap[color]}
        strokeWidth={strokeWidth}
        className="hand-mark"
        opacity={0.8}
      />
    </svg>
  );
}

// Quick, confident arrow - like a coach's "look here" gesture
export function DrawnArrow({
  className = "",
  color = "pencil",
  delay = 0,
  trigger,
  strokeWidth = 1.8,
  width = 50,
  height = 35,
}: MarkProps & { width?: number; height?: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useDrawIn(pathRef, svgRef, trigger, delay, 0.5);

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={{ overflow: "visible" }}
    >
      <path
        ref={pathRef}
        d={`M 3 4 C 8 8, ${width * 0.4} ${height * 0.5}, ${width - 12} ${height - 8} M ${width - 18} ${height - 16} L ${width - 10} ${height - 7} L ${width - 20} ${height - 4}`}
        stroke={colorMap[color]}
        strokeWidth={strokeWidth}
        className="hand-mark"
        opacity={0.65}
      />
    </svg>
  );
}

// Wobbly underline - like quickly underlining with a pen
export function DrawnUnderline({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
  strokeWidth = 2.2,
  width = 200,
}: MarkProps & { width?: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useDrawIn(pathRef, svgRef, trigger, delay, 0.5);

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute ${className}`}
      width={width}
      height={14}
      viewBox={`0 0 ${width} 14`}
      fill="none"
      style={{ overflow: "visible" }}
    >
      <path
        ref={pathRef}
        d={`M 0 9 C ${width * 0.12} 5, ${width * 0.22} 10, ${width * 0.35} 7 C ${width * 0.48} 4, ${width * 0.6} 11, ${width * 0.75} 6 C ${width * 0.85} 3, ${width * 0.95} 8, ${width} 5`}
        stroke={colorMap[color]}
        strokeWidth={strokeWidth}
        className="hand-mark"
        opacity={0.7}
      />
    </svg>
  );
}

// Strikethrough - decisive single line
export function DrawnCrossout({
  className = "",
  color = "pencil",
  delay = 0,
  trigger,
  strokeWidth = 2,
  width = 100,
}: MarkProps & { width?: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useDrawIn(pathRef, svgRef, trigger, delay, 0.35);

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute ${className}`}
      width={width}
      height={10}
      viewBox={`0 0 ${width} 10`}
      fill="none"
      style={{ overflow: "visible" }}
    >
      <path
        ref={pathRef}
        d={`M 0 6 C ${width * 0.3} 3.5, ${width * 0.65} 7, ${width} 4.5`}
        stroke={colorMap[color]}
        strokeWidth={strokeWidth}
        className="hand-mark"
        opacity={0.6}
      />
    </svg>
  );
}

// Tactical X - two quick strokes
export function DrawnX({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
  strokeWidth = 2.2,
  size = 28,
}: MarkProps & { size?: number }) {
  const p1 = useRef<SVGPathElement>(null);
  const p2 = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useDrawIn(p1, svgRef, trigger, delay, 0.25);
  useDrawIn(p2, svgRef, trigger, delay + 0.12, 0.25);

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ overflow: "visible" }}
    >
      <path ref={p1} d={`M 3 4 L ${size - 5} ${size - 3}`} stroke={colorMap[color]} strokeWidth={strokeWidth} className="hand-mark" opacity={0.75} />
      <path ref={p2} d={`M ${size - 4} 3 L 4 ${size - 4}`} stroke={colorMap[color]} strokeWidth={strokeWidth} className="hand-mark" opacity={0.75} />
    </svg>
  );
}

// Tactical O - quick circle
export function DrawnO({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
  strokeWidth = 2.2,
  size = 28,
}: MarkProps & { size?: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useDrawIn(pathRef, svgRef, trigger, delay, 0.45);

  const r = size / 2 - 3;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ overflow: "visible" }}
    >
      <path
        ref={pathRef}
        d={`M ${cx + 1} ${cy - r} C ${cx + r + 3} ${cy - r + 2}, ${cx + r + 1} ${cy + r - 1}, ${cx - 2} ${cy + r + 1} C ${cx - r - 1} ${cy + r - 2}, ${cx - r + 1} ${cy - r + 3}, ${cx + 2} ${cy - r - 1}`}
        stroke={colorMap[color]}
        strokeWidth={strokeWidth}
        className="hand-mark"
        opacity={0.75}
      />
    </svg>
  );
}

// Hand-drawn quotation mark - big, confident
export function DrawnQuote({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
}: MarkProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useDrawIn(pathRef, svgRef, trigger, delay, 0.5);

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none ${className}`}
      width={36}
      height={32}
      viewBox="0 0 36 32"
      fill="none"
      style={{ overflow: "visible" }}
    >
      <path
        ref={pathRef}
        d="M 6 24 C 5 14, 2 6, 10 3 M 18 24 C 17 14, 14 6, 22 3"
        stroke={colorMap[color]}
        strokeWidth={2.5}
        className="hand-mark"
        opacity={0.6}
      />
    </svg>
  );
}

// Blue rule that draws in between sections
export function SectionRule({
  className = "",
  trigger,
}: { className?: string; trigger?: string }) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    gsap.fromTo(el,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: trigger || el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, [trigger]);

  return (
    <div
      ref={lineRef}
      className={`h-[2px] bg-blue w-full ${className}`}
      style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
    />
  );
}
