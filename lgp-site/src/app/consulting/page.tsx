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
      {/* Hero */}
      <Section className="pt-16 pb-16 md:pt-20 md:pb-20" surface={1}>
        <div className="max-w-3xl">
          <p className="label text-brand-amber mb-4">Bespoke consulting</p>
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Your strategy looks great on paper.
            <br className="hidden md:block" />
            Now let&apos;s see if it survives.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            We put leadership teams through tabletop exercises that expose the
            gaps between your plan and your readiness. Not a workshop. A
            rehearsal for the decisions that actually matter.
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
                Competitive threats. Market shocks. Resource failures. Your
                team works through realistic scenarios under time pressure
                with expert facilitation. You rehearse the hard calls before
                they become real ones.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Strategic Advisory
              </h3>
              <p className="text-text-secondary leading-relaxed">
                A thinking partner, not a slide deck factory. We work
                alongside founders and leadership teams to challenge
                assumptions, stress-test options, and make better decisions
                under genuine uncertainty.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Executive Coaching
              </h3>
              <p className="text-text-secondary leading-relaxed">
                How you frame problems shapes what solutions you see. We work
                one-on-one with senior leaders on decision-making under
                pressure - building practical capability, not handing out
                frameworks.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Scenario Design
              </h3>
              <p className="text-text-secondary leading-relaxed">
                130+ scenarios designed across defence, financial services,
                tech, consumer goods, and more. Every scenario is built
                around your specific industry, competitive landscape, and
                strategic context.
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
              { step: "01", title: "Discovery call", desc: "30 minutes. You describe the challenge. We tell you honestly whether we can help. No pitch, no proposal theatre." },
              { step: "02", title: "Scoping", desc: "Objectives, format, timeline, investment - defined clearly and agreed upfront. No scope creep, no ambiguity." },
              { step: "03", title: "Design", desc: "We design the exercise or advisory engagement around your actual strategic context - not a template with your logo on it." },
              { step: "04", title: "Deliver", desc: "We facilitate, provoke, and hold your team accountable to the commitments they make under pressure." },
              { step: "05", title: "Debrief", desc: "What you decided, why it matters, and what happens Monday morning. A structured action plan, not a summary deck." },
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
          <p className="label text-white/50 mb-8">What our clients say</p>

          <div className="space-y-8">
            <blockquote className="max-w-xl border-l-[3px] border-brand-amber pl-6">
              <p className="font-editorial text-lg font-light italic leading-relaxed opacity-85">
                &ldquo;The value for time of working with The Long Game Project
                is off the charts. The simulation helped our organisation plan
                for future risks and decide the most important metrics to
                track.&rdquo;
              </p>
              <cite className="block mt-3 text-sm not-italic opacity-50">
                Director of Strategy, Big Four Consulting
              </cite>
            </blockquote>

            <blockquote className="max-w-xl border-l-[3px] border-brand-amber pl-6">
              <p className="font-editorial text-lg font-light italic leading-relaxed opacity-85">
                &ldquo;I was impressed by the level of nuance captured in the
                game design. If you want an engaging, bespoke exercise tailored
                to your needs, work with this team.&rdquo;
              </p>
              <cite className="block mt-3 text-sm not-italic opacity-50">
                COO, Applied Research Organisation
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section className="py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="font-editorial text-3xl font-normal text-text-primary mb-4">
            Tell us the decision you are facing.
          </h2>
          <p className="text-text-secondary mb-8">
            30 minutes, no pitch. We will tell you honestly whether we can
            help - and if we cannot, we will point you to someone who can.
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
