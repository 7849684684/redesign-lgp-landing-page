"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionRule, DrawnCircle, DrawnQuote } from "@/components/HandDrawnMarks";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 134, prefix: "+", suffix: "", label: "Scenarios Designed", decimal: false },
  { value: 10, prefix: "+", suffix: "", label: "Years Experience", decimal: false },
  { value: 3.4, prefix: "$", suffix: "B", label: "Client Marketcap", decimal: true },
  { value: 74.9, prefix: "", suffix: "", label: "NPS", decimal: true },
];

const testimonials = [
  {
    quote:
      "The tabletop exercise was a ton of fun and incredibly engaging. What I didn\u2019t expect was how much the simulation helped our organisation plan for future risks. The value for time is off the charts.",
    attribution: "Director, Consulting Firm",
  },
  {
    quote:
      "We were able to leave behind our day-to-day and really immerse in a fun and eye-opening exercise. It helped change the way we think about our business.",
    attribution: "Team Lead, Global CPG",
  },
  {
    quote:
      "I was impressed by the level of communication and directness. The amount of nuance captured in the game design was surprising. I\u2019d recommend LGP if you\u2019re looking for an engaging and bespoke exercise.",
    attribution: "COO, Research",
  },
];

function formatValue(val: number, decimal: boolean, prefix: string, suffix: string): string {
  const num = decimal ? val.toFixed(1) : Math.round(val).toString();
  return `${prefix}${num}${suffix}`;
}

export default function Proof() {
  const sectionRef = useRef<HTMLElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animations for each stat
      statRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];
        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: stat.value,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = formatValue(proxy.val, stat.decimal, stat.prefix, stat.suffix);
          },
        });
      });

      // Testimonial stagger
      gsap.fromTo(
        ".proof-quote",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".proof-quotes",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="card-stock py-24 md:py-32 relative"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative z-10">
          {/* Blue rule at top */}
          <SectionRule />

          {/* Section marker */}
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-cream/40 mt-12">
            05 / The Proof
          </p>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                {/* Number with drawn circle */}
                <div className="relative inline-block">
                  <span
                    ref={(el) => { statRefs.current[i] = el; }}
                    className="font-display text-blue font-light block"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                  >
                    {formatValue(stat.value, stat.decimal, stat.prefix, stat.suffix)}
                  </span>
                  <DrawnCircle
                    color="blue"
                    width={140}
                    height={60}
                    delay={1.5}
                    className="-left-3 top-1/2 -translate-y-1/2"
                  />
                </div>
                <p className="font-mono text-cream/50 text-xs tracking-wider uppercase mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="proof-quotes mt-20 space-y-8">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="proof-quote relative pl-12">
                <DrawnQuote
                  color="blue"
                  delay={i * 0.2}
                  className="absolute left-0 top-0"
                />
                <p className="font-body text-cream/80 text-lg leading-relaxed">
                  {t.quote}
                </p>
                <footer className="mt-4 font-mono text-cream/40 text-xs tracking-wider uppercase">
                  {t.attribution}
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Margin annotation */}
          <span
            className="font-hand text-cream/30 text-lg absolute right-6 bottom-12"
            style={{ transform: "rotate(-3deg)" }}
          >
            the record speaks
          </span>
        </div>
      </div>
    </section>
  );
}
