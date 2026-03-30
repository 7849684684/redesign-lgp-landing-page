import Link from "next/link";
import Image from "next/image";

const ecosystemLinks = [
  { href: "https://shortlist.games", label: "Shortlist" },
  { href: "https://insightrpg.org", label: "InsightRPG" },
  { href: "https://prism.cards", label: "PRISM" },
  { href: "https://strategysoup.com", label: "Strategy Soup" },
  { href: "https://courses.longgameproject.org", label: "Courses" },
];

const serviceLinks = [
  { href: "/consulting", label: "Consulting" },
  { href: "/mastermind", label: "Masterminds" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/resources", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-surface-2">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8">
        {/* Brand */}
        <div className="mb-2">
          <Image
            src="/logos/lgp-horizontal-teal-solid.svg"
            alt="The Long Game Project"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <p className="text-sm text-text-tertiary mb-8">
          Strategic thinking is a skill. Practice it.
        </p>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="label text-text-tertiary mb-3">Ecosystem</h4>
            <ul className="space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="label text-text-tertiary mb-3">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="label text-text-tertiary mb-3">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-tertiary pt-6 border-t border-surface-2">
          &copy; {new Date().getFullYear()} The Long Game Project. Building better thinkers.
        </p>
      </div>
    </footer>
  );
}
