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

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <Section className="pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-[3.8rem] font-light text-text-primary leading-[1.15] tracking-tight">
            The best strategies come from the best thinkers.
            <br className="hidden md:block" />{" "}
            <span className="text-brand-amber">We build both.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            We built the gym for strategic thinking. Your team now does the reps.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#services" variant="amber">
              What we do
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
            Strategy doesn&apos;t fail in the boardroom. It fails in the moment.
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              When you outsource strategic thinking — to a consultant, a
              framework, an AI — your own capability weakens. But strategy is
              demanded in the hardest moments, not the calmest ones. The best
              decision-makers treat it as a skill. One that needs deliberate,
              repeated practice.
            </p>
            <p className="text-text-primary font-medium">
              We build the practice.
            </p>
          </div>
        </div>
      </Section>

      {/* ── WHO THIS IS FOR ── */}
      <Section className="py-12 md:py-16" surface={1}>
        <p className="font-editorial text-xl md:text-2xl text-text-primary leading-relaxed max-w-2xl">
          For founders, senior leaders, and teams making high-stakes strategic
          decisions — who know that the thinking matters as much as the plan.
        </p>
      </Section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="text-4xl md:text-5xl font-light tracking-tight tabular-nums">
                130+
              </p>
              <p className="text-sm mt-1 opacity-60">Scenarios designed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light tracking-tight">
                Defence, tech, CPG &amp; finance
              </p>
              <p className="text-sm mt-1 opacity-60">Industries served</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light tracking-tight tabular-nums">
                94%
              </p>
              <p className="text-sm mt-1 opacity-60">Would recommend to a peer</p>
            </div>
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
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <Section id="services" className="py-20 md:py-28">
        <div className="mb-16">
          <p className="label text-text-tertiary mb-3">Services</p>
          <h2 className="font-editorial text-3xl md:text-4xl font-normal text-text-primary">
            Two ways to work with us directly.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="font-editorial text-2xl font-semibold text-text-primary mb-3">
              <a href="/consulting" className="hover:text-brand-teal transition-colors">
                Consulting
              </a>
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Tabletop exercises, structured advisory, and honest challenge for
              organisations facing consequential strategic decisions. Your team
              works through realistic scenarios under pressure with expert
              facilitation.
            </p>
            <p className="text-xs text-text-tertiary mb-4">
              Organisations with strategic ambition and budget to match
            </p>
            <a href="/consulting" className="text-sm font-medium text-brand-teal hover:underline">
              Learn about consulting &rarr;
            </a>
          </div>

          <div>
            <h3 className="font-editorial text-2xl font-semibold text-text-primary mb-3">
              <a href="/mastermind" className="hover:text-brand-teal transition-colors">
                Masterminds
              </a>
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Small cohorts of senior leaders who meet monthly to sharpen their
              strategic thinking. Not networking. Not group coaching. Structured
              peer challenge with real stakes.
            </p>
            <p className="text-xs text-text-tertiary mb-4">
              Senior leaders, founders, CEOs
            </p>
            <a href="/mastermind" className="text-sm font-medium text-brand-teal hover:underline">
              Learn about masterminds &rarr;
            </a>
          </div>
        </div>
      </Section>

      {/* ── FOUNDER ── */}
      <Section className="py-16 md:py-20 border-t border-surface-2" surface={1}>
        <div className="max-w-2xl">
          <p className="label text-text-tertiary mb-3">Who&apos;s behind this</p>
          <p className="font-editorial text-xl md:text-2xl text-text-primary leading-relaxed mb-4">
            Dr Dan Epstein — medical doctor, PhD in decision science, tabletop
            game designer for over a decade. He&apos;s designed 130+ strategic
            scenarios across defence, consumer goods, tech, and financial services.
          </p>
          <a href="/team" className="text-sm font-medium text-brand-teal hover:underline">
            Meet the team &rarr;
          </a>
        </div>
      </Section>

      {/* ── PRODUCT ECOSYSTEM ── */}
      <Section
        id="ecosystem"
        className="py-20 md:py-28"
      >
        <div className="mb-12">
          <p className="label text-text-tertiary mb-3">The ecosystem</p>
          <h2 className="font-editorial text-3xl md:text-4xl font-normal text-text-primary mb-3">
            Start anywhere. Go as deep as you need.
          </h2>
        </div>

        {/* Free tier */}
        <div className="mb-12">
          <p className="label text-text-tertiary mb-4">Start free</p>
          <div className="grid md:grid-cols-3 gap-6 border-t border-surface-2 pt-6">
            {freeProducts.map((product) => (
              <ProductCard key={product.name} {...product} size="compact" />
            ))}
          </div>
        </div>

        {/* Paid tier */}
        <div>
          <p className="label text-text-tertiary mb-4">Go deeper</p>
          <div className="grid md:grid-cols-2 gap-4">
            {paidProducts.map((product) => (
              <ProductCard key={product.name} {...product} size="featured" />
            ))}
          </div>
        </div>
      </Section>

      {/* ── CLOSING CTA ── */}
      <section className="bg-brand-teal text-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-xl">
            <h2 className="font-editorial text-3xl md:text-4xl font-normal leading-tight mb-4">
              Tell us the decision you&apos;re facing.
            </h2>
            <p className="text-lg opacity-70 leading-relaxed mb-8">
              No pitch. Just a conversation about whether we can help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-brand-amber text-white hover:bg-brand-amber-light transition-colors rounded-[var(--radius-sm)]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
