"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  { value: 200, suffix: "+", label: "Leaders trained" },
  { value: 50, suffix: "+", label: "Organisations" },
  { value: 9.3, suffix: "", label: "Average rating" },
  { value: 94, suffix: "%", label: "Return for more" },
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
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Top rule draws in on scroll
      if (ruleRef.current) {
        gsap.fromTo(
          ruleRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: ruleRef.current, start: "top 90%" },
          }
        );
      }

      // Counter animations per metric
      const metricEls = document.querySelectorAll<HTMLElement>(".metric-number");
      metricEls.forEach((el) => {
        const target = parseFloat(el.dataset.target ?? "0");
        const suffix = el.dataset.suffix ?? "";
        const isDecimal = el.dataset.decimal === "true";
        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: target,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
          onUpdate: () => {
            el.textContent = (isDecimal ? proxy.val.toFixed(1) : Math.round(proxy.val).toString()) + suffix;
          },
        });
      });

      // Metric item fade in
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

      // Testimonial fade in
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
      className="bg-cream py-20 md:py-28 relative"
    >
      {/* 4px blue top rule that draws in on scroll */}
      <div
        ref={ruleRef}
        className="absolute top-0 left-0 w-full h-[4px] bg-blue"
        style={{ transformOrigin: "left center" }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section marker */}
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-muted mb-12">
          04
        </p>

        {/* Metrics row */}
        <div className="metrics-row grid grid-cols-2 gap-8 md:flex md:items-baseline md:justify-between">
          {metrics.map((m, i) => (
            <div key={i} className="contents">
              <div className="metric-item">
                <div
                  className="metric-number font-[family-name:var(--font-display)] font-black text-blue"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                  data-target={m.value}
                  data-suffix={m.suffix}
                  data-decimal={m.value % 1 !== 0 ? "true" : "false"}
                >
                  {m.value % 1 !== 0 ? m.value.toFixed(1) : m.value.toString()}{m.suffix}
                </div>
                <div className="font-[family-name:var(--font-body)] text-sm text-muted mt-1">
                  {m.label}
                </div>
              </div>
              {i < metrics.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-ink/10 self-center" />
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="proof-quotes mt-20">
          {/* First quote - left aligned */}
          <blockquote className="proof-quote max-w-lg bg-white p-8 md:p-10 border border-rule border-t-[3px] border-t-blue">
            <p className="font-[family-name:var(--font-display)] font-normal italic text-ink text-lg md:text-xl leading-relaxed">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-4">
              <div className="font-[family-name:var(--font-body)] text-sm font-medium text-ink">
                {testimonials[0].author}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase text-muted mt-1">
                {testimonials[0].role}
              </div>
            </footer>
          </blockquote>

          {/* Second quote - right aligned */}
          <blockquote className="proof-quote max-w-lg ml-auto mt-12 bg-white p-8 md:p-10 border border-rule border-t-[3px] border-t-blue">
            <p className="font-[family-name:var(--font-display)] font-normal italic text-ink text-lg md:text-xl leading-relaxed">
              &ldquo;{testimonials[1].quote}&rdquo;
            </p>
            <footer className="mt-4">
              <div className="font-[family-name:var(--font-body)] text-sm font-medium text-ink">
                {testimonials[1].author}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase text-muted mt-1">
                {testimonials[1].role}
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
