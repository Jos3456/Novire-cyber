import Link from "next/link";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

const featuredServices = [
  { icon: "🖨️", title: "Cyber Café & Document Services", text: "Printing, photocopying, scanning, typing, document formatting and online application assistance." },
  { icon: "🛠️", title: "IT Support & Computer Services", text: "Practical help with computer troubleshooting, software installation, maintenance and printer setup." },
  { icon: "🎨", title: "Graphic Design & Digital Media", text: "Business cards, posters, flyers, invitations, social media graphics and CV formatting." },
  { icon: "💻", title: "Web Development & Design", text: "Business websites, portfolio sites, landing pages, website redesign and maintenance." },
];

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">YOUR DIGITAL PARTNER IN KENYA</span>
          <h1>Technology Made<br /><span>Simple for You.</span></h1>
          <p>From everyday cyber café services and computer support to digital design and web solutions, Novire helps you get things done with confidence.</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/services">Explore Our Services →</Link>
            <Link className="secondary-button" href="/contact">Contact Us</Link>
          </div>
          <div className="hero-points"><span>✓ Friendly Support</span><span>✓ Practical Solutions</span><span>✓ Digital Skills</span></div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/hero-img.jpg"
            alt="Novire cyber café and digital services"
            style={{ width: "100%", height: "430px", objectFit: "cover", borderRadius: "24px" }}
          />
        </div>
      </section>
      <section className="trust-strip">
        <div><strong>7</strong><span>Service Categories</span></div>
        <div><strong>One</strong><span>Digital Destination</span></div>
        <div><strong>Smart</strong><span>Technology Solutions</span></div>
      </section>
      <section className="section services-section" id="services">
        <div className="section-heading"><span className="eyebrow">HOW WE CAN HELP</span><h2>Services for Everyday Needs</h2><p>From documents and computer support to creative and technical services, find practical help in one place.</p></div>
        <div className="service-grid">
          {featuredServices.map((service) => <article className="service-card" key={service.title}><div className="service-icon" aria-hidden="true">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p><Link className="text-link" href="/services">Explore service details →</Link></article>)}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}><Link className="primary-button" href="/services">View All Services →</Link></div>
      </section>
      <section className="about-section" id="about">
        <div className="about-art" aria-hidden="true"><div className="about-art-inner"><span>YOUR IDEAS.</span><strong>OUR TECHNOLOGY.</strong><span>BETTER POSSIBILITIES.</span><div className="about-orbit">N</div></div></div>
        <div className="about-content"><span className="eyebrow">ABOUT NOVIRE</span><h2>Helping You Thrive in a Digital World</h2><p>Novire Internet Cyber Cafe brings essential digital services together in one place. Whether you need help with a document, a computer problem, a business website or new digital skills, we aim to make technology easier to understand and use.</p><p>Our goal is to provide approachable service, practical solutions and support that helps people and businesses make the most of technology.</p><div className="about-benefits"><div>✓ Practical, customer-focused support</div><div>✓ Services for individuals and businesses</div><div>✓ Learning and digital growth</div></div><Link className="primary-button" href="/contact">Talk to Our Team →</Link></div>
      </section>
      <section className="section location-section">
        <div className="section-heading"><span className="eyebrow">COME VISIT US</span><h2>Find Novire</h2><p>We look forward to helping with your digital and cyber café needs.</p></div>
        <div className="location-card"><div className="location-icon" aria-hidden="true">📍</div><div><h3>Novire Internet Cyber Cafe</h3><p>Cacia, Milele Centre, Namanga Road, near Equity Bank, opposite KCA University, Acacia Room 031, Kitengela, Kenya</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Milele+Centre+Namanga+Road+Kitengela+near+Equity+Bank+KCA+University" target="_blank" rel="noreferrer">Find us on Google Maps →</a></div></div>
      </section>
      <section className="contact-section"><div className="contact-inner"><span className="eyebrow">LET US CONNECT</span><h2>How Can We Help You Today?</h2><p>Have a question or need a digital solution? Get in touch with Novire Internet Cyber Cafe.</p><div className="contact-actions"><a className="primary-button light-button" href="https://wa.me/254700688183" target="_blank" rel="noreferrer">Chat on WhatsApp</a><Link className="secondary-button contact-outline" href="/contact">Contact Us</Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
