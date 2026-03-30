import Section from "@/components/Section";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Shortlist",
    tagline: "Strategy games that teach while you play.",
    audience: "Teams, facilitators, educators",
    href: "https://shortlist.games",
    accentColor: "#4A7C59",
    tier: "Free",
  },
  {
    name: "InsightRPG",
    tagline: "Role-play your way to better decisions.",
    audience: "Teams running tabletop strategy exercises",
    href: "https://insightrpg.org",
    accentColor: "#B45309",
    tier: "Free",
  },
  {
    name: "Courses",
    tagline: "Self-paced strategic thinking fundamentals.",
    audience: "Individual learners, emerging leaders",
    href: "https://courses.longgameproject.org",
    accentColor: "#1A3A3A",
    tier: "Free",
  },
  {
    name: "PRISM",
    tagline: "Reframe problems from every angle.",
    audience: "Facilitators, coaches, consultants",
    href: "https://prism.cards",
    accentColor: "#A0522D",
    tier: "Purchase",
  },
  {
    name: "Strategy Soup",
    tagline: "Interrogate your strategy. Argue with it.",
    audience: "Founders, strategy leads, leadership teams",
    href: "https://strategysoup.com",
    accentColor: "#3D4F5F",
    tier: "SaaS",
  },
  {
    name: "Masterminds",
    tagline: "Peer cohorts for strategic leaders.",
    audience: "Senior leaders, founders, CEOs",
    href: "/mastermind",
    accentColor: "#B8860B",
    tier: "Subscription",
  },
];

const stats = [
  { value: "130+", label: "Scenarios designed" },
  { value: "$3.4B", label: "Client market cap" },
  { value: "74.9", label: "NPS score" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <Section className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-[3.8rem] font-light text-text-primary leading-[1.15] tracking-tight">
            Strategic thinking is a skill.
            <br />
            Don&apos;t outsource it.{" "}
            <span className="text-brand-amber">Practice it.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            We build the environments where better decision makers live.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#ecosystem" variant="amber">
              Explore our tools
            </Button>
            <Button href="/contact" variant="outline">
              Talk to us
            </Button>
          </div>
        </div>
      </Section>

      {/* ── THE PROBLEM ── */}
      <Section className="py-16 md:py-24 border-t border-surface-2">
        <div className="max-w-2xl">
          <p className="label text-text-tertiary mb-6">The problem</p>
          <p className="font-editorial text-2xl md:text-3xl font-semibold text-text-primary leading-snug mb-6">
            Strategic thinking is atrophying.
          </p>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Organisations spend millions on strategy consultants, then wonder
              why nothing changes. The answer is uncomfortable: you cannot
              outsource thinking. When someone else does your strategic work,
              your own capability withers.
            </p>
            <p>
              AI is accelerating this. Every shortcut that removes the need to
              think deeply is another rep you did not take. The organisations
              that will thrive are the ones that treat strategic thinking as a
              muscle - one that needs deliberate, repeated exercise.
            </p>
            <p>
              That is what The Long Game Project builds: the tools, environments,
              and communities where strategic thinkers get sharper.
            </p>
          </div>
        </div>
      </Section>

      {/* ── PRODUCT ECOSYSTEM ── */}
      <Section
        id="ecosystem"
        className="py-16 md:py-24 border-t border-surface-2"
        surface={1}
      >
        <div className="mb-10">
          <p className="label text-text-tertiary mb-3">The ecosystem</p>
          <h2 className="font-editorial text-3xl md:text-4xl font-normal text-text-primary mb-3">
            Start anywhere. Go as deep as you need.
          </h2>
          <p className="text-text-secondary max-w-xl">
            Free tools to get started. Products to go deeper. Services for the
            highest stakes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </Section>

      {/* ── SOCIAL PROOF ── */}
      <Section className="py-16 md:py-24 border-t border-surface-2">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-light tracking-tight text-brand-teal tabular-nums">
                {stat.value}
              </p>
              <p className="text-sm text-text-tertiary mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <blockquote className="max-w-2xl border-l-3 border-brand-amber pl-6">
          <p className="font-editorial text-xl md:text-2xl font-light italic text-text-secondary leading-relaxed">
            &ldquo;This was the first time our leadership team actually
            stress-tested a strategy before committing resources. The exercise
            changed how we make decisions.&rdquo;
          </p>
          <cite className="block mt-4 text-sm text-text-tertiary not-italic">
            Director, Management Consulting Firm
          </cite>
        </blockquote>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section className="py-16 md:py-24 border-t border-surface-2" surface={1}>
        <p className="label text-text-tertiary mb-3">How it works</p>
        <h2 className="font-editorial text-3xl md:text-4xl font-normal text-text-primary mb-10">
          A ladder, not a funnel.
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Explore",
              desc: "Try free tools like Shortlist, InsightRPG, and our courses. No commitment.",
            },
            {
              step: "02",
              title: "Equip",
              desc: "Get PRISM cards and Strategy Soup to bring strategic practice into your daily work.",
            },
            {
              step: "03",
              title: "Connect",
              desc: "Join a Mastermind cohort of peers who challenge and sharpen your thinking.",
            },
            {
              step: "04",
              title: "Partner",
              desc: "Engage our consulting team for bespoke strategy work at the highest stakes.",
            },
          ].map((item) => (
            <div key={item.step}>
              <p className="text-3xl font-light text-brand-amber tabular-nums mb-2">
                {item.step}
              </p>
              <h3 className="font-editorial text-lg font-semibold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CONSULTING PREVIEW ── */}
      <Section className="py-16 md:py-24 border-t border-surface-2">
        <div className="max-w-2xl">
          <p className="label text-text-tertiary mb-3">Bespoke</p>
          <h2 className="font-editorial text-3xl md:text-4xl font-normal text-text-primary mb-4">
            When the stakes are highest.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            For organisations facing consequential strategic decisions, our
            consulting practice brings tabletop exercises, structured advisory,
            and honest challenge to the table. Not a slide deck factory - a
            thinking partner.
          </p>
          <Button href="/consulting" variant="teal">
            Learn about consulting
          </Button>
        </div>
      </Section>
    </>
  );
}
