"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const methods = [
  {
    number: "01",
    title: "TABLETOP\nEXERCISES",
    description:
      "Simulated scenarios where your team faces strategic crises, competitive threats, and market shifts — in real time, around a table. No PowerPoints. No theory. Just pressure-tested decisions.",
    accent: "bg-blue",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-20">
        <rect x="10" y="10" width="60" height="60" fill="none" stroke="#0080FF" strokeWidth="1" />
        <rect x="20" y="20" width="40" height="40" fill="none" stroke="#0080FF" strokeWidth="1" />
        <circle cx="40" cy="40" r="8" fill="#0080FF" fillOpacity="0.3" />
        <circle cx="25" cy="25" r="3" fill="#0080FF" fillOpacity="0.5" />
        <circle cx="55" cy="55" r="3" fill="#0080FF" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "RED TEAM\nTHINKING",
    description:
      "We assign dedicated adversaries to systematically dismantle your strategy. Every assumption gets challenged. Every blind spot gets exposed. You'll hate it — then you'll thank us.",
    accent: "bg-lime",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-20">
        <line x1="10" y1="10" x2="70" y2="70" stroke="#CCFF00" strokeWidth="2" />
        <line x1="70" y1="10" x2="10" y2="70" stroke="#CCFF00" strokeWidth="2" />
        <circle cx="40" cy="40" r="20" fill="none" stroke="#CCFF00" strokeWidth="1" />
        <circle cx="40" cy="40" r="4" fill="#CCFF00" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "STRATEGIC\nWARGAMING",
    description:
      "Multi-team competitive simulations where you play out market scenarios against thinking opponents. Not chess against yourself — chess against someone trying to beat you.",
    accent: "bg-blue",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-20">
        <polygon points="40,5 75,60 5,60" fill="none" stroke="#0080FF" strokeWidth="1" />
        <polygon points="40,20 60,55 20,55" fill="none" stroke="#0080FF" strokeWidth="1" />
        <circle cx="40" cy="45" r="5" fill="#0080FF" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "SCENARIO\nPLANNING",
    description:
      "We build divergent futures and make you navigate each one. Not prediction — preparation. When the unexpected hits, you've already rehearsed your response.",
    accent: "bg-lime",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-20">
        <path d="M10 70 Q 40 10, 70 70" fill="none" stroke="#CCFF00" strokeWidth="1" />
        <path d="M10 70 Q 25 30, 70 70" fill="none" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M10 70 Q 55 30, 70 70" fill="none" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="10" cy="70" r="4" fill="#CCFF00" fillOpacity="0.4" />
      </svg>
    ),
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
    <section ref={sectionRef} id="method" className="relative bg-deep overflow-hidden">
      {/* Top Divider */}
      <div className="section-divider" />

      <div className="relative z-10">
        {/* Header — always visible */}
        <div className="method-heading-container max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-blue" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.3em] text-blue uppercase">
              02 — How We Play
            </span>
          </div>
          <h2 className="method-heading font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-white">
            WE DON&apos;T DO
          </h2>
          <h2 className="method-heading font-[family-name:var(--font-bebas-neue)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-blue">
            CONSULTING
          </h2>
          <p className="method-heading mt-6 font-[family-name:var(--font-outfit)] text-lg text-ghost max-w-xl">
            We run strategic games. Every tool in our kit is designed to create
            the pressure, competition, and surprise that real strategy demands.
          </p>
        </div>

        {/* Horizontal Scroll Container — Desktop */}
        <div className="hidden md:block">
          <div
            ref={scrollContainerRef}
            className="horizontal-scroll-container gap-8 px-10 pb-32"
          >
            {methods.map((method, i) => (
              <div
                key={i}
                className="method-card flex-shrink-0 w-[500px] relative group"
              >
                <div className="relative border border-white/5 bg-white/[0.015] p-10 h-[420px] flex flex-col justify-between hover:border-blue/30 transition-all duration-500 hover:bg-blue/[0.03] card-tilt overflow-hidden">
                  {/* Top */}
                  <div>
                    {/* Number & Icon */}
                    <div className="flex items-start justify-between mb-8">
                      <span className="font-[family-name:var(--font-bebas-neue)] text-6xl text-white/10">
                        {method.number}
                      </span>
                      {method.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-4xl leading-[1] text-white whitespace-pre-line mb-6">
                      {method.title}
                    </h3>

                    {/* Description */}
                    <p className="font-[family-name:var(--font-outfit)] text-sm text-ghost leading-relaxed">
                      {method.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-[2px] ${method.accent}`} />
                    <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-ghost group-hover:text-white transition-colors">
                      LEARN MORE →
                    </span>
                  </div>

                  {/* Hover border glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue/50 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-blue/50 to-transparent" />
                  </div>
                </div>
              </div>
            ))}

            {/* End spacer for scroll */}
            <div className="flex-shrink-0 w-[200px]" />
          </div>
        </div>

        {/* Stacked Cards — Mobile */}
        <div className="method-cards-mobile md:hidden px-6 pb-24 flex flex-col gap-6">
          {methods.map((method, i) => (
            <div key={i} className="method-card">
              <div className="relative border border-white/5 bg-white/[0.015] p-8 hover:border-blue/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-[family-name:var(--font-bebas-neue)] text-4xl text-white/10">
                    {method.number}
                  </span>
                  {method.icon}
                </div>
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-3xl leading-[1] text-white whitespace-pre-line mb-4">
                  {method.title}
                </h3>
                <p className="font-[family-name:var(--font-outfit)] text-sm text-ghost leading-relaxed mb-4">
                  {method.description}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-[2px] ${method.accent}`} />
                  <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-ghost">
                    LEARN MORE →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
