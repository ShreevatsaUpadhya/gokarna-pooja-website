
import React from "react";
import { Helmet } from "react-helmet";
import "./PoojaDetail.css"; // reuse CTA, FAQ, sticky bar styles
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


const sarpaDoshaList = [
  {
    name: "Sarpa Sanskara",
    details:
      "A powerful ritual performed to atone for Naga Dosha or harm caused to snakes (directly or in past lives). It removes obstacles in marriage, fertility, and health, bringing peace and balance to the family.",
  },
  {
    name: "Chara Naaga Pratishta",
    details:
      "This ritual involves installing serpent idols (Naga Devatas) in temples or sacred places. It balances serpent-related karmic effects, protects from doshas, and ensures prosperity, progeny, and spiritual growth.",
  },
  {
    name: "Aashlesha Bali",
    details:
      "Conducted on Ashlesha Nakshatra, this ritual pleases serpent deities and removes Sarpa Dosha. It relieves delays in marriage and childbirth, bringing harmony and family well-being.",
  },
  {
    name: "Kaala Sarpa Shanti",
    details:
      "Performed when all planets are positioned between Rahu and Ketu. This pooja reduces struggles, delays, and hardships, and helps attain peace, stability, and prosperity in life.",
  },
];

const SarpaDoshaPage = () => {
  return (
    <div className="sarpa-dosha-page pooja-detail-page">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Sarpa Dosha Parihara in Gokarna | Kaala Sarpa Shanti & Naga Pooja
        </title>
        <meta
          name="description"
          content="Perform Sarpa Dosha Parihara in Gokarna including Kaala Sarpa Shanti, Sarpa Sanskara, Aashlesha Bali, and Chara Naaga Pratishta with experienced priests."
        />
        <meta
          name="keywords"
          content="Sarpa Dosha Gokarna, Kaala Sarpa Shanti, Sarpa Sanskara, Aashlesha Bali, Naga Pratishta, serpent pooja Gokarna"
        />
        <link rel="canonical" href="https://www.gokarnapoojas.in/sarpa-dosha" />

        {/* ===== Service Schema ===== */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sarpa Dosha Parihara",
            "provider": {
              "@type": "Organization",
              "name": "Gokarna Seva Kaarya",
              "url": "https://www.gokarnapoojas.in"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Gokarna, Karnataka, India"
            },
            "description": "Sarpa Dosha Parihara rituals including Kaala Sarpa Shanti, Sarpa Sanskara, Aashlesha Bali, and Chara Naaga Pratishta are performed in Gokarna to remove doshas and bring peace."
          }
          `}
        </script>

        {/* ===== FAQ Schema ===== */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who should perform Sarpa Dosha Parihara?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sarpa Dosha Parihara is advised for individuals facing marriage delays, fertility issues, health concerns, or repeated obstacles believed to be caused by Sarpa Dosha."
                }
              },
              {
                "@type": "Question",
                "name": "Is Kaala Sarpa Shanti different from Sarpa Dosha Parihara?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kaala Sarpa Shanti is one form of Sarpa Dosha remedy. The exact ritual is suggested based on individual conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Can Sarpa Dosha poojas be combined with other rituals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In some cases, Sarpa Dosha Parihara may be performed along with other remedial poojas as advised by the priest."
                }
              },
              {
                "@type": "Question",
                "name": "Can devotees from outside Gokarna perform these poojas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Devotees from different parts of India can perform Sarpa Dosha Parihara in Gokarna with proper guidance."
                }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pooja-hero">
        <h1>Sarpa Dosha Parihara in Gokarna</h1>
        <p className="hero-subtext">
          Sarpa Dosha Parihara is a sacred set of Vedic rituals performed to
          appease serpent deities and reduce the ill effects of Sarpa or Naga
          Dosha affecting marriage, health, and family harmony.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="sarpa-dosha-content pooja-content">
        <h2>Types of Sarpa Dosha Parihara Poojas</h2>

        <ul className="sarpa-dosha-list">
          {sarpaDoshaList.map((p, i) => (
            <li key={i} className="sarpa-dosha-item">
              <h3>{p.name}</h3>
              <p>{p.details}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= FAQ ================= */}
      <section className="pooja-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>
            Who should perform Sarpa Dosha Parihara?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            This pooja is advised for individuals facing marriage delays,
            fertility issues, health concerns, or repeated obstacles linked to
            Sarpa Dosha.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Is Kaala Sarpa Shanti different from Sarpa Dosha Parihara?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Kaala Sarpa Shanti is a specific form of Sarpa Dosha remedy. The exact
            ritual is suggested based on the devotee’s condition.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Can Sarpa Dosha poojas be done along with other rituals?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            In certain cases, Sarpa Dosha Parihara may be performed along with
            other remedial poojas as advised by the priest.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Can devotees from outside Gokarna perform these poojas?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Yes. Devotees from different parts of India can perform Sarpa Dosha
            Parihara in Gokarna with proper guidance and arrangements.
          </p>
        </details>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="pooja-bottom-cta">
        <p>
          📞 For Sarpa Dosha Parihara booking in Gokarna, please{" "}
          <strong>call or WhatsApp us</strong>.
        </p>
      </section>

     {/* ================= STICKY BAR ================= */}
<div className="sticky-contact-bar">
  <a href="tel:+919110893433" className="sticky-call">
    <FaPhoneAlt size={16} />
    <span>Call</span>
  </a>

  <a
    href="https://wa.me/919110893433"
    target="_blank"
    rel="noopener noreferrer"
    className="sticky-whatsapp"
  >
    <FaWhatsapp size={18} />
    <span>WhatsApp</span>
  </a>
</div>

    </div>
  );
};

export default SarpaDoshaPage;
