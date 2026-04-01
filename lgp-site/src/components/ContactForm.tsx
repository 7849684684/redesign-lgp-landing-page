"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error("Webhook URL not configured");
      }

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-surface-1 border border-surface-2 rounded-[var(--radius-sm)] p-8 text-center">
        <p className="font-editorial text-xl text-text-primary mb-2">Message sent.</p>
        <p className="text-sm text-text-secondary">
          We will be in touch within a couple of business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-text-primary mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 bg-surface-0 border border-surface-2 rounded-[var(--radius-sm)] text-sm text-text-primary focus:outline-none focus:border-brand-teal transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-text-primary mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 bg-surface-0 border border-surface-2 rounded-[var(--radius-sm)] text-sm text-text-primary focus:outline-none focus:border-brand-teal transition-colors"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-text-primary mb-1.5">
          What are you working on?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 bg-surface-0 border border-surface-2 rounded-[var(--radius-sm)] text-sm text-text-primary focus:outline-none focus:border-brand-teal transition-colors resize-none"
          placeholder="Tell us about the challenge you are facing..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-brand-teal text-white hover:bg-brand-teal-light transition-colors rounded-[var(--radius-sm)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-error">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
