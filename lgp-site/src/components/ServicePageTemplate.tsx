import Section from "@/components/Section";
import Button from "@/components/Button";
import CrossProductCTA from "@/components/CrossProductCTA";

export interface ServicePageSection {
  title: string;
  body: string;
}

interface ServicePageTemplateProps {
  label: string;
  title: string;
  subtitle: string;
  sections: ServicePageSection[];
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
  ctaVariant?: "amber" | "teal";
  crossLink: {
    label?: string;
    product: string;
    description: string;
    href: string;
  };
  inDevelopment?: boolean;
}

export default function ServicePageTemplate({
  label,
  title,
  subtitle,
  sections,
  ctaHeading,
  ctaBody,
  ctaLabel,
  ctaVariant = "teal",
  crossLink,
  inDevelopment = false,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 pb-16 md:pt-20 md:pb-20" surface={1}>
        <div className="max-w-3xl">
          <p className="label text-brand-amber mb-4">{label}</p>
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            {subtitle}
          </p>
          {inDevelopment && (
            <p className="mt-6 inline-block text-xs uppercase tracking-wider text-text-tertiary border border-surface-2 rounded-sm px-3 py-1">
              Page in development &mdash; full details coming soon
            </p>
          )}
        </div>
      </Section>

      {/* Sections */}
      {sections.length > 0 && (
        <Section className="py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="border-l-[3px] border-brand-amber pl-5"
                >
                  <h2 className="font-editorial text-xl font-semibold text-text-primary mb-3">
                    {section.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="py-20 md:py-28 border-t border-surface-2">
        <div className="max-w-xl">
          <h2 className="font-editorial text-3xl font-normal text-text-primary mb-4">
            {ctaHeading}
          </h2>
          <p className="text-text-secondary mb-8">{ctaBody}</p>
          <Button href="/contact" variant={ctaVariant}>
            {ctaLabel}
          </Button>
        </div>
      </Section>

      {/* Cross-product CTA */}
      <Section className="pb-20">
        <CrossProductCTA
          label={crossLink.label ?? "Also offered"}
          product={crossLink.product}
          description={crossLink.description}
          href={crossLink.href}
        />
      </Section>
    </>
  );
}
