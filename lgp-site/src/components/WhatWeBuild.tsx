"use client";

import { SectionRule, DrawnO, DrawnX, DrawnArrow, InkSplatter } from "@/components/HandDrawnMarks";

const entries = [
  {
    id: "exercise",
    title: "Exercise",
    note: "the main event",
    description:
      "Rehearse decisions before they're real. Tabletop exercises for teams - work through realistic scenarios, make calls under pressure, see consequences play out.",
    marker: "o" as const,
  },
  {
    id: "advisory",
    title: "Advisory",
    note: "ongoing support",
    description:
      "Strategy that survives first contact. We work alongside you to shape strategy, stress-test plans, and build frameworks that hold up when it matters.",
    marker: "x" as const,
  },
  {
    id: "tools",
    title: "Tools",
    note: "daily practice",
    description:
      "Better decisions, daily. Digital and analogue tools that bring strategic thinking into everyday work. Things your team actually reaches for.",
    marker: "arrow" as const,
  },
  {
    id: "products",
    title: "Products",
    note: "take it home",
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
    <section id="services" className="relative pt-16 pb-28 md:pt-20 md:pb-36">
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
          backgroundPosition: "0 12px",
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
            04 &mdash; what we build
          </p>

          {/* Playbook entries - notebook page style */}
          <div className="relative mt-12">
            {entries.map((entry, i) => (
              <div
                key={entry.id}
                id={entry.id}
                className={`relative flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-10 ${
                  i < entries.length - 1 ? "border-b border-pencil/8" : ""
                }`}
              >
                {/* Left column - marker + title */}
                <div className="md:w-[140px] flex-shrink-0">
                  <EntryMarker type={entry.marker} />
                  <h3 className="font-display text-lg md:text-xl text-ink font-medium mt-3 ink-heavy">
                    {entry.title}
                  </h3>
                </div>

                {/* Right column - description + link */}
                <div className="flex-1">
                  <p className="font-body text-ink/60 text-[16px] leading-relaxed max-w-md ink-text">
                    {entry.description}
                  </p>
                  <a
                    href="#contact"
                    className="font-hand text-blue text-[18px] mt-3 inline-block hover:text-blue-hover transition-colors"
                    style={{ transform: "rotate(-0.5deg)" }}
                  >
                    Learn more &rarr;
                  </a>
                </div>

                {/* Handwritten note in the margin */}
                <span
                  className="hidden md:block absolute right-0 top-10 font-hand text-pencil/25 text-[16px]"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  {entry.note}
                </span>
              </div>
            ))}

            {/* Margin annotation */}
            <span
              className="font-hand text-pencil/20 text-[22px] hidden md:block absolute -right-2 top-[28%]"
              style={{ transform: "rotate(-3deg)" }}
            >
              the plays &darr;
            </span>

            <InkSplatter className="absolute left-[40%] bottom-2" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
