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
      {/* Dark paper grain overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 31px,
            rgba(245, 240, 230, 0.02) 31px,
            rgba(245, 240, 230, 0.02) 32px
          )`,
          backgroundPosition: "0 8px",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="relative z-10">
          <SectionRule />

          {/* Handwritten section number - chalk/white ink on dark */}
          <p
            className="mt-10 font-hand text-[18px] text-cream/30"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            05 &mdash; the proof
          </p>

          {/* Stats - written large like numbers on a chalkboard */}
          <div className="mt-14 flex flex-wrap gap-x-16 gap-y-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="relative">
                <div className="relative inline-block">
                  <span
                    ref={(el) => { statRefs.current[i] = el; }}
                    className="font-display text-blue font-light leading-none block ink-blue"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
                  >
                    {formatValue(stat.value, stat.decimal, stat.prefix, stat.suffix)}
                  </span>

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
                {/* Handwritten label under stat */}
                <span
                  className="font-hand text-cream/30 text-[15px] mt-3 block"
                  style={{ transform: "rotate(-0.5deg)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider - scratchy line */}
          <div className="mt-20 mb-16 scratchy-rule w-full" style={{ background: "rgba(245, 240, 230, 0.08)" }} />

          {/* Testimonials - like handwritten notes pinned to a board */}
          <div className="proof-quotes">
            {/* Hero quote */}
            <blockquote className="proof-quote relative pl-12">
              <DrawnQuote
                color="blue"
                className="absolute -left-1 -top-2"
              />
              <p className="text-cream/75 text-xl md:text-2xl font-display font-light leading-relaxed italic">
                {testimonials[0].quote}
              </p>
              <footer
                className="mt-4 font-hand text-cream/30 text-[17px]"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                &mdash; {testimonials[0].attribution}
              </footer>
            </blockquote>

            {/* Secondary quotes */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonials.slice(1).map((t, i) => (
                <blockquote key={i} className="proof-quote relative pl-12">
                  <DrawnQuote
                    color="blue"
                    delay={(i + 1) * 0.2}
                    className="absolute -left-1 -top-2"
                  />
                  <p className="text-cream/55 text-[16px] font-body leading-relaxed italic">
                    {t.quote}
                  </p>
                  <footer
                    className="mt-4 font-hand text-cream/25 text-[16px]"
                    style={{ transform: "rotate(-0.5deg)" }}
                  >
                    &mdash; {t.attribution}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Margin annotation - chalk style */}
          <span
            className="font-hand text-cream/15 text-[20px] absolute right-8 md:right-12 bottom-16"
            style={{ transform: "rotate(-3deg)" }}
          >
            the record speaks
          </span>
        </div>
      </div>
    </section>
  );
}
