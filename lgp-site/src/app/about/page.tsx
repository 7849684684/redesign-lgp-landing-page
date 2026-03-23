import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "The Long Game Project exists because strategy deserves better than annual offsites and forgotten decks.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            About The Long Game Project
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            We exist because strategy deserves better than annual offsites and
            forgotten slide decks.
          </p>
        </div>
      </Section>

      <Section className="pb-16 md:pb-24">
        <div className="max-w-2xl space-y-6 text-ink/80 leading-relaxed">
          <p>
            The Long Game Project is a strategy practice. We help teams and
            leaders build the capability to think strategically under pressure,
            make better decisions, and actually follow through on the hard stuff.
          </p>
          <p>
            We started this because we kept seeing the same pattern: smart
            people, good intentions, expensive offsites - and nothing changes.
            The strategy deck goes in a drawer. The hard conversations get
            deferred. The same problems come back six months later wearing
            different clothes.
          </p>
        </div>
      </Section>

      <Section className="py-16 md:py-24 border-t border-rule/40">
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-8">
          Philosophy
        </p>
        <div className="max-w-2xl space-y-6">
          <p className="font-display text-2xl md:text-3xl font-semibold text-ink leading-snug">
            Strategy is a practice, not an event.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Athletes train. Musicians rehearse. Surgeons simulate. But
            executives are expected to make their most consequential decisions
            live, in real time, with real stakes - and somehow get it right
            the first time.
          </p>
          <p className="text-ink/80 leading-relaxed">
            We bring the rigour of deliberate practice to strategic
            decision-making. Through tabletop exercises, structured advisory,
            and practical tools, we help leaders and teams get reps on the
            decisions that matter most.
          </p>
        </div>
      </Section>

      <Section className="py-16 md:py-24 border-t border-rule/40">
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-8">
          Our approach
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <h3 className="font-display text-lg font-semibold mb-2">Provocation over comfort</h3>
            <p className="text-sm text-muted leading-relaxed">
              We ask the questions your team has been avoiding. Growth comes
              from discomfort, not from validating what you already believe.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-2">Practice over theory</h3>
            <p className="text-sm text-muted leading-relaxed">
              Knowing strategy frameworks is not the same as being good at
              strategy. We focus on doing, not just knowing.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-2">Decisions over decks</h3>
            <p className="text-sm text-muted leading-relaxed">
              The goal is not a beautiful document. The goal is a team that
              makes better decisions, faster, under pressure.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-2">Long game over quick wins</h3>
            <p className="text-sm text-muted leading-relaxed">
              We are not interested in short-term consulting engagements that
              look good on a report. We care about lasting capability change.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24 border-t border-rule/40">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
            Want to know more?
          </h2>
          <p className="text-muted mb-6">
            We are always happy to have a conversation about strategy, decisions,
            and why most offsites fail.
          </p>
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
    </>
  );
}
