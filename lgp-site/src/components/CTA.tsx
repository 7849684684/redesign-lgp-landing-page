"use client";

import { SectionRule, DrawnArrow } from "@/components/HandDrawnMarks";

export default function CTA() {
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative z-10">
          <SectionRule />

          <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted mt-12">
            06 / Next Move
          </p>

          <h2
            className="font-display text-ink mt-8"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Let&rsquo;s talk about what&rsquo;s not working.
          </h2>

          {/* Arrow pointing toward the left card */}
          <div className="relative mt-8 mb-2">
            <DrawnArrow
              className="left-4 md:left-8 top-0"
              color="ink"
              width={60}
              height={40}
            />
            <span
              className="font-hand text-muted text-lg mt-2 inline-block ml-16 md:ml-20"
              style={{ transform: "rotate(-3deg)" }}
            >
              start here
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left card - discovery call */}
            <div className="bg-white border border-rule p-8 md:p-10">
              <h3 className="font-display text-xl text-ink">
                Book a discovery call
              </h3>
              <p className="font-body text-muted mt-3">
                No pitch. Just a conversation about your team and what&rsquo;s
                not working.
              </p>
              <a
                href="mailto:hello@longgameproject.org"
                className="mt-6 inline-block bg-blue text-white px-8 py-4 text-sm tracking-wide uppercase hover:bg-blue-hover transition-colors font-body"
              >
                Get in touch
              </a>
            </div>

            {/* Right card - tools and products */}
            <div className="bg-white border border-rule p-8 md:p-10">
              <h3 className="font-display text-xl text-ink">
                Browse our tools and products
              </h3>
              <p className="font-body text-muted mt-3">
                Self-serve resources for strategic practice. Cards, kits,
                frameworks, and digital tools.
              </p>
              <span className="mt-6 inline-block border-2 border-ink text-ink px-8 py-4 text-sm tracking-wide uppercase hover:bg-ink hover:text-cream transition-colors font-body cursor-default">
                Coming soon
              </span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="font-mono text-sm text-muted">
              hello@longgameproject.org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
