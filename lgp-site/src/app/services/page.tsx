import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Workshops, masterminds, coaching, sprints, and keynotes. Five ways The Long Game Project sharpens the decisions senior leaders are already making.",
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <PageHeader
          title="How we engage."
          subtitle="Five formats, one discipline: rigorously testing the assumptions a strategy is resting on. The format changes with the stakes, the timeline, and the audience — the standard does not."
        />
      </Section>

      <Section className="pb-12 md:pb-16">
        <div className="max-w-3xl">
          <p className="text-text-secondary leading-relaxed">
            Every engagement begins from the same question: what would have to
            be true for this decision to be the right one? Over 130 bespoke
            scenarios &mdash; across defence, financial services, technology,
            consumer goods, healthcare, and professional services &mdash; have
            taught us the shapes that question most often takes. The five
            formats below are those shapes, sized from a single day to a
            standing advisory retainer.
          </p>
        </div>
      </Section>

      <Section className="pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-px bg-surface-2 border border-surface-2 rounded-md overflow-hidden">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group block bg-surface-0 p-8 md:p-10 hover:bg-surface-1 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3 mb-4">
                <h2 className="font-editorial text-2xl md:text-3xl font-normal text-text-primary group-hover:text-brand-teal transition-colors">
                  {service.label}
                </h2>
                <span className="label text-text-tertiary shrink-0">
                  {service.format}
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                {service.descriptor}
              </p>
              <span className="text-sm font-medium text-brand-teal">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
