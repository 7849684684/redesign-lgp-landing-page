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

  const infoItems = [
    { label: "Based in", value: "Australia — available globally" },
    { label: "Response Time", value: "Within 24 hours" },
    { label: "First Call Free", value: "30-minute strategy call, no obligations" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-bg border-t border-border py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="contact-content">
          {/* Section Label */}
          <div className="contact-reveal section-label mb-6">
            05 — Get in Touch
          </div>

          {/* Headline */}
          <h2 className="contact-reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text mb-16">
            Ready to pressure-test
            <br />
            your strategy?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Text & Info */}
            <div>
              <p className="contact-reveal font-body text-lg text-muted leading-relaxed mb-12 max-w-lg">
                Whether you need a focused workshop, an ongoing advisory
                relationship, or one-on-one coaching to sharpen your thinking
                — we&apos;d love to hear from you.
              </p>

              <div className="contact-reveal space-y-8">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-sm flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-label text-text mb-1">
                        {item.label}
                      </div>
                      <div className="font-body text-sm text-muted">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="contact-reveal">
              <form className="space-y-6">
                <div>
                  <label className="block font-label mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-border focus:border-accent px-5 py-4 font-body text-text text-sm rounded-none outline-none transition-colors placeholder:text-muted/50"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block font-label mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-border focus:border-accent px-5 py-4 font-body text-text text-sm rounded-none outline-none transition-colors placeholder:text-muted/50"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block font-label mb-2">
                    What are you interested in?
                  </label>
                  <select className="w-full bg-white border border-border focus:border-accent px-5 py-4 font-body text-text text-sm rounded-none outline-none transition-colors appearance-none cursor-pointer">
                    <option value="">Select an option</option>
                    <option value="workshop">Workshop</option>
                    <option value="mastermind">Mastermind</option>
                    <option value="coaching">1:1 Coaching</option>
                    <option value="not-sure">Not sure yet — let&apos;s talk</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label mb-2">
                    Tell us about your challenge
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-border focus:border-accent px-5 py-4 font-body text-text text-sm rounded-none outline-none transition-colors resize-none placeholder:text-muted/50"
                    placeholder="What strategic challenge are you facing?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-body font-medium text-base tracking-wide px-8 py-4 transition-colors"
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
