"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { number: "67%", label: "of strategies fail at execution" },
  { number: "95%", label: "of leaders can't articulate their company's strategy" },
  { number: "3x", label: "more likely to succeed with pressure-tested thinking" },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".problem-stat",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        quoteRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
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
      id="about"
      className="bg-ink py-20 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section marker */}
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-cream/40 mb-12">
          01
        </p>

        {/* Headline */}
        <h2
          ref={headingRef}
          className="font-[family-name:var(--font-display)] font-bold text-cream leading-[1.15] max-w-3xl mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Most strategies fail before they meet reality
        </h2>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-8 md:flex-nowrap md:gap-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="problem-stat">
              <div
                className="font-[family-name:var(--font-display)] font-black text-cream"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                {stat.number}
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-cream/50 mt-2 max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div ref={quoteRef} className="ml-auto max-w-lg mt-20">
          <span className="text-terracotta font-[family-name:var(--font-display)] font-black text-5xl leading-none mb-2 block">
            &#x201C;
          </span>
          <blockquote className="font-[family-name:var(--font-display)] font-normal italic text-cream text-xl md:text-2xl leading-relaxed">
            Everyone has a plan until they get punched in the mouth.
          </blockquote>
          <cite className="block font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-cream/40 mt-4 not-italic">
            Mike Tyson
          </cite>
        </div>
      </div>
    </section>
  );
}
