"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offerings = [
  {
    tag: "Immersive",
    title: "WORKSHOPS",
    subtitle: "Half-day to multi-day strategic exercises",
    description:
      "Facilitated tabletop exercises and wargames designed around your actual strategic challenges. Your team walks in with assumptions and walks out with clarity.",
    features: [
      "Custom scenario design",
      "Facilitated sessions",
      "Post-session debrief & action plan",
      "4\u201340 participants",
    ],
    accent: "border-blue/20",
    dot: "bg-blue",
  },
  {
    tag: "Ongoing",
    title: "MASTERMINDS",
    subtitle: "Peer-driven strategic thinking groups",
    description:
      "Small cohorts of strategic leaders who meet regularly to challenge each other\u2019s thinking. Think of it as a gym for strategic thinking \u2014 you get sharper by working out with peers who think differently.",
    features: [
      "8\u201312 person cohorts",
      "Monthly sessions",
      "Cross-industry perspectives",
      "Structured challenges",
    ],
    accent: "border-lime/20",
    dot: "bg-lime",
  },
  {
    tag: "Personal",
    title: "COACHING",
    subtitle: "1:1 strategic thinking development",
    description:
      "For senior leaders who want to fundamentally upgrade how they approach strategy. We work with you using exercises, frameworks, and deliberate practice to build the thinking skills that matter most.",
    features: [
      "1:1 engagement",
      "Personalised exercises",
      "Real-time strategy sparring",
      "Flexible cadence",
    ],
    accent: "border-blue/20",
    dot: "bg-blue",
  },
];

export default function Offerings() {
  const sectionRef = useRef<HTMLElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Diagonal wipe: animate light overlay to reveal dark section beneath
      if (wipeRef.current) {
        gsap.fromTo(
          wipeRef.current,
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      }

      // Heading
      gsap.fromTo(
        ".offerings-line",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".offerings-heading", start: "top 80%" },
        }
      );

      // Cards stagger
      gsap.fromTo(
        ".offering-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".offerings-grid", start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="offerings" className="relative min-h-screen overflow-hidden">
      {/* Dark background (revealed by wipe) */}
      <div className="absolute inset-0 bg-deep" />

      {/* Light overlay that wipes away (reverse diagonal from problem section) */}
      <div
        ref={wipeRef}
        className="absolute inset-0 bg-warm z-[1]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 py-32 md:py-44">
        {/* Header */}
        <div className="offerings-heading mb-16 md:mb-20">
          <span className="offerings-line block font-[family-name:var(--font-outfit)] text-sm text-blue font-medium tracking-wide mb-6">
            What We Offer
          </span>
          <h2 className="offerings-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-white">
            THREE WAYS
          </h2>
          <h2 className="offerings-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-white/30">
            TO WORK WITH US
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="offerings-grid grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className={`offering-card group relative border ${item.accent} bg-white/[0.02] rounded-sm hover:border-white/10 transition-all duration-500 overflow-hidden`}
            >
              <div className="relative p-8 md:p-10 flex flex-col h-full min-h-[480px]">
                {/* Tag */}
                <div className="mb-8">
                  <span className="font-[family-name:var(--font-outfit)] text-xs text-ghost/70 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-5xl leading-[0.95] text-white mb-2">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="font-[family-name:var(--font-outfit)] text-sm text-blue mb-6">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="font-[family-name:var(--font-outfit)] text-[15px] text-ghost leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Features */}
                <div className="mb-8 space-y-2.5">
                  {item.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 ${item.dot} rounded-full flex-shrink-0`} />
                      <span className="font-[family-name:var(--font-outfit)] text-[13px] text-ghost/80">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-outfit)] text-sm text-white/70 group-hover:text-blue transition-colors duration-300"
                >
                  <span>Learn more</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
