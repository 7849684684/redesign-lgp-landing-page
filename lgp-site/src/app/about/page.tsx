import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CrossProductCTA from "@/components/CrossProductCTA";

export const metadata: Metadata = {
  title: "About",
  description: "The Long Game Project exists to build better strategic thinkers. Not better strategies - better thinkers.",
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
            The Long Game Project improves institutional decision-making,
            planning, and creative thinking through tabletop exercises and
            scenario simulation.
          </p>
        </div>
      </Section>

      {/* What are tabletop exercises */}
      <Section className="pb-16 md:pb-20">
        <div className="max-w-[640px] space-y-5 text-text-secondary leading-[1.8]">
          <p>
            Tabletop exercises are structured, collaborative simulations that
            test how your team thinks under pressure. Participants work through
            realistic scenarios - competitive threats, market shocks, crises -
            making decisions and solving problems based on their actual roles
            and responsibilities.
          </p>
          <p>
            The magic is in the environment: low-risk, non-operational, but
            demanding. No real consequences, but real cognitive load. Your team
            explores alternative strategies, argues about trade-offs, and
            confronts the gaps between their plan and their readiness - without
            the cost of learning these lessons live.
          </p>
          <p className="text-text-primary font-medium">
            Athletes train. Musicians rehearse. Surgeons simulate. Your
            leadership team should too.
          </p>
        </div>
      </Section>

      {/* Why */}
      <Section className="py-16 md:py-24 border-t border-surface-2" surface={1}>
        <p className="label text-text-tertiary mb-6">Why tabletop exercises</p>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl">
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
      </Section>

      {/* How we help */}
      <Section className="py-16 md:py-24 border-t border-surface-2">
        <div className="max-w-3xl">
          <p className="label text-text-tertiary mb-6">How we help</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
                Start small
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary leading-relaxed">
                <li>Free scenario games and prompts</li>
                <li>DIY guidebooks and facilitation SOPs</li>
                <li>Courses on exercise design fundamentals</li>
                <li>Review and feedback on what you already have</li>
              </ul>
            </div>
            <div>
              <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
                Go deep
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary leading-relaxed">
                <li>Custom scenario design for your industry and context</li>
                <li>Full facilitation and operations support</li>
                <li>Strategic advisory and executive coaching</li>
                <li>130+ scenarios designed across defence, tech, CPG, and more</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="py-16 md:py-24 border-t border-surface-2" surface={1}>
        <div className="max-w-3xl">
          <p className="label text-text-tertiary mb-6">The process</p>
          <div className="space-y-8">
            {[
              { step: "01", title: "Define", desc: "What is on the horizon that keeps you up at night? We start with the core concern." },
              { step: "02", title: "Design", desc: "We build a scenario that explores your specific problem set and strategic objectives." },
              { step: "03", title: "Play", desc: "Your team works through the simulation with expert facilitation. Real pressure, no real consequences." },
              { step: "04", title: "Reflect", desc: "Structured debrief. What worked, what broke, what changes Monday morning." },
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

      <Section className="py-20 md:py-28">
        <div className="max-w-xl mb-12">
          <h2 className="font-editorial text-3xl font-normal text-text-primary mb-4">
            Ready to stress-test your strategy?
          </h2>
          <p className="text-text-secondary mb-8">
            Start with a conversation about the decision you are facing. No
            pitch, no obligation - just an honest assessment of whether we
            can help.
          </p>
          <Button href="/contact" variant="teal">
            Get in touch
          </Button>
        </div>

        <CrossProductCTA
          label="Explore the ecosystem"
          product="Our tools"
          description="From free strategy games to AI simulations - find the right tool for where you are."
          href="/#ecosystem"
        />
      </Section>
    </>
  );
}
