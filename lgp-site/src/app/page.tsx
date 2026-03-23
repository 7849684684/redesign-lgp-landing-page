import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";

const services = [
  {
    title: "Exercise",
    description: "Tabletop exercises that let your team rehearse high-stakes decisions before they are real. Pressure-test strategy in a safe environment.",
    href: "/services#exercise",
    label: "Workshops",
  },
  {
    title: "Advisory",
    description: "Strategic advisory for founders and leadership teams. Not a slide deck - a thinking partner who challenges your assumptions.",
    href: "/services#advisory",
    label: "Consulting",
  },
  {
    title: "Tools & Products",
    description: "Frameworks, decision tools, and products you can take back to your team. Better decisions, daily.",
    href: "/products",
    label: "Resources",
  },
];

const stats = [
  { value: "134+", label: "Scenarios designed" },
  { value: "10+", label: "Years experience" },
  { value: "$3.4B", label: "Client marketcap" },
  { value: "74.9", label: "NPS score" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink leading-[1.1] tracking-tight">
            Another offsite.{" "}
            <br className="hidden md:block" />
            Another strategy.{" "}
            <br className="hidden md:block" />
            <span className="text-muted">Nothing changes.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            The Long Game Project is a strategy practice. We help teams and
            leaders get better at the decisions that matter most.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Book a discovery call</Button>
            <Button href="/services" variant="secondary">How we work</Button>
          </div>
        </div>
      </Section>

      {/* Problem / Solution */}
      <Section className="py-16 md:py-24 border-t border-rule/40">
        <div className="max-w-2xl">
          <p className="font-display text-2xl md:text-3xl font-semibold text-ink leading-snug">
            Strategy is a skill. It needs practice.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Most organisations treat strategy as an annual event - a two-day
            offsite that produces a deck and changes nothing. We believe
            strategic thinking is a capability that improves with deliberate
            practice, pressure-testing, and honest feedback.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-16 md:py-24 border-t border-rule/40">
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-8">
          What we do
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      {/* Social proof */}
      <section className="bg-ink text-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-cream">
                  {stat.value}
                </p>
                <p className="text-sm text-cream/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <blockquote className="max-w-2xl">
            <p className="font-display text-xl md:text-2xl font-light text-cream/80 italic leading-relaxed">
              &ldquo;This was the first time our leadership team actually
              stress-tested a strategy before committing resources. The
              exercise changed how we make decisions.&rdquo;
            </p>
            <cite className="block mt-4 text-sm text-cream/40 not-italic">
              Director, Management Consulting Firm
            </cite>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <Section className="py-16 md:py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            Let&apos;s talk about what&apos;s not working.
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            No pitch. Just a conversation about where your strategy process
            falls short and whether we can help.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Book a discovery call</Button>
            <Button href="mailto:hello@longgameproject.org" variant="secondary" external>
              hello@longgameproject.org
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
