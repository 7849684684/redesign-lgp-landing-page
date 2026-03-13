"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Accent rule
      tl.fromTo(
        ruleRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.6, ease: "power3.out" },
        0
      );

      // Section label
      tl.fromTo(
        labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        0.2
      );

      // Headline lines - staggered fade up
      tl.fromTo(
        ".hero-line",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
        },
        0.4
      );

      // Subtitle
      tl.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.9
      );

      // CTAs
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        1.1
      );

      // Scroll indicator
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        1.4
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-bg"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full py-24">
        {/* Accent rule */}
        <div
          ref={ruleRef}
          className="w-16 h-[2px] bg-accent mb-6"
        />

        {/* Section label */}
        <div ref={labelRef} className="mb-10 opacity-0">
          <span className="section-label">
            Strategic thinking, pressure-tested
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display font-black leading-[1.05] mb-8"
          style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
        >
          <div className="overflow-hidden">
            <span className="hero-line block text-text">
              Your strategy is
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line block text-accent">
              just a guess
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="font-body text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-12 opacity-0"
        >
          We use tabletop exercises, red teaming, and strategic games to
          stress-test your thinking before reality does.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 opacity-0"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 font-body font-medium transition-colors duration-200 hover:opacity-90"
          >
            Book a Strategy Call
          </a>
          <a
            href="#method"
            className="inline-flex items-center justify-center border border-border text-text px-8 py-4 font-body transition-colors duration-200 hover:border-accent"
          >
            See How We Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <span className="font-label text-[10px] tracking-[0.25em] uppercase text-muted">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
