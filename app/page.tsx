
"use client";

import { useState } from "react";

const services = [
  {
    icon: "💻",
    title: "Web Development & Design",
    items: [
      "Business websites",
      "Portfolio websites",
      "E-commerce websites",
      "Landing pages and website redesign",
      "Mobile-friendly website design",
      "Website maintenance",
      "Domain and hosting assistance",
    ],
  },
  {
    icon: "🔐",
    title: "Cybersecurity Services",
    items: [
      "Website security reviews",
      "Basic vulnerability assessments with authorization",
      "Account security and MFA setup",
      "Password security guidance",
      "Backup and recovery planning",
      "Phishing awareness training",
      "Security updates and hardening",
    ],
  },
  {
    icon: "🛠️",
    title: "IT Support & Computer Services",
    items: [
      "Computer troubleshooting",
      "Software and operating system installation",
      "Computer maintenance",
      "Printer setup and troubleshooting",
      "File backup and recovery assistance",
      "Email setup",
      "Basic computer lessons",
    ],
  },
  {
    icon: "🌐",
    title: "Networking & Cloud Services",
    items: [
      "Wi-Fi and router setup",
      "Small office networking",
      "Internet connectivity troubleshooting",
      "File and printer sharing",
      "Cloud storage setup",
      "Business email assistance",
    ],
  },
  {
    icon: "🎨",
    title: "Graphic Design & Digital Media",
    items: [
      "Logo and brand design",
      "Business cards",
      "Posters and flyers",
      "Brochures and invitations",
      "Social media graphics",
      "CV formatting",
      "Business profiles",
    ],
  },
  {
    icon: "📚",
    title: "IT & Digital Skills Training",
    items: [
      "Computer basics",
      "Microsoft Word and Excel",
      "Internet and email skills",
      "Web development fundamentals",
      "HTML, CSS and JavaScript basics",
      "Cybersecurity awareness",
      "Online safety",
    ],
  },
  {
    icon: "🖨️",
    title: "Cyber Café & Document Services",
    items: [
      "Printing and photocopying",
      "Scanning and document preparation",
      "Typing and document formatting",
      "CV and application assistance",
      "Online applications",
      "PDF conversion",
      "Internet access and online research",
    ],
  },
];

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">N</span>
          <span>
            <strong>NOVIRE</strong>
            <small>INTERNET CYBER CAFE</small>
          </span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Get in Touch
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">YOUR DIGITAL PARTNER IN KENYA</span>
          <h1>
            Technology Made
            <br />
            <span>Simple for You.</span>
          </h1>
          <p>
            From cyber café services and computer support to web development,
            cybersecurity and digital skills training, Novire helps you work
            smarter in a connected world.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Explore Our Services →
            </a>
            <a className="secondary-button" href="#contact">
              Contact Us
            </a>
          </div>

          <div className="hero-points">
            <span>✓ Friendly Support</span>
            <span>✓ Practical Solutions</span>
            <span>✓ Digital Skills</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle">
            <div className="laptop">
              <div className="laptop-screen">
                <span className="screen-dot">● ● ●</span>
                <div className="screen-symbol">N</div>
                <strong>Connect.</strong>
                <strong>Create.</strong>
                <strong>Grow.</strong>
                <div className="screen-line" />
                <div className="screen-line short" />
              </div>
              <div className="laptop-base" />
            </div>
            <div className="floating-card card-one">
              <span>🔒</span> Digital Security
            </div>
            <div className="floating-card card-two">
              <span>🌐</span> Web Solutions
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div>
          <strong>7</strong>
          <span>Service Categories</span>
        </div>
        <div>
          <strong>One</strong>
          <span>Digital Destination</span>
        </div>
        <div>
          <strong>Smart</strong>
          <span>Technology Solutions</span>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Our Services</h2>
          <p>
            Reliable digital, computer and cyber café services designed for
            individuals, students and businesses.
          </p>
        </div>

        <div className="service-grid">
          {services.slice(0, showAll ? services.length : 4).map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="text-link">
                Enquire about this service →
              </a>
            </article>
          ))}
        </div>

        <button
          className="primary-button view-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Fewer Services ↑" : "View All Services →"}
        </button>
      </section>

      <section className="about-section" id="about">
        <div className="about-art">
          <div className="about-art-inner">
            <span>YOUR IDEAS.</span>
            <strong>OUR TECHNOLOGY.</strong>
            <span>BETTER POSSIBILITIES.</span>
            <div className="about-orbit">N</div>
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">ABOUT NOVIRE</span>
          <h2>Helping You Thrive in a Digital World</h2>
          <p>
            Novire Internet Cyber Cafe brings essential digital services
            together in one place. Whether you need help with a document, a
            computer problem, a business website or new digital skills, we aim
            to make technology easier to understand and use.
          </p>
          <p>
            Our goal is to provide approachable service, practical solutions and
            support that helps people and businesses make the most of
            technology.
          </p>

          <div className="about-benefits">
            <div>✓ Practical, customer-focused support</div>
            <div>✓ Services for individuals and businesses</div>
            <div>✓ Learning and digital growth</div>
          </div>

          <a className="primary-button" href="#contact">
            Talk to Our Team →
          </a>
        </div>
      </section>

      <section className="section location-section">
        <div className="section-heading">
          <span className="eyebrow">COME VISIT US</span>
          <h2>Find Novire</h2>
          <p>
            We look forward to helping with your digital and cyber café needs.
          </p>
        </div>

        <div className="location-card">
          <div className="location-icon">📍</div>
          <div>
            <h3>Novire Internet Cyber Cafe</h3>
            <p>
              Cacia, Milele Centre, Namanga Road, near Equity Bank, opposite KCA
              University, Acacia Room 031, Kitengela, Kenya
            </p>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Milele+Centre+Namanga+Road+Kitengela+near+Equity+Bank+KCA+University"
              target="_blank"
              rel="noreferrer"
            >
              Find us on Google Maps →
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <span className="eyebrow">LET US CONNECT</span>
          <h2>How Can We Help You Today?</h2>
          <p>
            Have a question or need a digital solution? Get in touch with Novire
            Internet Cyber Cafe.
          </p>

          <div className="contact-actions">
            <a
              className="primary-button light-button"
              href="https://wa.me/254700688183"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
            <a className="secondary-button contact-outline" href="#services">
              Explore Services
            </a>
          </div>

          <small>
            WhatsApp contact details will be added once your business number is
            available.
          </small>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home">
            <span className="brand-icon">N</span>
            <span>
              <strong>NOVIRE</strong>
              <small>INTERNET CYBER CAFE</small>
            </span>
          </a>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>
              <strong>Phone:</strong> <a href="tel:0700688183">0700 688 183</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:0718891681">0718 891 681</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:novirecyber@gmail.com">novirecyber@gmail.com</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/254700688183"
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </p>
          </div>

          <div className="footer-column">
            <h3>Visit Us</h3>
            <p>Acacia Building, Room 031</p>
            <p>Milele Centre, Namanga Road</p>
            <p>Near Equity Bank, opposite KCA University</p>
            <p>Kitengela, Kenya</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Milele+Centre+Namanga+Road+Kitengela+Kenya"
              target="_blank"
              rel="noreferrer"
            >
              Find us on Google Maps →
            </a>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#services">Our Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <h3>Follow Us</h3>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Novire Internet Cyber Cafe. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <style jsx>
        {`
          :global(*) {
            box-sizing: border-box;
          }

          :global(html) {
            scroll-behavior: smooth;
            scroll-padding-top: 90px;
          }

          :global(body) {
            margin: 0;
            color: #17243b;
            background: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
          }

          :global(a) {
            text-decoration: none;
          }

          .navbar {
            min-height: 82px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            padding: 15px 7%;
            background: #fff;
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #12284c;
          }

          .brand-icon {
            display: grid;
            place-items: center;
            width: 43px;
            height: 43px;
            color: white;
            font-size: 25px;
            font-weight: 800;
            border-radius: 12px;
            background: #1266db;
          }

          .brand strong,
          .brand small {
            display: block;
          }

          .brand strong {
            font-size: 20px;
            letter-spacing: 2px;
          }

          .brand small {
            margin-top: 4px;
            font-size: 9px;
            letter-spacing: 1.4px;
          }

          nav {
            display: flex;
            align-items: center;
            gap: 26px;
          }

          nav a,
          .footer > a:last-of-type {
            color: #4a5870;
            font-size: 14px;
            font-weight: 600;
          }

          nav a:hover,
          .text-link:hover {
            color: #1266db;
          }

          .nav-button,
          .primary-button,
          .secondary-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 21px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition:
              transform 0.2s,
              background 0.2s;
          }

          .nav-button,
          .primary-button {
            color: white;
            background: #1266db;
            border: 1px solid #1266db;
          }

          .nav-button {
            animation: pulse-button 2s infinite;
          }

          @keyframes pulse-button {
            0%,
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
            }

            50% {
              transform: scale(1.04);
              box-shadow: 0 0 0 8px rgba(37, 99, 235, 0);
            }
          }

          .nav-button:hover,
          .primary-button:hover {
            background: #084eaf;
            transform: translateY(-2px);
          }

          .hero {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            align-items: center;
            gap: 30px;
            padding: 78px 9% 75px;
            overflow: hidden;
            background: linear-gradient(120deg, #f0f6ff, #ffffff);
          }

          .hero-content {
            max-width: 620px;
          }

          .eyebrow {
            color: #1266db;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 2px;
          }

          h1 {
            margin: 22px 0;
            color: #102344;
            font-size: clamp(39px, 5vw, 65px);
            line-height: 1.1;
            letter-spacing: -2px;
          }

          h1 span {
            color: #1266db;
          }

          .hero-content > p,
          .section-heading > p,
          .about-content > p,
          .contact-inner > p {
            color: #68758a;
            font-size: 16px;
            line-height: 1.85;
          }

          .hero-actions,
          .contact-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 27px;
          }

          .secondary-button {
            color: #1c3559;
            background: white;
            border: 1px solid #d5deeb;
          }

          .secondary-button:hover {
            background: #f1f6ff;
          }

          .hero-points {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 29px;
            color: #50627a;
            font-size: 12px;
          }

          .hero-visual {
            display: grid;
            place-items: center;
            min-height: 350px;
          }

          .visual-circle {
            position: relative;
            display: grid;
            place-items: center;
            width: min(100%, 390px);
            aspect-ratio: 1;
            border-radius: 50%;
            background: radial-gradient(circle, #d8e8ff, #edf4ff 68%, #f7faff);
          }

          .laptop {
            position: relative;
            width: 72%;
            transform: translateY(5px);
          }

          .laptop-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            min-height: 205px;
            padding: 13px;
            color: #e7efff;
            border: 8px solid #1a2c49;
            border-radius: 13px 13px 5px 5px;
            background: linear-gradient(145deg, #123b78, #07172e);
            box-shadow: 0 15px 35px #123b7825;
          }

          .screen-dot {
            align-self: flex-start;
            color: #76b2ff;
            font-size: 10px;
          }

          .screen-symbol {
            display: grid;
            place-items: center;
            width: 43px;
            height: 43px;
            margin-top: 7px;
            color: #fff;
            font-size: 26px;
            font-weight: 800;
            border-radius: 12px;
            background: #1266db;
          }

          .laptop-screen strong {
            font-size: 16px;
          }

          .screen-line {
            width: 75%;
            height: 5px;
            border-radius: 5px;
            background: #345786;
          }

          .screen-line.short {
            width: 45%;
          }

          .laptop-base {
            height: 12px;
            margin: 0 -13px;
            border-radius: 2px 2px 12px 12px;
            background: linear-gradient(#b7c5d8, #71849e);
          }

          .floating-card {
            position: absolute;
            padding: 13px 16px;
            color: #1d3558;
            font-size: 12px;
            font-weight: 700;
            border: 1px solid #edf1f7;
            border-radius: 11px;
            background: white;
            box-shadow: 0 10px 30px #17325a15;
          }

          .floating-card span {
            margin-right: 7px;
          }

          .card-one {
            top: 19%;
            right: -2%;
          }

          .card-two {
            bottom: 18%;
            left: -4%;
          }

          .trust-strip {
            display: flex;
            justify-content: center;
            gap: clamp(35px, 10vw, 130px);
            padding: 27px 6%;
            border-bottom: 1px solid #edf1f6;
          }

          .trust-strip div {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .trust-strip strong {
            color: #12315c;
            font-size: 22px;
          }

          .trust-strip span {
            color: #718096;
            font-size: 12px;
          }

          .section {
            padding: 85px 8%;
          }

          .section-heading {
            max-width: 650px;
            margin: 0 auto 40px;
            text-align: center;
          }

          .section-heading h2,
          .about-content h2,
          .contact-inner h2 {
            margin: 14px 0;
            color: #12284c;
            font-size: clamp(29px, 4vw, 42px);
            line-height: 1.2;
            letter-spacing: -1px;
          }

          .section-heading > p {
            margin-bottom: 0;
          }

          .service-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
            max-width: 1080px;
            margin: auto;
          }

          .service-card {
            padding: 27px;
            border: 1px solid #e6ecf4;
            border-radius: 15px;
            background: white;
            box-shadow: 0 8px 30px #17325a08;
          }

          .service-card:hover {
            border-color: #b9d4ff;
            box-shadow: 0 12px 30px #17325a10;
          }

          .service-icon {
            display: grid;
            place-items: center;
            width: 53px;
            height: 53px;
            font-size: 25px;
            border-radius: 13px;
            background: #eef5ff;
          }

          .service-card h3 {
            margin: 19px 0 13px;
            color: #193252;
            font-size: 20px;
          }

          .service-card ul {
            padding-left: 20px;
            color: #66758b;
            font-size: 14px;
            line-height: 2;
          }

          .service-card li::marker {
            color: #1266db;
          }

          .text-link {
            display: inline-block;
            margin-top: 9px;
            color: #1266db;
            font-size: 13px;
            font-weight: 700;
          }

          .view-button {
            display: flex;
            margin: 32px auto 0;
          }

          .about-section {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            align-items: center;
            gap: 65px;
            padding: 85px 10%;
            background: #f4f8ff;
          }

          .about-art {
            padding: 15px;
            border-radius: 22px;
            background: #dbe9ff;
          }

          .about-art-inner {
            position: relative;
            display: flex;
            min-height: 310px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 13px;
            overflow: hidden;
            color: white;
            border-radius: 15px;
            background: linear-gradient(145deg, #165fc2, #092348);
          }

          .about-art-inner > span {
            font-size: 11px;
            letter-spacing: 3px;
          }

          .about-art-inner > strong {
            z-index: 1;
            font-size: clamp(20px, 3vw, 29px);
            text-align: center;
          }

          .about-orbit {
            position: absolute;
            right: -28px;
            bottom: -75px;
            display: grid;
            place-items: center;
            width: 200px;
            height: 200px;
            color: #ffffff12;
            font-size: 190px;
            font-weight: 900;
            border: 2px solid #ffffff16;
            border-radius: 50%;
          }

          .about-content > p {
            font-size: 14px;
          }

          .about-benefits {
            display: grid;
            gap: 14px;
            margin: 25px 0;
            color: #314867;
            font-size: 14px;
          }

          .location-section {
            background: white;
          }

          .location-card {
            display: flex;
            align-items: center;
            gap: 20px;
            max-width: 600px;
            margin: auto;
            padding: 28px;
            border: 1px solid #e6ecf4;
            border-radius: 15px;
            box-shadow: 0 8px 30px #17325a08;
          }

          .location-icon {
            display: grid;
            place-items: center;
            flex-shrink: 0;
            width: 58px;
            height: 58px;
            font-size: 27px;
            border-radius: 15px;
            background: #eef5ff;
          }

          .location-card h3 {
            margin: 0 0 8px;
            color: #193252;
          }

          .location-card p {
            margin: 0;
            color: #68758a;
            font-size: 14px;
          }

          .contact-section {
            padding: 75px 8%;
            color: white;
            text-align: center;
            background: linear-gradient(120deg, #103a75, #1266db);
          }

          .contact-inner {
            max-width: 720px;
            margin: auto;
          }

          .contact-section .eyebrow {
            color: #b8d7ff;
          }

          .contact-inner h2 {
            color: white;
          }

          .contact-inner > p {
            color: #e0ebff;
          }

          .contact-actions {
            justify-content: center;
          }

          .light-button {
            color: #1457ad;
            border-color: white;
            background: white;
          }

          .light-button:hover {
            color: #103a75;
            background: #edf4ff;
          }

          .contact-outline {
            color: white;
            border-color: #ffffff70;
            background: transparent;
          }

          .contact-outline:hover {
            background: #ffffff15;
          }

          .contact-inner > small {
            display: block;
            margin-top: 22px;
            color: #d6e6ff;
            font-size: 11px;
            line-height: 1.7;
          }

          .footer {
            display: block;
            padding: 40px 7% 20px;
            color: #dce8f8;
            background: #102344;
          }

          .footer p {
            color: #7b8798;
            font-size: 12px;
            text-align: center;
          }

          .footer-top {
            display: grid;
            grid-template-columns: 1.1fr 1fr 1.4fr 0.8fr;
            gap: 30px;
            padding-bottom: 30px;
          }

          .footer .brand {
            align-self: start;
            color: white;
          }

          .footer-column {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .footer-column h3 {
            margin: 0 0 5px;
            color: white;
            font-size: 15px;
          }

          .footer-column p,
          .footer-bottom p {
            margin: 0;
            font-size: 12px;
            line-height: 1.7;
          }

          .footer-column p {
            overflow-wrap: anywhere;
          }

          .footer-column a,
          .footer-bottom a {
            color: #dce8f8;
            font-size: 12px;
            line-height: 1.7;
            overflow-wrap: anywhere;
          }

          .footer-column a:hover,
          .footer-bottom a:hover {
            color: #8bbcff;
          }

          .footer-bottom {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 15px;
            padding-top: 20px;
            border-top: 1px solid #ffffff25;
          }

          @media (max-width: 800px) {
            .footer-top {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 480px) {
            .footer-top {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 800px) {
            .navbar {
              flex-wrap: wrap;
              padding: 15px 5%;
            }

            nav {
              order: 3;
              width: 100%;
              justify-content: center;
              flex-wrap: wrap;
              gap: 17px;
            }

            .nav-button {
              padding: 11px 14px;
              animation: pulse-button 2s infinite;
            }

            .hero {
              grid-template-columns: 1fr;
              padding: 60px 7%;
            }

            .hero-visual {
              min-height: 320px;
            }

            .visual-circle {
              max-width: 340px;
            }

            .trust-strip {
              gap: 25px;
              justify-content: space-around;
            }

            .trust-strip strong {
              font-size: 18px;
            }

            .trust-strip span {
              font-size: 10px;
            }

            .section {
              padding: 65px 6%;
            }

            .about-section {
              grid-template-columns: 1fr;
              gap: 35px;
              padding: 65px 7%;
            }
          }

          @media (max-width: 520px) {
            .brand strong {
              font-size: 17px;
            }

            .brand small {
              font-size: 8px;
            }

            nav {
              gap: 13px;
            }

            nav a {
              font-size: 12px;
            }

            .hero {
              padding-top: 45px;
            }

            h1 {
              font-size: 43px;
            }

            .hero-content > p {
              font-size: 14px;
            }

            .hero-actions > a {
              width: 100%;
            }

            .hero-points {
              gap: 10px;
              font-size: 10px;
            }

            .hero-visual {
              min-height: 280px;
            }

            .laptop-screen {
              min-height: 170px;
            }

            .floating-card {
              padding: 10px;
              font-size: 10px;
            }

            .trust-strip {
              gap: 15px;
              padding: 22px 4%;
            }

            .trust-strip strong {
              font-size: 16px;
            }

            .trust-strip span {
              max-width: 90px;
              line-height: 1.5;
            }

            .service-grid {
              grid-template-columns: 1fr;
            }

            .service-card {
              padding: 23px;
            }

            .location-card {
              align-items: flex-start;
              padding: 20px;
            }

            .footer {
              justify-content: center;
              flex-direction: column;
              text-align: center;
            }
          }
        `}
      </style>
    </main>
  );
}

