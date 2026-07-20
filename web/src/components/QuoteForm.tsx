"use client";

import { useState } from "react";

// TODO: create a free form at formspree.io and paste its endpoint here to receive emails.
// Until then the form validates and shows the success state but does not deliver.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
const wired = !FORMSPREE_ENDPOINT.includes("xxxxxxxx");

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!wired) { setStatus("ok"); form.reset(); return; }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) { setStatus("ok"); form.reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="form" id="book">
      <div className="wrap form-grid">
        <div className="form-intro">
          <span className="eyebrow">Get in touch</span>
          <h2>Request a quote.</h2>
          <p>Tell me about the property and what you need captured — I&apos;ll send a quote the same day.</p>
          <div className="form-contacts">
            <a href="tel:+16822882885">
              <span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.1 2.2Z" /></svg></span>
              (682) 288-2885
            </a>
            <a href="mailto:max@grabov.com">
              <span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span>
              max@grabov.com
            </a>
            <a href="https://wa.me/16822882885">
              <span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2 .2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.5l-.3.4c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.3 0 .9-.2 1.4Z" /></svg></span>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="form-card">
          {status === "ok" ? (
            <div className="form-ok">
              <div className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
              <h3>Thanks — your request is in.</h3>
              <p>I&apos;ll reply within the day. Prefer to talk? (682) 288-2885.</p>
            </div>
          ) : (
            <form className="qform" onSubmit={onSubmit}>
              <div className="qrow">
                <div className="qfield"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" placeholder="Your name" /></div>
                <div className="qfield"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="(000) 000-0000" /></div>
              </div>
              <div className="qfield"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" /></div>
              <div className="qfield"><label htmlFor="address">Property address</label><input id="address" name="address" required placeholder="Street, city" /></div>
              <div className="qrow">
                <div className="qfield">
                  <label htmlFor="type">Property type</label>
                  <select id="type" name="property_type" defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Real estate listing</option>
                    <option>Land / ranch</option>
                    <option>Construction / roof</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="qfield">
                  <label htmlFor="needs">What you need</label>
                  <select id="needs" name="needs" defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Photos</option>
                    <option>Photos + video</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="qfield"><label htmlFor="message">Anything else (optional)</label><textarea id="message" name="message" placeholder="Timing, acreage, must-have shots…" /></div>
              <button className="pill-blue submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request a quote"}
              </button>
              {status === "error" && <p className="err">Something went wrong — please call (682) 288-2885.</p>}
              <p className="note">No spam. Just a quote and a shoot window.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
