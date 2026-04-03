import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "The Long Game Project exists to build better strategic thinkers — not better slide decks.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Play it now before you live it later.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            The Long Game Project exists because strategic thinking gets better
            through practice — not theory, not templates, not someone else doing
            it for you.
          </p>
        </div>
      </Section>

      {/* The philosophy */}
      <Section className="pb-16 md:pb-20">
        <div className="max-w-[640px] space-y-5 text-text-secondary leading-[1.8]">
          <p>
            Most organisations treat strategy as a deliverable — something you
            produce once a year and file away. We think that&apos;s backwards.
            Strategy is a living capability. It&apos;s the quality of thinking
            your team brings to the hardest moments, not the document they
            wrote in the calmest ones.
          </p>
          <p>
            &ldquo;The long game&rdquo; is the bet that building your
            team&apos;s strategic capability matters more than any single
            strategy. That the organisations who invest in how they think — not
            just what they decide — are the ones that compound advantage over
            time.
          </p>
          <p className="text-text-primary font-medium">
            Athletes train. Musicians rehearse. Surgeons simulate. Your
            leadership team should too.
          </p>
        </div>
      </Section>

      {/* How: tabletop exercises */}
      <Section className="py-16 md:py-24 border-t border-surface-2" surface={1}>
        <div className="max-w-3xl">
          <p className="label text-text-tertiary mb-3">Our method</p>
          <h2 className="font-editorial text-2xl md:text-3xl font-normal text-text-primary mb-3">
            Tabletop exercises and scenario simulation
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-xl mb-10">
            Structured, collaborative simulations that test how your team thinks
            under pressure. Participants work through realistic scenarios —
            competitive threats, market shocks, crises — making decisions based
            on their actual roles and responsibilities.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
                Better decisions, faster
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Practising critical decisions in simulation means your team
                arrives at the real moment sharper, more aligned, and less likely
                to freeze or default to politics.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
                Surface the gaps
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Realistic scenarios reveal weaknesses in your plans, processes,
                and team coordination that no amount of slide review will find.
                Better to discover them here than in a crisis.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
                Build the muscle
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Strategic thinking is a skill that improves with reps, not
                readings. Exercises develop practical capability in crisis
                management, creative problem-solving, and critical thinking.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
                Align the team
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Shared pressure creates shared understanding. Exercises foster
                the kind of coordination and trust that only emerges when people
                have to make hard calls together.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="font-editorial text-3xl font-normal text-text-primary mb-4">
            Ready to stress-test your strategy?
          </h2>
          <p className="text-text-secondary mb-8">
            Start with a conversation about the decision you are facing. No
            pitch, no obligation — just an honest assessment of whether we
            can help.
          </p>
          <Button href="/contact" variant="teal">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
