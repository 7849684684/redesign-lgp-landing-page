import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Tabletop exercises, strategic advisory, and coaching for teams and leaders who take decisions seriously.",
};

const offerings = [
  {
    id: "exercise",
    label: "Workshops",
    title: "Exercise",
    subtitle: "Rehearse decisions before they are real",
    description:
      "Tabletop exercises designed around your actual strategic challenges. Your team works through realistic scenarios - competitive threats, market shifts, resource constraints - in a facilitated, time-pressured environment. No role-play. No trust falls. Just sharp decision-making under realistic conditions.",
    outcomes: [
      "Pressure-tested strategies before committing resources",
      "Exposed blind spots and assumptions",
      "Stronger alignment on what matters",
      "A team that has actually practised making hard decisions together",
    ],
  },
  {
    id: "advisory",
    label: "Consulting",
    title: "Advisory",
    subtitle: "Strategy that survives first contact",
    description:
      "Ongoing strategic advisory for founders, CEOs, and leadership teams. Not a retainer that produces monthly decks. A thinking partner who challenges your assumptions, asks the uncomfortable questions, and helps you make better decisions under uncertainty.",
    outcomes: [
      "Clearer strategic priorities",
      "Better decision-making frameworks",
      "An external perspective that is honest, not political",
      "Accountability on execution",
    ],
  },
  {
    id: "coaching",
    label: "1:1",
    title: "Coaching",
    subtitle: "Build your strategic capability",
    description:
      "One-on-one coaching for senior leaders who want to sharpen their strategic thinking. We work on how you frame problems, evaluate options, manage uncertainty, and make decisions under pressure. Practical, not theoretical.",
    outcomes: [
      "Stronger strategic judgement",
      "Better pattern recognition",
      "More confidence in ambiguous situations",
      "A personal decision-making toolkit",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            How we work
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Three ways to build strategic capability. Each one designed to change
            how your team thinks and decides.
          </p>
        </div>
      </Section>

      {offerings.map((offering, i) => (
        <Section
          key={offering.id}
          id={offering.id}
          className={`py-16 md:py-24 ${i > 0 ? "border-t border-rule/40" : ""}`}
        >
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue mb-3 block">
              {offering.label}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-2">
              {offering.title}
            </h2>
            <p className="font-display text-lg text-muted italic mb-6">
              {offering.subtitle}
            </p>
            <p className="text-ink/80 leading-relaxed mb-8">
              {offering.description}
            </p>

            <div className="mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
                What you get
              </p>
              <ul className="space-y-2">
                {offering.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm text-ink/80">
                    <span className="text-blue mt-1 shrink-0">&bull;</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/contact">Enquire about {offering.title.toLowerCase()}</Button>
          </div>
        </Section>
      ))}

      <Section className="py-16 md:py-24 border-t border-rule/40">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
            Not sure which is right?
          </h2>
          <p className="text-muted mb-6">
            Most engagements start with a conversation. Tell us what you are
            working on and we will suggest an approach.
          </p>
          <Button href="/contact">Book a discovery call</Button>
        </div>
      </Section>
    </>
  );
}
