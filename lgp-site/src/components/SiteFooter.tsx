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
    <footer className="bg-ink text-cream/80 relative">
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

        <div className="mt-16 pt-6 text-xs text-cream/30" style={{
          borderTop: "1.5px solid rgba(245, 240, 230, 0.1)",
          borderImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='3'%3E%3Cpath d='M0,1.5 C20,0.5 40,2.5 60,1.5 C80,0.5 100,2.5 120,1.5 C140,0.5 160,2.5 180,1.5 C200,0.5 220,2.5 240,1.5 C260,0.5 280,2.5 300,1.5 C320,0.5 340,2.5 360,1.5 C380,0.5 400,2.5 400,1.5' fill='none' stroke='rgba(245,240,230,0.15)' stroke-width='1.5'/%3E%3C/svg%3E\") 1 stretch",
        }}>
          &copy; {new Date().getFullYear()} The Long Game Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
