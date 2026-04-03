"use client";

import { useState, type FormEvent } from "react";

interface SubscribeFormProps {
  variant?: "card" | "inline";
}

export default function SubscribeForm({ variant = "card" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formUrl = process.env.NEXT_PUBLIC_SENDFOX_FORM_URL || "#";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Submit to SendFox via their form endpoint
    try {
      const form = new FormData();
      form.append("email", email);
      await fetch(formUrl, { method: "POST", body: form, mode: "no-cors" });
      setSubmitted(true);
    } catch {
      // Fallback: open in new tab
      window.open(`${formUrl}?email=${encodeURIComponent(email)}`, "_blank");
    }
  }

  if (submitted) {
    return (
      <div className={variant === "card" ? "border border-surface-2 rounded-[var(--radius-md)] p-8 text-center" : "py-6 text-center"}>
        <p className="font-editorial text-lg text-text-primary">You're in.</p>
        <p className="text-sm text-text-secondary mt-1">Check your inbox to confirm.</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="py-8 border-t border-surface-2">
        <p className="text-sm text-text-secondary mb-3">Get new articles on strategy and decision-making.</p>
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 bg-surface-0 border border-surface-2 rounded-[var(--radius-sm)] px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:border-brand-teal focus:outline-none"
          />
          <button
            type="submit"
            className="bg-brand-amber text-white text-sm font-medium px-5 py-2 rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="border border-surface-2 rounded-[var(--radius-md)] p-8 my-8">
      <h3 className="font-editorial text-xl text-text-primary mb-2">Stay in the loop</h3>
      <p className="text-sm text-text-secondary mb-4">Get new articles on strategy and decision-making delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 bg-surface-0 border border-surface-2 rounded-[var(--radius-sm)] px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:border-brand-teal focus:outline-none"
        />
        <button
          type="submit"
          className="bg-brand-amber text-white text-sm font-medium px-5 py-2 rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
