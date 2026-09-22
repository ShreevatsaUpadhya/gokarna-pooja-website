import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./Home.css";
import heroImage from "../assets/temple-bg.jpg";

function Home() {
  const whatsappNumber = "919110893433";
  const phoneNumber = "+919110893433";

  const whatsappMessage =
    "Namaste, I would like to enquire about Pooja Services in Gokarna.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const onlinePoojaMessage =
    "Namaste, I would like to know about online pooja services.";

  const onlinePoojaLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    onlinePoojaMessage
  )}`;

  return (
    <div className="home">

      {/* ================= SEO ================= */}

      <Helmet>
        <title>
          Gokarna Pooja Services | Narayana Bali, Pitru Pooja & Temple Rituals
        </title>

        <meta
          name="description"
          content="Explore traditional pooja services in Gokarna including Narayana Bali, Pitru Pooja, Tripindi Shraddha, Apara Karma, Rudrabhisheka and other temple rituals. Enquire for booking and guidance."
        />

        <meta
          name="keywords"
          content="Gokarna Pooja Services, Pooja in Gokarna, Narayana Bali Gokarna, Pitru Pooja Gokarna, Tripindi Shraddha Gokarna, Apara Karma Gokarna, Rudrabhisheka Gokarna, Gokarna temple rituals"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.gokarnapoojas.in/"
        />

        {/* ================= OPEN GRAPH ================= */}

        <meta
          property="og:title"
          content="Gokarna Pooja Services | Narayana Bali & Temple Rituals"
        />

        <meta
          property="og:description"
          content="Explore traditional pooja services in Gokarna including Narayana Bali, Pitru Pooja, Tripindi Shraddha and other temple rituals."
        />

        <meta
          property="og:url"
          content="https://www.gokarnapoojas.in/"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Gokarna Seva Kaarya"
        />

        {/* ================= TWITTER ================= */}

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="Gokarna Pooja Services | Narayana Bali & Temple Rituals"
        />

        <meta
          name="twitter:description"
          content="Explore traditional pooja services and ancestral rituals performed in Gokarna."
        />
      </Helmet>


      {/* ================= HERO ================= */}

      <section
        className="hero"
        style={{ "--hero-bg": `url(${heroImage})` }}
      >
        <h1>
          Authentic Pooja Services in Gokarna – Experienced Vedic Purohits
        </h1>

        <p>
          Perform traditional poojas at{" "}
          <strong>Gokarna Kshetra</strong> with experienced local purohits.
          We arrange{" "}
          <strong>
            Narayana Bali, Pitru Pooja, Apara Karma, Rudrabhisheka
          </strong>{" "}
          and other temple rituals according to traditional practices.
        </p>
      </section>


      {/* ================= TOP POOJAS ================= */}

      <section className="top-poojas">
        <h2>Top Poojas Performed in Gokarna</h2>

        <div className="pooja-list">

          <Link to="/narayana-bali">
            Narayana Bali
          </Link>

          <Link to="/pitru-paksha-pooja">
            Pitru Pooja
          </Link>

          <Link to="/poojas">
            Apara Karma
          </Link>

          <Link to="/poojas">
            Rudrabhisheka
          </Link>

          <Link to="/poojas">
            Mrityunjaya Homa
          </Link>

          <Link to="/poojas">
            Graha Shanti
          </Link>

        </div>

        <p className="pooja-note">
          Call or WhatsApp to know the procedure, availability and booking
          details.
        </p>
      </section>


      {/* ================= ONLINE POOJA SERVICES ================= */}

      <section className="online-pooja-section">

        <div className="online-pooja-content">

          <span className="online-pooja-label">
            ONLINE POOJA SERVICES
          </span>

          <h2>
            Unable to Visit Gokarna?
          </h2>

          <p>
            We also perform selected poojas and rituals online.
            Contact us for more details and arrangements.
          </p>

          <a
            href={onlinePoojaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="online-pooja-btn"
          >
            Enquire for Online Pooja
          </a>

        </div>

      </section>


      {/* ================= PITRU PAKSHA CAMPAIGN ================= */}

      <section className="pitru-paksha-home">

        <h2>
          Pitru Paksha Pooja in Gokarna
        </h2>

        <p>
          Planning to perform ancestral rituals in Gokarna during Pitru Paksha?
          Learn about traditional Pitru-related rituals including{" "}
          <strong>
            Pitru Tarpana, Shraddha and Pinda Pradana
          </strong>
          , along with guidance for planning your visit.
        </p>

        <Link
          to="/pitru-paksha-pooja"
          className="pitru-paksha-home-link"
        >
          Explore Pitru Paksha Pooja →
        </Link>

      </section>


      {/* ================= POOJAS CTA ================= */}

      <section className="home-poojas-cta">

        <h2>
          Explore Poojas & Rituals in Gokarna
        </h2>

        <p>
          Explore the different Devatha Kaarya and Apara Poojas available in
          Gokarna.
        </p>

        <Link
          to="/poojas"
          className="home-poojas-link"
        >
          View All Poojas →
        </Link>

      </section>


      {/* ================= STICKY CALL / WHATSAPP ================= */}

      <div className="sticky-contact-bar">

        <a
          href={`tel:${phoneNumber}`}
          className="sticky-btn call"
        >
          <FaPhoneAlt size={16} />
          <span>Call</span>
        </a>

        <a
          href={whatsappLink}
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