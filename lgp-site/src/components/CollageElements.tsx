"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================
   STICKY NOTE
   Yellow post-it style notes scattered on page
   ============================================ */

export function StickyNote({
  children,
  className = "",
  color = "yellow",
  rotation = -2,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  color?: "yellow" | "pink" | "blue" | "green";
  rotation?: number;
  size?: "sm" | "md" | "lg";
}) {
  const colorMap = {
    yellow: "bg-[#FFF9C4] shadow-[#E6D98A]",
    pink: "bg-[#FCE4EC] shadow-[#E8B4C0]",
    blue: "bg-[#E3F2FD] shadow-[#B0C9E0]",
    green: "bg-[#E8F5E9] shadow-[#B0CEB3]",
  };

  const sizeMap = {
    sm: "px-3 py-2 text-[13px]",
    md: "px-4 py-3 text-[15px]",
    lg: "px-5 py-4 text-[17px]",
  };

  return (
    <div
      className={`sticky-note font-hand font-semibold text-ink/80 ${colorMap[color]} ${sizeMap[size]} ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </div>
  );
}

/* ============================================
   HIGHLIGHTED TEXT
   Marker-highlighted words like in Design 2
   ============================================ */

export function Highlight({
  children,
  color = "yellow",
  className = "",
}: {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue" | "green";
  className?: string;
}) {
  const colorMap = {
    yellow: "bg-[#FFF176]/50",
    pink: "bg-[#F48FB1]/30",
    blue: "bg-[#90CAF9]/35",
    green: "bg-[#A5D6A7]/35",
  };

  return (
    <mark
      className={`${colorMap[color]} px-1 py-0.5 rounded-sm ${className}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        // Slight skew for hand-drawn feel
        borderRadius: "2px 4px 3px 5px",
      }}
    >
      {children}
    </mark>
  );
}

/* ============================================
   TORN PAPER IMAGE
   Images with torn/ripped paper edge effect
   ============================================ */

export function TornPaperImage({
  src,
  alt,
  className = "",
  rotation = 1,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  caption?: string;
}) {
  return (
    <figure
      className={`torn-paper-image relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="torn-paper-clip overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <figcaption
          className="font-hand text-[16px] text-pencil/50 mt-2 ml-2"
          style={{ transform: "rotate(-1deg)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ============================================
   COLLAGE ARROW
   Sweeping hand-drawn arrows connecting sections
   ============================================ */

export function CollageArrow({
  className = "",
  variant = "curve-down",
  color = "#0066FF",
  size = 120,
  strokeWidth = 2,
}: {
  className?: string;
  variant?: "curve-down" | "curve-up" | "swoosh" | "loop";
  color?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 85%",
        once: true,
      },
    });
  }, []);

  const paths = {
    "curve-down": `M 10 10 C 30 5, ${size * 0.4} 15, ${size * 0.5} ${size * 0.5} C ${size * 0.6} ${size * 0.85}, ${size * 0.75} ${size - 20}, ${size - 15} ${size - 25} M ${size - 22} ${size - 35} L ${size - 13} ${size - 24} L ${size - 25} ${size - 20}`,
    "curve-up": `M 10 ${size - 15} C 25 ${size - 10}, ${size * 0.4} ${size * 0.6}, ${size * 0.55} ${size * 0.35} C ${size * 0.7} ${size * 0.1}, ${size * 0.85} 8, ${size - 12} 15 M ${size - 20} 8 L ${size - 10} 16 L ${size - 22} 20`,
    swoosh: `M 8 ${size * 0.3} C ${size * 0.2} ${size * 0.1}, ${size * 0.5} ${size * 0.6}, ${size * 0.55} ${size * 0.7} S ${size * 0.8} ${size * 0.4}, ${size - 10} ${size * 0.45} M ${size - 18} ${size * 0.38} L ${size - 8} ${size * 0.46} L ${size - 16} ${size * 0.52}`,
    loop: `M 10 ${size * 0.5} C ${size * 0.2} ${size * 0.1}, ${size * 0.6} ${size * 0.05}, ${size * 0.65} ${size * 0.35} C ${size * 0.7} ${size * 0.65}, ${size * 0.35} ${size * 0.8}, ${size * 0.4} ${size * 0.5} C ${size * 0.45} ${size * 0.2}, ${size * 0.8} ${size * 0.6}, ${size - 12} ${size * 0.65} M ${size - 20} ${size * 0.58} L ${size - 10} ${size * 0.66} L ${size - 18} ${size * 0.72}`,
  };

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
        d={paths[variant]}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.55}
      />
    </svg>
  );
}

/* ============================================
   SCRIBBLE OVERLAY
   Crayon/pencil scribble textures at top of hero
   Uses CSS gradients - no actual images needed
   ============================================ */

export function ScribbleOverlay({ className = "" }: { className?: string }) {
  return (
    <div className={`scribble-overlay pointer-events-none ${className}`}>
      {/* Crayon strokes via SVG */}
      <svg
        className="w-full h-full"
        viewBox="0 0 800 200"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Purple/lavender scribble */}
        <path
          d="M 50 80 C 120 30, 200 120, 300 60 C 400 10, 500 100, 600 50 C 650 30, 700 90, 750 70"
          stroke="#B39DDB"
          strokeWidth="18"
          opacity="0.15"
          strokeLinecap="round"
        />
        {/* Orange scribble */}
        <path
          d="M 100 130 C 180 80, 280 160, 400 100 C 480 60, 560 140, 650 110"
          stroke="#FFAB91"
          strokeWidth="14"
          opacity="0.12"
          strokeLinecap="round"
        />
        {/* Dark pencil marks */}
        <path
          d="M 200 50 C 250 30, 300 70, 350 40 C 400 10, 420 50, 450 30"
          stroke="#3A3632"
          strokeWidth="4"
          opacity="0.12"
          strokeLinecap="round"
        />
        <path
          d="M 320 90 C 350 70, 380 100, 420 80"
          stroke="#3A3632"
          strokeWidth="6"
          opacity="0.08"
          strokeLinecap="round"
        />
        {/* Blue accent line */}
        <path
          d="M 150 160 C 250 140, 350 180, 500 150"
          stroke="#0066FF"
          strokeWidth="3"
          opacity="0.1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ============================================
   COLLAGE GRID
   CSS Grid wrapper that enables intentional overlap
   Collapses to single column on mobile
   ============================================ */

export function CollageGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`collage-grid ${className}`}
    >
      {children}
    </div>
  );
}

/* ============================================
   HAND ANNOTATION
   Handwritten notes with optional connector line
   ============================================ */

export function HandAnnotation({
  children,
  className = "",
  rotation = -2,
  color = "pencil",
}: {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  color?: "pencil" | "blue" | "ink";
}) {
  const colorClasses = {
    pencil: "text-pencil/40",
    blue: "text-blue/50",
    ink: "text-ink/40",
  };

  return (
    <span
      className={`font-hand text-[18px] md:text-[22px] ${colorClasses[color]} ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, display: "inline-block" }}
    >
      {children}
    </span>
  );
}
