"use client";

import {
  SectionRule,
  DrawnCrossout,
  DrawnUnderline,
} from "@/components/HandDrawnMarks";

export default function Reframe() {
  return (
    <section id="reframe" className="bg-cream pt-20 pb-32 md:pt-28 md:pb-40">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <SectionRule />

        <div className="relative z-10">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted/60 mt-10">
            02 / The Reframe
          </p>

          <h2
            className="font-display text-ink max-w-2xl mt-6"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            The strategy was fine. Your team just never got to practise it.
          </h2>

          <div className="font-body text-ink/75 text-[17px] md:text-lg leading-[1.8] max-w-xl mt-10 space-y-6">
            <p>
              Every high-performance discipline builds skill through deliberate
              practice. Athletes rehearse. Surgeons simulate. Military planners
              wargame.
            </p>

            <p>
              Business strategy skips straight from{" "}
              <span className="relative inline-block">
                <span
                  className="font-hand text-blue text-xl absolute -top-7 left-0"
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

          {/* Right margin annotation */}
          <span
            className="hidden md:block font-hand text-[18px] text-pencil/40 absolute right-0 top-1/2"
            style={{ transform: "rotate(90deg) translateX(-50%)" }}
          >
            this is the gap
          </span>
        </div>
      </div>
    </section>
  );
}
