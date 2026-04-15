import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Talks that leave people thinking, not clapping. Keynotes and conference sessions on strategy, decision-making, and the long game.",
};

export default function SpeakingPage() {
  return (
    <ServicePageTemplate
      label="Speaking"
      title="Talks that leave people thinking, not clapping."
      subtitle="Keynotes, conference sessions, and leadership offsites on strategy, decision-making under uncertainty, and why most planning is theatre."
      sections={[
        {
          title: "Keynotes",
          body: "30–60 minute talks built around your audience and your event's central question — not a deck we give everyone.",
        },
        {
          title: "Workshop sessions",
          body: "Working sessions that turn an audience into participants. Best for leadership offsites and executive education.",
        },
        {
          title: "Panels & moderation",
          body: "We can chair, provoke, or just keep a panel honest. Useful when the topic deserves better than a soft chair.",
        },
        {
          title: "Topics we know well",
          body: "Strategy under uncertainty, scenario thinking, decision-making at the top, why most strategic planning fails, AI and the strategy function.",
        },
      ]}
      ctaHeading="Tell us about the event."
      ctaBody="Audience, theme, date, format. We'll come back within 48 hours with whether we're a fit and a couple of angles we'd take."
      ctaLabel="Enquire about a talk"
      ctaVariant="teal"
      crossLink={{
        label: "Want it deeper than a keynote?",
        product: "Workshops",
        description:
          "Tabletop exercises that turn an audience into a working leadership team for a day.",
        href: "/services/workshops",
      }}
      inDevelopment
    />
  );
}
