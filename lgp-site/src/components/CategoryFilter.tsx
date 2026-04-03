"use client";

import { useSearchParams, useRouter } from "next/navigation";

const CATEGORIES = ["Strategy", "Leadership", "Decision-Making", "Interactive"];

export default function CategoryFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const active = searchParams.get("category") || "All";

  function select(category: string) {
    if (category === "All") {
      router.push("/blog", { scroll: false });
    } else {
      router.push(`/blog?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  }

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mb-2">
      {["All", ...CATEGORIES].map((cat) => (
        <button
          key={cat}
          onClick={() => select(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
            active === cat
              ? "bg-brand-teal text-white"
              : "border border-surface-2 text-text-secondary hover:border-brand-teal"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
