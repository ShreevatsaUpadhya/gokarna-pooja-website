import React from "react";
import { Helmet } from "react-helmet";
import "./PoojaDetail.css"; // reuse FAQ + sticky bar styles
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./PoojaDetail.css";



const sandhiShantiList = [
  {
    name: "Kuja Rahu Sandhi Shanti",
    details:
      "This ritual is performed when Mars (Kuja) and Rahu are in critical planetary positions in a horoscope. It helps reduce aggression, conflicts, accidents, and health issues caused by this combination, bringing balance in personal and professional life.",
  },
  {
    name: "Rahu Brihaspati Sandhi Shanti",
    details:
      "When Rahu and Jupiter (Brihaspati) align unfavorably, it can cause delays, financial struggles, and obstacles in education or career. This pooja reduces the malefic effects of Rahu, strengthens Jupiter’s blessings, and supports wisdom, growth, and stability.",
  },
  {
    name: "Shukra Aditya Sandhi Shanti",
    details:
      "When Venus (Shukra) and Sun (Aditya) are in a critical state, it can disturb relationships, finances, and self-confidence. Performing this ritual harmonizes energy between Sun and Venus, improves family harmony, prosperity, and brings balance in life.",
  },
];

const SandhiShantiPage = () => {
  return (
    <div className="sandhi-page pooja-detail-page">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Sandhi Shanti Poojas in Gokarna | Kuja Rahu, Rahu Brihaspati & Shukra
          Aditya
        </title>
        <meta
          name="description"
          content="Perform Sandhi Shanti Poojas in Gokarna including Kuja Rahu Sandhi, Rahu Brihaspati Sandhi, and Shukra Aditya Sandhi Shanti to balance planetary transitions and remove doshas."
        />
        <meta
          name="keywords"
          content="Sandhi Shanti Gokarna, Kuja Rahu Sandhi, Rahu Brihaspati Shanti, Shukra Aditya Shanti, planetary dosha pooja"
        />
        <link
          rel="canonical"
          href="https://www.gokarnapoojas.in/sandhi-shanti"
        />

        {/* ===== Service Schema ===== */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sandhi Shanti Pooja",
            "provider": {
              "@type": "Organization",
              "name": "Gokarna Seva Kaarya",
              "url": "https://www.gokarnapoojas.in"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Gokarna, Karnataka, India"
            },
            "description": "Sandhi Shanti Poojas including Kuja Rahu, Rahu Brihaspati, and Shukra Aditya Sandhi Shanti are performed in Gokarna to balance planetary transitions and remove doshas."
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
                "name": "Who should perform Sandhi Shanti Pooja?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sandhi Shanti Pooja is recommended for individuals undergoing difficult planetary transitions causing obstacles, delays, or instability in life."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Sandhi Shanti Pooja performed in Gokarna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gokarna is a sacred Shaiva kshetra. Performing Sandhi Shanti Poojas here as per traditional practices is believed to bring planetary balance and peace."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Sandhi Shanti Pooja take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The pooja generally takes a few hours depending on the type of Sandhi and ritual requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Can Sandhi Shanti be combined with other poojas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In some cases, Sandhi Shanti Pooja may be combined with other remedial rituals as advised by the priest."
                }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pooja-hero">
        <h1>Sandhi Shanti Poojas in Gokarna</h1>
        <p className="hero-subtext">
          Sandhi Shanti Poojas are performed during significant planetary
          transitions to neutralize doshas, remove obstacles, and bring peace,
          stability, and divine blessings.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="sandhi-shanti-content pooja-content">
        <h2>Types of Sandhi Shanti Poojas</h2>

        <ul className="sandhi-list">
          {sandhiShantiList.map((p, i) => (
            <li key={i} className="sandhi-item">
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
            Who should perform Sandhi Shanti Pooja?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            This pooja is advised for individuals experiencing difficulties due
            to planetary transitions such as delays, instability, or repeated
            obstacles.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Is Sandhi Shanti different from Graha Shanti?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Yes. Sandhi Shanti focuses on planetary transition periods, whereas
            Graha Shanti addresses general planetary afflictions.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Can devotees from outside Gokarna perform Sandhi Shanti?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Yes. Devotees from different regions can perform Sandhi Shanti
            Poojas in Gokarna with proper guidance.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Is fasting required before Sandhi Shanti Pooja?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Devotees are generally advised to follow simple dietary
            restrictions. Detailed instructions are provided during booking.
          </p>
        </details>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="pooja-bottom-cta">
        <p>
          📞 For Sandhi Shanti Pooja booking in Gokarna, please{" "}
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

export default SandhiShantiPage;
