import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing use of The Long Game Project website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-6">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            Effective date: 8 April 2026
          </p>
        </div>
      </Section>

      <Section className="pb-16 md:pb-20">
        <div className="max-w-[640px] space-y-8 text-text-secondary leading-[1.8]">

          <div>
            <p>
              Please read these Terms and Conditions carefully before using this
              website. By accessing or using{" "}
              <a
                href="https://www.longgameproject.org"
                className="text-brand-teal underline hover:text-brand-teal-light transition-colors"
              >
                www.longgameproject.org
              </a>{" "}
              (the &ldquo;Site&rdquo;), you agree to be bound by these terms. If
              you do not agree, please do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              1. Who We Are
            </h2>
            <p className="mb-3">
              The Site is operated by The Long Game Project Pty Ltd (ACN 663 643
              641) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). We
              are an Australian company providing strategy and leadership
              services including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Consulting services including tabletop exercises and strategic
                advisory
              </li>
              <li>Mastermind programmes and peer cohorts</li>
              <li>Individual and group coaching</li>
              <li>Games and simulations</li>
              <li>Digital content and online courses</li>
              <li>Physical products including prompt cards and card decks</li>
            </ul>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              2. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Site in any way, including browsing,
              purchasing products or services, or submitting enquiries, you
              confirm that you have read, understood, and agree to be bound by
              these Terms and Conditions and any other policies referenced
              herein. If you are using the Site on behalf of an organisation,
              you represent that you have authority to bind that organisation to
              these terms.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              3. Changes to Terms
            </h2>
            <p>
              We may amend these Terms and Conditions from time to time at our
              sole discretion. Changes take effect from the date they are posted
              on the Site. Continued use of the Site after changes are posted
              constitutes your acceptance of the revised terms. These terms were
              most recently updated on 8 April 2026.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              4. Changes to the Site
            </h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any
              aspect of the Site at any time without notice. This includes
              content, features, pricing, availability of products and services,
              and the Site itself. We are not liable to you or any third party
              for any such modifications.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              5. Availability
            </h2>
            <p>
              Access to the Site is provided free of charge. We do not guarantee
              that the Site will be available at all times or that access will be
              uninterrupted or error-free. We may restrict access to the Site or
              parts of it without notice. We are not liable for any loss or
              inconvenience caused by unavailability of the Site.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              6. Intellectual Property
            </h2>
            <p className="mb-3">
              All content on the Site - including text, images, graphics, logos,
              icons, audio, video, software, and the compilation of that content
              - is owned by or licenced to The Long Game Project Pty Ltd and is
              protected by Australian and international copyright, trade mark,
              and other intellectual property laws.
            </p>
            <p className="mb-3">
              You may access and use the Site for personal, non-commercial
              purposes only. Any other use, including reproduction, modification,
              distribution, or republication of any content, requires our prior
              written consent. Where content is used with our permission, you
              must acknowledge The Long Game Project as the source.
            </p>
            <p>
              Nothing on the Site transfers any intellectual property rights to
              you. All rights not expressly granted are reserved.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              7. Disclaimer
            </h2>
            <p className="mb-3">
              The Site and its content are provided on an &ldquo;as is&rdquo;
              basis without warranties of any kind, either express or implied,
              including but not limited to warranties of merchantability, fitness
              for a particular purpose, or non-infringement.
            </p>
            <p>
              Content on the Site is provided for general information purposes
              only. It does not constitute professional advice - legal,
              financial, strategic, or otherwise. You should seek independent
              professional advice before making decisions based on information
              obtained from this Site.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              8. Third-Party Links
            </h2>
            <p>
              The Site may contain links to third-party websites, including our
              social media profiles on platforms such as Facebook, Instagram, and
              LinkedIn. These links are provided for convenience only. We do not
              endorse, control, or accept responsibility for the content,
              privacy practices, or availability of any linked site. Your use of
              third-party sites is at your own risk and subject to their
              respective terms and policies.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              9. Limitation of Liability
            </h2>
            <p className="mb-3">
              To the fullest extent permitted by law, The Long Game Project Pty
              Ltd and its directors, employees, contractors, and agents are not
              liable for any direct, indirect, incidental, special, or
              consequential loss or damage arising from your use of, or
              inability to use, the Site or its content. This includes loss of
              profits, data, business opportunity, or goodwill.
            </p>
            <p className="mb-3">
              Nothing in these terms excludes, restricts or modifies any
              consumer guarantee, right or remedy conferred on you by the
              Australian Consumer Law or any other applicable law that cannot be
              excluded, restricted or modified by agreement. Where our liability
              cannot be excluded, we limit our liability to the fullest extent
              permitted by law.
            </p>
            <p>
              Where our liability cannot be excluded but can be limited, our
              total liability to you in connection with the Site or any products
              or services supplied is limited to the amount you paid us in the
              relevant transaction (if any), or the re-supply of the relevant
              product or service.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless The Long Game Project Pty
              Ltd and its directors, employees, contractors, and agents from and
              against any claims, actions, damages, losses, costs, and expenses
              (including reasonable legal fees) arising out of or relating to
              your use of the Site, your breach of these terms, or your
              violation of any third-party rights.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              11. Viruses and Security
            </h2>
            <p>
              We take reasonable steps to maintain the security of the Site, but
              we do not warrant that the Site is free from viruses, malware, or
              other harmful code. You are responsible for ensuring you have
              appropriate security measures in place when accessing the Site. We
              are not liable for any damage to your systems or data caused by
              material obtained from the Site.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              12. Linking to Our Site
            </h2>
            <p className="mb-3">
              You may link to the homepage of the Site provided you do so in a
              way that is fair and legal and does not damage our reputation or
              take advantage of it. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Frame the Site or create a link in a way that suggests any
                form of association or endorsement on our part where none
                exists
              </li>
              <li>
                Link from a website that contains content that is unlawful,
                harmful, or offensive
              </li>
              <li>
                Use any of our trade marks or logos without prior written
                consent
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to withdraw linking permission at any time
              without notice.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              13. Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of Victoria, Australia. You irrevocably
              submit to the exclusive jurisdiction of the courts of Victoria and
              the Federal Court of Australia for the resolution of any dispute
              arising under or in connection with these terms.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              14. Trade Marks
            </h2>
            <p>
              &ldquo;The Long Game Project&rdquo; and associated logos, names,
              and marks are trade marks of The Long Game Project Pty Ltd. All
              other trade marks appearing on the Site are the property of their
              respective owners. Nothing on the Site grants any licence to use
              our trade marks without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              15. Prohibited Uses
            </h2>
            <p className="mb-3">
              You must not use the Site or its content:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                For any unlawful purpose or in violation of any applicable
                laws or regulations
              </li>
              <li>
                To reproduce, distribute, sell, or commercially exploit any
                content without our written consent
              </li>
              <li>
                To transmit unsolicited commercial communications
                (&ldquo;spam&rdquo;)
              </li>
              <li>
                To impersonate any person or entity or misrepresent your
                affiliation with any person or entity
              </li>
              <li>
                To collect or harvest personal information about other users
              </li>
              <li>
                To upload or transmit viruses, malware, or any other harmful
                code
              </li>
              <li>
                To interfere with or disrupt the Site or servers connected to
                it
              </li>
              <li>
                To attempt unauthorised access to any part of the Site,
                related systems, or networks
              </li>
              <li>
                To scrape, index, or data-mine content from the Site by
                automated means without our consent
              </li>
              <li>
                In any way that could damage, disable, overburden, or impair
                the Site
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              16. Products and Services
            </h2>
            <p className="mb-3">
              We provide all products and services with reasonable care and
              skill. The following conditions apply:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium text-text-primary">
                  Digital products and courses:
                </span>{" "}
                Delivered via email or an online platform. Access details will
                be provided following confirmed payment.
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Physical products:
                </span>{" "}
                Shipped in accordance with our shipping policy, available on
                the Site. Risk passes to you on delivery.
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Consulting, coaching, and mastermind programmes:
                </span>{" "}
                Governed by a separate agreement or booking confirmation
                provided at the time of engagement.
              </li>
              <li>
                <span className="font-medium text-text-primary">Refunds:</span>{" "}
                Handled in accordance with our refund policy, available on the
                Site, and subject to your rights under the Australian Consumer
                Law.
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to decline or cancel any order at our
              discretion. If we cancel an order, we will provide a full refund
              of any amount paid.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              17. Payment
            </h2>
            <p className="mb-3">
              The purchase price for any product or service is as displayed at
              checkout at the time of purchase. All prices are in Australian
              dollars (AUD) unless otherwise stated. Prices include GST where
              applicable.
            </p>
            <p className="mb-3">
              By providing payment details, you warrant that you are authorised
              to use the nominated payment method and that the details provided
              are accurate. We accept major credit cards via our payment
              processor. We do not store your full card details.
            </p>
            <p>
              We reserve the right to change prices at any time. Price changes
              will not affect orders that have already been confirmed and paid.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              18. Default
            </h2>
            <p>
              If you breach any provision of these Terms and Conditions, we may,
              without limiting any other rights or remedies available to us,
              immediately terminate or suspend your access to the Site, cancel
              any outstanding orders, or take legal action to recover any losses
              suffered. Any obligations you have that by their nature should
              survive termination will continue to apply.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-text-primary mb-4">
              19. General
            </h2>
            <p className="mb-3">
              <span className="font-medium text-text-primary">
                Severability:
              </span>{" "}
              If any provision of these terms is found to be invalid,
              unenforceable, or illegal, that provision will be severed and the
              remaining provisions will continue in full force and effect.
            </p>
            <p className="mb-3">
              <span className="font-medium text-text-primary">No waiver:</span>{" "}
              Our failure to enforce any right or provision of these terms does
              not constitute a waiver of that right or provision. Any waiver
              must be in writing and signed by an authorised representative of
              The Long Game Project Pty Ltd.
            </p>
            <p>
              <span className="font-medium text-text-primary">
                Entire agreement:
              </span>{" "}
              These terms constitute the entire agreement between you and us in
              relation to your use of the Site, and supersede any prior
              agreements or understandings on that subject.
            </p>
          </div>

          <div className="border-t border-surface-2 pt-8">
            <p className="text-sm text-text-tertiary">
              Questions about these terms?{" "}
              <Link
                href="/contact"
                className="text-brand-teal underline hover:text-brand-teal-light transition-colors"
              >
                Get in touch
              </Link>{" "}
              or email us at{" "}
              <a
                href="mailto:email@longgameproject.org"
                className="text-brand-teal underline hover:text-brand-teal-light transition-colors"
              >
                email@longgameproject.org
              </a>
              .
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
