import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="navbar">
      <Link className="brand" href="/" aria-label="Novire Cyber home">
        <span className="brand-icon">N</span>
        <span><strong>NOVIRE</strong><small>INTERNET CYBER CAFE</small></span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/#about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="nav-button" href="/contact">Get in Touch</Link>
    </header>
  );
}
