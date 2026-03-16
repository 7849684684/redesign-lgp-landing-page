"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  { value: "200+", label: "Leaders trained" },
  { value: "50+", label: "Organisations" },
  { value: "9.3", label: "Average rating" },
  { value: "94%", label: "Return for more" },
];

const testimonials = [
  {
    quote:
      "This wasn\u2019t another strategy away-day. Our team left with genuine clarity about what to do next\u2009\u2014\u2009and what to stop doing.",
    author: "Sarah Chen",
    role: "CEO, Meridian Health",
  },
  {
    quote:
      "The tabletop exercise exposed blind spots we\u2019d been carrying for years. Uncomfortable at the time. Invaluable in retrospect.",
    author: "James Whitfield",
    role: "Managing Director, Alderley Partners",
  },
];

export default function Proof() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".metric-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".metrics-row", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".proof-quote",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: { trigger: ".proof-quotes", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="bg-ink py-20 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section marker */}
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-cream/40 mb-12">
          04
        </p>

        {/* Metrics row */}
        <div className="metrics-row grid grid-cols-2 gap-8 md:flex md:items-baseline md:justify-between">
          {metrics.map((m, i) => (
            <div key={i} className="contents">
              <div className="metric-item">
                <div
                  className="font-[family-name:var(--font-display)] font-black text-cream"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {m.value}
                </div>
                <div className="font-[family-name:var(--font-body)] text-sm text-cream/50 mt-1">
                  {m.label}
                </div>
              </div>
              {i < metrics.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-cream/10 self-center" />
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="proof-quotes mt-20">
          {/* First quote - left aligned */}
          <blockquote className="proof-quote max-w-lg">
            <p className="font-[family-name:var(--font-display)] font-normal italic text-cream text-lg md:text-xl leading-relaxed">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-4">
              <div className="font-[family-name:var(--font-body)] text-sm font-medium text-cream/70">
                {testimonials[0].author}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase text-cream/40 mt-1">
                {testimonials[0].role}
              </div>
            </footer>
          </blockquote>

          {/* Second quote - right aligned */}
          <blockquote className="proof-quote max-w-lg ml-auto mt-12">
            <p className="font-[family-name:var(--font-display)] font-normal italic text-cream text-lg md:text-xl leading-relaxed">
              &ldquo;{testimonials[1].quote}&rdquo;
            </p>
            <footer className="mt-4">
              <div className="font-[family-name:var(--font-body)] text-sm font-medium text-cream/70">
                {testimonials[1].author}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase text-cream/40 mt-1">
                {testimonials[1].role}
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
