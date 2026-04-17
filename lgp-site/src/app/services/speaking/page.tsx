import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Keynotes, working sessions, and panels on strategy under uncertainty, decision-making at the top, and the failure modes of conventional planning.",
};

export default function SpeakingPage() {
  return (
    <ServicePageTemplate
      label="Speaking"
      title="Talks that leave the room thinking, not clapping."
      subtitle="Keynotes, working sessions, and panels on strategy under uncertainty, decision-making at the top, and the failure modes of conventional planning. Built around your audience and the question the event is really asking — not a deck we give everyone."
      sections={[
        {
          title: "Keynotes",
          body: "Thirty to sixty minutes, opening or closing. Built around your event's theme, your audience's role, and the specific provocation worth leaving them with. Rehearsed with your programme team, not read off a shared deck.",
        },
        {
          title: "Working sessions",
          body: "Ninety minutes to three hours that turn an audience into participants. Best for leadership offsites, executive education, and conferences that want the room to leave with conclusions — not just content.",
        },
        {
          title: "Panels and moderation",
          body: "We will chair, provoke, or keep a panel honest — whichever the topic needs. Useful when the subject deserves better than a soft chair and pre-circulated questions.",
        },
        {
          title: "Topics we speak on often",
          body: "Strategy under radical uncertainty. Scenario thinking and war-gaming. Decision-making at the board level. The failure modes of strategic planning. The role of AI in the strategy function.",
        },
      ]}
      ctaHeading="Tell us about the event."
      ctaBody="Audience, theme, date, format. We will come back within 48 hours with whether we are a fit, the angle we would take, and who from the team would be right for the room."
      ctaLabel="Enquire about a talk"
      ctaVariant="teal"
      crossLink={{
        label: "Want it deeper than a keynote?",
        product: "Workshops",
        description:
          "Tabletop exercises that turn an audience into a working leadership team for a day.",
        href: "/services/workshops",
      }}
    />
  );
}
