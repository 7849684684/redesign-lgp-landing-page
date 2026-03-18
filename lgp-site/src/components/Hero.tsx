"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawnCircle, DrawnArrow } from "@/components/HandDrawnMarks";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const annotationRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Section marker fades in
      tl.fromTo(
        markerRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );

      // Headline lines stagger up
      tl.fromTo(
        [line1Ref.current, line2Ref.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
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
        "-=0.3"
      );

      // Annotation fades in last
      tl.fromTo(
        annotationRef.current,
        { opacity: 0 },
        { opacity: 0.5, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToReframe = () => {
    const target = document.querySelector("#reframe");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 w-full pt-[18vh] pb-16">
        {/* Section marker */}
        <span
          ref={markerRef}
          className="block font-mono text-[11px] tracking-[0.2em] uppercase text-muted/60 mb-12 opacity-0"
        >
          01 / The Problem
        </span>

        {/* Headline with weight contrast for drama */}
        <h1
          className="font-display leading-[1.08]"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          <span ref={line1Ref} className="block opacity-0">
            <span className="font-light text-ink/50">Another offsite.</span>
            {" "}
            <span className="font-light text-ink/50">Another strategy.</span>
          </span>
          <span ref={line2Ref} className="block opacity-0">
            <span className="relative inline-block">
              <span className="font-bold text-ink">Nothing changes.</span>
              <DrawnCircle
                className="-top-2 -left-6"
                variant={1}
                width={480}
                height={75}
                color="blue"
                trigger="load"
                delay={1.2}
              />
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="font-body text-lg md:text-xl text-ink/70 max-w-lg mt-10 leading-relaxed opacity-0"
        >
          The Long Game Project is a strategy practice. We help teams and
          leaders get better at the decisions that matter most.
        </p>

        {/* CTA */}
        <button
          ref={ctaRef}
          onClick={handleScrollToReframe}
          className="mt-10 bg-blue text-white px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-blue-hover transition-colors font-body opacity-0 cursor-pointer"
        >
          Find out how
        </button>
      </div>

      {/* Annotation in right margin with arrow */}
      <span
        ref={annotationRef}
        className="absolute right-8 md:right-12 top-[52vh] font-hand text-[22px] text-pencil opacity-0 hidden md:block"
        style={{ transform: "rotate(-4deg)" }}
        aria-hidden="true"
      >
        sound familiar?
        <DrawnArrow
          className="-left-12 top-2"
          color="pencil"
          trigger="load"
          delay={1.8}
          width={45}
          height={30}
        />
      </span>
    </section>
  );
}
