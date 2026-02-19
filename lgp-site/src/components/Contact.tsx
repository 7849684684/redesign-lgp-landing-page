"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: ".contact-content", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-midnight to-deep" />

      {/* Decorative elements */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Top divider */}
      <div className="section-divider" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="contact-content">
          {/* Section Label */}
          <div className="contact-reveal mb-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-blue" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.3em] text-blue uppercase">
              05 — Your Move
            </span>
          </div>

          {/* Main CTA Headline */}
          <div className="mb-12">
            <h2 className="contact-reveal font-[family-name:var(--font-bebas-neue)] text-[clamp(3rem,10vw,9rem)] leading-[0.85] text-white">
              READY TO STOP
            </h2>
            <h2 className="contact-reveal font-[family-name:var(--font-bebas-neue)] text-[clamp(3rem,10vw,9rem)] leading-[0.85] text-blue">
              GUESSING?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Text */}
            <div>
              <p className="contact-reveal font-[family-name:var(--font-outfit)] text-lg md:text-xl text-ghost leading-relaxed mb-10 max-w-lg">
                Whether you need a single workshop to shake up your team&apos;s
                thinking, an ongoing mastermind to sharpen your strategic edge, or
                1:1 coaching to level up personally — the first move is yours.
              </p>

              {/* Quick info */}
              <div className="contact-reveal space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-blue/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue rotate-45" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-mono)] text-xs tracking-[0.15em] text-white mb-1">
                      BASED IN
                    </div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm text-ghost">
                      Australia — available globally
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-blue/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-lime rotate-45" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-mono)] text-xs tracking-[0.15em] text-white mb-1">
                      RESPONSE TIME
                    </div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm text-ghost">
                      We aim to respond within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-blue/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue rotate-45" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-mono)] text-xs tracking-[0.15em] text-white mb-1">
                      FIRST MOVE IS FREE
                    </div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm text-ghost">
                      30-minute strategy call, no obligations
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-reveal">
              <form className="space-y-6">
                <div>
                  <label className="block font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.25em] text-ghost mb-2 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue/50 px-5 py-4 font-[family-name:var(--font-outfit)] text-white text-sm outline-none transition-colors placeholder:text-ghost/40"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.25em] text-ghost mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue/50 px-5 py-4 font-[family-name:var(--font-outfit)] text-white text-sm outline-none transition-colors placeholder:text-ghost/40"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.25em] text-ghost mb-2 uppercase">
                    What are you interested in?
                  </label>
                  <select className="w-full bg-white/[0.03] border border-white/10 focus:border-blue/50 px-5 py-4 font-[family-name:var(--font-outfit)] text-ghost text-sm outline-none transition-colors appearance-none cursor-pointer">
                    <option value="">Select an option</option>
                    <option value="workshop">Workshop</option>
                    <option value="mastermind">Mastermind</option>
                    <option value="coaching">1:1 Coaching</option>
                    <option value="not-sure">Not sure yet — let&apos;s talk</option>
                  </select>
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.25em] text-ghost mb-2 uppercase">
                    Tell us about your challenge
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue/50 px-5 py-4 font-[family-name:var(--font-outfit)] text-white text-sm outline-none transition-colors resize-none placeholder:text-ghost/40"
                    placeholder="What strategic challenge are you facing?"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-blue hover:bg-blue-light text-white font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.2em] px-8 py-5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,128,255,0.3)]"
                >
                  <span className="relative z-10">MAKE YOUR MOVE</span>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
