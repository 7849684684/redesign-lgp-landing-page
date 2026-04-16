import Section from "@/components/Section";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import ClientLogoBar from "@/components/ClientLogoBar";

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
    href: "/insightrpg",
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
      <Section className="pt-24 pb-28 md:pt-36 md:pb-44">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-[3.8rem] font-light text-text-primary leading-[1.15] tracking-tight">
            Strategic thinking is a skill.
            <br />
            Don&apos;t outsource it.
            <br />
            <span className="text-brand-amber">Practice it.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            We design the exercises senior teams use to pressure-test their strategy under the conditions it will actually have to survive.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#services" variant="amber">
              See how we work
            </Button>
            <Button href="/contact" variant="outline">
              Talk to us
            </Button>
          </div>
        </div>
      </Section>

      {/* ── THE PROBLEM ── */}
      <Section className="py-14 md:py-18 border-t border-surface-2">
        <div className="max-w-2xl">
          <h2 className="font-editorial text-2xl md:text-3xl font-semibold text-text-primary leading-snug mb-6">
            Strategy doesn&apos;t fail in the boardroom. It fails in the moment.
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              When strategic thinking gets outsourced &mdash; to a consultant,
              a framework, a model &mdash; the capability inside the building
              atrophies. And strategy is demanded in the hardest moments, not
              the calmest ones. The sharpest decision-makers treat it as a
              skill: one that needs deliberate, repeated practice.
            </p>
            <p className="text-text-primary font-medium">
              We build the practice.
            </p>
          </div>
        </div>
      </Section>

      {/* ── WHO THIS IS FOR ── */}
      <Section className="py-10 md:py-14" surface={1}>
        <p className="font-editorial text-xl md:text-2xl text-text-primary leading-relaxed max-w-2xl">
          For founders, senior leaders, and teams making decisions whose
          consequences they will live with &mdash; who know the thinking
          matters as much as the plan.
        </p>
      </Section>

      <ClientLogoBar />

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-brand-teal text-white py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-14">
            <div>
              <p className="text-4xl md:text-5xl font-light tracking-tight tabular-nums">
                130+
              </p>
              <p className="text-sm mt-1 opacity-60">Bespoke scenarios designed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-light tracking-tight leading-tight">
                Defence, financial services, tech &amp; consumer goods
              </p>
              <p className="text-sm mt-2 opacity-60">Industries served</p>
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
      <Section id="services" className="py-24 md:py-32 border-t border-surface-2">
        <div className="mb-16">
          <p className="label text-text-tertiary mb-3">Services</p>
          <h2 className="font-editorial text-3xl md:text-4xl font-normal text-text-primary">
            Five ways to work with us directly.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="font-editorial text-2xl font-semibold text-text-primary mb-3">
              <a href="/services/workshops" className="hover:text-brand-teal transition-colors">
                Workshops
              </a>
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              A tabletop exercise puts your leadership team inside the
              decisions your strategy does not rehearse. One day,
              partner-facilitated, debriefed into board-ready commitments.
            </p>
            <p className="text-xs text-text-tertiary mb-4">
              Organisations with consequential decisions on the table
            </p>
            <a href="/services/workshops" className="text-sm font-medium text-brand-teal hover:underline">
              Read more &rarr;
            </a>
          </div>

          <div>
            <h3 className="font-editorial text-2xl font-semibold text-text-primary mb-3">
              <a href="/services/masterminds" className="hover:text-brand-teal transition-colors">
                Masterminds
              </a>
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              A curated group of six to eight senior leaders, meeting monthly
              to pressure-test the decisions they are actually facing. Not
              networking, not group coaching &mdash; structured peer challenge
              under partner facilitation.
            </p>
            <p className="text-xs text-text-tertiary mb-4">
              Senior leaders, founders, chief executives
            </p>
            <a href="/services/masterminds" className="text-sm font-medium text-brand-teal hover:underline">
              Read more &rarr;
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-2">
          <a
            href="/services"
            className="text-sm font-medium text-brand-teal hover:underline"
          >
            See all five services &rarr;
          </a>
          <p className="mt-1 text-xs text-text-tertiary">
            Workshops, Masterminds, 1:1 Coaching, Strategy Sprints, Speaking.
          </p>
        </div>
      </Section>

      {/* ── FOUNDER ── */}
      <Section className="py-16 md:py-20 border-t border-surface-2" surface={1}>
        <div className="max-w-2xl">
          <p className="label text-text-tertiary mb-3">Who&apos;s behind this</p>
          <p className="font-editorial text-xl md:text-2xl text-text-primary leading-relaxed mb-4">
            Dr Dan Epstein &mdash; physician, PhD in decision science, and
            tabletop game designer for more than a decade. He has designed
            130+ bespoke strategic scenarios across defence, financial
            services, technology, and consumer goods.
          </p>
          <a href="/team" className="text-sm font-medium text-brand-teal hover:underline">
            Meet the team &rarr;
          </a>
        </div>
      </Section>

      {/* ── PRODUCT ECOSYSTEM ── */}
      <Section
        id="ecosystem"
        className="py-24 md:py-32 border-t border-surface-2"
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
              Thirty minutes with a partner, no pitch. If we can help, we will
              say how. If we cannot, we will point you to someone who can.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-brand-amber text-white hover:bg-brand-amber-light transition-colors rounded-[var(--radius-sm)]"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
