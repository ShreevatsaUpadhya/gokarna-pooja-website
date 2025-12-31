import React from "react";
import { Helmet } from "react-helmet";
import "./PoojaDetail.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


function TripindiShraddha() {
  return (
    <div className="pooja-detail-page">
      <Helmet>
        <title>
          Tripindi Shraddha Pooja in Gokarna | Procedure, Benefits & Booking
        </title>
        <meta
          name="description"
          content="Perform Tripindi Shraddha Pooja in Gokarna to resolve Pitru dosha caused by incomplete ancestral rites. Learn procedure, eligibility, and booking details."
        />
        <meta
          name="keywords"
          content="Tripindi Shraddha Gokarna, Tripindi Shraddha pooja, Pitru dosha remedies, ancestral pooja Gokarna"
        />
        <link
          rel="canonical"
          href="https://www.gokarnapoojas.in/tripindi-shraddha"
        />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who should perform Tripindi Shraddha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tripindi Shraddha is recommended for families experiencing Pitru dosha due to incomplete or improper ancestral rites."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Tripindi Shraddha performed in Gokarna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gokarna is a sacred Shaiva kshetra. Performing Tripindi Shraddha here as per traditional customs is believed to give peace to ancestors."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Tripindi Shraddha Pooja take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The pooja usually takes a few hours. Exact duration depends on ritual requirements and will be informed during booking."
                }
              },
              {
                "@type": "Question",
                "name": "What dress code should be followed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional attire is recommended. Detailed instructions will be provided before the pooja."
                }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="pooja-hero">
        <h1>Tripindi Shraddha Pooja in Gokarna</h1>
        <p className="hero-subtext">
          Tripindi Shraddha is an important ancestral ritual performed to resolve
          Pitru dosha caused by incomplete or improper rites performed for
          departed ancestors.
        </p>
      </section>

      {/* CONTENT */}
      <section className="pooja-content">
        <h2>Who should perform Tripindi Shraddha?</h2>
        <p>
          Tripindi Shraddha is advised for families facing recurring obstacles,
          delays, or disturbances believed to be due to Pitru dosha arising from
          incomplete ancestral rituals.
        </p>

        <h2>Why perform Tripindi Shraddha in Gokarna?</h2>
        <p>
          Gokarna is a sacred pilgrimage center associated with Lord Mahabaleshwara.
          Performing Tripindi Shraddha here as per traditional customs is believed
          to bring lasting peace to ancestors and harmony to the family.
        </p>

        <h2>Brief Procedure</h2>
        <p>
          The ritual involves symbolic offerings, mantra chanting, and sankalpa
          performed by experienced priests near sacred water bodies following
          traditional practices of Gokarna.
        </p>

        <h2>Duration & Preparations</h2>
        <p>
          The pooja generally takes a few hours. Devotees will be guided about
          preparations, materials, and dress code during booking.
        </p>
      </section>

      {/* FAQ (Accordion) */}
      <section className="pooja-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>
            Is Tripindi Shraddha mandatory with Narayana Bali?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            In certain cases, Tripindi Shraddha may be suggested along with
            Narayana Bali based on ancestral conditions.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Can devotees from outside Gokarna perform this pooja?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Yes. Devotees visiting Gokarna from different parts of India can
            perform Tripindi Shraddha with proper guidance.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Is fasting required before Tripindi Shraddha?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Devotees are generally advised to follow simple dietary restrictions.
            Exact instructions will be provided during booking.
          </p>
        </details>
      </section>

      {/* Bottom CTA */}
      <section className="pooja-bottom-cta">
        <p>
          📞 For Tripindi Shraddha Pooja booking in Gokarna, please{" "}
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
}

export default TripindiShraddha;
