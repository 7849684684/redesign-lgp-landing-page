"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Section marker fades in
      tl.fromTo(
        markerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
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

      // Margin annotation fades in
      tl.fromTo(
        annotationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToCTA = () => {
    const target = document.querySelector("#reframe");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-cream flex flex-col"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-[20vh] pb-16">
        {/* Section marker */}
        <span
          ref={markerRef}
          className="block font-mono text-xs tracking-[0.15em] uppercase text-muted mb-10 opacity-0"
        >
          01 / The Problem
        </span>

        {/* Headline */}
        <h1
          className="font-display text-ink font-normal leading-[1.15]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          <span ref={line1Ref} className="block opacity-0">
            Another offsite. Another strategy.
          </span>
          <span ref={line2Ref} className="relative inline-block opacity-0">
            <span className="relative inline-block">
              Nothing changes.
              <DrawnCircle
                className="-top-3 -left-4"
                color="blue"
                trigger="load"
                delay={1}
                width={420}
                height={70}
              />
            </span>
          </span>
        </h1>

        {/* Subtitle + annotation wrapper */}
        <div className="relative">
          <p
            ref={subRef}
            className="font-body text-muted max-w-xl mt-8 text-lg leading-relaxed opacity-0"
          >
            The Long Game Project is a strategy practice. We help teams and
            leaders get better at the decisions that matter most.
          </p>

          {/* Margin annotation */}
          <span
            ref={annotationRef}
            className="absolute right-0 top-2 font-hand text-muted text-lg opacity-0 hidden md:block"
            style={{ transform: "rotate(-3deg)" }}
            aria-hidden="true"
          >
            sound familiar?
          </span>
        </div>

        {/* Arrow between subtitle and CTA */}
        <div className="relative mt-4">
          <DrawnArrow
            className="left-2 top-0"
            color="ink"
            trigger="load"
            delay={1.5}
            width={60}
            height={40}
          />
        </div>

        {/* CTA */}
        <button
          ref={ctaRef}
          onClick={handleScrollToCTA}
          className="mt-8 bg-blue text-white px-8 py-4 text-sm tracking-wide uppercase hover:bg-blue-hover transition-colors font-body opacity-0 cursor-pointer"
        >
          Find out how
        </button>
      </div>
    </section>
  );
}
