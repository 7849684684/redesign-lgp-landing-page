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
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            Get in touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            No pitch. Just a conversation about where your strategy process
            falls short and whether we can help.
          </p>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact options */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
                Book a call
              </p>
              <p className="text-ink/80 leading-relaxed mb-4">
                The best way to start is a 30-minute discovery call. No
                preparation needed - just bring the problem you are trying to
                solve.
              </p>
              <a
                href="mailto:hello@longgameproject.org?subject=Discovery%20call%20request"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-medium text-sm tracking-wide bg-blue text-white hover:bg-blue-hover transition-colors duration-150"
              >
                Request a discovery call
              </a>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
                Email
              </p>
              <a
                href="mailto:hello@longgameproject.org"
                className="text-blue hover:text-blue-hover transition-colors duration-150"
              >
                hello@longgameproject.org
              </a>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
                LinkedIn
              </p>
              <a
                href="https://linkedin.com/company/the-long-game-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:text-blue-hover transition-colors duration-150"
              >
                The Long Game Project on LinkedIn
              </a>
            </div>
          </div>

          {/* Simple form */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
              Send a message
            </p>
            <form
              action="mailto:hello@longgameproject.org"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-ink mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 bg-white border border-rule rounded-sm text-sm text-ink focus:outline-none focus:border-blue transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-ink mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 bg-white border border-rule rounded-sm text-sm text-ink focus:outline-none focus:border-blue transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-ink mb-1.5">
                  What are you working on?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 bg-white border border-rule rounded-sm text-sm text-ink focus:outline-none focus:border-blue transition-colors resize-none"
                  placeholder="Tell us about the challenge you're facing..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-medium text-sm tracking-wide bg-blue text-white hover:bg-blue-hover transition-colors duration-150"
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
