"use client";

import {
  SectionRule,
  DrawnCrossout,
  DrawnUnderline,
  InkSplatter,
} from "@/components/HandDrawnMarks";

export default function Reframe() {
  return (
    <section id="reframe" className="relative pt-20 pb-32 md:pt-28 md:pb-40">
      {/* Continued ruled lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 31px,
            #0066FF 31px,
            #0066FF 32px
          )`,
          backgroundPosition: "0 8px",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <SectionRule />

        <div className="relative z-10">
          {/* Handwritten section number */}
          <p
            className="font-hand text-[18px] text-pencil/40 mt-10"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            02 &mdash; the reframe
          </p>

          <h2
            className="font-display text-ink max-w-2xl mt-6 ink-heavy"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            The strategy was fine. Your team just never got to practise it.
          </h2>

          <div className="font-body text-ink/70 text-[17px] md:text-lg leading-[1.8] max-w-xl mt-10 space-y-6 ink-text">
            <p>
              Every high-performance discipline builds skill through deliberate
              practice. Athletes rehearse. Surgeons simulate. Military planners
              wargame.
            </p>

            <p>
              Business strategy skips straight from{" "}
              <span className="relative inline-block">
                <span
                  className="font-hand text-blue text-xl absolute -top-7 left-0 ink-blue"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  practice
                </span>
                planning
                <DrawnCrossout
                  className="top-1/2 left-0 -translate-y-1/2"
                  width={75}
                  color="pencil"
                />
              </span>{" "}
              to live-fire.{" "}
              <span className="relative inline-block">
                No reps. No rehearsal.
                <DrawnUnderline
                  className="left-0 -bottom-2"
                  width={200}
                  color="blue"
                  delay={0.4}
                />
              </span>
            </p>
          </div>

          {/* Margin note - like a pencil scribble */}
          <span
            className="hidden md:block font-hand text-[19px] text-pencil/30 absolute right-0 top-1/2"
            style={{ transform: "rotate(90deg) translateX(-50%)" }}
          >
            &larr; this is the gap
          </span>

          {/* Ink splatter near the text */}
          <InkSplatter className="absolute right-[20%] bottom-8" size="sm" />
        </div>
      </div>
    </section>
  );
}
