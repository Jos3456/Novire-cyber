import Link from "next/link";
import CurrentYear from "./current-year";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="brand footer-brand" href="/">
          <span className="brand-icon">N</span>
          <span><strong>NOVIRE</strong><small>INTERNET CYBER CAFE</small></span>
        </Link>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><strong>Phone:</strong> <a href="tel:0700688183">0700 688 183</a></p>
          <p><strong>Phone:</strong> <a href="tel:0718891681">0718 891 681</a></p>
          <p><strong>Email:</strong> <a href="mailto:novirecyber@gmail.com">novirecyber@gmail.com</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/254700688183" target="_blank" rel="noreferrer">Chat with us</a></p>
        </div>
        <div className="footer-column">
          <h3>Visit Us</h3>
          <p>Acacia Building, Room 031</p>
          <p>Milele Centre, Namanga Road</p>
          <p>Near Equity Bank, opposite KCA University</p>
          <p>Kitengela, Kenya</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Milele+Centre+Namanga+Road+Kitengela+Kenya" target="_blank" rel="noreferrer">Find us on Google Maps →</a>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© <CurrentYear /> Novire Internet Cyber Cafe. All rights reserved.</p>
        <Link href="/">Back to home ↑</Link>
      </div>
    </footer>
  );
}
