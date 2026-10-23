"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero"><span className="eyebrow">LET US CONNECT</span><h1>Contact Novire</h1><p>Have a question, need a service or want to discuss a project? Send us a message or use the contact details alongside the form.</p></section>
      <section className="section">
        <div className="contact-layout">
          <div className="contact-panel">
            <h2>Send Us a Message</h2>
            <p style={{ color: "#68758a", lineHeight: 1.7, fontSize: 14 }}>Complete the form below. Email delivery is not connected yet, so please use the phone, WhatsApp or email details on this page for a message that needs to reach us today.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="form-field">Your name<input name="name" type="text" placeholder="e.g. Jane Wanjiku" autoComplete="name" required /></label>
              <label className="form-field">Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
              <label className="form-field">Phone number (optional)<input name="phone" type="tel" placeholder="e.g. 07xx xxx xxx" autoComplete="tel" /></label>
              <label className="form-field">Service you are interested in<select name="service" defaultValue={requestedService}><option value="">Choose a service (optional)</option><option>Cyber Café &amp; Document Services</option><option>IT Support &amp; Computer Services</option><option>Graphic Design &amp; Digital Media</option><option>Web Development &amp; Design</option><option>Cybersecurity Services</option><option>Networking &amp; Cloud Services</option><option>IT &amp; Digital Skills Training</option><option>Other / Not sure yet</option></select></label>
              <label className="form-field">How can we help?<textarea name="message" placeholder="Tell us a little about what you need..." required /></label>
              <button className="primary-button" type="submit">Preview Submission</button>
              {submitted && <p className="form-notice" role="status">The form is currently a visual prototype and has not sent your message. Please contact Novire by phone, WhatsApp or email for now. We will connect this form to email next.</p>}
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
