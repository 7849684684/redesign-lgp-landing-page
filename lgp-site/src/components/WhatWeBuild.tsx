"use client";

import { SectionRule, DrawnO, DrawnX, DrawnArrow } from "@/components/HandDrawnMarks";

const cards = [
  {
    id: "exercise",
    title: "Exercise",
    description:
      "Rehearse decisions before they're real. Tabletop exercises for teams - work through realistic scenarios, make calls under pressure, see consequences play out.",
    link: "#contact",
    marker: "o" as const,
  },
  {
    id: "advisory",
    title: "Advisory",
    description:
      "Strategy that survives first contact. We work alongside you to shape strategy, stress-test plans, and build frameworks that hold up when it matters.",
    link: "#contact",
    marker: "x" as const,
  },
  {
    id: "tools",
    title: "Tools",
    description:
      "Better decisions, daily. Digital and analogue tools that bring strategic thinking into everyday work. Things your team actually reaches for.",
    link: "#contact",
    marker: "arrow" as const,
  },
  {
    id: "products",
    title: "Products",
    description:
      "Strategy you can pick up. Cards, kits, and guides designed to make practice a habit. Physical and digital products your team will actually use.",
    link: "#contact",
    marker: "o-small" as const,
  },
];

function CardMarker({ type }: { type: "o" | "x" | "arrow" | "o-small" }) {
  switch (type) {
    case "o":
      return <DrawnO color="blue" width={32} height={32} />;
    case "x":
      return <DrawnX color="blue" width={32} height={32} />;
    case "arrow":
      return (
        <div className="relative w-[40px] h-[30px]">
          <DrawnArrow color="blue" width={40} height={30} />
        </div>
      );
    case "o-small":
      return <DrawnO color="blue" width={28} height={28} />;
  }
}

export default function WhatWeBuild() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative z-10">
          <SectionRule />

          <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted mt-12">
            04 / WHAT WE BUILD
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                id={card.id}
                className="bg-white border border-rule p-8 md:p-10 relative hover:border-blue/30 transition-colors duration-300"
              >
                <div className="relative w-fit h-fit">
                  <CardMarker type={card.marker} />
                </div>

                <h3 className="font-display text-xl md:text-2xl text-ink mt-4">
                  {card.title}
                </h3>

                <p className="font-body text-muted mt-3 leading-relaxed">
                  {card.description}
                </p>

                <a
                  href={card.link}
                  className="font-body text-blue text-sm mt-4 inline-block hover:underline"
                >
                  Learn more &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
