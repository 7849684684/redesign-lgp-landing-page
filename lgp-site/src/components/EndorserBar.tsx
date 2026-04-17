"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const products = [
  { href: "https://shortlist.games", label: "Shortlist" },
  { href: "https://insightrpg.longgameproject.org", label: "InsightRPG" },
  { href: "https://prism.cards", label: "PRISM" },
  { href: "https://strategysoup.longgameproject.org", label: "Strategy Soup" },
  { href: "https://courses.longgameproject.org", label: "Courses" },
];

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/consulting", label: "Consulting" },
  { href: "/mastermind", label: "Masterminds" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function EndorserBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Endorser strip */}
      <div className="bg-surface-1 border-b border-surface-2">
        <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between h-9">
          <Link
            href="/"
            aria-label="The Long Game Project home"
            className="flex items-center font-editorial text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <Image src="/logos/lgp-icon-teal-solid.svg" alt="" width={20} height={20} className="shrink-0" />
          </Link>

          <nav className="hidden md:flex items-center gap-4" aria-label="LGP ecosystem">
            {products.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-tertiary hover:text-text-primary transition-colors"
              >
                {p.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Site nav */}
      <div className="bg-surface-0/90 backdrop-blur-sm border-b border-surface-2">
        <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between h-14">
          <Link
            href="/"
            className="font-editorial text-lg font-semibold tracking-tight text-text-primary hover:text-brand-teal transition-colors"
          >
            The Long Game Project
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-6 mr-4">
              {siteLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href || pathname?.startsWith(link.href + "/")
                      ? "text-brand-teal"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <ThemeToggle />
            <MobileMenu pathname={pathname} />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string | null }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 -mr-2 text-text-secondary"
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M5 5l10 10M15 5L5 15" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-surface-0 border-b border-surface-2 shadow-sm">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm py-1 ${
                  pathname === link.href ? "text-brand-teal font-medium" : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
