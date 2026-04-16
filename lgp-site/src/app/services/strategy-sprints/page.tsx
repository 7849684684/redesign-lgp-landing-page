import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Strategy Sprints",
  description:
    "A fixed-scope two-week engagement on one consequential question. Partner-staffed, delivered as a decision memo your team can act on.",
};

export default function StrategySprintsPage() {
  return (
    <ServicePageTemplate
      label="Strategy Sprints"
      title="Two weeks on one consequential question."
      subtitle="A fixed-scope engagement for leadership teams that need a defensible answer — not a six-month consulting retainer and not another internal working group that stalls after the second meeting."
      sections={[
        {
          title: "The right question, narrowed",
          body: "Week zero is spent making sure we are answering the right question. Most sprints pivot at this stage, and that is the value. You leave the intake with a sharper articulation of the decision whether we go forward together or not.",
        },
        {
          title: "Built around the decision",
          body: "Every artefact serves the call you have to make: the research you need to trust the answer, the options laid out with their trade-offs named, and the reasoning you can use to defend whichever path you choose — in a board, on a press call, in front of your team.",
        },
        {
          title: "Fixed scope, fixed price",
          body: "You know the deliverables, the cost, and the date before we start. No scope creep, no proposals that drift, no invoices that surprise. The brief is one page; the output is a decision memo your team can act on from the day it lands.",
        },
        {
          title: "Partner-staffed throughout",
          body: "Every sprint is delivered by a partner. No junior researchers running your strategy, no handoffs between scoping and output. The person who sharpened the question writes the answer.",
        },
      ]}
      ctaHeading="What is the question?"
      ctaBody="Tell us in a paragraph. We will come back within 48 hours with a sharper version of it and an honest read on whether a sprint is the right shape — or a different engagement is."
      ctaLabel="Start the conversation"
      ctaVariant="teal"
      crossLink={{
        label: "Need to rehearse the answer?",
        product: "Workshops",
        description:
          "Tabletop exercises that pressure-test the strategy your sprint produces before it meets the market.",
        href: "/services/workshops",
      }}
    />
  );
}
