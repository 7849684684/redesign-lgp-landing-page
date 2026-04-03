"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const article = document.querySelector("article.prose");
        if (!article) { ticking = false; return; }
        const rect = article.getBoundingClientRect();
        const articleTop = rect.top + window.scrollY;
        const articleHeight = rect.height;
        const scrollPos = window.scrollY + window.innerHeight * 0.3;
        const pct = Math.max(0, Math.min(1, (scrollPos - articleTop) / articleHeight));
        setProgress(pct);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hidden md:flex justify-center pt-4">
      <div className="sticky top-1/2 -translate-y-1/2 h-32">
        <div className="w-[3px] h-full rounded-full bg-surface-2 overflow-hidden">
          <div
            className="w-full rounded-full bg-brand-teal transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
