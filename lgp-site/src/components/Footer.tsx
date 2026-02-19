"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-deep" />
      <div className="section-divider mb-16" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 border-2 border-blue rotate-45 scale-75" />
                <div className="absolute inset-0 border-2 border-white/30 rotate-[22.5deg] scale-50" />
                <div className="absolute inset-[35%] bg-blue rounded-full" />
              </div>
              <span className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-[0.15em] text-white">
                THE LONG GAME
              </span>
            </div>
            <p className="font-[family-name:var(--font-outfit)] text-sm text-ghost leading-relaxed max-w-sm mb-6">
              Strategic thinking workshops, masterminds, and coaching that use
              tabletop exercises and red teaming to build real strategic capability.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lime rounded-full pulse-dot" />
              <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-ghost">
                ACCEPTING NEW CLIENTS
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.3em] text-blue mb-6 uppercase">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: "The Problem", href: "#problem" },
                { label: "How We Play", href: "#method" },
                { label: "What We Run", href: "#offerings" },
                { label: "Match Results", href: "#proof" },
                { label: "Your Move", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-outfit)] text-sm text-ghost hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.3em] text-blue mb-6 uppercase">
              Connect
            </h4>
            <ul className="space-y-3">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Email Us", href: "mailto:hello@longgameproject.org" },
                { label: "Book a Call", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-outfit)] text-sm text-ghost hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.15em] text-ghost/50">
            © {new Date().getFullYear()} THE LONG GAME PROJECT. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.15em] text-ghost/50 hover:text-ghost transition-colors"
            >
              PRIVACY
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.15em] text-ghost/50 hover:text-ghost transition-colors"
            >
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
