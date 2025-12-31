import React from "react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./Home.css";
import heroImage from "../assets/temple-bg.jpg";

function Home() {
  return (
    <div className="home">
      {/* SEO */}
      <Helmet>
        <title>
          Book Gokarna Pooja Services | Narayana Bali & Temple Rituals
        </title>
        <meta
          name="description"
          content="Book authentic pooja services in Gokarna with experienced local Vedic purohits. We arrange Narayana Bali, Pitru Pooja, Apara Karma, Rudrabhisheka and other temple rituals."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* HERO */}
      <section
        className="hero"
        style={{ "--hero-bg": `url(${heroImage})` }}
      >
        <h1>
          Authentic Pooja Services in Gokarna – Book Experienced Vedic Purohits
        </h1>

        <p>
          Perform sacred poojas at <strong>Gokarna Kshetra</strong> with experienced
          local purohits. We arrange{" "}
          <strong>
            Narayana Bali, Pitru Pooja, Apara Karma, Rudrabhisheka
          </strong>{" "}
          and other temple rituals strictly as per Vedic tradition.
        </p>
      </section>

      {/* TOP POOJAS */}
      <section className="top-poojas">
        <h2>Top Poojas Performed in Gokarna</h2>

        <div className="pooja-list">
          <span>Narayana Bali</span>
          <span>Pitru Pooja</span>
          <span>Apara Karma</span>
          <span>Rudrabhisheka</span>
          <span>Mrityunjaya Homa</span>
          <span>Graha Shanti</span>
        </div>

        <p className="pooja-note">
          Call or WhatsApp to know the procedure, availability, and booking details.
        </p>
      </section>

      {/* ✅ STICKY CALL / WHATSAPP BAR (HOME PAGE ONLY, MOBILE ONLY) */}
      <div className="sticky-contact-bar">
        <a href="tel:+919110893433" className="sticky-btn call">
          <FaPhoneAlt size={16} />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/919110893433"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-btn whatsapp"
        >
          <FaWhatsapp size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
