"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Headline lines stagger fade up
      tl.fromTo(
        [line1Ref.current, line2Ref.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // Subtitle fades up
      tl.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

      // CTA fades up
      tl.fromTo(
        ctaRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      );

      // Bottom rule draws in
      tl.fromTo(
        ruleRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-cream"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Watermark */}
        <div
          className="absolute top-12 right-6 md:right-10 font-[family-name:var(--font-display)] font-black text-rule opacity-40 text-[12rem] md:text-[16rem] leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          00
        </div>

        {/* Content block - left-aligned */}
        <div className="max-w-[700px]">
          {/* Headline */}
          <h1 className="leading-[1.1]" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            <span
              ref={line1Ref}
              className="block font-[family-name:var(--font-display)] font-light text-ink opacity-0"
            >
              Your strategy is
            </span>
            <span
              ref={line2Ref}
              className="block font-[family-name:var(--font-display)] font-black text-ink opacity-0"
            >
              just a guess.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="font-[family-name:var(--font-body)] text-muted text-lg leading-relaxed max-w-lg mt-6 opacity-0"
          >
            We use tabletop exercises, red teaming, and strategic games to
            stress-test your thinking before reality does.
          </p>

          {/* CTA */}
          <a
            ref={ctaRef}
            href="#contact"
            className="inline-block mt-8 text-blue hover:underline font-[family-name:var(--font-body)] text-base opacity-0"
          >
            Book a Strategy Call &rarr;
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div
        ref={ruleRef}
        className="w-full h-px bg-rule absolute bottom-0 left-0"
      />
    </section>
  );
}
