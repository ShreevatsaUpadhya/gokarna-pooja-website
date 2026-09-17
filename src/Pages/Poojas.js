import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Poojas.css";

function Poojas() {
  const poojas = [
    {
      name: "Rudrabhisheka",
      category: "devatha",
      details:
        "A traditional Vedic ritual dedicated to Lord Shiva, performed with prayers and offerings according to established practices.",
      hasDetailPage: false,
    },
    {
      name: "Navagraha Shanti",
      category: "devatha",
      details:
        "A traditional ritual associated with prayers to the Navagrahas and performed according to established practices.",
      hasDetailPage: false,
    },
    {
      name: "Maha Mrityunjaya Japa & Homa",
      category: "devatha",
      details:
        "A traditional Shiva-related prayer and homa performed with recitation of the Maha Mrityunjaya Mantra.",
      hasDetailPage: false,
    },
    {
      name: "Sandhi Shanti",
      slug: "sandhi-shanti",
      category: "devatha",
      details:
        "A traditional Shanti ritual performed during significant transitions according to prescribed practices.",
      hasDetailPage: true,
    },
    {
      name: "Sarpa Dosha Pooja",
      slug: "sarpa-dosha",
      category: "devatha",
      details:
        "A traditional ritual associated with Sarpa Dosha according to Hindu religious practices.",
      hasDetailPage: true,
    },

    // =========================
    // APARA POOJAS
    // =========================

    {
      name: "Narayana Bali",
      slug: "narayana-bali",
      category: "apara",
      details:
        "A traditional ancestral ritual performed according to prescribed religious practices and rites.",
      hasDetailPage: true,
    },
    {
      name: "Tripindi Shraddha",
      slug: "tripindi-shraddha",
      category: "apara",
      details:
        "A traditional ancestral ritual performed as part of prescribed Shraddha practices.",
      hasDetailPage: true,
    },
    {
      name: "Pinda Pradana & Tarpana",
      category: "apara",
      details:
        "Traditional ancestral offering rituals performed as part of Pitru-related religious practices.",
      hasDetailPage: false,
    },

    // =========================
    // PITRU PAKSHA
    // =========================

    {
      name: "Pitru Paksha Pooja",
      slug: "pitru-paksha-pooja",
      category: "apara",
      details:
        "Learn about traditional Pitru-related rituals and ancestral offerings performed in Gokarna during Pitru Paksha.",
      hasDetailPage: true,
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const renderCards = (category) =>
    poojas
      .filter((p) => p.category === category)
      .map((p) => {
        const CardContent = (
          <>
            <h3 className="card-title">{p.name}</h3>

            <p className="details-text">{p.details}</p>

            {p.hasDetailPage && (
              <span className="details-indicator">
                View details →
              </span>
            )}
          </>
        );

        return p.hasDetailPage ? (
          <Link
            key={p.name}
            to={`/${p.slug}`}
            className="card"
            ref={(el) => {
              if (el && !cardsRef.current.includes(el)) {
                cardsRef.current.push(el);
              }
            }}
          >
            {CardContent}
          </Link>
        ) : (
          <div
            key={p.name}
            className="card"
            ref={(el) => {
              if (el && !cardsRef.current.includes(el)) {
                cardsRef.current.push(el);
              }
            }}
          >
            {CardContent}
          </div>
        );
      });

  return (
    <div className="page-container">

      <Helmet>
        <title>
          Gokarna Poojas & Rituals | Book Temple Poojas in Gokarna
        </title>

        <meta
          name="description"
          content="Explore traditional poojas and rituals performed in Gokarna, including Narayana Bali, Tripindi Shraddha, Pinda Pradana, Pitru Paksha rituals, Sarpa Dosha and Sandhi Shanti."
        />

        <link
          rel="canonical"
          href="https://www.gokarnapoojas.in/poojas"
        />
      </Helmet>

      <h1 className="section-title">
        Poojas & Rituals in Gokarna
      </h1>

      <p className="intro-text">
        Below are the major poojas and traditional rituals performed
        in Gokarna according to established religious practices.
      </p>

      {/* =========================
          DEVATHA KAARYA
      ========================== */}

      <h2 className="category-title">
        ✨ Devatha Kaarya
      </h2>

      <div className="cards-grid">
        {renderCards("devatha")}
      </div>

      {/* =========================
          APARA POOJAS
      ========================== */}

      <h2 className="category-title">
        🕉 Apara Poojas
      </h2>

      <div className="cards-grid">
        {renderCards("apara")}
      </div>

      {/* =========================
          PITRU PAKSHA INFORMATION
      ========================== */}

      <div className="pitru-paksha-info">

        <h2>
          Pitru Paksha Pooja in Gokarna
        </h2>

        <p>
          Planning to perform traditional Pitru-related rituals in
          Gokarna during Pitru Paksha? Explore information about
          Pitru Tarpana, Shraddha, Pinda Pradana and other ancestral
          rituals.
        </p>

        <Link to="/pitru-paksha-pooja">
          Explore Pitru Paksha Pooja →
        </Link>

      </div>

      {/* =========================
          CONTACT
      ========================== */}

      <div className="contact-note">
        <p className="scroll-text">
          📞 Call or WhatsApp us for pooja booking and guidance.
        </p>
      </div>

    </div>
  );
}

export default Poojas;