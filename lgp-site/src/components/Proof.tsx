"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Completely changed how our leadership team approaches strategic decisions. We stopped planning in a vacuum.",
    author: "Head of Strategy",
    org: "Fortune 500 Technology",
    result: "STRATEGY PIVOTED",
    score: "9.2",
  },
  {
    quote:
      "The red team exercise exposed three critical blind spots we'd been ignoring for years. Uncomfortable but invaluable.",
    author: "CEO",
    org: "Growth-Stage Fintech",
    result: "3 BLIND SPOTS FOUND",
    score: "9.7",
  },
  {
    quote:
      "Our team went from debating opinions to testing hypotheses. That single shift has been worth more than any consultant.",
    author: "VP Operations",
    org: "Global Logistics",
    result: "CULTURE SHIFTED",
    score: "8.9",
  },
  {
    quote:
      "The mastermind group pushed my thinking harder than any board meeting ever has. I think differently now.",
    author: "Founder & CEO",
    org: "Series B SaaS",
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
    <section
      ref={sectionRef}
      id="proof"
      className="relative bg-bg py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Label */}
        <div className="proof-heading-wrap mb-16">
          <span className="section-label proof-heading">04 — Results</span>
          <h2 className="proof-heading font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-text mt-4">
            Don&apos;t take our word for it
          </h2>
        </div>

        {/* Metrics Row */}
        <div className="metrics-row grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-8 mb-20">
          {metrics.map((m, i) => (
            <div key={i} className="metric-item text-center md:text-left">
              <div
                className="font-display text-accent leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {m.value}
              </div>
              <div className="font-label text-muted text-xs tracking-wide mt-2">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="proof-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="proof-card card-hover bg-white border border-border rounded-sm overflow-hidden"
            >
              {/* Top accent line */}
              <div className="h-[2px] bg-accent" />

              <div className="p-8 md:p-10">
                {/* Pull quote */}
                <blockquote className="font-display italic text-lg text-text leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div>
                  <div className="font-body font-medium text-sm text-text">
                    {t.author}
                  </div>
                  <div className="font-body text-sm text-muted">
                    {t.org}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
