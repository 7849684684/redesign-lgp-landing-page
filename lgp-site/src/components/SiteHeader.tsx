"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-rule/40">
      <div className="mx-auto max-w-5xl px-6 md:px-8 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl font-bold text-ink tracking-tight">
          The Long Game Project
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-all duration-200 px-3 py-1 ${
                pathname === link.href
                  ? "text-ink-blue font-medium border border-ink-blue"
                  : "text-muted hover:text-ink-blue hover:border hover:border-ink-blue/40"
              } border-transparent`}
              style={{
                borderRadius: pathname === link.href
                  ? "50% 45% 52% 48% / 48% 52% 45% 50%"
                  : "50% 45% 52% 48% / 48% 52% 45% 50%",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-px bg-ink transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block h-px bg-ink transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-ink transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-rule/40 bg-cream">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-1 ${
                  pathname === link.href
                    ? "text-blue font-medium"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
