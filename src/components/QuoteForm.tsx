"use client";

import { startTransition, useActionState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { submitQuote, type QuoteState } from "@/lib/quote-action";

const initialState: QuoteState = { status: "idle" };

const labelClass = "font-sans text-xs tracking-wide uppercase text-ink/60";
const inputClass =
  "mt-1.5 w-full rounded-md border border-line bg-paper px-3 py-2.5 text-sm focus:border-gold outline-none";

const services = [
  "Window replacement",
  "Window repair",
  "Door replacement",
  "Door repair",
  "Windows & doors",
];
const scopes = ["1", "2–5", "6–10", "More than 10", "Whole house"];
const callTimes = ["Morning", "Afternoon", "Evening"];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  const pathname = usePathname();

  // Submitting through onSubmit instead of <form action> keeps what the visitor
  // typed if the send fails — React resets the form after an action otherwise.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => formAction(data));
  }

  if (state.status === "sent") {
    return (
      <div className="rounded-lg border border-line p-8 bg-fog">
        <p className="font-display text-xl text-ink">Request received.</p>
        <p className="mt-2 text-sm text-ink/70">
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
    <form onSubmit={handleSubmit} className="rounded-lg border border-line p-6 sm:p-8 bg-fog space-y-5">
      <input type="hidden" name="page" value={pathname} />
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="font-sans text-xs tracking-wide uppercase text-ink/60">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            className="mt-1.5 w-full rounded-md border border-line bg-paper px-3 py-2.5 text-sm focus:border-gold outline-none"
          />
        </label>
        <label className="block">
          <span className="font-sans text-xs tracking-wide uppercase text-ink/60">
            Phone
          </span>
          <input
            required
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-md border border-line bg-paper px-3 py-2.5 text-sm focus:border-gold outline-none"
          />
        </label>
      </div>
      {compact ? (
        <label className="block">
          <span className={labelClass}>Town</span>
          <input
            name="town"
            type="text"
            placeholder="East Earl, New Holland, Terre Hill…"
            className={inputClass}
          />
        </label>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className={labelClass}>
                Email <span className="normal-case tracking-normal text-ink/40">(optional)</span>
              </span>
              <input name="email" type="email" autoComplete="email" className={inputClass} />
            </label>
            <label className="block">
              <span className={labelClass}>Town</span>
              <input
                name="town"
                type="text"
                placeholder="East Earl, New Holland…"
                className={inputClass}
              />
            </label>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <label className="block">
              <span className={labelClass}>Service</span>
              <select name="service" defaultValue="" className={inputClass}>
                <option value="">Not sure yet</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>How many?</span>
              <select name="scope" defaultValue="" className={inputClass}>
                <option value="">—</option>
                {scopes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>Best time to call</span>
              <select name="callTime" defaultValue="" className={inputClass}>
                <option value="">Anytime</option>
                {callTimes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
          </div>
        </>
      )}
      {!compact && (
        <label className="block">
          <span className="font-sans text-xs tracking-wide uppercase text-ink/60">
            What needs doing?
          </span>
          <textarea
            name="message"
            rows={3}
            placeholder="A few windows, a full replacement, a door that won't latch — whatever it is."
            className="mt-1.5 w-full rounded-md border border-line bg-paper px-3 py-2.5 text-sm focus:border-gold outline-none resize-none"
          />
        </label>
      )}
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-ink text-white px-5 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-colors disabled:opacity-60 disabled:pointer-events-none"
      >
        {pending ? "Sending…" : "Request a Quote"}
      </button>
      <p className="text-xs text-ink/50">
        No pressure, no obligation. Or call {site.phoneDisplay} directly.
      </p>
    </form>
  );
}
