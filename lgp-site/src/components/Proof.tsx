"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Completely changed how our leadership team approaches strategic decisions. We stopped planning in a vacuum.",
    author: "HEAD OF STRATEGY",
    org: "FORTUNE 500 TECHNOLOGY",
    result: "STRATEGY PIVOTED",
    score: "9.2",
  },
  {
    quote:
      "The red team exercise exposed three critical blind spots we'd been ignoring for years. Uncomfortable but invaluable.",
    author: "CEO",
    org: "GROWTH-STAGE FINTECH",
    result: "3 BLIND SPOTS FOUND",
    score: "9.7",
  },
  {
    quote:
      "Our team went from debating opinions to testing hypotheses. That single shift has been worth more than any consultant.",
    author: "VP OPERATIONS",
    org: "GLOBAL LOGISTICS",
    result: "CULTURE SHIFTED",
    score: "8.9",
  },
  {
    quote:
      "The mastermind group pushed my thinking harder than any board meeting ever has. I think differently now.",
    author: "FOUNDER & CEO",
    org: "SERIES B SAAS",
    result: "MINDSET UPGRADED",
    score: "9.4",
  },
];

const metrics = [
  { value: "200+", label: "Strategic exercises run" },
  { value: "50+", label: "Organisations served" },
  { value: "9.3", label: "Average session rating" },
  { value: "94%", label: "Would recommend" },
];

export default function Proof() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proof-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: { trigger: ".proof-heading-wrap", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".proof-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".proof-grid", start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".metric-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".metrics-row", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="proof" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-deep" />
      <div className="absolute inset-0 grid-overlay opacity-40" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="proof-heading-wrap mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-blue" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.3em] text-blue uppercase">
              04 — Match Results
            </span>
          </div>
          <h2 className="proof-heading font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-white">
            DON&apos;T TAKE
          </h2>
          <h2 className="proof-heading font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-blue">
            OUR WORD FOR IT
          </h2>
        </div>

        {/* Metrics Row */}
        <div className="metrics-row grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 py-10 border-y border-white/5">
          {metrics.map((m, i) => (
            <div key={i} className="metric-item text-center md:text-left">
              <div className="font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,5vw,4.5rem)] text-blue leading-none">
                {m.value}
              </div>
              <div className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.15em] text-ghost mt-2 uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards — styled as game score cards */}
        <div className="proof-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="proof-card group relative border border-white/5 bg-white/[0.015] hover:border-blue/20 transition-all duration-500 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                {/* Top bar — game score style */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div>
                    <div className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.3em] text-ghost">
                      RESULT
                    </div>
                    <div className="font-[family-name:var(--font-bebas-neue)] text-lg text-lime tracking-wider">
                      {t.result}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.3em] text-ghost">
                      RATING
                    </div>
                    <div className="font-[family-name:var(--font-bebas-neue)] text-3xl text-blue">
                      {t.score}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-[family-name:var(--font-outfit)] text-base md:text-lg text-white/90 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-blue/30 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue/30 rotate-45" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-white">
                      {t.author}
                    </div>
                    <div className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.15em] text-ghost">
                      {t.org}
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
