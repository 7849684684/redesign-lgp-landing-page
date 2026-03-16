export default function Footer() {
  return (
    <footer className="bg-ink py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-display)] font-bold text-cream text-lg block">
              The Long Game Project
            </span>
            <p className="font-[family-name:var(--font-body)] text-cream/50 text-sm mt-3 leading-relaxed">
              Strategic thinking, pressure-tested.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-blue mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About", href: "#about" },
                { label: "Method", href: "#method" },
                { label: "Services", href: "#services" },
                { label: "Results", href: "#results" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-body)] text-sm text-cream/50 hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-blue mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@longgameproject.org"
                className="font-[family-name:var(--font-body)] text-sm text-cream/50 hover:text-cream transition-colors"
              >
                hello@longgameproject.org
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-sm text-cream/50 hover:text-cream transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-blue mb-4">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot inline-block" />
              <span className="font-[family-name:var(--font-body)] text-sm text-cream/50">
                Accepting new clients
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-cream/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] text-cream/30">
            &copy; 2026 The Long Game Project
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] text-cream/30 hover:text-cream/60 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] text-cream/30 hover:text-cream/60 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
