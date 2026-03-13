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
    { label: "The Problem", href: "#problem" },
    { label: "Our Method", href: "#method" },
    { label: "Services", href: "#offerings" },
    { label: "Results", href: "#proof" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-accent" />
            <span className="font-display text-lg md:text-xl tracking-[0.08em] text-text">
              THE LONG GAME
            </span>
          </div>

          {/* Desktop Links */}
          <div
            ref={linksRef}
            className="hidden md:flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label text-[11px] tracking-[0.12em] uppercase text-muted hover:text-text transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="font-label text-[11px] tracking-[0.1em] uppercase bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-none transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[2px] bg-text transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-text transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-text transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
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
            className="font-display text-3xl tracking-[0.06em] text-text hover:text-accent transition-colors"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 font-label text-xs tracking-[0.1em] uppercase bg-accent text-white px-8 py-3 rounded-none"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
