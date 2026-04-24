"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";

interface ServicesMenuProps {
  active: boolean;
}

export default function ServicesMenu({ active }: ServicesMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        containerRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const focusItem = (index: number) => {
    const len = services.length;
    const i = ((index % len) + len) % len;
    itemRefs.current[i]?.focus();
  };

  const onItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusItem(index + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusItem(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusItem(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusItem(services.length - 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            // focus first item after render
            setTimeout(() => focusItem(0), 0);
          }
        }}
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:outline-none rounded-sm ${
          active
            ? "text-brand-teal"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        Services
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Services"
          className="absolute right-0 top-full mt-2 w-[340px] bg-surface-0 border border-surface-2 rounded-md shadow-lg overflow-hidden"
        >
          <ul className="py-2">
            {services.map((service, i) => (
              <li key={service.slug} role="none">
                <Link
                  href={service.href}
                  role="menuitem"
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  onClick={() => setOpen(false)}
                  onKeyDown={(e) => onItemKeyDown(e, i)}
                  className="block px-5 py-3 hover:bg-surface-1 focus:bg-surface-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-editorial text-base text-text-primary">
                      {service.label}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-text-tertiary shrink-0">
                      {service.format}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary leading-snug">
                    {service.descriptor}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-surface-2 px-5 py-3 bg-surface-1">
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-xs font-medium text-brand-teal hover:underline"
            >
              See all services &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
