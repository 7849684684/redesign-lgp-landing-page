"use client";

import { SectionRule, DrawnArrow, InkSplatter } from "@/components/HandDrawnMarks";

export default function CTA() {
  return (
    <section id="contact" className="relative pt-20 pb-28 md:pt-28 md:pb-36">
      {/* Ruled lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 31px,
            #0066FF 31px,
            #0066FF 32px
          )`,
          backgroundPosition: "0 8px",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="relative z-10">
          <SectionRule />

          {/* Handwritten section number */}
          <p
            className="mt-10 font-hand text-[18px] text-pencil/40"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            06 &mdash; next move
          </p>

          <h2
            className="mt-6 font-display text-ink ink-heavy"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            Let&rsquo;s talk about what&rsquo;s not working.
          </h2>

          {/* Primary CTA - paper card style */}
          <div className="relative mt-12 paper-card p-8 md:p-10 max-w-xl" style={{ transform: "rotate(-0.3deg)" }}>
            {/* Tape strip */}
            <div
              className="absolute -top-3 left-[20%] w-[80px] h-[20px] z-20"
              style={{
                background: "rgba(255, 248, 220, 0.55)",
                border: "0.5px solid rgba(200, 180, 140, 0.25)",
                transform: "rotate(1.5deg)",
              }}
            />

            <h3 className="font-hand text-[26px] text-ink ink-heavy">
              Book a discovery call
            </h3>

            <p className="font-body text-ink/50 text-[16px] mt-3 leading-relaxed ink-text">
              No pitch. Just a conversation about your team and what&rsquo;s not
              working.
            </p>

            <a
              href="mailto:hello@longgameproject.org"
              className="mt-6 inline-block bg-blue text-white px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-blue-hover transition-colors font-body"
              style={{ transform: "rotate(0.2deg)" }}
            >
              Get in touch
            </a>

            {/* Handwritten arrow annotation */}
            <div className="hidden md:block">
              <DrawnArrow
                className="absolute -right-14 top-8"
                color="pencil"
                width={40}
                height={28}
              />
              <span
                className="absolute -right-40 top-6 font-hand text-pencil/35 text-[18px]"
                style={{ transform: "rotate(-3deg)" }}
              >
                start here
              </span>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-14 pt-14 border-t border-pencil/8">
            <h3 className="font-hand text-[22px] text-ink/65">
              Browse our tools and products
            </h3>
            <p className="font-body text-ink/40 text-[15px] mt-2 max-w-md ink-text">
              Self-serve resources for strategic practice. Cards, kits,
              frameworks, and digital tools.
            </p>
            <span
              className="mt-4 inline-block font-hand text-ink/40 text-[18px] border-b border-pencil/15 pb-1 cursor-default"
              style={{ transform: "rotate(-0.3deg)" }}
            >
              Coming soon...
            </span>
          </div>

          {/* Contact - handwritten */}
          <p
            className="mt-20 font-hand text-[18px] text-pencil/30"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            hello@longgameproject.org
          </p>

          <InkSplatter className="absolute right-[10%] bottom-[30%]" size="lg" />
        </div>
      </div>
    </section>
  );
}
