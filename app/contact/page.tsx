"use client";

import { useState, type FormEvent } from "react";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: accessKey }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero"><span className="eyebrow">LET US CONNECT</span><h1>Contact Novire</h1><p>Have a question, need a service or want to discuss a project? Send us a message or use the contact details alongside the form.</p></section>
      <section className="section">
        <div className="contact-layout">
          <div className="contact-panel">
            <h2>Send Us a Message</h2>
            <p style={{ color: "#68758a", lineHeight: 1.7, fontSize: 14 }}>Fill in the form and your message will be sent to our email inbox. We will get back to you as soon as we can.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="New message from the Novire Cyber website" />
              <label className="form-field">Your name<input name="name" type="text" placeholder="e.g. Jane Wanjiku" autoComplete="name" required /></label>
              <label className="form-field">Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
              <label className="form-field">Phone number (optional)<input name="phone" type="tel" placeholder="e.g. 07xx xxx xxx" autoComplete="tel" /></label>
              <label className="form-field">Service you are interested in<select name="service" defaultValue=""><option value="">Choose a service (optional)</option><option>Cyber Café &amp; Document Services</option><option>IT Support &amp; Computer Services</option><option>Graphic Design &amp; Digital Media</option><option>Web Development &amp; Design</option><option>Cybersecurity Services</option><option>Networking &amp; Cloud Services</option><option>IT &amp; Digital Skills Training</option><option>Other / Not sure yet</option></select></label>
              <label className="form-field">How can we help?<textarea name="message" placeholder="Tell us a little about what you need..." required /></label>
              <button className="primary-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Message"}</button>
              {status === "success" && <p className="form-notice" role="status">Thank you! Your message has been sent. Novire will get back to you as soon as possible.</p>}
              {status === "error" && <p className="form-notice" role="alert">Sorry, your message could not be sent. Please try again or contact Novire by phone, WhatsApp or email. Check that the Web3Forms access key is configured in .env.local.</p>}
            </form>
          </div>
          <aside className="contact-panel">
            <h2>Contact Details</h2>
            <div className="contact-details">
              <div className="contact-detail"><strong>Call us</strong><p><a href="tel:0700688183">0700 688 183</a><br /><a href="tel:0718891681">0718 891 681</a></p></div>
              <div className="contact-detail"><strong>WhatsApp</strong><p><a href="https://wa.me/254700688183" target="_blank" rel="noreferrer">Chat with Novire on WhatsApp →</a></p></div>
              <div className="contact-detail"><strong>Email</strong><p><a href="mailto:novirecyber@gmail.com">novirecyber@gmail.com</a></p></div>
              <div className="contact-detail"><strong>Visit us</strong><p>Acacia Building, Room 031<br />Milele Centre, Namanga Road<br />Near Equity Bank, opposite KCA University<br />Kitengela, Kenya</p><a href="https://www.google.com/maps/search/?api=1&query=Milele+Centre+Namanga+Road+Kitengela+near+Equity+Bank+KCA+University" target="_blank" rel="noreferrer">Get directions on Google Maps →</a></div>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
