import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "1:1 Coaching",
  description:
    "A sparring partner for the decisions you can't talk about internally. Private, ongoing strategic coaching for senior leaders.",
};

export default function OneOnOneCoachingPage() {
  return (
    <ServicePageTemplate
      label="1:1 Coaching"
      title="A sparring partner for the call you can't talk about at home or at work."
      subtitle="Private, ongoing coaching for founders and senior leaders. We help you frame the question, pressure-test the options, and own the decision."
      sections={[
        {
          title: "Confidential by default",
          body: "Everything you bring to the room stays there. Board dynamics, succession, the deal you can't pitch internally yet — the topics you can't put in a slack channel.",
        },
        {
          title: "Strategic, not therapeutic",
          body: "We're not here to manage your feelings. We're here to sharpen your thinking on consequential decisions and hold you to the commitments you make.",
        },
        {
          title: "Cadence that fits",
          body: "Most clients meet fortnightly for 60–90 minutes. Heavy weeks get more time; quiet ones get less. No padded retainers.",
        },
        {
          title: "Senior partner only",
          body: "You work with a partner from the start. No handoff to a junior coach, no rotating bench.",
        },
      ]}
      ctaHeading="Book a chemistry call."
      ctaBody="30 minutes to see if we're the right fit. If we're not, we'll say so — and often suggest someone who is."
      ctaLabel="Book a chemistry call"
      ctaVariant="teal"
      crossLink={{
        label: "Prefer a peer group?",
        product: "Masterminds",
        description:
          "Six-month cohorts of senior leaders who challenge each other monthly.",
        href: "/services/masterminds",
      }}
      inDevelopment
    />
  );
}
