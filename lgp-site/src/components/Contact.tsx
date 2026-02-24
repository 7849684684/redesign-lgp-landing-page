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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-content", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-deep" />
      <div className="absolute inset-0 noise" />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 py-32 md:py-44">
        <div className="contact-content">
          {/* Heading */}
          <div className="mb-16 md:mb-20 text-center">
            <span className="contact-reveal block font-[family-name:var(--font-outfit)] text-sm text-blue font-medium tracking-wide mb-6">
              Get Started
            </span>
            <h2 className="contact-reveal font-[family-name:var(--font-bebas-neue)] text-[clamp(3rem,9vw,7rem)] leading-[0.92] text-white">
              READY TO THINK
            </h2>
            <h2 className="contact-reveal font-[family-name:var(--font-bebas-neue)] text-[clamp(3rem,9vw,7rem)] leading-[0.92] text-blue">
              DIFFERENTLY?
            </h2>
            <p className="contact-reveal mt-6 font-[family-name:var(--font-outfit)] text-lg text-ghost leading-relaxed max-w-xl mx-auto">
              Whether it&apos;s a workshop for your team, a mastermind to sharpen
              your edge, or coaching to level up personally &mdash; we&apos;d love
              to hear what you&apos;re working on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Info */}
            <div>
              <div className="contact-reveal space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm font-medium text-white mb-1">
                      Based in Australia
                    </div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm text-ghost">
                      Available globally, in-person or remote
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm font-medium text-white mb-1">
                      Quick response
                    </div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm text-ghost">
                      We aim to get back to you within 24 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm font-medium text-white mb-1">
                      Free introductory call
                    </div>
                    <div className="font-[family-name:var(--font-outfit)] text-sm text-ghost">
                      30-minute conversation, no strings attached
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-reveal">
              <form className="space-y-6">
                <div>
                  <label className="block font-[family-name:var(--font-outfit)] text-sm text-ghost mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.04] border border-white/10 px-5 py-4 font-[family-name:var(--font-outfit)] text-white text-sm rounded-sm transition-all placeholder:text-ghost/30"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-outfit)] text-sm text-ghost mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/[0.04] border border-white/10 px-5 py-4 font-[family-name:var(--font-outfit)] text-white text-sm rounded-sm transition-all placeholder:text-ghost/30"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-outfit)] text-sm text-ghost mb-2">
                    What are you interested in?
                  </label>
                  <select className="w-full bg-white/[0.04] border border-white/10 px-5 py-4 font-[family-name:var(--font-outfit)] text-ghost text-sm rounded-sm transition-all appearance-none cursor-pointer">
                    <option value="">Select an option</option>
                    <option value="workshop">Workshop</option>
                    <option value="mastermind">Mastermind</option>
                    <option value="coaching">1:1 Coaching</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-outfit)] text-sm text-ghost mb-2">
                    Tell us about your challenge
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.04] border border-white/10 px-5 py-4 font-[family-name:var(--font-outfit)] text-white text-sm rounded-sm transition-all resize-none placeholder:text-ghost/30"
                    placeholder="What strategic challenge are you working through?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue hover:bg-blue-light text-white font-[family-name:var(--font-outfit)] text-base font-medium px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,128,255,0.15)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
