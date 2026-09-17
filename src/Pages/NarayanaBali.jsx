import React from "react";
import { Helmet } from "react-helmet";
import "./PoojaDetail.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function NarayanaBali() {
  const whatsappNumber = "919110893433";
  const phoneNumber = "+919110893433";

  const whatsappMessage =
    "Namaste, I would like to enquire about Narayana Bali Pooja in Gokarna.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="pooja-detail-page">
      <Helmet>
        {/* SEO */}
        <title>Narayana Bali Pooja in Gokarna | Gokarna Poojas</title>

        <meta
          name="description"
          content="Learn about Narayana Bali Pooja in Gokarna, including its traditional purpose, procedure, requirements and booking guidance. Enquire about suitable dates and preparations."
        />

        <meta
          name="keywords"
          content="Narayana Bali Gokarna, Narayana Bali Pooja in Gokarna, Narayana Bali Pooja, Gokarna Narayana Bali, ancestral rituals Gokarna, Narayana Bali booking Gokarna"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.gokarnapoojas.in/narayana-bali"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Narayana Bali Pooja in Gokarna | Gokarna Poojas"
        />

        <meta
          property="og:description"
          content="Learn about Narayana Bali Pooja in Gokarna, traditional procedures, requirements and booking guidance."
        />

        <meta
          property="og:url"
          content="https://www.gokarnapoojas.in/narayana-bali"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:site_name"
          content="Gokarna Seva Kaarya"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />

        <meta
          name="twitter:title"
          content="Narayana Bali Pooja in Gokarna | Gokarna Poojas"
        />

        <meta
          name="twitter:description"
          content="Learn about Narayana Bali Pooja in Gokarna, traditional procedures, requirements and booking guidance."
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
        "text": "Devotees may be advised to follow simple dietary restrictions before the pooja. Exact instructions are shared during booking."
      }
    },
    {
      "@type": "Question",
      "name": "Can women participate in Narayana Bali Pooja?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Participation guidelines may vary based on tradition and the specific ritual arrangements. This can be clarified while confirming the pooja."
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
        "text": "Suitable dates are decided according to traditional ritual guidelines and devotee availability. You may contact us to know appropriate dates."
      }
    }
  ]
}
`}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.gokarnapoojas.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Poojas",
      "item": "https://www.gokarnapoojas.in/poojas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Narayana Bali",
      "item": "https://www.gokarnapoojas.in/narayana-bali"
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
          Narayana Bali is a traditional ancestral ritual performed according
          to established ritual practices, particularly in connection with
          certain cases of untimely or unnatural death.
        </p>

        {/* STICKY CONTACT BAR */}
        <div className="sticky-contact-bar">
          <a href={`tel:${phoneNumber}`} className="sticky-call">
            <FaPhoneAlt size={16} />
            <span>Call</span>
          </a>

          <a
            href={whatsappLink}
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
          Narayana Bali is traditionally performed in connection with certain
          ancestral and death-related circumstances. Families who wish to
          understand whether this ritual is appropriate for their situation can
          seek guidance based on their family tradition and ritual
          requirements.
        </p>

        <h2>Why perform Narayana Bali in Gokarna?</h2>

        <p>
          Gokarna is a sacred Shaiva kshetra associated with Lord Mahabaleshwara
          and has a long-standing tradition of performing various religious and
          ancestral rituals. Devotees may choose Gokarna for Narayana Bali as
          part of these established ritual practices.
        </p>

        <h2>Brief Procedure</h2>

        <p>
          The ritual is performed under the guidance of priests and generally
          includes sankalpa, mantra chanting, symbolic rites and traditional
          offerings. The exact procedure may vary according to the ritual
          tradition and individual circumstances.
        </p>

        <h2>Duration & Requirements</h2>

        <p>
          The ritual generally takes several hours to complete. Devotees will be
          guided regarding required materials, dress code and preparations
          before the pooja.
        </p>

        <h2>Booking & Guidance</h2>

        <p>
          For availability, suitable dates and detailed preparation guidance,
          devotees can contact us directly. We assist devotees planning their
          visit to Gokarna from different parts of India.
        </p>

        {/* INTERNAL LINK TO PITRU PAKSHA */}
        <div className="related-pooja-link">
          <h2>Pitru Paksha Pooja in Gokarna</h2>

          <p>
            If you are planning ancestral rituals during Pitru Paksha, you can
            also explore our guide covering Pitru Tarpana, Shraddha, Pinda
            Pradana and other traditional Pitru-related rituals in Gokarna.
          </p>

          <a href="/pitru-paksha-pooja">
            Explore Pitru Paksha Pooja →
          </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="pooja-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>
            What are the items required for Narayana Bali?
            <span className="arrow">⌄</span>
          </summary>

          <p>
            Required items will be informed during booking. Devotees are
            generally guided about materials, dress code and preparations in
            advance.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Is fasting required before Narayana Bali Pooja?
            <span className="arrow">⌄</span>
          </summary>

          <p>
            Devotees may be advised to follow simple dietary restrictions before
            the pooja. Exact instructions will be shared during booking.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Can women participate in Narayana Bali Pooja?
            <span className="arrow">⌄</span>
          </summary>

          <p>
            Participation guidelines may vary based on tradition and the
            specific ritual arrangements. This can be clarified individually
            while confirming the pooja.
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
            The appropriate date is decided based on traditional ritual
            guidelines and devotee availability. You can contact us to know
            suitable dates.
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