"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Blue top rule draws in on scroll
      gsap.fromTo(
        ruleRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".contact-reveal",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-ink grid-texture py-24 md:py-36 relative"
    >
      {/* 4px blue top rule */}
      <div
        ref={ruleRef}
        className="absolute top-0 left-0 w-full h-[4px] bg-blue"
        style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
      />

      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="contact-reveal font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-cream/40 mb-12">
          05
        </div>

        <h2
          className="contact-reveal text-cream leading-[1.2] mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          <span className="font-[family-name:var(--font-display)] font-light">
            Let&apos;s{" "}
          </span>
          <span className="font-[family-name:var(--font-display)] font-black">
            talk strategy
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="contact-reveal flex flex-col gap-8">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-cream/40">
                Based in
              </div>
              <div className="font-[family-name:var(--font-body)] text-cream/70 text-base mt-1">
                Australia (serving globally)
              </div>
            </div>

            <div>
              <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-cream/40">
                Response
              </div>
              <div className="font-[family-name:var(--font-body)] text-cream/70 text-base mt-1">
                Within 24 hours
              </div>
            </div>

            <div>
              <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-cream/40">
                First call
              </div>
              <div className="font-[family-name:var(--font-body)] text-cream/70 text-base mt-1">
                Always free
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-reveal">
            <form className="flex flex-col gap-8">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-cream/20 py-3 font-[family-name:var(--font-body)] text-cream text-base outline-none focus:border-blue transition-colors placeholder:text-cream/30"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-cream/20 py-3 font-[family-name:var(--font-body)] text-cream text-base outline-none focus:border-blue transition-colors placeholder:text-cream/30"
              />

              <textarea
                name="message"
                placeholder="What's the strategic challenge?"
                rows={4}
                className="w-full bg-transparent border-b border-cream/20 py-3 font-[family-name:var(--font-body)] text-cream text-base outline-none focus:border-blue transition-colors resize-none placeholder:text-cream/30"
              />

              <button
                type="submit"
                className="bg-blue text-white font-[family-name:var(--font-body)] text-sm tracking-wide px-8 py-4 hover:bg-blue-hover transition-colors mt-4 self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
