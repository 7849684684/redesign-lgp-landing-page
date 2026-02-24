"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "67%",
    label: "of well-formulated strategies fail due to untested assumptions",
    color: "text-blue",
  },
  {
    number: "95%",
    label: "of employees don't understand their company's strategy",
    color: "text-deep",
  },
  {
    number: "3\u00d7",
    label: "more likely to succeed when strategies are stress-tested through simulation",
    color: "text-blue",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Diagonal wipe: animate the dark overlay clip-path to reveal light section
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

      // Heading reveal
      gsap.fromTo(
        ".problem-line",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".problem-heading",
            start: "top 75%",
          },
        }
      );

      // Stat cards
      gsap.fromTo(
        ".stat-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 75%",
          },
        }
      );

      // Bottom insight text
      gsap.fromTo(
        ".problem-insight",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".problem-insight",
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
      id="problem"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Light background (revealed by wipe) */}
      <div className="absolute inset-0 bg-warm" />

      {/* Dark diagonal overlay that wipes away on scroll */}
      <div
        ref={wipeRef}
        className="absolute inset-0 bg-deep z-[1]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 py-32 md:py-44 light-section">
        {/* Section Label */}
        <div className="problem-line mb-6">
          <span className="font-[family-name:var(--font-outfit)] text-sm text-blue font-medium tracking-wide">
            The Challenge
          </span>
        </div>

        {/* Main Heading */}
        <div className="problem-heading mb-16 md:mb-20">
          <h2 className="problem-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-deep">
            MOST STRATEGIES LOOK GREAT
          </h2>
          <h2 className="problem-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-deep/40">
            ON PAPER
          </h2>
          <p className="problem-line mt-6 font-[family-name:var(--font-outfit)] text-lg md:text-xl text-deep/60 leading-relaxed max-w-2xl">
            The gap between a strategy presentation and a strategy that works
            under pressure is enormous. Most teams never close it because they
            never test it.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-20 md:mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card p-8 md:p-10 bg-white rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-deep/5"
            >
              <div
                className={`font-[family-name:var(--font-bebas-neue)] text-[clamp(3.5rem,5vw,5rem)] leading-none mb-3 ${stat.color}`}
              >
                {stat.number}
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-sm text-deep/50 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="problem-insight max-w-2xl">
          <p className="font-[family-name:var(--font-outfit)] text-xl md:text-2xl text-deep/80 leading-relaxed">
            The question isn&apos;t whether you have a strategy.
            It&apos;s whether that strategy has ever been{" "}
            <span className="text-blue font-medium">challenged</span>,{" "}
            <span className="text-blue font-medium">pressure-tested</span>,
            and{" "}
            <span className="text-blue font-medium">rebuilt</span> before it meets reality.
          </p>
        </div>
      </div>
    </section>
  );
}
