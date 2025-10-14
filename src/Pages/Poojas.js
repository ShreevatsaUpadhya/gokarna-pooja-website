import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "./Poojas.css";
import { Link } from "react-router-dom";

function Poojas() {
  const paraPoojas = [
    {
      name: "Rudrabhisheka",
      details:
        "Rudrabhisheka is a powerful Vedic ritual dedicated to Lord Shiva. It is performed by offering sacred items like water, milk, curd, honey, and ghee while chanting Vedic mantras. Performing Rudrabhisheka removes negativity, destroys past sins, brings inner peace, and blesses devotees with health, wealth, and prosperity.",
    },
    {
      name: "Navagraha Shanti",
      details:
        "Navagraha Shanti is performed to please the nine planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu). It reduces the malefic effects of planetary doshas, strengthens positive planetary influences, and ensures harmony in life. It is ideal before new ventures, marriages, or major life changes.",
    },
    {
      name: "Maha Mrityunjaya Japa & Havana",
      details:
        "This sacred pooja dedicated to Lord Shiva involves chanting the Maha Mrityunjaya Mantra and performing a Havana (fire ritual). It protects against accidents, illnesses, and untimely death while promoting health, longevity, and spiritual strength.",
    },
    {
      name: "Sandhi Shanti Poojas",
      details:
        "Sandhi Shanti is performed during major life transitions such as birthdays or planetary changes. It ensures stability, neutralizes negative effects, and invites divine blessings for good health and prosperity.",
      slug: "sandhi-shanti",
      type: "group",
    },
    {
      name: "Sarpa Dosha Poojas",
      details:
        "Sarpa Dosha is believed to arise due to ancestral or serpent-related karmic influences. Performing Sarpa Dosha Pooja removes marriage, career, and health obstacles while bringing peace and family prosperity.",
      slug: "sarpa-dosha",
      type: "group",
    },
    {
      name: "Gana Homa",
      details:
        "Gana Homam is performed to worship Lord Ganesha, the remover of obstacles. It ensures success, removes hurdles in career or education, and brings prosperity and wisdom. Highly recommended before weddings or housewarmings.",
    },
  ];

  const aparaPoojas = [
    {
      name: "Pinda Pradaana or Pitra Yajna",
      details:
        "In Pinda Pradana, rice balls (pindas) are offered to ancestors for their peace and liberation (moksha). It brings blessings of health and prosperity to descendants.",
    },
    {
      name: "Tarpana",
      details:
        "Tarpana is a water offering ritual that expresses gratitude to ancestors, granting peace to their souls and blessings to the family.",
    },
    {
      name: "Shraddha",
      details:
        "Shraddha is performed annually to honor departed ancestors. It maintains ancestral harmony and ensures protection and prosperity for future generations.",
    },
    {
      name: "Narayana Bali Pooja",
      details:
        "Narayana Bali is performed to relieve the souls of those who met untimely death. It removes ancestral curses and brings peace to the lineage.",
    },
    {
      name: "Pretha Uddara & Tripindi Shraddha",
      details:
        "This ritual frees trapped souls, removes obstacles, and ensures spiritual upliftment for the departed, bringing peace to the family.",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        card.classList.add("visible");
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-container">
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Gokarna Poojas & Rituals | Rudrabhisheka, Kaala Sarpa Shanti & Narayana Bali</title>
        <meta
          name="description"
          content="Explore a wide range of traditional Gokarna poojas including Rudrabhisheka, Navagraha Shanti, Maha Mrityunjaya Japa, Kaala Sarpa Shanti, and Narayana Bali. Performed by expert priests with devotion."
        />
        <meta
          name="keywords"
          content="Gokarna poojas, Rudrabhisheka, Kaala Sarpa Shanti, Navagraha Shanti, Maha Mrityunjaya Japa, Narayana Bali, Pitru pooja, Sandhi Shanti, Sarpa Dosha, temple rituals Gokarna"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Gokarna Poojas & Rituals | Book Hindu Poojas in Gokarna" />
        <meta
          property="og:description"
          content="Book Kaala Sarpa Shanti, Rudrabhisheka, Navagraha Homa, Narayana Bali, and more in Gokarna with experienced purohits."
        />
        <meta property="og:url" content="https://gokarnapoojas.in/poojas" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.gokarnapoojas.in/poojas" />
      </Helmet>

      {/* ✅ Page Content */}
      <h1 className="section-title">Available Poojas & Rituals in Gokarna</h1>
      <p className="intro-text">
        We offer two main categories of poojas performed at Gokarna — each
        holding deep spiritual significance. Below you can find more details.
      </p>

      <h2 className="category-title">✨ Devatha Kaarya</h2>
      <p className="category-desc">
        Devatha Kaarya (Para Poojas) are performed to seek divine blessings,
        prosperity, and overall well-being. These rituals bring peace, success,
        and spiritual growth.
      </p>

      <div className="cards-grid">
        {paraPoojas.map((p, i) => (
          <div key={i} className="card" ref={(el) => (cardsRef.current[i] = el)}>
            <h3 className="card-title">{p.name}</h3>
            <p className="details-text">{p.details}</p>
            {p.type === "group" && (
              <Link to={`/${p.slug}`} className="details-link">
                View All {p.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      <h2 className="category-title">🕉 Apara Poojas</h2>
      <p className="category-desc">
        Apara poojas are performed for departed souls and ancestors. These
        rituals bring peace to the departed and blessings to their descendants.
      </p>

      <div className="cards-grid">
        {aparaPoojas.map((p, i) => (
          <div
            key={i}
            className="card"
            ref={(el) => (cardsRef.current[paraPoojas.length + i] = el)}
          >
            <h3 className="card-title">{p.name}</h3>
            <p>{p.details}</p>
          </div>
        ))}
      </div>

      <div className="contact-note">
        <p className="scroll-text">
          📞 For pricing & bookings, please visit our <strong>Contact</strong>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

export default Poojas;