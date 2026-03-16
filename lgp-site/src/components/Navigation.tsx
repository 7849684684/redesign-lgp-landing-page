"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Method", href: "#method" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-rule"
            : "bg-transparent"
        }`}
        style={{ opacity: 0 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-[family-name:var(--font-display)] font-bold text-lg tracking-tight text-ink"
          >
            THE LONG GAME
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-sm text-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center gap-[6px] p-2"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-ink" />
            <span className="block w-6 h-[2px] bg-ink" />
            <span className="block w-6 h-[2px] bg-ink" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 p-2"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-ink"
            >
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-display)] text-3xl text-ink hover:text-muted transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
