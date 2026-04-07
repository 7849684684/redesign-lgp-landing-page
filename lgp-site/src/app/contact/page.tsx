import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Long Game Project. Book a discovery call or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="pt-12 pb-12 md:pt-16 md:pb-16">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
            No pitch. Just a conversation about the decision you are facing and
            whether we can help.
          </p>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <div>
              <p className="label text-text-tertiary mb-3">Book a call</p>
              <p className="text-text-secondary leading-relaxed mb-4">
                The best way to start is a 30-minute discovery call. No
                preparation needed — just bring the problem you are trying to
                solve.
              </p>
              <a
                href="https://tidycal.com/drdanepstein/lgp-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-brand-amber text-white hover:bg-brand-amber-light transition-colors rounded-[var(--radius-sm)]"
              >
                Book a discovery call
              </a>
            </div>

            <div>
              <p className="label text-text-tertiary mb-3">Email</p>
              <a
                href="mailto:email@longgameproject.org"
                className="text-brand-teal hover:text-brand-teal-light transition-colors"
              >
                email@longgameproject.org
              </a>
            </div>

            <div>
              <p className="label text-text-tertiary mb-3">LinkedIn</p>
              <a
                href="https://linkedin.com/company/the-long-game-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal hover:text-brand-teal-light transition-colors"
              >
                The Long Game Project on LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="label text-text-tertiary mb-6">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
