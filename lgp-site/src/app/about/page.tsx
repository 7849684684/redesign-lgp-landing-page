import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "The Long Game Project exists to build better strategic thinkers. Not better strategies - better thinkers.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="pt-12 pb-12 md:pt-16 md:pb-16 max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Building better thinkers.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            The Long Game Project exists because strategic thinking is a skill
            that improves with practice. Not better strategies - better thinkers.
          </p>
        </div>
      </Section>

      <Section className="py-16 md:py-24 border-t border-surface-2">
        <div className="max-w-2xl space-y-6 text-text-secondary leading-relaxed">
          <p>
            We started this because we kept seeing the same pattern: smart
            people, good intentions, expensive offsites - and nothing changes.
            The strategy deck goes in a drawer. The hard conversations get
            deferred. The same problems come back six months later wearing
            different clothes.
          </p>
          <p>
            The issue is not that these organisations lack good strategies. The
            issue is that their people lack the capability to think strategically
            under pressure, in real time, when it matters most.
          </p>
          <p>
            Athletes train. Musicians rehearse. Surgeons simulate. But executives
            are expected to make their most consequential decisions live, with
            real stakes, and somehow get it right the first time.
          </p>
          <p>
            We build the tools, environments, and communities that change this.
            From free games and courses to peer mastermind cohorts and bespoke
            consulting, every product in our ecosystem is designed to make
            strategic thinkers sharper.
          </p>
        </div>
      </Section>

      <Section className="py-16 md:py-24 border-t border-surface-2" surface={1}>
        <p className="label text-text-tertiary mb-6">What we believe</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
              Thinking is the product
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              We do not sell strategies. We build the capability to think
              strategically. The organisations that thrive are the ones that can
              out-think, not just out-plan.
            </p>
          </div>
          <div>
            <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
              Practice over theory
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Knowing frameworks is not the same as being good at strategy. We
              focus on doing, not just knowing. Reps, not readings.
            </p>
          </div>
          <div>
            <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
              Provocation over comfort
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Growth comes from discomfort, not from validating what you already
              believe. We ask the questions your team has been avoiding.
            </p>
          </div>
          <div>
            <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
              Tools, not dependencies
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Every product is designed to make you less dependent on us, not
              more. We succeed when you do not need us any more.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24 border-t border-surface-2">
        <div className="max-w-xl">
          <h2 className="font-editorial text-3xl font-normal text-text-primary mb-4">
            Want to know more?
          </h2>
          <p className="text-text-secondary mb-6">
            We are always happy to talk about strategy, decision-making, and
            why most offsites fail.
          </p>
          <Button href="/contact" variant="teal">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
