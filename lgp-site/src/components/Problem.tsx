"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "67%", label: "of well-formulated strategies fail due to poor execution of untested assumptions" },
  { number: "95%", label: "of employees don't understand their company's strategy" },
  { number: "3×", label: "more likely to succeed when strategies are stress-tested through simulation" },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main heading reveal
      gsap.fromTo(
        ".problem-heading-line",
        { y: 80, opacity: 0, skewY: 3 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stat cards
      gsap.fromTo(
        ".stat-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Pull quote
      gsap.fromTo(
        ".pull-quote",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pull-quote",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-24 md:py-32 bg-bg overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Label */}
        <div className="section-label mb-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="font-label text-[11px] tracking-[0.2em] text-accent uppercase">
              01 - The Problem
            </span>
          </div>
        </div>

        {/* Headline */}
        <div ref={headingRef} className="mb-20 max-w-3xl">
          <div className="overflow-hidden">
            <h2 className="problem-heading-line font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold text-text">
              Most strategies fail
            </h2>
          </div>
          <div className="overflow-hidden mt-5">
            <p className="problem-heading-line font-body text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Not because of bad ideas, but because of untested assumptions,
              unchallenged groupthink, and teams that rehearse agreement instead
              of stress-testing reality.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card bg-surface border border-border rounded-lg p-8 md:p-10"
            >
              <div className="font-display text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold text-accent mb-4">
                {stat.number}
              </div>
              <p className="font-body text-sm text-muted leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Pull Quote */}
        <div className="pull-quote relative pl-6 md:pl-8 border-l-[3px] border-accent max-w-xl">
          <blockquote className="font-body text-lg md:text-xl text-text italic leading-relaxed">
            &ldquo;Everyone has a plan until they get punched in the mouth.&rdquo;
          </blockquote>
          <cite className="block mt-4 font-label text-xs tracking-[0.15em] text-muted not-italic uppercase">
            — Mike Tyson
          </cite>
        </div>
      </div>
    </section>
  );
}
