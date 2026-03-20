"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawnCircle, DrawnArrow, InkSplatter } from "@/components/HandDrawnMarks";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const annotationRef = useRef<HTMLSpanElement>(null);
  const marginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        markerRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );

      tl.fromTo(
        [line1Ref.current, line2Ref.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.3"
      );

      tl.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

      tl.fromTo(
        ctaRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );

      tl.fromTo(
        annotationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

      tl.fromTo(
        marginRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
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
      {/* Faint ruled lines in the background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 31px,
            #0066FF 31px,
            #0066FF 32px
          )`,
          backgroundPosition: "0 16px",
        }}
      />

      {/* Red margin line */}
      <div
        className="absolute top-0 bottom-0 left-[72px] md:left-[88px] w-[1.5px] pointer-events-none opacity-[0.1]"
        style={{ background: "#c83c3c" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 w-full pt-[18vh] pb-16">
        {/* Section marker - like handwritten page number */}
        <span
          ref={markerRef}
          className="block font-hand text-[18px] text-pencil/40 mb-10 opacity-0"
          style={{ transform: "rotate(-1deg)" }}
        >
          01 &mdash; the problem
        </span>

        {/* Headline with ink effect */}
        <h1
          className="font-display leading-[1.08] ink-heavy"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          <span ref={line1Ref} className="block opacity-0">
            <span className="font-light text-ink/40">Another offsite.</span>
            {" "}
            <span className="font-light text-ink/40">Another strategy.</span>
          </span>
          <span ref={line2Ref} className="block opacity-0">
            <span className="relative inline-block">
              <span className="font-bold text-ink">Nothing changes.</span>
              <DrawnCircle
                className="-top-3 -left-6"
                variant={1}
                width={480}
                height={80}
                color="blue"
                trigger="load"
                delay={1.2}
              />
            </span>
          </span>
        </h1>

        {/* Subtitle - handwritten feel with ink bleed */}
        <p
          ref={subRef}
          className="font-body text-lg md:text-xl text-ink/65 max-w-lg mt-10 leading-relaxed opacity-0 ink-text"
        >
          The Long Game Project is a strategy practice. We help teams and
          leaders get better at the decisions that matter most.
        </p>

        {/* CTA - hand-drawn button feel */}
        <div ref={ctaRef} className="mt-10 opacity-0">
          <button
            onClick={handleScrollToReframe}
            className="relative bg-blue text-white px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-blue-hover transition-colors font-body cursor-pointer ink-blue"
            style={{ transform: "rotate(-0.3deg)" }}
          >
            Find out how
          </button>
          {/* Handwritten note next to button */}
          <span className="hidden md:inline-block ml-5 font-hand text-[18px] text-pencil/35" style={{ transform: "rotate(-2deg)" }}>
            &larr; no pitch, promise
          </span>
        </div>
      </div>

      {/* Right margin annotation with arrow */}
      <span
        ref={annotationRef}
        className="absolute right-8 md:right-14 top-[52vh] font-hand text-[24px] text-pencil/40 opacity-0 hidden md:block"
        style={{ transform: "rotate(-4deg)" }}
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

      {/* Ink splatter decoration */}
      <div ref={marginRef} className="opacity-0">
        <InkSplatter className="absolute bottom-[20%] right-[15%]" size="md" />
        <InkSplatter className="absolute top-[30%] left-[5%]" size="sm" />
      </div>
    </section>
  );
}
