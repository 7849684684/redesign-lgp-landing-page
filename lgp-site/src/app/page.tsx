import Section from "@/components/Section";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

const freeProducts = [
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
];

const paidProducts = [
  {
    name: "PRISM",
    tagline: "Better questions in your hands.",
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
      <Section className="pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-[3.8rem] font-light text-text-primary leading-[1.15] tracking-tight">
            Strategic thinking is a skill.
            <br className="hidden md:block" />
            Don&apos;t outsource it.{" "}
            <span className="text-brand-amber">Practice it.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            We build the environments where better decision makers live.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
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
      <Section className="py-16 md:py-20 border-t border-surface-2">
        <div className="max-w-2xl">
          <h2 className="font-editorial text-2xl md:text-3xl font-semibold text-text-primary leading-snug mb-6">
            Strategic thinking is atrophying.
          </h2>
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
            <p className="text-text-primary font-medium">
              That is what The Long Game Project builds.
            </p>
          </div>
        </div>
      </Section>

      {/* ── PRODUCT ECOSYSTEM ── */}
      <Section
        id="ecosystem"
        className="py-20 md:py-32"
        surface={1}
      >
        <div className="mb-12">
          <p className="label text-text-tertiary mb-3">The ecosystem</p>
          <h2 className="font-editorial text-3xl md:text-4xl font-normal text-text-primary mb-3">
            Start anywhere. Go as deep as you need.
          </h2>
          <p className="text-text-secondary max-w-xl">
            Free tools to get started. Products to go deeper. Services for the
            highest stakes.
          </p>
        </div>

        {/* Free tier - compact, no card borders */}
        <div className="mb-12">
          <p className="label text-text-tertiary mb-4">Start free</p>
          <div className="grid md:grid-cols-3 gap-6 border-t border-surface-2 pt-6">
            {freeProducts.map((product) => (
              <ProductCard key={product.name} {...product} size="compact" />
            ))}
          </div>
        </div>

        {/* Paid tier - featured cards with borders */}
        <div className="mb-12">
          <p className="label text-text-tertiary mb-4">Go deeper</p>
          <div className="grid md:grid-cols-2 gap-4">
            {paidProducts.map((product) => (
              <ProductCard key={product.name} {...product} size="featured" />
            ))}
          </div>
        </div>

        {/* Services tier - distinct treatment, no cards */}
        <div>
          <p className="label text-text-tertiary mb-4">Work with us</p>
          <div className="grid md:grid-cols-2 gap-6 border-t border-surface-2 pt-6">
            <div className="border-l-[3px] border-brand-amber pl-6">
              <h3 className="font-editorial text-xl text-text-primary mb-1">
                <a href="/mastermind" className="hover:text-brand-teal transition-colors">
                  Masterminds
                </a>
              </h3>
              <p className="font-editorial text-sm italic font-light text-text-secondary mb-2">
                Peer cohorts for strategic leaders.
              </p>
              <p className="text-xs text-text-tertiary mb-3">Senior leaders, founders, CEOs</p>
              <a href="/mastermind" className="text-sm font-medium text-brand-teal hover:underline">
                Learn more &rarr;
              </a>
            </div>
            <div className="border-l-[3px] border-brand-teal pl-6">
              <h3 className="font-editorial text-xl text-text-primary mb-1">
                <a href="/consulting" className="hover:text-brand-teal transition-colors">
                  Consulting
                </a>
              </h3>
              <p className="font-editorial text-sm italic font-light text-text-secondary mb-2">
                Real pressure. Expert facilitation. Your team, tested.
              </p>
              <p className="text-xs text-text-tertiary mb-3">Organisations with budget and strategic ambition</p>
              <a href="/consulting" className="text-sm font-medium text-brand-teal hover:underline">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SOCIAL PROOF - teal band ── */}
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-light tracking-tight tabular-nums">
                  {stat.value}
                </p>
                <p className="text-sm mt-1 opacity-60">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <blockquote className="max-w-2xl border-l-[3px] border-brand-amber pl-6">
              <p className="font-editorial text-xl md:text-2xl font-light italic leading-relaxed opacity-85">
                &ldquo;The simulation helped our organisation plan for future
                risks and decide the most important metrics to track. The
                value for time is off the charts.&rdquo;
              </p>
              <cite className="block mt-4 text-sm not-italic opacity-50">
                Director, Consulting Firm
              </cite>
            </blockquote>

            <blockquote className="max-w-2xl border-l-[3px] border-brand-amber pl-6">
              <p className="font-editorial text-xl md:text-2xl font-light italic leading-relaxed opacity-85">
                &ldquo;We left behind our day-to-day and immersed in an
                eye-opening exercise. It changed the way we think about our
                business and how we run workshops.&rdquo;
              </p>
              <cite className="block mt-4 text-sm not-italic opacity-50">
                Team Lead, Global CPG
              </cite>
            </blockquote>

            <blockquote className="max-w-2xl border-l-[3px] border-brand-amber pl-6">
              <p className="font-editorial text-xl md:text-2xl font-light italic leading-relaxed opacity-85">
                &ldquo;I was impressed by the nuance captured in the game
                design. An engaging, bespoke exercise tailored to our needs,
                from a customer- and impact-oriented team.&rdquo;
              </p>
              <cite className="block mt-4 text-sm not-italic opacity-50">
                COO, Research
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <Section className="py-16 md:py-24">
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
      <Section className="py-20 md:py-28 border-t border-surface-2">
        <div className="max-w-2xl">
          <p className="label text-text-tertiary mb-3">Bespoke</p>
          <h2 className="font-editorial text-3xl md:text-4xl font-normal text-text-primary mb-4">
            When the stakes are highest.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
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
