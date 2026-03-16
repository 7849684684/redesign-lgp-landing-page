export default function Footer() {
  return (
    <footer className="bg-ink py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left - Brand */}
          <div>
            <span className="font-[family-name:var(--font-display)] font-bold text-cream text-lg">
              The Long Game Project
            </span>
            <p className="font-[family-name:var(--font-body)] text-cream/50 text-sm mt-2">
              Strategic thinking, pressure-tested.
            </p>
          </div>

          {/* Right - Links */}
          <nav className="flex gap-8 flex-wrap">
            {[
              { label: "About", href: "#about" },
              { label: "Method", href: "#method" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-sm text-cream/50 hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@longgameproject.org"
              className="font-[family-name:var(--font-body)] text-sm text-cream/50 hover:text-cream transition-colors"
            >
              hello@longgameproject.org
            </a>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
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
