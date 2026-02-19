"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "67%", label: "of well-formulated strategies fail due to poor execution of untested assumptions", color: "text-blue" },
  { number: "95%", label: "of employees don't understand their company's strategy", color: "text-lime" },
  { number: "3×", label: "more likely to succeed when strategies are stress-tested through simulation", color: "text-blue" },
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

      // Redacted text reveal
      ScrollTrigger.create({
        trigger: ".redacted-section",
        start: "top 70%",
        onEnter: () => {
          document.querySelectorAll(".text-redacted").forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 200);
          });
        },
      });

      // Side quote
      gsap.fromTo(
        ".side-quote",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".side-quote",
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
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-midnight to-deep" />
      <div className="absolute inset-0 grid-overlay-dense opacity-50" />

      {/* Decorative vertical line */}
      <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue/20 to-transparent hidden md:block" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-blue" />
          <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.3em] text-blue uppercase">
            01 — The Problem
          </span>
        </div>

        {/* Main Heading */}
        <div ref={headingRef} className="mb-20">
          <div className="overflow-hidden">
            <h2 className="problem-heading-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-white">
              MOST STRATEGIES FAIL
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="problem-heading-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-ghost/40">
              NOT BECAUSE OF
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="problem-heading-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-ghost/40">
              BAD IDEAS
            </h2>
          </div>
          <div className="overflow-hidden mt-4">
            <p className="problem-heading-line font-[family-name:var(--font-outfit)] text-xl md:text-2xl text-blue leading-relaxed max-w-2xl">
              But because of untested assumptions, unchallenged groupthink, and
              teams that rehearse agreement instead of stress-testing reality.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card group relative border border-white/5 bg-white/[0.02] p-8 md:p-10 hover:border-blue/30 transition-all duration-500 hover:bg-blue/[0.03]"
            >
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue/40" />

              <div
                className={`font-[family-name:var(--font-bebas-neue)] text-[clamp(4rem,6vw,6rem)] leading-none mb-4 ${stat.color}`}
              >
                {stat.number}
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-sm text-ghost leading-relaxed">
                {stat.label}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Redacted Reveal Section */}
        <div className="redacted-section max-w-3xl mx-auto text-center mb-16">
          <p className="font-[family-name:var(--font-outfit)] text-xl md:text-2xl leading-relaxed text-white/80">
            The real question isn&apos;t whether you have a strategy. It&apos;s whether your
            strategy has been{" "}
            <span className="text-redacted px-2 py-1 inline-block">
              challenged
            </span>
            ,{" "}
            <span className="text-redacted px-2 py-1 inline-block">
              broken
            </span>
            , and{" "}
            <span className="text-redacted px-2 py-1 inline-block">
              rebuilt
            </span>{" "}
            before the market does it for you.
          </p>
        </div>

        {/* Side Quote */}
        <div className="side-quote relative pl-6 md:pl-8 border-l-2 border-lime max-w-xl">
          <blockquote className="font-[family-name:var(--font-outfit)] text-lg md:text-xl text-white/90 italic leading-relaxed">
            &ldquo;Everyone has a plan until they get punched in the mouth.&rdquo;
          </blockquote>
          <cite className="block mt-4 font-[family-name:var(--font-space-mono)] text-xs tracking-[0.15em] text-ghost not-italic">
            — MIKE TYSON (PROBABLY THE BEST STRATEGIST)
          </cite>
        </div>
      </div>
    </section>
  );
}
