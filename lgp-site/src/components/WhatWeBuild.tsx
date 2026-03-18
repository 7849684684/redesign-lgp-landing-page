"use client";

import { SectionRule, DrawnO, DrawnX, DrawnArrow } from "@/components/HandDrawnMarks";

const entries = [
  {
    id: "exercise",
    title: "Exercise",
    description:
      "Rehearse decisions before they're real. Tabletop exercises for teams - work through realistic scenarios, make calls under pressure, see consequences play out.",
    marker: "o" as const,
  },
  {
    id: "advisory",
    title: "Advisory",
    description:
      "Strategy that survives first contact. We work alongside you to shape strategy, stress-test plans, and build frameworks that hold up when it matters.",
    marker: "x" as const,
  },
  {
    id: "tools",
    title: "Tools",
    description:
      "Better decisions, daily. Digital and analogue tools that bring strategic thinking into everyday work. Things your team actually reaches for.",
    marker: "arrow" as const,
  },
  {
    id: "products",
    title: "Products",
    description:
      "Strategy you can pick up. Cards, kits, and guides designed to make practice a habit. Physical and digital products your team will actually use.",
    marker: "o-small" as const,
  },
];

function EntryMarker({ type }: { type: "o" | "x" | "arrow" | "o-small" }) {
  switch (type) {
    case "o":
      return <DrawnO color="blue" size={36} />;
    case "x":
      return <DrawnX color="blue" size={36} />;
    case "arrow":
      return (
        <div className="relative w-[40px] h-[28px]">
          <DrawnArrow color="blue" width={40} height={28} />
        </div>
      );
    case "o-small":
      return <DrawnO color="blue" size={32} />;
  }
}

export default function WhatWeBuild() {
  return (
    <section id="services" className="bg-cream pt-16 pb-28 md:pt-20 md:pb-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="relative z-10">
          <SectionRule />

          <p className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-muted/60">
            04 / What We Build
          </p>

          {/* Playbook entries */}
          <div className="relative mt-12">
            {entries.map((entry, i) => (
              <div
                key={entry.id}
                id={entry.id}
                className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-10 ${
                  i < entries.length - 1 ? "border-b border-rule/40" : ""
                }`}
              >
                {/* Left column - marker + title */}
                <div className="md:w-[120px] flex-shrink-0">
                  <EntryMarker type={entry.marker} />
                  <h3 className="font-display text-lg md:text-xl text-ink font-medium mt-3">
                    {entry.title}
                  </h3>
                </div>

                {/* Right column - description + link */}
                <div className="flex-1">
                  <p className="font-body text-ink/65 text-[16px] leading-relaxed max-w-md">
                    {entry.description}
                  </p>
                  <a
                    href="#contact"
                    className="font-body text-blue text-[13px] mt-3 inline-block hover:underline tracking-wide"
                  >
                    Learn more &rarr;
                  </a>
                </div>
              </div>
            ))}

            {/* Margin annotation */}
            <span className="font-hand text-pencil/35 text-[17px] hidden md:block absolute right-8 top-[28%] rotate-[-3deg]">
              the plays
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
