"use client";

import { SectionRule, DrawnCircle } from "@/components/HandDrawnMarks";

const clientNames = [
  "CultureAmp",
  "MARS",
  "Deloitte",
  "McKinsey",
  "Monash University",
  "ALLFED",
];

export default function Practice() {
  return (
    <section id="practice" className="bg-cream pt-16 pb-28 md:pt-20 md:pb-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="relative z-10">
          <SectionRule />

          {/* Section marker */}
          <p className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-muted/60">
            03 / The Practice
          </p>

          {/* Statement */}
          <h2
            className="mt-6 font-display text-ink max-w-3xl"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            We built The Long Game Project around a single idea: strategy is a
            skill, and{" "}
            <span className="relative inline">
              skills need practice
              <DrawnCircle
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                color="pencil"
                variant={2}
                width={320}
                height={55}
              />
            </span>
            .
          </h2>

          {/* Who this is for */}
          <p className="mt-8 font-body text-ink/60 text-[17px] max-w-lg leading-relaxed">
            We work with leadership teams, founders, and decision-makers who are
            done with strategy that lives in a slide deck.
          </p>

          {/* Client logos - footnote, not a feature */}
          <div className="mt-20">
            <p
              className="font-hand text-pencil/40 text-[16px] mb-3"
              style={{ transform: "rotate(-1deg)" }}
            >
              some of the teams we&apos;ve worked with
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {clientNames.map((name, i) => (
                <span key={name} className="flex items-center gap-x-6">
                  {i > 0 && (
                    <span className="text-ink/15 select-none">&middot;</span>
                  )}
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink/25">
                    {name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
