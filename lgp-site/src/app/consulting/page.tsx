import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CrossProductCTA from "@/components/CrossProductCTA";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Bespoke strategy consulting for organisations facing consequential decisions. Tabletop exercises, advisory, and honest challenge.",
};

export default function ConsultingPage() {
  return (
    <>
      {/* Hero - elevated surface for premium feel */}
      <Section className="pt-16 pb-16 md:pt-20 md:pb-20" surface={1}>
        <div className="max-w-3xl">
          <p className="label text-brand-amber mb-4">Bespoke consulting</p>
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Strategy that survives first contact with reality.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            For leadership teams facing consequential decisions, we bring
            tabletop exercises, structured advisory, and the uncomfortable
            questions your team has been avoiding.
          </p>
        </div>
      </Section>

      {/* What we do */}
      <Section className="py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="label text-text-tertiary mb-6">What we do</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Tabletop Exercises
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Your team works through realistic scenarios - competitive threats,
                market shifts, resource constraints - in a facilitated,
                time-pressured environment. Rehearse decisions before they are real.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Strategic Advisory
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Ongoing advisory for founders and leadership teams. Not a retainer
                that produces monthly decks. A thinking partner who challenges
                assumptions and helps you decide under uncertainty.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Executive Coaching
              </h3>
              <p className="text-text-secondary leading-relaxed">
                One-on-one work with senior leaders on how they frame problems,
                evaluate options, and make decisions under pressure. Practical
                capability building, not theoretical frameworks.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Scenario Design
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Custom scenario design for your industry and context. We have
                designed 130+ scenarios across industries from defence to consumer
                goods.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="py-16 md:py-24 border-t border-surface-2" surface={1}>
        <div className="max-w-3xl">
          <p className="label text-text-tertiary mb-6">How it works</p>
          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery call", desc: "30 minutes. You describe the challenge. We assess whether we can help. No pitch." },
              { step: "02", title: "Scoping", desc: "We define the engagement: objectives, format, timeline, investment. Clear and upfront." },
              { step: "03", title: "Design", desc: "We design the exercise or advisory programme around your actual strategic context." },
              { step: "04", title: "Deliver", desc: "We facilitate, challenge, and hold your team accountable to their own strategic commitments." },
              { step: "05", title: "Debrief", desc: "Structured debrief and action plan. What you decided, why, and what happens next." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <p className="text-2xl font-light text-brand-teal tabular-nums shrink-0 w-10">
                  {item.step}
                </p>
                <div>
                  <h3 className="font-editorial text-lg font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Social proof */}
      <section className="bg-brand-teal text-white py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="text-3xl font-light tabular-nums">130+</p>
              <p className="text-sm mt-1 opacity-60">Scenarios designed</p>
            </div>
            <div>
              <p className="text-3xl font-light tabular-nums">$3.4B</p>
              <p className="text-sm mt-1 opacity-60">Client market cap</p>
            </div>
            <div>
              <p className="text-3xl font-light tabular-nums">74.9</p>
              <p className="text-sm mt-1 opacity-60">NPS score</p>
            </div>
          </div>

          <blockquote className="max-w-xl border-l-[3px] border-brand-amber pl-6">
            <p className="font-editorial text-lg font-light italic leading-relaxed opacity-85">
              &ldquo;This was the first time our leadership team actually
              stress-tested a strategy before committing resources.&rdquo;
            </p>
            <cite className="block mt-3 text-sm not-italic opacity-50">
              Director, Management Consulting Firm
            </cite>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <Section className="py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="font-editorial text-3xl font-normal text-text-primary mb-4">
            Let&apos;s talk about the decision you are facing.
          </h2>
          <p className="text-text-secondary mb-8">
            No pitch. Just a conversation about whether we can help.
          </p>
          <Button href="/contact" variant="teal">
            Book a discovery call
          </Button>
        </div>
      </Section>

      {/* Cross-product CTA */}
      <Section className="pb-20">
        <CrossProductCTA
          label="Keep practising between engagements"
          product="Masterminds"
          description="Monthly peer cohorts for senior leaders. Structured challenge, real decisions, ongoing accountability."
          href="/mastermind"
        />
      </Section>
    </>
  );
}
