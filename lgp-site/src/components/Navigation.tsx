"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Animate nav in
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "THE PROBLEM", href: "#problem" },
    { label: "HOW WE PLAY", href: "#method" },
    { label: "OPERATIONS", href: "#offerings" },
    { label: "PROOF", href: "#proof" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-deep/90 backdrop-blur-md border-b border-blue/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              {/* Geometric logo mark — abstract game piece */}
              <div className="absolute inset-0 border-2 border-blue rotate-45 scale-75" />
              <div className="absolute inset-0 border-2 border-white/30 rotate-[22.5deg] scale-50" />
              <div className="absolute inset-[35%] bg-blue rounded-full" />
            </div>
            <span className="font-[family-name:var(--font-bebas-neue)] text-xl md:text-2xl tracking-[0.15em] text-white">
              THE LONG GAME
            </span>
          </div>

          {/* Desktop Links */}
          <div
            ref={linksRef}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.2em] text-ghost hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="font-[family-name:var(--font-bebas-neue)] text-sm tracking-[0.15em] bg-blue hover:bg-blue-light text-white px-5 py-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,128,255,0.3)]"
            >
              YOUR MOVE
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
              className={`w-6 h-[2px] bg-blue transition-all duration-300 ${
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-deep/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-bebas-neue)] text-4xl tracking-[0.2em] text-white hover:text-blue transition-colors"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.15em] bg-blue text-white px-8 py-3"
        >
          YOUR MOVE
        </a>
      </div>
    </>
  );
}
