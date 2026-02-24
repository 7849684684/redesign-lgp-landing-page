"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 });

      // Headline fade up
      tl.fromTo(
        ".hero-line",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        },
        0
      );

      // Subtext
      tl.fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        0.6
      );

      // CTA
      tl.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.9
      );

      // Scroll indicator
      tl.fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        1.5
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise" />

      {/* Very subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue/[0.04] blur-[150px] pointer-events-none" />

      {/* Content — vertically centered with massive breathing room */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 w-full text-center">
        {/* Main Headline */}
        <h1 className="font-[family-name:var(--font-bebas-neue)] leading-[0.92] tracking-[0.01em] mb-8 md:mb-10">
          <span className="hero-line block text-[clamp(3rem,10vw,8rem)] text-white">
            STRATEGY GETS SHARPER
          </span>
          <span className="hero-line block text-[clamp(3rem,10vw,8rem)] text-blue">
            WHEN YOU PLAY IT OUT
          </span>
        </h1>

        {/* Subtext */}
        <p className="hero-sub font-[family-name:var(--font-outfit)] text-lg md:text-xl text-ghost leading-relaxed max-w-2xl mx-auto mb-12 md:mb-14">
          We run tabletop exercises, wargames, and strategic simulations that
          help leadership teams think clearer, decide faster, and plan with
          confidence.
        </p>

        {/* CTA */}
        <div className="hero-cta">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-blue hover:bg-blue-light text-white font-[family-name:var(--font-outfit)] text-base font-medium px-10 py-4 rounded-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,128,255,0.2)]"
          >
            Start a Conversation
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="scroll-indicator">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-ghost/50">
            <path d="M10 4L10 16M10 16L5 11M10 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
