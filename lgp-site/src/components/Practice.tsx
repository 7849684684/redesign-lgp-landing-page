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
    <section id="practice" className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative z-10">
          <SectionRule />

          {/* Section marker */}
          <p className="mt-12 font-mono text-xs tracking-[0.15em] uppercase text-muted">
            03 / The Practice
          </p>

          {/* Statement */}
          <h2
            className="mt-6 font-display text-ink max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            We built The Long Game Project around a single idea: strategy is a
            skill, and{" "}
            <span className="relative inline">
              skills need practice
              <DrawnCircle
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                color="ink"
                width={340}
                height={60}
              />
            </span>
            .
          </h2>

          {/* Who this is for */}
          <p className="mt-8 font-body text-muted text-lg max-w-xl">
            We work with leadership teams, founders, and decision-makers who are
            done with strategy that lives in a slide deck.
          </p>

          {/* Client logos bar */}
          <div className="mt-16">
            <p
              className="font-hand text-muted text-base mb-4"
              style={{ transform: "rotate(-1deg)" }}
            >
              some of the teams we&apos;ve worked with
            </p>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {clientNames.map((name) => (
                <span
                  key={name}
                  className="font-mono text-xs tracking-wider uppercase text-muted/50"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
