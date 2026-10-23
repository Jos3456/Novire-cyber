import Link from "next/link";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

const services = [
  { icon: "🖨️", title: "Cyber Café & Document Services", intro: "Everyday document and internet services for students, job seekers and businesses.", items: ["Printing and photocopying", "Scanning and document preparation", "Typing and document formatting", "CV and application assistance", "Online applications", "PDF conversion", "Internet access and online research"] },
  { icon: "🛠️", title: "IT Support & Computer Services", intro: "Friendly help with common computer, software and peripheral issues.", items: ["Computer troubleshooting", "Software and operating system installation", "Computer maintenance", "Printer setup and troubleshooting", "File backup and recovery assistance", "Email setup", "Basic computer lessons"] },
  { icon: "🎨", title: "Graphic Design & Digital Media", intro: "Clear, professional visual materials for personal and business needs.", items: ["Logo and brand design", "Business cards", "Posters and flyers", "Brochures and invitations", "Social media graphics", "CV formatting", "Business profiles"] },
  { icon: "💻", title: "Web Development & Design", intro: "Websites and online presence support for individuals and small businesses.", items: ["Business websites", "Portfolio websites", "E-commerce websites", "Landing pages and website redesign", "Mobile-friendly website design", "Website maintenance", "Domain and hosting assistance"] },
  { icon: "🔐", title: "Cybersecurity Services", intro: "Basic, authorized security guidance that helps people protect their digital accounts and systems.", items: ["Website security reviews", "Basic vulnerability assessments with authorization", "Account security and MFA setup", "Password security guidance", "Backup and recovery planning", "Phishing awareness training", "Security updates and hardening"] },
  { icon: "🌐", title: "Networking & Cloud Services", intro: "Setup and troubleshooting support for common small-office connectivity and cloud needs.", items: ["Wi-Fi and router setup", "Small office networking", "Internet connectivity troubleshooting", "File and printer sharing", "Cloud storage setup", "Business email assistance"] },
  { icon: "📚", title: "IT & Digital Skills Training", intro: "Practical guidance for learners who want to become more confident using technology.", items: ["Computer basics", "Microsoft Word and Excel", "Internet and email skills", "Web development fundamentals", "HTML, CSS and JavaScript basics", "Cybersecurity awareness", "Online safety"] },
];

export default function ServicesPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero"><span className="eyebrow">WHAT WE DO</span><h1>Our Services</h1><p>Explore the full range of digital, computer, creative and cyber café services listed by Novire Internet Cyber Cafe. Contact us to discuss what you need.</p><div className="hero-actions"><Link className="primary-button" href="/contact">Ask About a Service →</Link><a className="secondary-button" href="https://wa.me/254700688183" target="_blank" rel="noreferrer">WhatsApp Us</a></div></section>
      <section className="section"><div className="services-page-intro"><h2>Practical Help, All in One Place</h2><p>Choose a category below to see the services included. For specialist or technical work, please contact us first to confirm availability and scope.</p></div><div className="services-page-grid">{services.map((service) => <article className="service-card" key={service.title}><div className="service-icon" aria-hidden="true">{service.icon}</div><h3>{service.title}</h3><p>{service.intro}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={"/contact?service=" + encodeURIComponent(service.title)}>Enquire about this service →</Link></article>)}</div></section>
      <section className="page-cta"><h2>Not Sure Which Service You Need?</h2><p>Tell us what you are trying to do and we will help you find the right next step.</p><Link className="primary-button" href="/contact">Contact Novire →</Link></section>
      <SiteFooter />
    </main>
  );
}
