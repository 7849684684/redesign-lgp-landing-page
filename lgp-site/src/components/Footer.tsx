"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-deep" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 relative">
                <div className="absolute inset-0 border-2 border-blue rotate-45 scale-75" />
                <div className="absolute inset-[30%] bg-blue rounded-full" />
              </div>
              <span className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.15em] text-white">
                THE LONG GAME
              </span>
            </div>
            <p className="font-[family-name:var(--font-outfit)] text-sm text-ghost leading-relaxed max-w-sm mb-6">
              Strategic thinking workshops, masterminds, and coaching that help
              leadership teams make better decisions through simulation and practice.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lime rounded-full pulse-dot" />
              <span className="font-[family-name:var(--font-outfit)] text-xs text-ghost">
                Accepting new clients
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-outfit)] text-xs font-medium text-white/50 mb-6 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Why", href: "#problem" },
                { label: "How", href: "#method" },
                { label: "What We Offer", href: "#offerings" },
                { label: "Results", href: "#proof" },
                { label: "Contact", href: "#contact" },
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
            <h4 className="font-[family-name:var(--font-outfit)] text-xs font-medium text-white/50 mb-6 uppercase tracking-wider">
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
          <div className="font-[family-name:var(--font-outfit)] text-xs text-ghost/40">
            &copy; {new Date().getFullYear()} The Long Game Project. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-[family-name:var(--font-outfit)] text-xs text-ghost/40 hover:text-ghost transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-outfit)] text-xs text-ghost/40 hover:text-ghost transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
