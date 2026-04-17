import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CrossProductCTA from "@/components/CrossProductCTA";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Tabletop exercises that stress-test a leadership team's strategy against the shocks the plan does not model. Bespoke scenario design, partner-led facilitation, a structured debrief into board-ready commitments.",
};

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 pb-16 md:pt-20 md:pb-20" surface={1}>
        <div className="max-w-3xl">
          <p className="label text-brand-amber mb-4">Workshops</p>
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Your strategy looks great on paper.
            <br className="hidden md:block" />
            Now let&apos;s see if it survives.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            A tabletop exercise puts your leadership team inside the decisions
            your strategy does not rehearse. Market shocks, competitive moves,
            regulatory reversals, operational failures &mdash; compressed into
            a day, facilitated with the discipline of a boardroom simulation,
            debriefed into commitments you can hold each other to on Monday.
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
                Tabletop exercises
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Your team faces competitor moves, market dislocation, or
                operational failure under a live clock. Every scenario is
                built around your industry&apos;s actual threat surface, not a
                generic template. You leave with a sharpened view of where
                the strategy is brittle &mdash; and what you will do about it
                before the real version arrives.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Strategic advisory
              </h3>
              <p className="text-text-secondary leading-relaxed">
                A retained thinking partner for the questions that do not fit
                an exercise. We work alongside the CEO and top team between
                board cycles, pressure-testing the assumptions the rest of
                the organisation cannot afford to question in the open.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Bespoke scenario design
              </h3>
              <p className="text-text-secondary leading-relaxed">
                A library of 130+ scenarios across defence, financial
                services, technology, consumer goods, healthcare, and
                professional services. Every engagement is built bespoke on
                that foundation &mdash; the sharpness of a proven design with
                the specificity of your board papers.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Honest debrief
              </h3>
              <p className="text-text-secondary leading-relaxed">
                The exercise surfaces the gaps. The debrief closes them.
                Structured reflection, named assumptions, owners against
                actions, and a single-page record of what the team agreed
                under pressure &mdash; because memories fade faster than
                calendars.
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
              {
                step: "01",
                title: "Discovery",
                desc: "A 30-minute call with a partner. You describe the decision on the table. We tell you honestly whether a tabletop is the right shape — and if it is not, what is. No pitch, no proposal theatre.",
              },
              {
                step: "02",
                title: "Scoping",
                desc: "A one-page brief covering objectives, scenarios, participants, format, and investment. Agreed in writing before any design begins. No scope creep, no ambiguity.",
              },
              {
                step: "03",
                title: "Design",
                desc: "Two to four weeks of bespoke scenario design drawing on your industry, competitive context, and the specific question on the table. Built by a partner, reviewed with your sponsor, iterated until it bites.",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "One day, on-site or remote. Your team runs the scenario under a live clock. We facilitate, provoke, and hold the room to the commitments it makes under pressure.",
              },
              {
                step: "05",
                title: "Debrief",
                desc: "A structured session within 48 hours, followed by a single-page action record. What you decided, why it matters, and what happens on Monday — in the form your board meeting will accept.",
              },
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
                Director, Consulting Firm
              </cite>
            </blockquote>

            <blockquote className="max-w-xl border-l-[3px] border-brand-amber pl-6">
              <p className="font-editorial text-lg font-light italic leading-relaxed opacity-85">
                &ldquo;I was impressed by the level of nuance captured in the
                game design. If you want an engaging, bespoke exercise tailored
                to your needs, work with this team.&rdquo;
              </p>
              <cite className="block mt-3 text-sm not-italic opacity-50">
                COO, Research
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
            Thirty minutes with a partner, no pitch. If we can help, we will
            say how. If we cannot, we will point you to someone who can. That
            conversation carries more value than most proposals.
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
          description="Six-month peer cohorts for senior leaders. Structured challenge, real decisions, ongoing accountability between the big exercises."
          href="/services/masterminds"
        />
      </Section>
    </>
  );
}
