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
      // Counter animations
      statRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];
        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: stat.value,
          duration: 2,
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
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
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
      className="card-stock pt-20 pb-28 md:pt-28 md:pb-40 relative"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="relative z-10">
          <SectionRule />

          {/* Section marker */}
          <p className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-cream/30">
            05 / The Proof
          </p>

          {/* Stats - editorial flex layout, not uniform grid */}
          <div className="mt-14 flex flex-wrap gap-x-16 gap-y-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="relative">
                <div className="relative inline-block">
                  <span
                    ref={(el) => { statRefs.current[i] = el; }}
                    className="font-display text-blue font-light leading-none block"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
                  >
                    {formatValue(stat.value, stat.decimal, stat.prefix, stat.suffix)}
                  </span>

                  {/* Single drawn circle on NPS only */}
                  {stat.label === "NPS" && (
                    <DrawnCircle
                      color="blue"
                      variant={0}
                      width={130}
                      height={55}
                      delay={2}
                      className="-left-3 top-1/2 -translate-y-1/2"
                    />
                  )}
                </div>
                <span className="font-mono text-cream/35 text-[10px] tracking-[0.2em] uppercase mt-3 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-20 mb-16 h-px bg-cream/8 w-full" />

          {/* Testimonials - asymmetric layout */}
          <div className="proof-quotes">
            {/* Hero quote - full width, larger */}
            <blockquote className="proof-quote relative pl-12">
              <DrawnQuote
                color="blue"
                className="absolute -left-1 -top-2"
              />
              <p className="text-cream/80 text-xl md:text-2xl font-display font-light leading-relaxed">
                {testimonials[0].quote}
              </p>
              <footer className="mt-4 font-mono text-cream/25 text-[10px] tracking-[0.2em] uppercase">
                {testimonials[0].attribution}
              </footer>
            </blockquote>

            {/* Secondary quotes - 2-column grid on desktop */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonials.slice(1).map((t, i) => (
                <blockquote key={i} className="proof-quote relative pl-12">
                  <DrawnQuote
                    color="blue"
                    delay={(i + 1) * 0.2}
                    className="absolute -left-1 -top-2"
                  />
                  <p className="text-cream/60 text-[16px] font-body leading-relaxed">
                    {t.quote}
                  </p>
                  <footer className="mt-4 font-mono text-cream/25 text-[10px] tracking-[0.2em] uppercase">
                    {t.attribution}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Margin annotation */}
          <span
            className="font-hand text-cream/20 text-[18px] absolute right-8 md:right-12 bottom-16"
            style={{ transform: "rotate(-3deg)" }}
          >
            the record speaks
          </span>
        </div>
      </div>
    </section>
  );
}
