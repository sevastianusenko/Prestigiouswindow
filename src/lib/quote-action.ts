"use server";

import { site } from "@/lib/site";

export type QuoteState = { status: "idle" | "sent" | "error"; message?: string };

const limits = {
  name: 120,
  phone: 40,
  email: 200,
  town: 120,
  service: 60,
  scope: 60,
  callTime: 60,
  message: 4000,
  page: 200,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: keyof typeof limits) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, limits[key]) : "";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // Honeypot: real visitors never see or fill this field, bots usually do.
  // Pretend success so the bot has nothing to learn from.
  if (formData.get("company")) return { status: "sent" };

  const name = field(formData, "name");
  const phone = field(formData, "phone");
  const email = field(formData, "email");
  const town = field(formData, "town");
  const service = field(formData, "service");
  const scope = field(formData, "scope");
  const callTime = field(formData, "callTime");
  const message = field(formData, "message");
  const page = field(formData, "page");

  if (!name || phone.replace(/\D/g, "").length < 7) {
    return { status: "error", message: "Please enter your name and a phone number we can reach you on." };
  }
  if (email && !emailPattern.test(email)) {
    return { status: "error", message: "That email address doesn't look right — please check it." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Quote form: RESEND_API_KEY, QUOTE_FROM_EMAIL or QUOTE_TO_EMAIL is not set");
    return { status: "error", message: `Something went wrong on our end. Please call ${site.phoneDisplay}.` };
  }

  const optional: [string, string][] = [
    ["Email", email],
    ["Service", service],
    ["Scope", scope],
    ["Best time to call", callTime],
  ];
  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ...optional.filter(([, v]) => v),
    ["Town", town || "—"],
    ["Message", message || "—"],
    ["Page", page || "—"],
  ];

  const html = `
    <h2 style="font-family:sans-serif">New quote request</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: `${site.name} <${from}>`,
        to: to.split(",").map((s) => s.trim()),
        subject: `Quote request: ${name}${service ? ` — ${service}` : ""}${town ? `, ${town}` : ""}`,
        // Hitting Reply in the inbox answers the homeowner directly.
        ...(email && { reply_to: email }),
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Quote form: Resend responded", res.status, await res.text());
      return { status: "error", message: `We couldn't send your request. Please call ${site.phoneDisplay}.` };
    }
  } catch (err) {
    console.error("Quote form: request to Resend failed", err);
    return { status: "error", message: `We couldn't send your request. Please call ${site.phoneDisplay}.` };
  }

  return { status: "sent" };
}
