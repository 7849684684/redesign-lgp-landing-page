import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Long Game Project collects, holds, and uses your personal information, in accordance with the Privacy Act 1988 (Cth) and Australian Privacy Principles.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            How we handle your personal information.
          </p>
        </div>
      </Section>

      <Section className="pb-16 md:pb-20">
        <div className="max-w-[640px] space-y-8 text-text-secondary leading-[1.8]">

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              1. Introduction
            </h2>
            <p className="mb-3">
              The Long Game Project Pty Ltd (ACN 663 643 641) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal information. This policy sets out how we collect, hold, use, and disclose personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
            </p>
            <p>
              By accessing our website or using our services, you agree to the terms of this policy. Our services include consulting, masterminds, coaching, games and simulations, digital content, online courses, and physical products such as cards and decks.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              2. Who Does This Apply To
            </h2>
            <p className="mb-3">This policy applies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>users and prospective users of our services</li>
              <li>contractors and consultants engaged by us</li>
              <li>third parties who interact with us in connection with our services</li>
            </ul>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              3. What Is Personal Information
            </h2>
            <p className="mb-3">
              Personal information is information or an opinion about an identified individual, or an individual who is reasonably identifiable, whether the information is true or not, and whether recorded in material form or not.
            </p>
            <p>
              Where practicable, you may interact with us anonymously or using a pseudonym. However, some services require us to know who you are in order to provide them effectively.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              4. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following categories of information:</p>

            <p className="font-semibold text-text-primary mb-2">a) Web-generated information</p>
            <p className="mb-3">
              When you visit our website, we may automatically collect technical information including your IP address, browser type, device type, preferred language, operating system, pages visited, and time spent on pages.
            </p>

            <p className="font-semibold text-text-primary mb-2">b) Personal information</p>
            <p className="mb-3">
              We may collect your name, email address, phone number, postal address, and other contact details. Where relevant to a transaction or enquiry, we may also collect financial information, transaction details, and the substance of your enquiry.
            </p>

            <p className="font-semibold text-text-primary mb-2">c) Sensitive information</p>
            <p>
              We may collect sensitive information - including health information, racial or ethnic origin, sexual orientation, political opinions, or religious beliefs - only with your express consent, or where required or authorised by law. We take additional care in handling sensitive information.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              5. How We Collect Information
            </h2>
            <p className="mb-3">We collect personal information through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>our website and online forms</li>
              <li>surveys and feedback tools</li>
              <li>telephone and email communication</li>
              <li>third-party platforms and referrals</li>
              <li>paid search and advertising platforms</li>
            </ul>
            <p className="mt-3">
              Where possible, we collect information directly from you. Sometimes we collect it from third parties, such as referral partners or service providers, where this is necessary to provide our services.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              6. Cookies
            </h2>
            <p className="mb-3">
              Our website uses cookies - small data files stored on your device - to improve your experience and analyse site usage. Cookies may record information about your visit, including pages viewed and actions taken.
            </p>
            <p>
              You may configure your browser to decline cookies. Doing so may limit some functionality on our site but will not prevent you from accessing most content.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              7. How We Hold Information
            </h2>
            <p className="mb-3">
              We hold personal information in electronic systems on secure servers. We take reasonable steps to protect the information we hold from misuse, interference, loss, and unauthorised access, modification, or disclosure.
            </p>
            <p>
              Our team members are trained on their obligations regarding personal information, and we monitor compliance with this policy on an ongoing basis.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              8. Why We Collect Information
            </h2>
            <p className="mb-3">We collect and use personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>provide and deliver our services to you</li>
              <li>facilitate transactions and process payments</li>
              <li>respond to enquiries and communicate with you</li>
              <li>improve our services and website</li>
              <li>comply with our legal obligations</li>
              <li>send you marketing communications where you have consented or where we are otherwise permitted to do so</li>
            </ul>
            <p className="mt-3">
              You may opt out of marketing communications at any time by contacting us or using the unsubscribe link in any marketing email.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              9. Third-Party Services We Use
            </h2>
            <p className="mb-3">
              We use a number of third-party services in the operation of our website and business. These services may collect or process personal information on our behalf:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium text-text-primary">Google Fonts</span> - font delivery via Google&apos;s content delivery network
              </li>
              <li>
                <span className="font-medium text-text-primary">SendFox</span> - email marketing and subscriber management
              </li>
              <li>
                <span className="font-medium text-text-primary">n8n</span> - form processing and workflow automation
              </li>
              <li>
                <span className="font-medium text-text-primary">TidyCal</span> - appointment and booking management
              </li>
              <li>
                <span className="font-medium text-text-primary">Vercel</span> - website hosting and infrastructure
              </li>
              <li>
                <span className="font-medium text-text-primary">Online Course Host</span> - delivery of online courses and digital content
              </li>
            </ul>
            <p className="mt-3">
              Each of these providers has its own privacy policy. We encourage you to review them where relevant to your use of our services.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              10. Disclosure of Personal Information
            </h2>
            <p className="mb-3">We may disclose your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>contractors and service providers who assist us in operating our business</li>
              <li>government bodies or regulatory authorities where required by law</li>
              <li>emergency services where there is a risk to life or safety</li>
              <li>auditors, legal advisers, or other professional advisers</li>
              <li>any other party where required or permitted by law</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              11. Overseas Disclosure
            </h2>
            <p>
              Some of the third-party service providers we use store or process data on servers located outside Australia. By using our services, you acknowledge that your personal information may be disclosed to overseas recipients. We take reasonable steps to ensure any overseas recipients handle your information in a manner consistent with the APPs, but we cannot guarantee the privacy practices of every overseas jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              12. Access, Correction, and Complaints
            </h2>
            <p className="mb-3">
              You have the right to request access to the personal information we hold about you, and to request that we correct any information that is inaccurate, out of date, incomplete, irrelevant, or misleading.
            </p>
            <p className="mb-3">
              To make a request, or to lodge a complaint about how we have handled your personal information, please contact us at:
            </p>
            <p className="mb-3">
              <a
                href="mailto:email@longgameproject.org"
                className="text-brand-teal underline hover:text-brand-teal-light transition-colors"
              >
                email@longgameproject.org
              </a>
            </p>
            <p className="mb-3">
              We will respond to access requests and complaints within a reasonable time. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC):
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline hover:text-brand-teal-light transition-colors">www.oaic.gov.au</a></li>
              <li>Phone: 1300 363 992</li>
            </ul>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              13. Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time without prior notice. The current version will always be available on our website. Continued use of our services after any update constitutes your acceptance of the revised policy.
            </p>
          </div>

          <div className="border-t border-surface-2 pt-8">
            <p className="text-sm text-text-tertiary">
              Effective date: 8 April 2026. Questions about this policy?{" "}
              <Link
                href="/contact"
                className="text-brand-teal underline hover:text-brand-teal-light transition-colors"
              >
                Get in touch
              </Link>
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
