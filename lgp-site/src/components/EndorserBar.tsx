"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import ServicesMenu from "./ServicesMenu";
import { services } from "@/lib/services";

const products = [
  { href: "https://shortlist.games", label: "Shortlist" },
  { href: "https://insightrpg.longgameproject.org", label: "InsightRPG" },
  { href: "https://prism.cards", label: "PRISM" },
  { href: "https://strategysoup.longgameproject.org", label: "Strategy Soup" },
  { href: "https://courses.longgameproject.org", label: "Courses" },
];

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function EndorserBar() {
  const pathname = usePathname();
  const servicesActive = pathname?.startsWith("/services") ?? false;

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
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/about" || pathname?.startsWith("/about/")
                    ? "text-brand-teal"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                About
              </Link>
              <ServicesMenu active={servicesActive} />
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/blog" || pathname?.startsWith("/blog/")
                    ? "text-brand-teal"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/contact"
                    ? "text-brand-teal"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Contact
              </Link>
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

            <div className="pt-3 mt-1 border-t border-surface-2">
              <p className="label text-text-tertiary mb-2">Services</p>
              <div className="flex flex-col gap-2 pl-1">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className={`text-sm py-1 ${
                    pathname === "/services"
                      ? "text-brand-teal font-medium"
                      : "text-text-secondary"
                  }`}
                >
                  All services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm py-1 ${
                      pathname === service.href
                        ? "text-brand-teal font-medium"
                        : "text-text-secondary"
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
