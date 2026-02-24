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
  },
  {
    quote:
      "The red team exercise exposed three critical blind spots we'd been ignoring for years. Uncomfortable but invaluable.",
    author: "CEO",
    org: "Growth-stage Fintech",
  },
  {
    quote:
      "Our team went from debating opinions to testing hypotheses. That single shift has been transformative.",
    author: "VP Operations",
    org: "Global Logistics",
  },
  {
    quote:
      "The mastermind group pushed my thinking harder than any board meeting ever has. I approach problems completely differently now.",
    author: "Founder & CEO",
    org: "Series B SaaS",
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
      // Heading
      gsap.fromTo(
        ".proof-line",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".proof-heading", start: "top 80%" },
        }
      );

      // Featured quote — full bleed
      gsap.fromTo(
        ".featured-quote",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".featured-quote", start: "top 75%" },
        }
      );

      // Metrics
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

      // Testimonial cards
      gsap.fromTo(
        ".proof-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".proof-grid", start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="proof" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-deep" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10">
        {/* Header */}
        <div className="proof-heading max-w-[1100px] mx-auto px-6 md:px-10 pt-32 md:pt-44">
          <span className="proof-line block font-[family-name:var(--font-outfit)] text-sm text-blue font-medium tracking-wide mb-6">
            Results
          </span>
          <h2 className="proof-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-white">
            DON&apos;T TAKE
          </h2>
          <h2 className="proof-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-white/30">
            OUR WORD FOR IT
          </h2>
        </div>

        {/* Full-Bleed Featured Quote */}
        <div className="featured-quote my-20 md:my-28 py-16 md:py-24 border-y border-white/5">
          <div className="max-w-[1000px] mx-auto px-6 md:px-10 text-center">
            <blockquote className="full-bleed-quote font-[family-name:var(--font-outfit)] text-white/90">
              &ldquo;The red team exercise exposed three critical blind spots
              we&apos;d been ignoring for years. Uncomfortable but invaluable.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-blue" />
              <span className="font-[family-name:var(--font-outfit)] text-sm text-ghost">
                CEO, Growth-stage Fintech
              </span>
              <div className="w-8 h-[1px] bg-blue" />
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="metrics-row max-w-[1100px] mx-auto px-6 md:px-10 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((m, i) => (
              <div key={i} className="metric-item text-center">
                <div className="font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,5vw,4rem)] text-blue leading-none">
                  {m.value}
                </div>
                <div className="font-[family-name:var(--font-outfit)] text-sm text-ghost mt-2">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="proof-grid max-w-[1100px] mx-auto px-6 md:px-10 pb-32 md:pb-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials
              .filter((_, i) => i !== 1) // Skip the featured one
              .map((t, i) => (
              <div
                key={i}
                className="proof-card border border-white/[0.06] bg-white/[0.02] rounded-sm p-8 md:p-10 hover:border-white/10 transition-all duration-500"
              >
                <blockquote className="font-[family-name:var(--font-outfit)] text-base md:text-lg text-white/80 leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-[family-name:var(--font-outfit)] text-sm text-white font-medium">
                    {t.author}
                  </div>
                  <div className="font-[family-name:var(--font-outfit)] text-sm text-ghost">
                    {t.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
