import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import StickyNote from "@/components/StickyNote";
import TextHighlight from "@/components/TextHighlight";
import TornEdge from "@/components/TornEdge";
import HandwrittenNote from "@/components/HandwrittenNote";
import NotebookPaper from "@/components/NotebookPaper";
import SystemsMap from "@/components/SystemsMap";
import { CrayonScribble, SketchCircle, SketchUnderline } from "@/components/sketch";
import { SWIRLY_ARROW_DOWN } from "@/lib/sketch-paths";

const stats = [
  { value: "134+", label: "Scenarios designed" },
  { value: "10+", label: "Years experience" },
  { value: "$3.4B", label: "Client marketcap" },
  { value: "74.9", label: "NPS score" },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-visible">
        {/* Crayon scribbles - top decoration */}
        <div className="hidden md:block absolute top-8 right-0 w-80 h-16 opacity-50">
          <CrayonScribble />
        </div>

        {/* Sticky notes - floating */}
        <div className="hidden lg:block absolute top-36 right-8 z-10">
          <StickyNote rotation={-3}>Systems Thinking</StickyNote>
        </div>
        <div className="hidden lg:block absolute top-64 right-24 z-10">
          <StickyNote color="pink" rotation={2}>Future Vision</StickyNote>
        </div>

        <div className="max-w-3xl relative">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink leading-[1.05] tracking-tighter">
            THE LONG GAME
            <br />
            <span className="text-ink-blue">PROJECT</span>
          </h1>
          <div className="mt-2 flex items-center gap-3 text-sm font-mono uppercase tracking-[0.15em] text-muted">
            <span>Strategy Consulting</span>
            <span className="text-rule">|</span>
            <span>Creative Studio</span>
          </div>

          <div className="mt-10 md:mt-14 space-y-3">
            <p className="font-display text-2xl md:text-3xl font-semibold text-ink leading-snug">
              Don&apos;t just <TextHighlight color="pink">survive</TextHighlight>,
              <br className="hidden md:block" />
              <TextHighlight color="yellow">thrive</TextHighlight> through clarity.
            </p>
            <p className="font-display text-xl md:text-2xl text-muted leading-snug mt-4">
              Craft <TextHighlight color="yellow">vision</TextHighlight>, execute with precision.
            </p>
          </div>

          {/* Swirly arrow decoration */}
          <div className="hidden md:block absolute -right-16 top-48 w-24 h-72 opacity-60">
            <svg viewBox="0 0 200 300" className="w-full h-full" aria-hidden="true">
              <path
                d={SWIRLY_ARROW_DOWN}
                fill="none"
                stroke="var(--color-ink-blue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Section>

      {/* ===== HERO PHOTO COLLAGE ===== */}
      <Section className="relative pb-16 md:pb-24 overflow-visible">
        <div className="relative max-w-4xl mx-auto">
          {/* Main photo with torn edge and annotations */}
          <div className="relative" style={{ transform: "rotate(-1deg)" }}>
            <TornEdge>
              <Image
                src="/images/team-whiteboard.jpg"
                alt="Strategy team collaborating around a whiteboard"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </TornEdge>
            {/* Hand-drawn circle annotation on photo */}
            <div className="absolute top-4 right-8">
              <SketchCircle width={100} height={80} seed={42} />
            </div>
            {/* Handwritten caption */}
            <div className="absolute -bottom-8 right-8 md:right-16">
              <HandwrittenNote rotation={-2} size="md">
                A consulting team and crew to show precision.
              </HandwrittenNote>
            </div>
            <div className="absolute -bottom-6 left-8">
              <HandwrittenNote rotation={1} size="lg">
                Consulting team
              </HandwrittenNote>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== STATEMENT ===== */}
      <Section className="py-12 md:py-20">
        <div className="max-w-2xl">
          <p className="font-display text-2xl md:text-4xl font-semibold text-ink leading-snug">
            Strategy is the <TextHighlight color="pink">art</TextHighlight>
            <br />
            of the long view.
          </p>
          <p className="mt-6 text-muted leading-relaxed text-lg">
            Most organisations treat strategy as an annual event - a two-day
            offsite that produces a deck and changes nothing. We believe
            strategic thinking is a capability that improves with deliberate
            practice, pressure-testing, and honest feedback.
          </p>
          <p className="mt-8 font-display text-xl md:text-2xl font-semibold text-ink">
            We are the architects of your <TextHighlight color="blue">legacy.</TextHighlight>
          </p>
        </div>
      </Section>

      {/* ===== SYSTEMS MAP ===== */}
      <div className="relative py-12 md:py-20">
        <TornEdge>
          <div className="bg-cream-light py-12 md:py-20 px-6">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Map */}
                <div className="flex-1 relative">
                  {/* Sticky notes around the map */}
                  <div className="hidden md:block absolute -top-6 -left-4 z-10">
                    <StickyNote rotation={-4}>Systems Thinking</StickyNote>
                  </div>
                  <div className="hidden md:block absolute -top-4 left-36 z-10">
                    <StickyNote rotation={2} color="blue">Future Vision</StickyNote>
                  </div>

                  <SystemsMap className="mt-12" />

                  {/* Handwritten labels around the map */}
                  <div className="hidden md:block">
                    <div className="absolute top-24 right-0">
                      <HandwrittenNote rotation={-3} size="sm">Collaborative Flow</HandwrittenNote>
                    </div>
                    <div className="absolute bottom-16 right-4">
                      <HandwrittenNote rotation={2} size="sm">Focus Zones</HandwrittenNote>
                    </div>
                    <div className="absolute bottom-4 left-12">
                      <HandwrittenNote rotation={-1} size="sm">Data-Driven Insights</HandwrittenNote>
                    </div>
                  </div>
                </div>

                {/* Photo in the map section */}
                <div className="w-full lg:w-72 flex-shrink-0 relative" style={{ transform: "rotate(2deg)" }}>
                  <TornEdge>
                    <Image
                      src="/images/team-discussion.jpg"
                      alt="Team in strategic discussion"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </TornEdge>
                  <div className="absolute -top-2 -right-2">
                    <SketchCircle width={60} height={50} seed={88} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-6 left-4">
                    <HandwrittenNote rotation={-2} size="sm">Uncover Value</HandwrittenNote>
                  </div>
                </div>
              </div>

              {/* Value proposition text */}
              <p className="mt-12 font-display text-xl md:text-2xl font-medium text-ink leading-relaxed max-w-2xl">
                We bridge the gap between raw creativity and structured strategy.
                Our approach is a sophisticated collage of deep insights,
                innovative thinking, and actionable plans.
              </p>
            </div>
          </div>
        </TornEdge>
      </div>

      {/* ===== STRATEGIC PRINCIPLES ===== */}
      <Section className="py-16 md:py-24">
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-8">
          Strategic Principles in Action
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Principle 1 */}
          <div className="relative">
            <div style={{ transform: "rotate(-1deg)" }}>
              <TornEdge edge="bottom">
                <Image
                  src="/images/team-whiteboard.jpg"
                  alt="Team workshop in action"
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
              </TornEdge>
            </div>
            <div className="absolute -top-2 left-2">
              <HandwrittenNote color="var(--color-crayon-orange)" rotation={-3} size="sm">
                Exploration
              </HandwrittenNote>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Tabletop exercises that let your team rehearse high-stakes
              decisions before they are real. Pressure-test strategy in a safe
              environment.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="relative">
            <div style={{ transform: "rotate(1deg)" }}>
              <TornEdge edge="bottom">
                <Image
                  src="/images/team-discussion.jpg"
                  alt="Strategic discussion session"
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
              </TornEdge>
            </div>
            <div className="absolute -top-2 right-4">
              <HandwrittenNote color="var(--color-ink-blue)" rotation={2} size="sm">
                Action
              </HandwrittenNote>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Strategic advisory for founders and leadership teams. Not a slide
              deck - a thinking partner who challenges your assumptions.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="relative">
            <div style={{ transform: "rotate(-0.5deg)" }}>
              <TornEdge edge="bottom">
                <Image
                  src="/images/team-planning.jpg"
                  alt="Planning and collaboration"
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
              </TornEdge>
            </div>
            <div className="absolute -top-2 left-4">
              <HandwrittenNote color="var(--color-crayon-purple)" rotation={-1} size="sm">
                Embrace uncertainty
              </HandwrittenNote>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Frameworks, decision tools, and products you can take back to your
              team. Better decisions, daily.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="relative bg-ink text-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="relative">
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

      {/* ===== NOTEBOOK CTA ===== */}
      <Section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <NotebookPaper>
            <div className="space-y-4">
              <HandwrittenNote size="lg" rotation={-1}>
                NOTES:
              </HandwrittenNote>
              <p className="font-hand text-xl md:text-2xl text-ink-blue leading-relaxed">
                Focus on sustainable growth.
              </p>
              <p className="font-hand text-lg md:text-xl text-ink-blue leading-relaxed" style={{ transform: "rotate(-0.5deg)" }}>
                Re-evaluate core competencies.
              </p>
              <p className="font-hand text-xl md:text-2xl text-ink-blue font-semibold leading-relaxed">
                Prioritize long-term value creation
                <br />
                over short-term gains.
              </p>
              <p className="font-hand text-lg md:text-xl text-ink-blue leading-relaxed mt-2" style={{ transform: "rotate(0.5deg)" }}>
                Embrace uncertainty
              </p>
              <div className="mt-8 pt-4">
                <p className="font-hand text-xl text-ink-blue font-semibold">
                  [Long Game Project Team]
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Book a discovery call</Button>
                <Button href="mailto:hello@longgameproject.org" variant="secondary" external>
                  hello@longgameproject.org
                </Button>
              </div>
            </div>
          </NotebookPaper>
        </div>
      </Section>

      {/* ===== SERVICES QUICK NAV ===== */}
      <Section className="pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">
              Let&apos;s talk about what&apos;s not working.
            </h2>
            <p className="text-muted leading-relaxed max-w-md">
              No pitch. Just a conversation about where your strategy process
              falls short and whether we can help.
            </p>
          </div>

          {/* Sketch-style nav pills (like Image 2 right side) */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Strategy", href: "/services" },
              { label: "Process", href: "/services#exercise" },
              { label: "Work", href: "/resources" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative inline-flex items-center justify-center px-8 py-2 font-mono text-xs uppercase tracking-widest text-ink-blue border-2 border-ink-blue hover:bg-ink-blue/5 transition-colors duration-150"
                style={{
                  borderRadius: "50% 45% 52% 48% / 48% 52% 45% 50%",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
