import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-semibold text-cream mb-3">
              The Long Game Project
            </p>
            <p className="text-sm leading-relaxed text-cream/50">
              Strategy practice for teams and leaders who take decisions seriously.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              <span className="text-xs text-cream/40">Accepting new clients</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-cream/40 mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-cream/40 mb-4">
              Get in touch
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@longgameproject.org"
                className="text-sm text-cream/60 hover:text-cream transition-colors duration-150"
              >
                hello@longgameproject.org
              </a>
              <a
                href="https://linkedin.com/company/the-long-game-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/60 hover:text-cream transition-colors duration-150"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 text-xs text-cream/30">
          &copy; {new Date().getFullYear()} The Long Game Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
