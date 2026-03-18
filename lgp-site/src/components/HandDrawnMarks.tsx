"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarkProps {
  className?: string;
  color?: "blue" | "ink" | "cream";
  delay?: number;
  trigger?: string; // CSS selector or "load" for immediate
  width?: number;
  height?: number;
}

const colorMap = {
  blue: "#0080FF",
  ink: "#1A1A1A",
  cream: "#FAF8F5",
};

// Wobbly circle drawn around content
export function DrawnCircle({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
  width = 200,
  height = 80,
}: MarkProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const anim = {
      strokeDashoffset: 0,
      duration: 0.8,
      delay,
      ease: "power2.out",
    };

    if (trigger === "load") {
      gsap.to(path, anim);
    } else {
      gsap.to(path, {
        ...anim,
        scrollTrigger: {
          trigger: trigger || svgRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [delay, trigger]);

  const cx = width / 2;
  const cy = height / 2;
  const rx = width / 2 - 8;
  const ry = height / 2 - 6;

  // Imperfect ellipse path with slight wobble
  const d = `M ${cx - rx} ${cy + 3}
    C ${cx - rx} ${cy - ry + 5}, ${cx + rx - 10} ${cy - ry - 2}, ${cx + rx + 2} ${cy - 4}
    C ${cx + rx + 4} ${cy + ry - 8}, ${cx - rx + 15} ${cy + ry + 3}, ${cx - rx - 2} ${cy + 5}`;

  return (
    <svg
      ref={svgRef}
      className={`hand-mark pointer-events-none absolute ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        ref={pathRef}
        d={d}
        stroke={colorMap[color]}
        strokeWidth={2.5}
        className="hand-mark"
      />
    </svg>
  );
}

// Hand-drawn arrow
export function DrawnArrow({
  className = "",
  color = "ink",
  delay = 0,
  trigger,
  width = 60,
  height = 40,
}: MarkProps & { direction?: "down" | "right" | "down-right" }) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const anim = {
      strokeDashoffset: 0,
      duration: 0.6,
      delay,
      ease: "power2.out",
    };

    if (trigger === "load") {
      gsap.to(path, anim);
    } else {
      gsap.to(path, {
        ...anim,
        scrollTrigger: {
          trigger: trigger || svgRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, [delay, trigger]);

  return (
    <svg
      ref={svgRef}
      className={`hand-mark pointer-events-none absolute ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        ref={pathRef}
        d={`M 5 5 C 15 12, 30 20, ${width - 15} ${height - 10} M ${width - 22} ${height - 18} L ${width - 12} ${height - 10} L ${width - 24} ${height - 6}`}
        stroke={colorMap[color]}
        strokeWidth={2}
        className="hand-mark"
      />
    </svg>
  );
}

// Hand-drawn underline (wobbly)
export function DrawnUnderline({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
  width = 200,
}: MarkProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const anim = {
      strokeDashoffset: 0,
      duration: 0.5,
      delay,
      ease: "power2.out",
    };

    if (trigger === "load") {
      gsap.to(path, anim);
    } else {
      gsap.to(path, {
        ...anim,
        scrollTrigger: {
          trigger: trigger || svgRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, [delay, trigger]);

  return (
    <svg
      ref={svgRef}
      className={`hand-mark pointer-events-none absolute ${className}`}
      width={width}
      height={12}
      viewBox={`0 0 ${width} 12`}
      fill="none"
    >
      <path
        ref={pathRef}
        d={`M 2 8 Q ${width * 0.25} 3, ${width * 0.5} 7 Q ${width * 0.75} 11, ${width - 2} 5`}
        stroke={colorMap[color]}
        strokeWidth={2.5}
        className="hand-mark"
      />
    </svg>
  );
}

// Hand-drawn crossout line through text
export function DrawnCrossout({
  className = "",
  color = "ink",
  delay = 0,
  trigger,
  width = 120,
}: MarkProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const anim = {
      strokeDashoffset: 0,
      duration: 0.4,
      delay,
      ease: "power2.out",
    };

    if (trigger === "load") {
      gsap.to(path, anim);
    } else {
      gsap.to(path, {
        ...anim,
        scrollTrigger: {
          trigger: trigger || svgRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, [delay, trigger]);

  return (
    <svg
      ref={svgRef}
      className={`hand-mark pointer-events-none absolute ${className}`}
      width={width}
      height={8}
      viewBox={`0 0 ${width} 8`}
      fill="none"
    >
      <path
        ref={pathRef}
        d={`M 0 5 Q ${width * 0.3} 2, ${width * 0.5} 4 Q ${width * 0.7} 6, ${width} 3`}
        stroke={colorMap[color]}
        strokeWidth={2}
        className="hand-mark"
      />
    </svg>
  );
}

// Tactical X mark
export function DrawnX({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
  width = 32,
  height = 32,
}: MarkProps) {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    [path1Ref, path2Ref].forEach((ref, i) => {
      const path = ref.current;
      if (!path) return;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      const anim = {
        strokeDashoffset: 0,
        duration: 0.3,
        delay: delay + i * 0.15,
        ease: "power2.out",
      };

      if (trigger === "load") {
        gsap.to(path, anim);
      } else {
        gsap.to(path, {
          ...anim,
          scrollTrigger: {
            trigger: trigger || svgRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    });
  }, [delay, trigger]);

  return (
    <svg
      ref={svgRef}
      className={`hand-mark pointer-events-none ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path ref={path1Ref} d={`M 4 4 L ${width - 4} ${height - 4}`} stroke={colorMap[color]} strokeWidth={2.5} className="hand-mark" />
      <path ref={path2Ref} d={`M ${width - 4} 4 L 4 ${height - 4}`} stroke={colorMap[color]} strokeWidth={2.5} className="hand-mark" />
    </svg>
  );
}

// Tactical O mark
export function DrawnO({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
  width = 32,
  height = 32,
}: MarkProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const anim = {
      strokeDashoffset: 0,
      duration: 0.5,
      delay,
      ease: "power2.out",
    };

    if (trigger === "load") {
      gsap.to(path, anim);
    } else {
      gsap.to(path, {
        ...anim,
        scrollTrigger: {
          trigger: trigger || svgRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, [delay, trigger]);

  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) / 2 - 4;

  return (
    <svg
      ref={svgRef}
      className={`hand-mark pointer-events-none ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        ref={pathRef}
        d={`M ${cx} ${cy - r} C ${cx + r + 2} ${cy - r - 1}, ${cx + r + 1} ${cy + r + 2}, ${cx - 1} ${cy + r} C ${cx - r - 2} ${cy + r + 1}, ${cx - r} ${cy - r + 1}, ${cx + 1} ${cy - r - 1}`}
        stroke={colorMap[color]}
        strokeWidth={2.5}
        className="hand-mark"
      />
    </svg>
  );
}

// Hand-drawn quotation mark
export function DrawnQuote({
  className = "",
  color = "blue",
  delay = 0,
  trigger,
}: MarkProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const anim = {
      strokeDashoffset: 0,
      duration: 0.6,
      delay,
      ease: "power2.out",
    };

    if (trigger === "load") {
      gsap.to(path, anim);
    } else {
      gsap.to(path, {
        ...anim,
        scrollTrigger: {
          trigger: trigger || svgRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, [delay, trigger]);

  return (
    <svg
      ref={svgRef}
      className={`hand-mark pointer-events-none ${className}`}
      width={48}
      height={40}
      viewBox="0 0 48 40"
      fill="none"
    >
      <path
        ref={pathRef}
        d="M 8 28 C 8 16, 4 8, 12 4 M 20 28 C 20 16, 16 8, 24 4"
        stroke={colorMap[color]}
        strokeWidth={3}
        className="hand-mark"
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
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger || el,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [trigger]);

  return (
    <div
      ref={lineRef}
      className={`h-[3px] bg-blue w-full ${className}`}
      style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
    />
  );
}
