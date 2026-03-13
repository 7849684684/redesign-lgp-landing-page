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
      "Simulated scenarios where your team faces strategic crises, competitive threats, and market shifts — in real time, around a table. No PowerPoints. No theory. Just pressure-tested decisions.",
  },
  {
    number: "02",
    title: "Red Team Thinking",
    description:
      "We assign dedicated adversaries to systematically dismantle your strategy. Every assumption gets challenged. Every blind spot gets exposed. You'll hate it — then you'll thank us.",
  },
  {
    number: "03",
    title: "Strategic Wargaming",
    description:
      "Multi-team competitive simulations where you play out market scenarios against thinking opponents. Not chess against yourself — chess against someone trying to beat you.",
  },
  {
    number: "04",
    title: "Scenario Planning",
    description:
      "We build divergent futures and make you navigate each one. Not prediction — preparation. When the unexpected hits, you've already rehearsed your response.",
  },
];

export default function Method() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        ".method-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".method-heading-container",
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
          ".method-card",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
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
    <section ref={sectionRef} id="method" className="relative bg-bg overflow-hidden">
      {/* Top Divider */}
      <div className="section-divider" />

      <div className="relative z-10">
        {/* Header */}
        <div className="method-heading-container max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="section-label mb-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-accent" />
            <span>02 — Our Method</span>
          </div>

          <h2 className="method-heading font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold text-text">
            We don&apos;t do consulting
          </h2>

          <p className="method-heading mt-6 font-body text-lg text-muted max-w-xl leading-relaxed">
            We run strategic games. Every tool in our kit is designed to create
            the pressure, competition, and surprise that real strategy demands.
          </p>
        </div>

        {/* Horizontal Scroll Container - Desktop */}
        <div className="hidden md:block">
          <div
            ref={scrollContainerRef}
            className="horizontal-scroll-container gap-8 px-10 pb-32"
          >
            {methods.map((method, i) => (
              <div
                key={i}
                className="method-card flex-shrink-0 w-[480px] relative group"
              >
                <div className="card-hover relative bg-white border border-border rounded-sm p-10 h-[420px] flex flex-col justify-between hover:border-accent/30 transition-colors duration-300 overflow-hidden">
                  {/* Background number */}
                  <span className="font-display text-[8rem] font-bold leading-none text-border opacity-20 absolute top-4 right-6 pointer-events-none select-none">
                    {method.number}
                  </span>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-text mb-5 leading-tight">
                      {method.title}
                    </h3>

                    <p className="font-body text-sm text-muted leading-relaxed">
                      {method.description}
                    </p>
                  </div>

                  {/* Bottom link */}
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="font-body text-sm text-accent">
                      Learn more
                    </span>
                    <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* End spacer for scroll */}
            <div className="flex-shrink-0 w-[200px]" />
          </div>
        </div>

        {/* Stacked Cards - Mobile */}
        <div className="method-cards-mobile md:hidden px-6 pb-24 flex flex-col gap-6">
          {methods.map((method, i) => (
            <div key={i} className="method-card">
              <div className="card-hover relative bg-white border border-border rounded-sm p-8 hover:border-accent/30 transition-colors duration-300 overflow-hidden">
                {/* Background number */}
                <span className="font-display text-[6rem] font-bold leading-none text-border opacity-20 absolute top-2 right-4 pointer-events-none select-none">
                  {method.number}
                </span>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold text-text mb-4 leading-tight">
                    {method.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed mb-5">
                    {method.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-body text-sm text-accent">
                      Learn more
                    </span>
                    <span className="text-accent">&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
