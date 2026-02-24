"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Why", href: "#problem" },
    { label: "How", href: "#method" },
    { label: "What We Offer", href: "#offerings" },
    { label: "Results", href: "#proof" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-deep/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[60px] md:h-[70px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-7 h-7 relative">
              <div className="absolute inset-0 border-2 border-blue rotate-45 scale-75 transition-transform duration-300 group-hover:rotate-[55deg]" />
              <div className="absolute inset-[30%] bg-blue rounded-full" />
            </div>
            <span className="font-[family-name:var(--font-bebas-neue)] text-lg md:text-xl tracking-[0.15em] text-white">
              THE LONG GAME
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-outfit)] text-[13px] text-ghost hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-[family-name:var(--font-outfit)] text-sm font-medium bg-blue hover:bg-blue-light text-white px-6 py-2.5 rounded-sm transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`w-4 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — Full Screen Takeover */}
      <div
        className={`fixed inset-0 z-40 bg-deep flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-bebas-neue)] text-5xl tracking-[0.1em] text-white hover:text-blue transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 font-[family-name:var(--font-outfit)] text-base font-medium bg-blue text-white px-10 py-4 rounded-sm"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </>
  );
}
