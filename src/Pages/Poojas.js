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
        "A powerful Vedic ritual dedicated to Lord Shiva, performed to remove negativity and bless devotees with peace and prosperity.",
      hasDetailPage: false,
    },
    {
      name: "Navagraha Shanti",
      category: "devatha",
      details:
        "Performed to reduce malefic planetary effects and bring harmony during important life events.",
      hasDetailPage: false,
    },
    {
      name: "Maha Mrityunjaya Japa & Homa",
      category: "devatha",
      details:
        "Protective ritual for health, longevity, and relief from chronic issues.",
      hasDetailPage: false,
    },
    {
      name: "Sandhi Shanti",
      slug: "sandhi-shanti",
      category: "devatha",
      details:
        "Performed during major planetary transitions to ensure stability and peace.",
      hasDetailPage: true,
    },
    {
      name: "Sarpa Dosha Pooja",
      slug: "sarpa-dosha",
      category: "devatha",
      details:
        "Removes obstacles related to marriage, career, and health caused by serpent dosha.",
      hasDetailPage: true,
    },
    {
      name: "Narayana Bali",
      slug: "narayana-bali",
      category: "apara",
      details:
        "Performed for ancestors who faced untimely death to bring peace and relief to the family.",
      hasDetailPage: true,
    },
    {
      name: "Tripindi Shraddha",
      slug: "tripindi-shraddha",
      category: "apara",
      details:
        "Addresses unresolved ancestral rituals and frees trapped souls.",
      hasDetailPage: true,
    },
    {
      name: "Pinda Pradana & Tarpana",
      category: "apara",
      details:
        "Essential ancestral offering rituals for peace and blessings.",
      hasDetailPage: false,
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
      .map((p, i) => {
        const CardContent = (
          <>
            <h3 className="card-title">{p.name}</h3>
            <p className="details-text">{p.details}</p>
            {p.hasDetailPage && (
              <span className="details-indicator">View details →</span>
            )}
          </>
        );

        return p.hasDetailPage ? (
          <Link
            key={p.name}
            to={`/${p.slug}`}
            className="card"
            ref={(el) => cardsRef.current.push(el)}
          >
            {CardContent}
          </Link>
        ) : (
          <div
            key={p.name}
            className="card"
            ref={(el) => cardsRef.current.push(el)}
          >
            {CardContent}
          </div>
        );
      });

  return (
    <div className="page-container">
      <Helmet>
        <title>Gokarna Poojas & Rituals | Book Temple Poojas in Gokarna</title>
        <meta
          name="description"
          content="Explore authentic poojas performed in Gokarna including Narayana Bali, Tripindi Shraddha, Sarpa Dosha, Sandhi Shanti and other traditional rituals."
        />
        <link rel="canonical" href="https://www.gokarnapoojas.in/poojas" />
      </Helmet>

      <h1 className="section-title">Poojas & Rituals in Gokarna</h1>
      <p className="intro-text">
        Below are the major poojas performed in Gokarna as per traditional
        practices.
      </p>

      <h2 className="category-title">✨ Devatha Kaarya</h2>
      <div className="cards-grid">{renderCards("devatha")}</div>

      <h2 className="category-title">🕉 Apara Poojas</h2>
      <div className="cards-grid">{renderCards("apara")}</div>

      <div className="contact-note">
        <p className="scroll-text">
          📞 Call or WhatsApp us for pooja booking and guidance.
        </p>
      </div>
    </div>
  );
}

export default Poojas;
