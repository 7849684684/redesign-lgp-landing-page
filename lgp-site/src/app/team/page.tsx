import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Team",
  description: "The people behind The Long Game Project.",
};

export default function TeamPage() {
  return (
    <>
      <Section>
        <div className="pt-12 pb-12 md:pt-16 md:pb-16 max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Team
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            The people building the tools, running the cohorts, and challenging
            the thinking.
          </p>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="max-w-3xl">
          <div className="border border-surface-2 rounded-[var(--radius-md)] p-8 md:p-12">
            <h2 className="font-editorial text-2xl font-normal text-text-primary mb-2">
              Daniel Eppa
            </h2>
            <p className="label text-text-tertiary mb-4">Founder</p>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Daniel founded The Long Game Project after a decade of working
                with leadership teams and discovering that the problem was rarely
                the strategy - it was the strategic thinking capability of the
                people making the decisions.
              </p>
              <p>
                He has designed and facilitated 130+ strategic scenarios across
                industries from defence to consumer goods, working with
                organisations representing over $3.4B in combined market
                capitalisation.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
