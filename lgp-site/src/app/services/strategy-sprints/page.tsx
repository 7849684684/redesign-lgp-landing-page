import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Strategy Sprints",
  description:
    "Two weeks. One sharp question. A defensible answer. Fixed-scope strategy sprints for teams that need movement, not a slide deck.",
};

export default function StrategySprintsPage() {
  return (
    <ServicePageTemplate
      label="Strategy Sprints"
      title="Two weeks. One sharp question. A defensible answer."
      subtitle="When you need movement on a real strategic question — not a six-month consulting engagement and not another internal off-site that goes nowhere."
      sections={[
        {
          title: "One question, narrowed",
          body: "Week zero is spent making sure we're answering the right question. Most engagements pivot here, and that's the point.",
        },
        {
          title: "Built around the decision",
          body: "Every artefact serves the call you have to make: research, options, the trade-offs, and the reasoning to defend whichever path you choose.",
        },
        {
          title: "Fixed scope, fixed price",
          body: "You know the cost, the deliverables, and the date before we start. No retainer creep, no proposals that drift.",
        },
        {
          title: "Senior team only",
          body: "Every sprint is staffed by partners. Junior researchers do not run your strategy.",
        },
      ]}
      ctaHeading="What's the question?"
      ctaBody="Tell us in a paragraph. We'll come back within 48 hours with a sharper version of it and an honest read on whether a sprint is the right shape."
      ctaLabel="Start the conversation"
      ctaVariant="teal"
      crossLink={{
        label: "Need to rehearse the answer?",
        product: "Workshops",
        description:
          "Tabletop exercises that pressure-test the strategy your sprint produces.",
        href: "/services/workshops",
      }}
      inDevelopment
    />
  );
}
