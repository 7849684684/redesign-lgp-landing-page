import type { Metadata } from "next";
import Section from "@/components/Section";

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
                preparation needed - just bring the problem you are trying to
                solve.
              </p>
              <a
                href="mailto:hello@longgameproject.org?subject=Discovery%20call%20request"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-brand-amber text-white hover:bg-brand-amber-light transition-colors rounded-[var(--radius-sm)]"
              >
                Request a discovery call
              </a>
            </div>

            <div>
              <p className="label text-text-tertiary mb-3">Email</p>
              <a
                href="mailto:hello@longgameproject.org"
                className="text-brand-teal hover:text-brand-teal-light transition-colors"
              >
                hello@longgameproject.org
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
            <form
              action="mailto:hello@longgameproject.org"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-text-primary mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 bg-surface-0 border border-surface-2 rounded-[var(--radius-sm)] text-sm text-text-primary focus:outline-none focus:border-brand-teal transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-text-primary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 bg-surface-0 border border-surface-2 rounded-[var(--radius-sm)] text-sm text-text-primary focus:outline-none focus:border-brand-teal transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-text-primary mb-1.5">
                  What are you working on?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 bg-surface-0 border border-surface-2 rounded-[var(--radius-sm)] text-sm text-text-primary focus:outline-none focus:border-brand-teal transition-colors resize-none"
                  placeholder="Tell us about the challenge you are facing..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-brand-teal text-white hover:bg-brand-teal-light transition-colors rounded-[var(--radius-sm)]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
