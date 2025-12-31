import React from "react";
import { Helmet } from "react-helmet";
import "./PoojaDetail.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


function NarayanaBali() {
  return (
    <div className="pooja-detail-page">
      <Helmet>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the items required for Narayana Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Required items will be informed during booking. Devotees are guided in advance regarding materials, dress code, and preparations."
      }
    },
    {
      "@type": "Question",
      "name": "Is fasting required before Narayana Bali Pooja?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Devotees are usually advised to follow simple dietary restrictions before the pooja. Exact instructions are shared during booking."
      }
    },
    {
      "@type": "Question",
      "name": "Can women participate in Narayana Bali Pooja?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Participation guidelines may vary based on tradition. This will be clarified individually while confirming the pooja."
      }
    },
    {
      "@type": "Question",
      "name": "What dress code should be followed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional attire is recommended. Specific dress code details are provided before the pooja."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to perform Narayana Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Suitable dates are decided as per ritual guidelines and devotee availability. You may contact us to know appropriate dates."
      }
    }
  ]
}
`}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="pooja-hero">
        <h1>Narayana Bali Pooja in Gokarna</h1>
        <p className="hero-subtext">
          Narayana Bali is a sacred ancestral ritual performed to provide peace
          to souls who faced untimely or unnatural death, as prescribed in Vedic
          scriptures.
        </p>

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
      </section>

      {/* CONTENT */}
      <section className="pooja-content">
        <h2>Who should perform Narayana Bali?</h2>
        <p>
          Narayana Bali is recommended for families experiencing repeated
          obstacles, unexplained difficulties, delays in marriage or career, or
          disturbances believed to be caused by ancestral dissatisfaction due to
          unnatural or untimely death.
        </p>

        <h2>Why perform Narayana Bali in Gokarna?</h2>
        <p>
          Gokarna is a sacred Shaiva kshetra associated with Lord
          Mahabaleshwara. Performing Narayana Bali here is believed to bring
          lasting peace to ancestors and relief to the family, as the rituals
          follow traditional practices specific to Gokarna.
        </p>

        <h2>Brief Procedure</h2>
        <p>
          The pooja is performed near sacred water bodies under the guidance of
          experienced priests. It involves sankalpa, mantra chanting, symbolic
          rites, and offerings conducted as per Vedic injunctions.
        </p>

        <h2>Duration & Requirements</h2>
        <p>
          The ritual generally takes several hours to complete. Devotees will be
          guided regarding required materials, dress code, and preparations
          during booking.
        </p>

        <h2>Booking & Guidance</h2>
        <p>
          For availability, dates, and detailed guidance, devotees are requested
          to contact us directly. We assist devotees visiting Gokarna from
          different parts of India.
        </p>
      </section>
      {/* ===========================
    FAQ SECTION
=========================== */}
      {/* ===========================
    FAQ SECTION (Accordion)
=========================== */}
      <section className="pooja-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>
            What are the items required for Narayana Bali?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Required items will be informed during booking. Devotees are
            generally guided about materials, dress code, and preparations in
            advance.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Is fasting required before Narayana Bali Pooja?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            In most cases, devotees are advised to follow simple dietary
            restrictions before the pooja. Exact instructions will be shared
            during booking.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Can women participate in Narayana Bali Pooja?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Participation guidelines may vary based on tradition. This will be
            clarified individually while confirming the pooja.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            What dress code should be followed?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            Traditional attire is recommended. Specific dress code details will
            be provided before the pooja.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            When is the best time to perform Narayana Bali?
            <span className="arrow">⌄</span>
          </summary>
          <p>
            The appropriate date is decided based on ritual guidelines and
            devotee availability. You can contact us to know suitable dates.
          </p>
        </details>
      </section>

      {/* CTA */}
      <section className="pooja-bottom-cta">
        <p>
          📞 For Narayana Bali Pooja booking in Gokarna, please{" "}
          <strong>call or WhatsApp us</strong>.
        </p>
      </section>
    </div>
  );
}

export default NarayanaBali;
