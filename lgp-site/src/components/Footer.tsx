export default function Footer() {
  return (
    <footer className="bg-ink py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Four-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Brand */}
          <div>
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-cream">
              THE LONG GAME PROJECT
            </span>
            <p className="font-body text-cream/40 text-sm mt-4 max-w-[200px]">
              A strategy practice. Exercises, advisory, tools, and products for
              teams that take decisions seriously.
            </p>
          </div>

          {/* Column 2 - Navigate */}
          <div>
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-blue mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Exercise", href: "#exercise" },
                { label: "Advisory", href: "#advisory" },
                { label: "Tools", href: "#tools" },
                { label: "Products", href: "#products" },
                { label: "Proof", href: "#proof" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-cream/60 text-sm hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-blue mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@longgameproject.org"
                className="font-body text-cream/60 text-sm hover:text-cream transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/company/longgameproject"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-cream/60 text-sm hover:text-cream transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 4 - Status */}
          <div>
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-blue mb-4">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
              <span className="font-body text-cream/60 text-sm">
                Accepting new clients
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-cream/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-cream/30 text-xs">
            &copy; 2026 The Long Game Project
          </span>
          <div className="flex gap-6 font-body text-cream/30 text-xs">
            <a href="#" className="hover:text-cream/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cream/60 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
