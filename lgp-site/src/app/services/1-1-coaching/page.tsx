import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "1:1 Coaching",
  description:
    "A private advisory relationship with a partner who has been in the room for the decisions you are facing. Confidential, long-horizon, structured around the calls only you can make.",
};

export default function OneOnOneCoachingPage() {
  return (
    <ServicePageTemplate
      label="1:1 Coaching"
      title="The counsel you cannot source from inside the organisation."
      subtitle="A private advisory relationship with a partner who has been in the room for the decisions you are facing. Confidential, long-horizon, and structured around the calls only you can make."
      sections={[
        {
          title: "Confidential by default",
          body: "Board dynamics, succession, the deal you cannot discuss internally yet — the topics that cannot safely live on a Slack channel or a direct report's desk. Everything brought to the engagement stays in it. Nothing surfaces on a case study without written permission.",
        },
        {
          title: "Strategic, not therapeutic",
          body: "This is not executive coaching dressed in strategy clothes. We work on the consequential decisions on your calendar: how they are framed, what assumptions they rest on, what you will do if the base case is wrong. The outcome is sharper judgement, not processed emotion.",
        },
        {
          title: "A cadence that fits the role",
          body: "Most engagements run fortnightly for sixty to ninety minutes. Heavy weeks get more time; quiet ones get less. No padded retainers, no unused hours on a quarterly report — and no obligation to bring material to a session that does not need one.",
        },
        {
          title: "Partner-led throughout",
          body: "You work with a partner from the first call. No handoff to a junior, no rotating bench. The person who heard the first decision hears the tenth — which is the only way the advice accumulates the kind of context that makes it useful.",
        },
      ]}
      ctaHeading="Book a chemistry call."
      ctaBody="A thirty-minute conversation with a partner to see whether a long-horizon advisory relationship makes sense. If we are not the fit, we will often suggest someone who is."
      ctaLabel="Book a chemistry call"
      ctaVariant="teal"
      crossLink={{
        label: "Prefer a peer group?",
        product: "Masterminds",
        description:
          "Six-month cohorts of senior leaders who challenge each other's decisions monthly, under partner facilitation.",
        href: "/services/masterminds",
      }}
    />
  );
}
