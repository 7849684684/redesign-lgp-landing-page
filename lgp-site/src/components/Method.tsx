"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const methods = [
  {
    number: "01",
    name: "Tabletop Exercises",
    desc: "Simulated scenarios that put your strategy under real-world pressure. Your team faces the crisis before it happens.",
  },
  {
    number: "02",
    name: "Red Team Thinking",
    desc: "Dedicated adversarial challenge to your assumptions. We find the holes in your plan so your competitors don\u2019t.",
  },
  {
    number: "03",
    name: "Strategic Wargaming",
    desc: "Competitive simulations that map how rivals, regulators, and markets will respond to your moves.",
  },
  {
    number: "04",
    name: "Scenario Planning",
    desc: "Structured exploration of alternative futures. Build strategies that work across multiple possible worlds.",
  },
];

export default function Method() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading fade in
      gsap.fromTo(
        ".method-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".method-heading",
            start: "top 75%",
          },
        }
      );

      // Rows stagger in
      gsap.fromTo(
        ".method-row",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".method-rows",
            start: "top 75%",
          },
        }
      );

      // Rules draw in
      gsap.fromTo(
        ".method-rule",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".method-rows",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="method"
      className="relative bg-cream py-24 md:py-36"
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 relative">
        {/* Watermark */}
        <span
          className="absolute top-0 right-0 md:right-[-5%] font-[family-name:var(--font-display)] font-black text-rule/15 leading-none pointer-events-none select-none"
          style={{ fontSize: "clamp(8rem, 20vw, 16rem)" }}
          aria-hidden="true"
        >
          02
        </span>

        {/* Headline with mixed weights */}
        <h2
          className="method-heading font-[family-name:var(--font-display)] text-ink leading-[1.2] mb-16 md:mb-20"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          <span className="font-light">How we </span>
          <span className="font-black">pressure-test </span>
          <span className="font-light">your thinking</span>
        </h2>

        {/* Method rows */}
        <div className="method-rows">
          {methods.map((method, i) => (
            <div key={method.number}>
              {i > 0 && (
                <div
                  className="method-rule h-px bg-rule origin-left"
                />
              )}
              <div className="method-row grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8">
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-muted tracking-[0.15em] uppercase">
                    {method.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-xl md:text-2xl mt-1">
                    {method.name}
                  </h3>
                </div>
                <p className="font-[family-name:var(--font-body)] text-muted leading-relaxed md:self-center">
                  {method.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
