"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: not wired to a backend yet — needs a real endpoint (email API,
    // CRM webhook) before launch. See project notes.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="frame-line relative p-8 bg-cream">
        <p className="font-display text-xl text-graphite">Request received.</p>
        <p className="mt-2 text-sm text-graphite/70">
          We&apos;ll call you back within one business day. For anything urgent, call{" "}
          <a href={site.phoneHref} className="text-gold underline underline-offset-4">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="frame-line relative p-6 sm:p-8 bg-cream space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="font-mono text-xs tracking-wide uppercase text-graphite/60">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            className="mt-1.5 w-full border border-mist bg-quartz px-3 py-2.5 text-sm focus:border-gold outline-none"
          />
        </label>
        <label className="block">
          <span className="font-mono text-xs tracking-wide uppercase text-graphite/60">
            Phone
          </span>
          <input
            required
            name="phone"
            type="tel"
            className="mt-1.5 w-full border border-mist bg-quartz px-3 py-2.5 text-sm focus:border-gold outline-none"
          />
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-xs tracking-wide uppercase text-graphite/60">
          Town
        </span>
        <input
          name="town"
          type="text"
          placeholder="East Earl, New Holland, Terre Hill…"
          className="mt-1.5 w-full border border-mist bg-quartz px-3 py-2.5 text-sm focus:border-gold outline-none"
        />
      </label>
      {!compact && (
        <label className="block">
          <span className="font-mono text-xs tracking-wide uppercase text-graphite/60">
            What needs doing?
          </span>
          <textarea
            name="message"
            rows={3}
            placeholder="A few windows, a full replacement, a door that won't latch — whatever it is."
            className="mt-1.5 w-full border border-mist bg-quartz px-3 py-2.5 text-sm focus:border-gold outline-none resize-none"
          />
        </label>
      )}
      <button
        type="submit"
        className="w-full bg-graphite text-quartz px-5 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-gold hover:text-graphite transition-colors"
      >
        Request a Quote
      </button>
      <p className="text-xs text-graphite/50">
        No pressure, no obligation. Or call {site.phoneDisplay} directly.
      </p>
    </form>
  );
}
