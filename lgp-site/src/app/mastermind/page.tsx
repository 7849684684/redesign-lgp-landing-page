import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CrossProductCTA from "@/components/CrossProductCTA";

export const metadata: Metadata = {
  title: "Masterminds",
  description: "Peer cohorts for senior leaders who want to sharpen their strategic thinking alongside people who challenge them.",
};

export default function MastermindPage() {
  return (
    <>
      {/* Hero - amber accent dominant per brief */}
      <Section className="pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-3xl">
          <p className="label text-brand-amber mb-4">Peer cohorts</p>
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Masterminds
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            Small cohorts of senior leaders who meet regularly to sharpen their
            strategic thinking. Not networking. Not group coaching. Structured
            peer challenge with real stakes.
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
                Small groups
              </h3>
              <p className="text-text-secondary leading-relaxed">
                6-8 senior leaders per cohort. Curated for diversity of industry
                and perspective. No competitors in the same group.
              </p>
            </div>
            <div className="border-l-[3px] border-brand-amber pl-5">
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Regular cadence
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Monthly sessions with structured exercises, hot-seat challenges,
                and accountability check-ins. Remote-first, timezone-aware.
              </p>
            </div>
            <div className="border-l-[3px] border-brand-amber pl-5">
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Facilitated challenge
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Every session is facilitated by an LGP strategist who keeps the
                conversation honest, productive, and moving forward.
              </p>
            </div>
            <div className="border-l-[3px] border-brand-amber pl-5">
              <h3 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                Real decisions
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Members bring actual strategic decisions they are facing. The
                group pressure-tests, challenges, and sharpens the thinking.
              </p>
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
              Founders and CEOs who make strategic decisions without peers to challenge them
            </li>
            <li className="flex gap-3">
              <span className="text-brand-amber shrink-0 text-lg">&bull;</span>
              Senior leaders who have outgrown mentorship and need peer-level thinking partners
            </li>
            <li className="flex gap-3">
              <span className="text-brand-amber shrink-0 text-lg">&bull;</span>
              Strategy leads who want to practice decision-making in a safe environment before real stakes
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
            Cohorts are curated. Tell us about yourself and we will let you
            know if there is a good fit.
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
          product="Consulting"
          description="Full-service tabletop exercise design and facilitation for your leadership team."
          href="/consulting"
        />
      </Section>
    </>
  );
}
