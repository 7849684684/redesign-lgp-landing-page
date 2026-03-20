"use client";

import { SectionRule, DrawnCircle, InkSplatter } from "@/components/HandDrawnMarks";

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
    <section id="practice" className="relative pt-16 pb-28 md:pt-20 md:pb-36">
      {/* Ruled lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 31px,
            #0066FF 31px,
            #0066FF 32px
          )`,
          backgroundPosition: "0 4px",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="relative z-10">
          <SectionRule />

          {/* Handwritten section number */}
          <p
            className="mt-10 font-hand text-[18px] text-pencil/40"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            03 &mdash; the practice
          </p>

          {/* Statement */}
          <h2
            className="mt-6 font-display text-ink max-w-3xl ink-heavy"
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
          <p className="mt-8 font-body text-ink/55 text-[17px] max-w-lg leading-relaxed ink-text">
            We work with leadership teams, founders, and decision-makers who are
            done with strategy that lives in a slide deck.
          </p>

          {/* Client names - handwritten note style */}
          <div className="mt-20 relative">
            {/* Tape effect on the client list */}
            <div className="relative paper-card p-6 md:p-8 max-w-2xl" style={{ transform: "rotate(-0.5deg)" }}>
              {/* Tape strip */}
              <div
                className="absolute -top-3 left-[30%] w-[70px] h-[18px] z-20"
                style={{
                  background: "rgba(255, 248, 220, 0.55)",
                  border: "0.5px solid rgba(200, 180, 140, 0.25)",
                  transform: "rotate(-2deg)",
                }}
              />
              <p
                className="font-hand text-pencil/50 text-[20px] mb-4"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                some of the teams we&apos;ve worked with:
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {clientNames.map((name, i) => (
                  <span key={name} className="flex items-center gap-x-6">
                    {i > 0 && (
                      <span className="text-ink/10 select-none">&middot;</span>
                    )}
                    <span className="font-hand text-[18px] text-ink/35">
                      {name}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <InkSplatter className="absolute -right-4 -bottom-6" size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
