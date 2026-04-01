import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Team",
  description: "The people behind The Long Game Project.",
};

export default function TeamPage() {
  return (
    <>
      <Section>
        <div className="pt-12 pb-12 md:pt-16 md:pb-16 max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Team
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            One principal. Deep partnership. Every engagement is led by the
            person who designed it.
          </p>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="max-w-3xl">
          <div className="border border-surface-2 rounded-[var(--radius-md)] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Photo - teal duotone via CSS filter */}
              <div className="shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-[var(--radius-md)] overflow-hidden bg-brand-teal/10 relative">
                  <Image
                    src="/images/team/dan-epstein.png"
                    alt="Dr Dan Epstein"
                    fill
                    className="object-cover object-top"
                    style={{
                      filter: "sepia(1) saturate(3) hue-rotate(130deg) brightness(0.85)",
                    }}
                  />
                </div>
              </div>

              <div>
                <h2 className="font-editorial text-2xl font-normal text-text-primary mb-1">
                  Dr Dan Epstein
                </h2>
                <p className="label text-brand-teal mb-4">
                  Director, Strategy &amp; Game Design
                </p>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Dan started designing tabletop games at eleven and never
                    stopped. Along the way he became a medical doctor, earned a
                    PhD in decision science from Monash University, and spent
                    years consulting across public and private sectors —
                    from pandemic preparedness to behavioural economics.
                  </p>
                  <p>
                    He built The Long Game Project because he kept seeing the
                    same problem: smart teams making poor strategic decisions,
                    not because they lacked information, but because they&apos;d
                    never practised thinking under pressure. Game design turned
                    out to be the answer.
                  </p>
                  <p>
                    Dan has personally designed 130+ strategic scenarios across
                    defence, tech, financial services, and consumer goods. He
                    leads every engagement — from scoping through facilitation
                    to debrief.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="max-w-xl">
          <h2 className="font-editorial text-2xl font-normal text-text-primary mb-4">
            Work with us
          </h2>
          <p className="text-text-secondary mb-6">
            Interested in joining the team or collaborating on a project?
          </p>
          <Button href="/contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
