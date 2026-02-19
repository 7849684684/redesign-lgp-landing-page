"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offerings = [
  {
    tag: "IMMERSIVE",
    title: "WORKSHOPS",
    subtitle: "Half-day to multi-day strategic exercises",
    description:
      "Facilitated tabletop exercises and wargames for your leadership team. We design custom scenarios around your actual strategic challenges, then run them in high-intensity sessions that expose blind spots and build strategic muscle.",
    features: ["Custom scenario design", "Facilitated sessions", "Post-game debrief & action plan", "4–40 participants"],
    accent: "border-blue",
    accentBg: "bg-blue",
    number: "W",
  },
  {
    tag: "ONGOING",
    title: "MASTERMINDS",
    subtitle: "Peer-driven strategic thinking groups",
    description:
      "Small cohorts of strategic leaders who meet regularly to challenge each other's thinking through structured exercises. Think of it as a dojo for strategic thinking — you get sharper by sparring with peers who think differently.",
    features: ["8–12 person cohorts", "Monthly sessions", "Cross-industry perspectives", "Structured challenges"],
    accent: "border-lime",
    accentBg: "bg-lime",
    number: "M",
  },
  {
    tag: "PERSONAL",
    title: "COACHING",
    subtitle: "1:1 strategic thinking development",
    description:
      "For senior leaders who want to fundamentally upgrade how they think about strategy. We work with you individually using exercises, frameworks, and deliberate practice to build the cognitive skills that separate good strategists from great ones.",
    features: ["1:1 engagement", "Personalised exercises", "Real-time strategy sparring", "Flexible cadence"],
    accent: "border-blue",
    accentBg: "bg-blue",
    number: "C",
  },
];

export default function Offerings() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        ".offerings-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: { trigger: ".offerings-heading-wrap", start: "top 80%" },
        }
      );

      // Cards stagger
      gsap.fromTo(
        ".offering-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".offerings-grid", start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="offerings" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-slate/30 to-deep" />
      <div className="absolute inset-0 hatch-pattern" />

      {/* Marquee Banner */}
      <div className="relative overflow-hidden py-6 mb-20 border-y border-white/5">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-bebas-neue)] text-[clamp(2rem,4vw,4rem)] text-white/[0.04] tracking-[0.2em]"
            >
              WORKSHOPS ✦ MASTERMINDS ✦ COACHING ✦ STRATEGY ✦
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="offerings-heading-wrap mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-blue" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.3em] text-blue uppercase">
              03 — What We Run
            </span>
          </div>
          <h2 className="offerings-heading font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-white">
            CHOOSE YOUR
          </h2>
          <div className="flex items-baseline gap-4 md:gap-8 flex-wrap">
            <h2 className="offerings-heading font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-blue">
              GAME MODE
            </h2>
            <span className="offerings-heading text-stroke font-[family-name:var(--font-bebas-neue)] text-[clamp(1.2rem,3vw,2.5rem)] tracking-[0.1em]">
              THREE WAYS TO PLAY
            </span>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="offerings-grid grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className={`offering-card group relative ${item.accent} border bg-white/[0.015] hover:bg-blue/[0.04] transition-all duration-500 overflow-hidden`}
            >
              {/* Large background letter */}
              <div className="absolute -top-6 -right-4 font-[family-name:var(--font-bebas-neue)] text-[12rem] text-white/[0.02] leading-none select-none pointer-events-none">
                {item.number}
              </div>

              <div className="relative p-8 md:p-10 flex flex-col h-full min-h-[500px]">
                {/* Tag */}
                <div className="mb-6">
                  <span className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.3em] text-ghost uppercase bg-white/5 px-3 py-1 inline-block">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-5xl md:text-6xl leading-[0.9] text-white mb-2">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="font-[family-name:var(--font-outfit)] text-sm text-blue mb-6">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="font-[family-name:var(--font-outfit)] text-sm text-ghost leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Features */}
                <div className="mb-8 space-y-2">
                  {item.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 ${item.accentBg} rotate-45 flex-shrink-0`} />
                      <span className="font-[family-name:var(--font-space-mono)] text-[11px] text-ghost">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 font-[family-name:var(--font-space-mono)] text-xs tracking-[0.1em] text-white group-hover:text-blue transition-colors duration-300"
                >
                  <span>ENQUIRE NOW</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] border-animated group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
