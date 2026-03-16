"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Blue accent line draws first
      tl.fromTo(
        accentLineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.6, ease: "power3.out" }
      );

      // Headline lines stagger up
      tl.fromTo(
        [line1Ref.current, line2Ref.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.2"
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

      // Watermark parallax on scroll
      gsap.fromTo(
        watermarkRef.current,
        { y: 0 },
        {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-ink grid-texture"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Watermark */}
        <div
          ref={watermarkRef}
          className="absolute top-12 right-6 md:right-10 font-[family-name:var(--font-display)] font-black text-cream/5 text-[12rem] md:text-[16rem] leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          00
        </div>

        {/* Content block - left-aligned */}
        <div className="max-w-[700px]">
          {/* Blue accent line above headline */}
          <div
            ref={accentLineRef}
            className="w-16 h-[4px] bg-blue mb-6"
          />

          {/* Headline */}
          <h1 className="leading-[1.1]" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            <span
              ref={line1Ref}
              className="block font-[family-name:var(--font-display)] font-light text-cream opacity-0"
            >
              Your strategy is
            </span>
            <span
              ref={line2Ref}
              className="block font-[family-name:var(--font-display)] font-black text-cream opacity-0"
            >
              just a guess.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="font-[family-name:var(--font-body)] text-cream/60 text-lg leading-relaxed max-w-lg mt-6 opacity-0"
          >
            We use tabletop exercises, red teaming, and strategic games to
            stress-test your thinking before reality does.
          </p>

          {/* CTA */}
          <a
            ref={ctaRef}
            href="#contact"
            className="bg-blue text-white font-[family-name:var(--font-body)] text-sm tracking-wide px-8 py-4 hover:bg-blue-hover transition-colors inline-block mt-8 opacity-0"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div
        ref={ruleRef}
        className="w-full bg-blue h-[2px] absolute bottom-0 left-0"
      />
    </section>
  );
}
