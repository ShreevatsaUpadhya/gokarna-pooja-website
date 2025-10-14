import React from "react";
import { Helmet } from "react-helmet";
import "./SarpaDoshaPage.css";

const sarpaDoshaList = [
  {
    name: "Sarpa Sanskara",
    details:
      "A powerful ritual performed to atone for Naga Dosha or harm caused to snakes (directly or in past lives). It removes obstacles in marriage, fertility, and health, bringing peace and balance to the family.",
  },
  {
    name: "Chara Naaga Pratishta",
    details:
      "This involves installing serpent idols (Naga Devatas) in temples or sacred places. It balances serpent-related karmic effects, protects from doshas, and ensures prosperity, progeny, and spiritual growth.",
  },
  {
    name: "Aashlesha Bali",
    details:
      "Conducted on Ashlesha Nakshatra, this ritual pleases serpent deities and removes Sarpa Dosha. It relieves delays in marriage and childbirth, bringing harmony, wealth, and family well-being.",
  },
  {
    name: "Kaala Sarpa Shanti",
    details:
      "Performed when all planets are trapped between Rahu and Ketu (Kaala Sarpa Dosha). This pooja reduces struggles, delays, and hardships, and helps attain peace, stability, and prosperity in life.",
  },
];

const SarpaDoshaPage = () => {
  return (
    <div className="sarpa-dosha-page">
      {/* ✅ SEO Metadata for Sarpa Dosha Page */}
      <Helmet>
        <title>
          Sarpa Dosha Parihara in Gokarna | Kaala Sarpa Shanti, Aashlesha Bali & Sarpa Sanskara
        </title>
        <meta
          name="description"
          content="Perform Sarpa Dosha Parihara in Gokarna including Kaala Sarpa Shanti, Aashlesha Bali, Sarpa Sanskara, and Chara Naaga Pratishta. Experienced priests perform rituals to remove doshas and bring peace."
        />
        <meta
          name="keywords"
          content="Sarpa Dosha, Sarpa Dosha Parihara Gokarna, Kaala Sarpa Shanti, Sarpa Sanskara, Aashlesha Bali, Naga Pratishta, serpent pooja, Gokarna temple rituals, dosha nivarana"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Sarpa Dosha Parihara in Gokarna | Kaala Sarpa Shanti & Sarpa Sanskara"
        />
        <meta
          property="og:description"
          content="Book Sarpa Dosha Parihara rituals in Gokarna including Kaala Sarpa Shanti, Aashlesha Bali, and Sarpa Sanskara performed by experienced purohits at Gokarna Seva Kaarya."
        />
        <meta property="og:url" content="https://www.gokarnapoojas.in/sarpa-dosha" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.gokarnapoojas.in/sarpa-dosha" />

        {/* ✅ Structured Data (Service Schema) */}
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
              "description": "Sarpa Dosha Parihara rituals including Kaala Sarpa Shanti, Sarpa Sanskara, Aashlesha Bali, and Naga Pratishta are performed by priests in Gokarna to remove doshas and bring prosperity.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Sarpa Dosha Rituals",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Sarpa Sanskara" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Chara Naaga Pratishta" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Aashlesha Bali" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Kaala Sarpa Shanti" }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* ✅ Page Content */}
      <div className="sarpa-dosha-content">
        <h1 className="sarpa-dosha-heading">🕉 Sarpa Dosha Parihara</h1>
        <p className="sarpa-dosha-intro">
          Sarpa Dosha Parihara is a sacred Vedic remedy to appease serpent deities and
          remove the ill effects of Sarpa or Naga Dosha. These rituals help overcome
          difficulties in marriage, health, and prosperity, restoring harmony and peace.
        </p>

        <ul className="sarpa-dosha-list">
          {sarpaDoshaList.map((p, i) => (
            <li key={i} className="sarpa-dosha-item">
              <h2>{p.name}</h2>
              <p>{p.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SarpaDoshaPage;