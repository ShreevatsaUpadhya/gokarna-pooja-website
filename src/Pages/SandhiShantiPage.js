import React from "react";
import { Helmet } from "react-helmet";
import "./SandhiShantiPage.css";

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
    <div className="sandhi-page">
      {/* ✅ SEO Metadata for Sandhi Shanti Page */}
      <Helmet>
        <title>Sandhi Shanti Poojas in Gokarna | Kuja Rahu, Rahu Brihaspati & Shukra Aditya Shanti</title>
        <meta
          name="description"
          content="Book Sandhi Shanti poojas in Gokarna including Kuja Rahu Sandhi, Rahu Brihaspati Sandhi, and Shukra Aditya Sandhi Shanti to balance planetary doshas and bring peace, prosperity, and stability in life."
        />
        <meta
          name="keywords"
          content="Sandhi Shanti Gokarna, Kuja Rahu Sandhi, Rahu Brihaspati Shanti, Shukra Aditya Shanti, planetary pooja, graha dosha nivarana, Gokarna temple rituals, astrology pooja Gokarna"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sandhi Shanti Poojas | Kuja Rahu, Rahu Brihaspati & Shukra Aditya Shanti in Gokarna" />
        <meta
          property="og:description"
          content="Perform Sandhi Shanti rituals in Gokarna for Kuja Rahu, Rahu Brihaspati, and Shukra Aditya combinations. Conducted by experienced purohits to remove doshas and enhance planetary harmony."
        />
        <meta property="og:url" content="https://www.gokarnapoojas.in/sandhi-shanti" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.gokarnapoojas.in/sandhi-shanti" />

        {/* ✅ Structured Data for Service Page */}
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
              "description": "Sandhi Shanti Poojas including Kuja Rahu, Rahu Brihaspati, and Shukra Aditya Sandhi Shanti are performed to balance planetary transitions and remove doshas.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Sandhi Shanti Pooja List",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kuja Rahu Sandhi Shanti"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rahu Brihaspati Sandhi Shanti"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shukra Aditya Sandhi Shanti"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* ✅ Page Content */}
      <div className="sandhi-shanti-content">
        <h1 className="sandhi-heading">🕉 Sandhi Shanti Poojas</h1>
        <p className="sandhi-intro">
          Sandhi Shanti Poojas are performed during significant planetary transitions to neutralize doshas, remove life obstacles, and bring divine blessings.
        </p>

        <ul className="sandhi-list">
          {sandhiShantiList.map((p, i) => (
            <li key={i} className="sandhi-item">
              <h2>{p.name}</h2>
              <p>{p.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SandhiShantiPage;