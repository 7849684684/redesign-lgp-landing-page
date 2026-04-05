import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Publishing Integrity",
  description: "How The Long Game Project creates and publishes content, including our use of AI assistance.",
};

export default function PublishingIntegrityPage() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Publishing Integrity
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            How we create content, and why we tell you.
          </p>
        </div>
      </Section>

      <Section className="pb-16 md:pb-20">
        <div className="max-w-[640px] space-y-8 text-text-secondary leading-[1.8]">

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              How We Create Content
            </h2>
            <p>
              Our blog features two types of content, clearly distinguished by
              their author attribution.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-text-primary">
                &ldquo;Dr Daniel Epstein&rdquo; articles
              </p>
              <p>
                Written by the human trapped at the machine. These pieces reflect
                Daniel&apos;s direct experience, opinions and research. The ideas,
                arguments and writing are his.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text-primary">
                &ldquo;The Long Game Project&rdquo; articles
              </p>
              <p>
                Created by the human but with Artificial Intelligence trapped in
                the machine. Currently Anthropic&apos;s Claude, which we think to
                be the most aligned to our style and ethics. These pieces begin
                with a human idea or topic direction, are drafted with AI support,
                and go through full editorial review before publication.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              Our Editorial Process
            </h2>
            <p className="mb-4">
              Every piece we publish, regardless of how it originates, goes through
              the same pipeline:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <span className="font-medium text-text-primary">Editorial review</span>{" "}
                for argument quality, factual accuracy, and audience fit
              </li>
              <li>
                <span className="font-medium text-text-primary">Language and grammar check</span>{" "}
                to ensure consistency and clarity
              </li>
              <li>
                <span className="font-medium text-text-primary">Editing pass</span>{" "}
                to ensure prose meets our standards
              </li>
              <li>
                <span className="font-medium text-text-primary">Final editorial approval</span>{" "}
                by the human
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <p>
              <span className="font-medium text-text-primary">Fact-checking:</span>{" "}
              Claims are verified, sources are cited where appropriate,
              unverifiable claims are flagged.
            </p>
            <p>
              <span className="font-medium text-text-primary">Cross-linking:</span>{" "}
              Articles link to related content for context.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              Our Position on AI and Content
            </h2>
            <p className="mb-3">
              AI is a powerful drafting and research tool. It is not a substitute
              for editorial judgement.
            </p>
            <p className="mb-3">
              We badge AI-assisted content because transparency builds trust.
            </p>
            <p className="mb-3">
              We use AI to increase the breadth of our content library while
              maintaining quality through rigorous human review. It is a tool to
              help us publish on topics of interest that without AI, we
              wouldn&apos;t have the time to.
            </p>
          </div>

          <div className="border-t border-surface-2 pt-8">
            <p className="text-sm text-text-tertiary">
              Questions about our editorial process?{" "}
              <Link
                href="/contact"
                className="text-brand-teal underline hover:text-brand-teal-light transition-colors"
              >
                Get in touch
              </Link>
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
