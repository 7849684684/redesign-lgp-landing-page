"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offerings = [
  {
    tag: "Immersive",
    title: "Workshops",
    subtitle: "Half-day to multi-day strategic exercises",
    description:
      "Facilitated tabletop exercises and wargames for your leadership team. We design custom scenarios around your actual strategic challenges, then run them in high-intensity sessions that expose blind spots and build strategic muscle.",
    features: ["Custom scenario design", "Facilitated sessions", "Post-game debrief & action plan", "4–40 participants"],
  },
  {
    tag: "Ongoing",
    title: "Masterminds",
    subtitle: "Peer-driven strategic thinking groups",
    description:
      "Small cohorts of strategic leaders who meet regularly to challenge each other's thinking through structured exercises. Think of it as a dojo for strategic thinking - you get sharper by sparring with peers who think differently.",
    features: ["8–12 person cohorts", "Monthly sessions", "Cross-industry perspectives", "Structured challenges"],
  },
  {
    tag: "Personal",
    title: "Coaching",
    subtitle: "1:1 strategic thinking development",
    description:
      "For senior leaders who want to fundamentally upgrade how they think about strategy. We work with you individually using exercises, frameworks, and deliberate practice to build the cognitive skills that separate good strategists from great ones.",
    features: ["1:1 engagement", "Personalised exercises", "Real-time strategy sparring", "Flexible cadence"],
  },
];

export default function Offerings() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section ref={sectionRef} id="offerings" className="relative bg-bg py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="offerings-heading-wrap mb-16">
          <span className="section-label offerings-heading">03 — Services</span>

          <h2 className="offerings-heading font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-text mt-6">
            Choose your format
          </h2>
          <p className="offerings-heading font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] text-accent mt-1">
            Three paths to sharper thinking
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="offerings-grid grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="offering-card card-hover bg-white border border-border rounded-none p-8 md:p-10 flex flex-col min-h-[480px]"
            >
              {/* Tag */}
              <div className="mb-6">
                <span className="font-label text-xs tracking-wide text-muted bg-surface px-3 py-1 inline-block rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-4xl font-bold text-text leading-tight mb-2">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="font-body text-sm text-accent mb-6">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="font-body text-sm text-muted leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* Features */}
              <div className="mb-8 space-y-2.5">
                {item.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rotate-45 flex-shrink-0" />
                    <span className="font-body text-sm text-muted">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-body text-sm text-accent hover:underline transition-colors duration-300 mt-auto"
              >
                <span>Enquire now</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
