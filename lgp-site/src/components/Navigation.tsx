"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Exercise", href: "#exercise" },
  { label: "Advisory", href: "#advisory" },
  { label: "Tools", href: "#tools" },
  { label: "Products", href: "#products" },
  { label: "Proof", href: "#proof" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-b border-ink/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12 flex items-center justify-between h-14">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/70 hover:text-ink transition-colors"
          >
            The Long Game Project
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-[13px] text-ink/40 hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="bg-blue text-white text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:bg-blue-hover transition-colors ml-7"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="block w-5 h-px bg-ink/60" />
            <span className="block w-5 h-px bg-ink/60" />
            <span className="block w-5 h-px bg-ink/60" />
          </button>
        </div>
      </nav>

      {/* Mobile menu - full screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end px-8 md:px-12 h-14 items-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-ink/60"
            >
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center gap-6 pt-24">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-body text-[18px] text-ink/60 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="mt-8 bg-blue text-white text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:bg-blue-hover transition-colors"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </>
  );
}
