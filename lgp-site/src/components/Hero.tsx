"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const piecesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate grid fade in
      tl.fromTo(
        gridRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" },
        0
      );

      // Animate floating game pieces
      tl.fromTo(
        ".game-piece",
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        0.3
      );

      // Headline — split into lines and animate
      tl.fromTo(
        ".hero-line",
        { y: 120, opacity: 0, skewY: 5 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        },
        0.5
      );

      // Badge
      tl.fromTo(
        badgeRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        1.0
      );

      // Subtext
      tl.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        1.2
      );

      // CTA
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        1.4
      );

      // Continuous subtle animation on game pieces
      gsap.to(".game-piece", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-8, 8)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.3, from: "random" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-crosshair"
    >
      {/* Animated Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid-overlay opacity-0"
      />

      {/* Go Board Dots */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Diagonal Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute inset-0 hatch-pattern" />
      </div>

      {/* Floating Game Pieces */}
      <div ref={piecesRef} className="absolute inset-0 pointer-events-none">
        {/* Chess-like abstract shapes */}
        <div className="game-piece absolute top-[15%] left-[10%] w-16 h-16 border-2 border-blue/30 rotate-45" />
        <div className="game-piece absolute top-[20%] right-[15%] w-12 h-12 rounded-full border-2 border-lime/20" />
        <div className="game-piece absolute bottom-[25%] left-[20%] w-20 h-20 border border-blue/15 rotate-12">
          <div className="absolute inset-2 border border-blue/10 rotate-12" />
        </div>
        <div className="game-piece absolute top-[60%] right-[10%] w-8 h-8 bg-blue/10 rotate-45" />
        <div className="game-piece absolute top-[40%] left-[5%] w-6 h-6 bg-lime/10 rounded-full" />
        <div className="game-piece absolute bottom-[15%] right-[25%] w-14 h-14 border border-white/10 rotate-[30deg]">
          <div className="absolute inset-3 border border-blue/20 rotate-[15deg]" />
        </div>
        <div className="game-piece absolute top-[10%] left-[50%] w-3 h-3 bg-blue/40 rounded-full" />
        <div className="game-piece absolute top-[70%] left-[40%] w-4 h-4 bg-lime/15 rotate-45" />

        {/* Grid intersection markers (like Go board) */}
        <svg className="game-piece absolute top-[30%] right-[30%] w-10 h-10 opacity-20">
          <line x1="20" y1="0" x2="20" y2="40" stroke="#0080FF" strokeWidth="1" />
          <line x1="0" y1="20" x2="40" y2="20" stroke="#0080FF" strokeWidth="1" />
          <circle cx="20" cy="20" r="3" fill="#0080FF" />
        </svg>
        <svg className="game-piece absolute bottom-[40%] left-[35%] w-10 h-10 opacity-15">
          <line x1="20" y1="0" x2="20" y2="40" stroke="#CCFF00" strokeWidth="1" />
          <line x1="0" y1="20" x2="40" y2="20" stroke="#CCFF00" strokeWidth="1" />
          <circle cx="20" cy="20" r="3" fill="#CCFF00" />
        </svg>
      </div>

      {/* Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue/5 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-24 pb-20">
        {/* Top Badge */}
        <div ref={badgeRef} className="mb-8 opacity-0">
          <div className="inline-flex items-center gap-3 border border-blue/30 px-4 py-2 bg-blue/5">
            <div className="w-2 h-2 bg-lime rounded-full pulse-dot" />
            <span className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.25em] text-ghost uppercase">
              Strategic Thinking Redefined
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="font-[family-name:var(--font-bebas-neue)] leading-[0.85] tracking-[0.02em] mb-8"
        >
          <div className="overflow-hidden">
            <span className="hero-line block text-[clamp(3.5rem,12vw,11rem)] text-white">
              YOUR STRATEGY
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line block text-[clamp(3.5rem,12vw,11rem)] text-white">
              IS JUST
            </span>
          </div>
          <div className="overflow-hidden flex items-baseline gap-4 md:gap-8 flex-wrap">
            <span className="hero-line block text-[clamp(3.5rem,12vw,11rem)] text-blue">
              A GUESS
            </span>
            <span className="hero-line block text-[clamp(1.5rem,4vw,3.5rem)] text-stroke font-[family-name:var(--font-bebas-neue)] tracking-[0.15em] self-end mb-2 md:mb-4">
              UNTIL YOU TEST IT
            </span>
          </div>
        </h1>

        {/* Subtext */}
        <div ref={subRef} className="max-w-2xl mb-12 opacity-0">
          <p className="font-[family-name:var(--font-outfit)] text-lg md:text-xl text-ghost leading-relaxed">
            We use tabletop exercises, red teaming, and strategic games to
            stress-test your thinking before reality does.{" "}
            <span className="text-white font-medium">
              The Long Game Project
            </span>{" "}
            turns strategy from theatre into skill.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-blue hover:bg-blue-light text-white font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.15em] px-8 py-4 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,128,255,0.3)]"
          >
            <span>START THE GAME</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/30" />
          </a>
          <a
            href="#method"
            className="inline-flex items-center gap-3 border border-white/20 hover:border-blue/60 text-white font-[family-name:var(--font-space-mono)] text-xs tracking-[0.15em] px-8 py-4 transition-all duration-300 hover:bg-blue/5"
          >
            SEE HOW WE PLAY →
          </a>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.3em] text-ghost">
            SCROLL
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-blue to-transparent" />
        </div>
      </div>
    </section>
  );
}
