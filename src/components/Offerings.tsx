"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const offerings = [
  {
    headline: "Workshops",
    subtitle: "Tabletop Exercises for Leadership Teams",
    description:
      "Half-day and full-day sessions that put your strategy through simulated pressure. Your team faces the crisis, the competitor move, or the market shift\u2009-\u2009before it happens.",
    features: [
      "Custom scenarios built from your actual strategic challenges",
      "Facilitated decision-making under realistic constraints",
      "Immediate debrief with actionable insights",
    ],
    showRule: true,
  },
  {
    headline: "Masterminds",
    subtitle: "Peer Cohorts for Strategic Leaders",
    description:
      "Small-group programmes that pair you with peers facing similar challenges. Structured strategic thinking exercises, accountability, and the kind of honest feedback you can\u2019t get inside your own organisation.",
    features: [
      "Curated cohorts of 6\u20138 senior leaders",
      "Monthly sessions with between-session challenges",
      "Confidential peer advisory with facilitated structure",
    ],
    showRule: true,
  },
  {
    headline: "Coaching",
    subtitle: "1:1 Strategic Thinking Partnership",
    description:
      "For founders and executives who need a thinking partner, not a consultant. We challenge your assumptions, stress-test your plans, and build your capacity for strategic thinking under pressure.",
    features: [
      "Tailored to your specific strategic challenges",
      "Combines red teaming with structured reflection",
      "Flexible cadence\u2009-\u2009weekly, fortnightly, or intensive sprints",
    ],
    showRule: false,
  },
];

export default function Offerings() {
  const sectionRef = useRef<HTMLElement>(null);
  const topRuleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Blue top rule draws in on scroll
      gsap.fromTo(
        topRuleRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".offering-block",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".offering-blocks-wrap",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-ink grid-texture py-24 md:py-32"
    >
      {/* 4px blue top rule that draws in on scroll */}
      <div
        ref={topRuleRef}
        className="h-1 bg-blue w-full"
        style={{ marginBottom: 0 }}
      />

      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        {/* Section divider rule */}
        <div className="h-0.5 bg-blue" />

        {/* Section marker */}
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-cream/40 mt-16 mb-16">
          03
        </p>

        {/* Offering blocks */}
        <div className="offering-blocks-wrap">
          {offerings.map((item, i) => (
            <div key={i} className="offering-block">
              <h3
                className="font-[family-name:var(--font-display)] font-bold text-cream"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                {item.headline}
              </h3>

              <p className="font-[family-name:var(--font-body)] text-blue text-base mt-2">
                {item.subtitle}
              </p>

              <p className="font-[family-name:var(--font-body)] text-cream/60 leading-relaxed mt-4 max-w-2xl">
                {item.description}
              </p>

              <div className="mt-6 space-y-1.5">
                {item.features.map((feat, j) => (
                  <p
                    key={j}
                    className="font-[family-name:var(--font-body)] text-cream/50 text-sm leading-relaxed"
                  >
                    <span className="text-blue mr-3">&mdash;</span>
                    {feat}
                  </p>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block mt-6 font-[family-name:var(--font-body)] text-blue hover:text-cream transition-colors text-sm font-medium"
              >
                Enquire &rarr;
              </a>

              {item.showRule && <div className="h-0.5 bg-cream/10 mt-16" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
