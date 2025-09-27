import React, { useEffect, useRef } from "react";
import "./Poojas.css";
import { Link } from "react-router-dom";

function Poojas() {
  const paraPoojas = [
    {
      name: "Rudrabhisheka",
      details:
        "Rudrabhisheka is a powerful Vedic ritual dedicated to Lord Shiva. It is performed by offering sacred items like water, milk, curd, honey, and ghee while chanting Vedic mantras.\nPerforming Rudrabhisheka removes negativity, destroys past sins, brings inner peace, and blesses devotees with health, wealth, and prosperity. It is especially recommended during difficult times and to overcome obstacles in life",
        
    },
    { name: "Navagraha Shanti", 
      details: "Navagraha Shanti is performed to please the nine planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu) that influence human life.\nBy doing this pooja, one can reduce the malefic effects of planetary doshas, strengthen positive planetary influences, and ensure harmony in personal, professional, and family life. It is highly beneficial before starting new ventures, marriage, or important life events." },
    {
      name: "Maha Mrityunjaya Japa & Havana",
      details: "This is one of the most sacred poojas dedicated to Lord Shiva through the chanting of the Maha Mrityunjaya Mantra and the sacred fire ritual (Havana).\nPerforming this pooja protects against accidents, illnesses, untimely death, and negative energies. It promotes long life, good health, mental peace, and spiritual upliftment. It is especially suggested for those facing health issues or seeking strength and healing.",
    },
    {
      name: "Sandhi Shanti Poojas",
      details: "Sandhi Shanti is a sacred ritual performed during important transitions in life such as birthdays, marriage anniversaries, or significant planetary periods. It helps neutralize negative effects, ensures stability, and invokes divine blessings for health, prosperity, and overall well-being.\nThere are different kinds of Sandhi Shanthi poojas available",
      slug: "sandhi-shanti",
      type: "group",
    },
    {
      name: "Sarpa Dosha Poojas",
      details: "Sarpa Dosha is believed to arise due to the disturbance of serpent energies or ancestral imbalances. Performing Sarpa Dosha Pooja helps remove obstacles in marriage, career, and health, while bringing peace, prosperity, and harmony to family life. It is especially recommended for those facing delays in important aspects of life.\nThere are different kinds of Sarpa Dosha poojas available",
      slug: "sarpa-dosha",
      type: "group",
    },
    { name: "Gana Homa", details: "Gana Homam is performed to worship Lord Ganesha, the remover of obstacles, at the beginning of any auspicious work or spiritual practice.\nThis pooja ensures success in undertakings, removes hurdles in career, business, or education, and brings prosperity and wisdom. It is especially beneficial before weddings, housewarmings, or starting new ventures." },
  ];

  const aparaPoojas = [
    {
      name: "Pind Pradaan or Pitra Yajna",
      details: "In Pinda Pradana, rice balls (pindas) are offered to ancestors. It ensures the souls attain peace and liberation (moksha), while blessing the descendants with health, happiness, and prosperity.",
    },
    { name: "Tarpan", details: "Tarpana is a ritual of offering water mixed with sesame seeds and prayers to ancestors. It helps express gratitude, bring peace to departed souls, and attract their blessings for family well-being." },
    {
      name: "Shraddha",
      details: "Shraddha is performed on death anniversaries of ancestors to honor and nourish their souls. It helps maintain the bond with forefathers and ensures harmony, prosperity, and protection for future generations.",
    },
    { name: "Naarayana Bali Pooja", details: "Narayana Bali is performed to relieve the souls of those who met unnatural or untimely death. It helps release their attachment to the earthly plane, removes ancestral curses, and brings peace to the family lineage." },
    {
      name: "Pretha Uddara & Tripindi Shraddha,Praayaschitta Tilahavan",
      details: "This ritual is performed for souls trapped due to unfulfilled desires or improper rites after death. It frees such souls, removes obstacles in the family, and ensures spiritual upliftment and peace for the departed.",
    },
  ];
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% of card is visible
    );

    cardsRef.current.forEach(card => {
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
      <h2 className="section-title">Available Services</h2>
      <p className="intro-text">
        We offer two main categories of poojas performed at Gokarna — each
        holding deep spiritual significance. Below you can find more details.
      </p>
      <h3 className="category-title">✨Devatha Kaarya</h3>
      <p className="category-desc">
        Devatha Kaarya or (Para poojas) are performed to seek divine blessings,
        prosperity, and overall well-being. These rituals are often done for
        success, peace of mind, and spiritual growth.
      </p>

      <div className="cards-grid">
        {paraPoojas.map((p, i) => (
          <div key={i} className="card" ref={el => (cardsRef.current[i] = el)}>
            <h4 className="card-title">{p.name}</h4>
            <p className="details-text">{p.details}</p>
            {p.type === "group" ? (
              <Link to={`/${p.slug}`} className="details-link">
                View All {p.name}
              </Link>
            ) : null}
          </div>
        ))}
      </div>

      <h3 className="category-title">🕉 Apara Poojas</h3>
      <p className="category-desc">
        Apara poojas are performed for the departed souls of ancestors and loved
        ones. These rituals help bring peace to the soul and blessings to the
        family.
      </p>
      <div className="cards-grid">
        {aparaPoojas.map((p, i) => (
          <div key={i} className="card"  ref={el => (cardsRef.current[paraPoojas.length + i] = el)}>
            <h4 className="card-title">{p.name}</h4>
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
