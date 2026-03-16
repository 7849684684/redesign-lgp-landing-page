"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { number: 67, suffix: "%", label: "of strategies fail at execution" },
  { number: 95, suffix: "%", label: "of leaders can't articulate their company's strategy" },
  { number: 3, suffix: "x", label: "more likely to succeed with pressure-tested thinking" },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Blue top rule draws in on scroll
      gsap.fromTo(
        ruleRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

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

      // Counter animations for each stat
      const statEls = statsRef.current?.querySelectorAll<HTMLElement>(".stat-number");
      if (statEls) {
        statEls.forEach((el, i) => {
          const stat = stats[i];
          const proxy = { val: 0 };
          gsap.to(proxy, {
            val: stat.number,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = Math.round(proxy.val) + stat.suffix;
            },
          });
        });
      }

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
      className="bg-ink grid-texture py-20 md:py-28 relative"
    >
      {/* Blue top rule */}
      <div
        ref={ruleRef}
        className="absolute top-0 left-0 right-0 h-1 bg-blue origin-left"
        style={{ transform: "scaleX(0)" }}
      />

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
                className="stat-number font-[family-name:var(--font-display)] font-black text-blue"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                {stat.number}{stat.suffix}
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-cream/50 mt-2 max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div ref={quoteRef} className="ml-auto max-w-lg mt-20">
          <span className="text-blue font-[family-name:var(--font-display)] font-black text-7xl leading-none mb-2 block">
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
