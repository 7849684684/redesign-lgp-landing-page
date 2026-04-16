import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CrossProductCTA from "@/components/CrossProductCTA";

export const metadata: Metadata = {
  title: "Masterminds",
  description:
    "Curated six-month peer cohorts for senior leaders who want their most consequential decisions pressure-tested by people operating at their level. Structured, confidential, partner-facilitated.",
};

export default function MastermindsPage() {
  return (
    <>
      {/* Hero - amber accent dominant per brief */}
      <Section className="pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-3xl">
          <p className="label text-brand-amber mb-4">Peer cohorts</p>
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            The room where no one lets you off easy.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            A curated group of senior leaders who meet monthly to pressure-test
            real decisions. Not a network. Not group coaching. Structured peer
            challenge under the quiet discipline of a partner facilitator.
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section className="py-16 md:py-24 border-t border-surface-2">
        <div className="max-w-3xl">
          <p className="label text-text-tertiary mb-6">How it works</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-[3px] border-brand-amber pl-5">
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Small, curated rooms
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Six to eight senior leaders per cohort, curated for contrast
                of industry and function. No direct competitors in the same
                room. You meet people who can see your decisions clearly
                because they are not living inside them.
              </p>
            </div>
            <div className="border-l-[3px] border-brand-amber pl-5">
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                A senior cadence
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Ninety minutes a month, remote-first, scheduled around the
                senior calendar. Structured hot-seats, accountability
                check-ins, and a library of challenge prompts drawn from
                twenty years of strategic practice.
              </p>
            </div>
            <div className="border-l-[3px] border-brand-amber pl-5">
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Partner-facilitated
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Every session is facilitated by an LGP partner. The
                facilitator&apos;s job is to keep the conversation honest,
                catch the assumptions no one is naming, and make sure each
                hour produces commitments &mdash; not just insight.
              </p>
            </div>
            <div className="border-l-[3px] border-brand-amber pl-5">
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Decisions, not topics
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Members bring decisions they are actually facing &mdash; a
                board paper due Friday, a restructure under debate, an
                acquisition being costed. The group stress-tests the thinking
                and holds the member to what they said they would do.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section className="py-16 md:py-24 border-t border-surface-2">
        <div className="max-w-3xl">
          <p className="label text-text-tertiary mb-6">The details</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="font-editorial text-lg font-semibold text-text-primary mb-1">6&ndash;8 leaders</p>
              <p className="text-sm text-text-secondary">Per cohort</p>
            </div>
            <div>
              <p className="font-editorial text-lg font-semibold text-text-primary mb-1">Monthly</p>
              <p className="text-sm text-text-secondary">90-minute sessions</p>
            </div>
            <div>
              <p className="font-editorial text-lg font-semibold text-text-primary mb-1">Six months</p>
              <p className="text-sm text-text-secondary">Minimum commitment</p>
            </div>
            <div>
              <p className="font-editorial text-lg font-semibold text-text-primary mb-1">Remote-first</p>
              <p className="text-sm text-text-secondary">Timezone-aware scheduling</p>
            </div>
            <div>
              <p className="font-editorial text-lg font-semibold text-text-primary mb-1">By application</p>
              <p className="text-sm text-text-secondary">Curated for fit, not filled to quota</p>
            </div>
            <div>
              <p className="font-editorial text-lg font-semibold text-text-primary mb-1">Investment</p>
              <p className="text-sm text-text-secondary">Disclosed on brief</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Who it's for */}
      <Section className="py-16 md:py-24" surface={1}>
        <div className="max-w-3xl">
          <p className="label text-text-tertiary mb-6">Who it is for</p>
          <ul className="space-y-4 text-text-secondary leading-relaxed">
            <li className="flex gap-3">
              <span className="text-brand-amber shrink-0 text-lg">&bull;</span>
              Founders and chief executives whose strategic decisions no longer have peers inside the building.
            </li>
            <li className="flex gap-3">
              <span className="text-brand-amber shrink-0 text-lg">&bull;</span>
              Senior leaders who have outgrown mentorship and need thinking partners operating at their level.
            </li>
            <li className="flex gap-3">
              <span className="text-brand-amber shrink-0 text-lg">&bull;</span>
              Strategy and transformation leads rehearsing decisions in a lower-stakes room before the real ones arrive.
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-28 border-t border-surface-2">
        <div className="max-w-xl">
          <h2 className="font-editorial text-3xl font-normal text-text-primary mb-4">
            Applications are open.
          </h2>
          <p className="text-text-secondary mb-8">
            Cohorts are curated by hand. Tell us about your role, the decisions
            on your desk, and what you would want out of a room like this. We
            will come back within a week on fit.
          </p>
          <Button href="/contact" variant="amber">
            Apply for a cohort
          </Button>
        </div>
      </Section>

      {/* Cross-product CTA */}
      <Section className="pb-20">
        <CrossProductCTA
          label="Need something more bespoke?"
          product="Workshops"
          description="Full-service tabletop exercise design and facilitation for your leadership team."
          href="/services/workshops"
        />
      </Section>
    </>
  );
}
