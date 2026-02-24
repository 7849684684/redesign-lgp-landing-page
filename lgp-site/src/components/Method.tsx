"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const methods = [
  {
    number: "01",
    title: "Tabletop Exercises",
    description:
      "Your team faces simulated strategic crises, competitive threats, and market shifts in real time. No slides. No theory. Just the kind of pressure that reveals how your team actually thinks and decides.",
    accent: "bg-blue",
  },
  {
    number: "02",
    title: "Red Team Thinking",
    description:
      "We assign dedicated adversaries to systematically challenge your strategy. Every assumption gets questioned. Every blind spot gets surfaced. It's uncomfortable, and that's the point.",
    accent: "bg-lime",
  },
  {
    number: "03",
    title: "Strategic Wargaming",
    description:
      "Multi-team competitive simulations where you play out market scenarios against thinking opponents. You don't get better at strategy by practising alone -- you get better by facing someone trying to outmanoeuvre you.",
    accent: "bg-blue",
  },
  {
    number: "04",
    title: "Scenario Planning",
    description:
      "We build divergent futures and have your team navigate each one. It's not about predicting what will happen. It's about being prepared no matter what does.",
    accent: "bg-lime",
  },
];

export default function Method() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        ".method-line",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".method-heading",
            start: "top 80%",
          },
        }
      );

      // Horizontal scroll on desktop
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollWidth = container.scrollWidth - window.innerWidth;

        gsap.to(container, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      // Card reveals for mobile
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          ".method-card-mobile",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".method-cards-mobile",
              start: "top 75%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="method" className="relative bg-deep overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="method-heading max-w-[1100px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20">
          <span className="method-line block font-[family-name:var(--font-outfit)] text-sm text-blue font-medium tracking-wide mb-6">
            Our Approach
          </span>
          <h2 className="method-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-white">
            WE DON&apos;T GIVE ADVICE
          </h2>
          <h2 className="method-line font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-white/30">
            WE RUN GAMES
          </h2>
          <p className="method-line mt-6 font-[family-name:var(--font-outfit)] text-lg text-ghost max-w-xl leading-relaxed">
            Every tool we use is designed to create the pressure, competition,
            and surprise that real strategy demands. Your team walks out thinking
            differently.
          </p>
        </div>

        {/* Horizontal Scroll Container — Desktop */}
        <div className="hidden md:block">
          <div
            ref={scrollContainerRef}
            className="horizontal-scroll-container gap-8 px-10 pb-40"
          >
            {/* Initial spacer */}
            <div className="flex-shrink-0 w-[80px]" />

            {methods.map((method, i) => (
              <div
                key={i}
                className="method-card flex-shrink-0 w-[480px]"
              >
                <div className="relative border border-white/[0.06] bg-white/[0.02] p-10 md:p-12 h-[440px] flex flex-col justify-between rounded-sm hover:border-white/10 transition-all duration-500 group">
                  {/* Number */}
                  <div>
                    <span className="font-[family-name:var(--font-bebas-neue)] text-7xl text-white/[0.06] block mb-8">
                      {method.number}
                    </span>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-4xl leading-[1.05] text-white mb-6">
                      {method.title}
                    </h3>

                    {/* Description */}
                    <p className="font-[family-name:var(--font-outfit)] text-[15px] text-ghost leading-relaxed">
                      {method.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className={`w-12 h-[2px] ${method.accent} mt-8`} />
                </div>
              </div>
            ))}

            {/* End spacer */}
            <div className="flex-shrink-0 w-[200px]" />
          </div>
        </div>

        {/* Stacked Cards — Mobile */}
        <div className="method-cards-mobile md:hidden px-6 pb-32 flex flex-col gap-6">
          {methods.map((method, i) => (
            <div key={i} className="method-card-mobile">
              <div className="relative border border-white/[0.06] bg-white/[0.02] p-8 rounded-sm">
                <span className="font-[family-name:var(--font-bebas-neue)] text-5xl text-white/[0.06] block mb-4">
                  {method.number}
                </span>
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-3xl leading-[1.05] text-white mb-4">
                  {method.title}
                </h3>
                <p className="font-[family-name:var(--font-outfit)] text-[15px] text-ghost leading-relaxed mb-6">
                  {method.description}
                </p>
                <div className={`w-10 h-[2px] ${method.accent}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
