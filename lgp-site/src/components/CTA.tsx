"use client";

import { SectionRule, DrawnArrow } from "@/components/HandDrawnMarks";

export default function CTA() {
  return (
    <section id="contact" className="bg-cream pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="relative z-10">
          <SectionRule />

          <p className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-muted/60">
            06 / Next Move
          </p>

          <h2
            className="mt-6 font-display text-ink"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            Let&rsquo;s talk about what&rsquo;s not working.
          </h2>

          {/* Primary CTA */}
          <div className="relative mt-12">
            <h3 className="font-display text-xl text-ink">
              Book a discovery call
            </h3>

            <DrawnArrow
              className="absolute -top-2 -left-12 md:-left-14"
              color="pencil"
              width={40}
              height={28}
            />
            <span
              className="absolute -top-6 -left-24 md:-left-28 font-hand text-pencil/40 text-[17px]"
              style={{ transform: "rotate(-4deg)" }}
            >
              start here
            </span>

            <p className="font-body text-ink/55 text-[16px] mt-2 max-w-md">
              No pitch. Just a conversation about your team and what&rsquo;s not
              working.
            </p>
            <a
              href="mailto:hello@longgameproject.org"
              className="mt-5 inline-block bg-blue text-white px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-blue-hover transition-colors font-body"
            >
              Get in touch
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="mt-14 pt-14 border-t border-rule/30">
            <h3 className="font-display text-lg text-ink/70">
              Browse our tools and products
            </h3>
            <p className="font-body text-ink/45 text-[15px] mt-2 max-w-md">
              Self-serve resources for strategic practice. Cards, kits,
              frameworks, and digital tools.
            </p>
            <span className="mt-4 inline-block text-ink/50 text-[13px] tracking-[0.12em] uppercase border-b border-ink/20 pb-1 hover:text-ink hover:border-ink transition-colors font-body cursor-default">
              Coming soon
            </span>
          </div>

          {/* Contact */}
          <p className="mt-20 font-mono text-[12px] text-ink/30 tracking-wide">
            hello@longgameproject.org
          </p>
        </div>
      </div>
    </section>
  );
}
