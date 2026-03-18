"use client";

import { SectionRule, DrawnCrossout, DrawnUnderline } from "@/components/HandDrawnMarks";

export default function Reframe() {
  return (
    <section id="reframe" className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionRule />

        <div className="relative z-10">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted mt-12">
            02 / The Reframe
          </p>

          <h2
            className="font-display text-ink max-w-3xl mt-8"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            The strategy was fine. Your team just never got to practise it.
          </h2>

          <div className="font-body text-ink/80 text-lg leading-relaxed max-w-2xl mt-8 space-y-4">
            <p>
              Every high-performance discipline builds skill through deliberate
              practice. Athletes rehearse. Surgeons simulate. Military planners
              wargame.
            </p>

            <p>
              <span className="relative">
                Business strategy skips straight from{" "}
                <span className="relative inline-block">
                  <span className="font-hand text-blue text-xl absolute -top-6 left-0" style={{ transform: "rotate(-2deg)" }}>
                    practice
                  </span>
                  planning
                  <DrawnCrossout
                    className="top-1/2 left-0 -translate-y-1/2"
                    width={80}
                    color="ink"
                  />
                </span>{" "}
                to live-fire.{" "}
                <span className="relative inline-block">
                  No reps. No rehearsal.
                  <DrawnUnderline
                    className="left-0 -bottom-1"
                    width={195}
                    color="blue"
                    delay={0.3}
                  />
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
