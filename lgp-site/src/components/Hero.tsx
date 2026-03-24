"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawnCircle, DrawnArrow, InkSplatter } from "@/components/HandDrawnMarks";
import {
  StickyNote,
  Highlight,
  CollageArrow,
  ScribbleOverlay,
  HandAnnotation,
} from "@/components/CollageElements";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const collagePiecesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Title reveal
      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );

      // Subtitle text
      tl.fromTo(
        subtitleRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // CTA
      tl.fromTo(
        ctaRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );

      // Collage pieces stagger in
      if (collagePiecesRef.current) {
        const pieces = collagePiecesRef.current.querySelectorAll(".collage-piece");
        tl.fromTo(
          pieces,
          { scale: 0.9, opacity: 0, y: 15 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Scribble texture at top - like crayon marks on the design */}
      <ScribbleOverlay />

      {/* Faint ruled lines */}
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

      {/* ========== MAIN COLLAGE LAYOUT ========== */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 w-full pt-[14vh] md:pt-[16vh] pb-16">

        {/* Collage grid: title + sticky notes + annotations */}
        <div className="collage-grid items-start" ref={collagePiecesRef}>

          {/* === TITLE BLOCK — spans most of the grid === */}
          <div className="col-span-full md:col-span-8 lg:col-span-8 relative z-10">
            <h1
              ref={titleRef}
              className="font-display leading-[1.05] ink-heavy opacity-0"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 900 }}
            >
              <span className="block">LONG GAME</span>
              <span className="block">PROJECT</span>
            </h1>

            {/* Subtitle line - like Design 1 */}
            <p className="font-body text-[14px] md:text-[16px] tracking-[0.2em] uppercase text-ink/50 mt-4 ink-text">
              Strategy Consulting&ensp;|&ensp;Creative Studio
            </p>
          </div>

          {/* === NAV BOXES — right side, stacked vertically like Design 1 === */}
          <div className="hidden md:flex col-span-4 flex-col items-end gap-3 pt-4">
            {["Strategy", "Process", "Work", "Contact"].map((label, i) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="collage-piece border border-ink/20 px-5 py-2 font-body text-[13px] tracking-[0.08em] uppercase text-ink/60 hover:bg-ink hover:text-cream transition-all"
                style={{ transform: `rotate(${i % 2 === 0 ? 0.5 : -0.3}deg)` }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* === STICKY NOTES — scattered around the title === */}
          <div className="col-span-full relative mt-8 md:mt-0 md:absolute md:inset-0 pointer-events-none z-20">
            {/* Systems Thinking note */}
            <div className="collage-piece inline-block md:absolute md:left-[-2%] md:top-[55%]">
              <StickyNote color="yellow" rotation={-3} size="md">
                Systems<br />Thinking
              </StickyNote>
            </div>

            {/* Future Vision note */}
            <div className="collage-piece inline-block ml-4 md:ml-0 md:absolute md:left-[8%] md:top-[75%]">
              <StickyNote color="yellow" rotation={1} size="sm">
                Future<br />Vision
              </StickyNote>
            </div>

            {/* Uncover Value note */}
            <div className="collage-piece hidden md:inline-block md:absolute md:left-[-4%] md:top-[95%]">
              <StickyNote color="yellow" rotation={-1} size="md">
                Uncover<br />Value
              </StickyNote>
            </div>
          </div>
        </div>

        {/* ========== BODY TEXT + COLLAGE PIECES ========== */}
        <div className="relative mt-16 md:mt-20">
          {/* Connecting arrow from title to body */}
          <div className="hidden md:block absolute -top-12 left-[30%]">
            <CollageArrow variant="curve-down" size={80} />
          </div>

          <div ref={subtitleRef} className="opacity-0 max-w-2xl">
            <p className="font-body text-lg md:text-xl text-ink/65 leading-relaxed ink-text">
              We bridge the gap between raw creativity and structured strategy.
              Our approach is a sophisticated collage of deep insights, innovative
              thinking, and actionable plans.
            </p>
          </div>

          {/* CTA area */}
          <div ref={ctaRef} className="mt-10 opacity-0">
            <button
              onClick={handleScrollToReframe}
              className="relative bg-blue text-white px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-blue-hover transition-colors font-body cursor-pointer ink-blue"
              style={{ transform: "rotate(-0.3deg)" }}
            >
              Find out how
            </button>
            <span
              className="hidden md:inline-block ml-5 font-hand text-[18px] text-pencil/35"
              style={{ transform: "rotate(-2deg)" }}
            >
              &larr; no pitch, promise
            </span>
          </div>
        </div>

        {/* ========== STRATEGY & FORESIGHT SECTION ========== */}
        <div className="relative mt-24 md:mt-32">
          <div className="collage-grid items-center">

            {/* Left: text block */}
            <div className="col-span-full md:col-span-6 relative">
              <h2
                className="font-display text-ink ink-heavy"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                Don&apos;t just <Highlight color="pink">survive</Highlight>,<br />
                <Highlight color="pink">thrive</Highlight> through clarity.
              </h2>

              <div className="mt-12">
                <h2
                  className="font-display text-ink ink-heavy"
                  style={{
                    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  Craft <Highlight color="yellow">vision</Highlight>, execute with precision.
                </h2>
              </div>

              <div className="mt-12">
                <h2
                  className="font-display text-ink ink-heavy"
                  style={{
                    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  Strategy is the <Highlight color="yellow">art</Highlight><br />
                  of the long view.
                </h2>
              </div>
            </div>

            {/* Right: collage arrow connecting to annotations */}
            <div className="col-span-full md:col-span-6 relative mt-8 md:mt-0 flex justify-center">
              <div className="relative">
                <CollageArrow variant="loop" size={180} />
                <HandAnnotation
                  className="absolute -bottom-8 right-0"
                  rotation={-3}
                  color="blue"
                >
                  consulting team<br />and review to action<br />precision.
                </HandAnnotation>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-16 text-center">
            <h2
              className="font-display text-ink ink-heavy inline"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              We are the architects of your{" "}
              <span className="relative inline-block">
                <Highlight color="blue">legacy.</Highlight>
                <DrawnCircle
                  className="-top-2 -left-3"
                  variant={2}
                  width={180}
                  height={50}
                  color="blue"
                />
              </span>
            </h2>
          </div>
        </div>

        {/* ========== SERVICE CARDS (Strategy & Foresight / Creative Process) ========== */}
        <div className="relative mt-24 md:mt-32">
          <div className="collage-grid gap-y-12">

            {/* Card 1: Strategy & Foresight */}
            <div className="col-span-full md:col-span-6 md:pr-8">
              <div className="paper-card p-8 relative" style={{ transform: "rotate(-0.5deg)" }}>
                <h3
                  className="font-display text-ink font-bold ink-heavy"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", lineHeight: 1.15 }}
                >
                  Strategy &amp;<br />Foresight
                </h3>
                <p className="font-body text-ink/60 text-[15px] leading-relaxed mt-4 ink-text max-w-sm">
                  We bridge the gap between raw creativity and structured strategy.
                  Our approach merges deep insights, innovative thinking,
                  and actionable plans for professional strategy and intuition.
                </p>
              </div>
            </div>

            {/* Card 2: Creative Process Design */}
            <div className="col-span-full md:col-span-6 md:pl-8 md:mt-12">
              <div className="paper-card p-8 relative" style={{ transform: "rotate(0.8deg)" }}>
                <h3
                  className="font-display text-ink font-bold ink-heavy"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", lineHeight: 1.15 }}
                >
                  Creative<br />Process<br />Design
                </h3>
                <p className="font-body text-ink/60 text-[15px] leading-relaxed mt-4 ink-text max-w-sm">
                  Creative process design co-complete with personal, complete
                  methodology to innovate and design the right information
                  to achieve maximum results.
                </p>
              </div>
            </div>
          </div>

          {/* Floating sticky notes near cards */}
          <div className="hidden md:block absolute right-[2%] top-[-5%]">
            <StickyNote color="yellow" rotation={2} size="sm">
              Future<br />Visions
            </StickyNote>
          </div>
          <div className="hidden md:block absolute right-[8%] top-[15%]">
            <StickyNote color="yellow" rotation={-1} size="sm">
              Creative<br />Chaos → Strategy
            </StickyNote>
          </div>
        </div>
      </div>

      {/* Right margin annotation */}
      <HandAnnotation
        className="absolute right-8 md:right-14 top-[52vh] hidden md:block"
        rotation={-4}
        color="pencil"
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
      </HandAnnotation>

      {/* Ink splatters */}
      <InkSplatter className="absolute bottom-[20%] right-[15%]" size="md" />
      <InkSplatter className="absolute top-[30%] left-[5%]" size="sm" />
    </section>
  );
}
