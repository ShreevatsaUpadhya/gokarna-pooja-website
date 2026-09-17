import React from "react";
import { Helmet } from "react-helmet";
import "./PoojaDetail.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function TripindiShraddha() {
  const whatsappNumber = "919110893433";
  const phoneNumber = "+919110893433";

  const whatsappMessage =
    "Namaste, I would like to enquire about Tripindi Shraddha Pooja in Gokarna.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="pooja-detail-page">
      <Helmet>
        {/* SEO */}
        <title>
          Tripindi Shraddha Pooja in Gokarna | Procedure & Booking
        </title>

        <meta
          name="description"
          content="Learn about Tripindi Shraddha Pooja in Gokarna, including its traditional purpose, procedure, preparations and booking guidance. Enquire about suitable dates."
        />

        <meta
          name="keywords"
          content="Tripindi Shraddha Gokarna, Tripindi Shraddha Pooja in Gokarna, Tripindi Shraddha Pooja, Pitru rituals Gokarna, ancestral rituals Gokarna, Tripindi Shraddha booking Gokarna"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.gokarnapoojas.in/tripindi-shraddha"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Tripindi Shraddha Pooja in Gokarna | Gokarna Poojas"
        />

        <meta
          property="og:description"
          content="Learn about Tripindi Shraddha Pooja in Gokarna, traditional procedures, preparations and booking guidance."
        />

        <meta
          property="og:url"
          content="https://www.gokarnapoojas.in/tripindi-shraddha"
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
          content="Tripindi Shraddha Pooja in Gokarna | Gokarna Poojas"
        />

        <meta
          name="twitter:description"
          content="Learn about Tripindi Shraddha Pooja in Gokarna, traditional procedures, preparations and booking guidance."
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
        "text": "Tripindi Shraddha is a traditional ancestral ritual that may be performed in circumstances involving incomplete or unresolved ancestral rites. Devotees can seek guidance based on their family tradition and individual circumstances."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Tripindi Shraddha performed in Gokarna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gokarna is a sacred Shaiva kshetra associated with Lord Mahabaleshwara and has a long-standing tradition of performing religious and ancestral rituals."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Tripindi Shraddha Pooja take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The pooja generally takes a few hours. Exact duration depends on the ritual requirements and will be informed during booking."
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
      "name": "Tripindi Shraddha",
      "item": "https://www.gokarnapoojas.in/tripindi-shraddha"
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
          Tripindi Shraddha is a traditional ancestral ritual associated with
          addressing certain circumstances involving incomplete or unresolved
          ancestral rites.
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
        <h2>Who should perform Tripindi Shraddha?</h2>

        <p>
          Tripindi Shraddha is traditionally performed in connection with
          certain ancestral circumstances and unresolved rites. Families who
          wish to understand whether this ritual is appropriate for their
          situation can seek guidance based on their family tradition and
          individual circumstances.
        </p>

        <h2>Why perform Tripindi Shraddha in Gokarna?</h2>

        <p>
          Gokarna is a sacred pilgrimage center associated with Lord
          Mahabaleshwara and has a long-standing tradition of performing
          religious and ancestral rituals. Devotees may choose Gokarna for
          Tripindi Shraddha as part of these established ritual practices.
        </p>

        <h2>Brief Procedure</h2>

        <p>
          The ritual generally involves sankalpa, mantra chanting, symbolic
          offerings and other traditional rites performed under the guidance of
          priests. The exact procedure may vary according to the ritual
          tradition and individual circumstances.
        </p>

        <h2>Duration & Preparations</h2>

        <p>
          The pooja generally takes a few hours. Devotees will be guided about
          preparations, required materials and dress code before the pooja.
        </p>

        {/* INTERNAL LINK TO PITRU PAKSHA */}
        <div className="related-pooja-link">
          <h2>Pitru Paksha Pooja in Gokarna</h2>

          <p>
            If you are planning ancestral rituals during Pitru Paksha, explore
            our guide to Pitru Tarpana, Shraddha, Pinda Pradana and other
            traditional Pitru-related rituals in Gokarna.
          </p>

          <a href="/pitru-paksha-pooja">
            Explore Pitru Paksha Pooja →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="pooja-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>
            Is Tripindi Shraddha mandatory with Narayana Bali?
            <span className="arrow">⌄</span>
          </summary>

          <p>
            Tripindi Shraddha and Narayana Bali are distinct rituals. In some
            circumstances, both may be considered based on traditional
            guidance and the devotee's individual situation.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Can devotees from outside Gokarna perform this pooja?
            <span className="arrow">⌄</span>
          </summary>

          <p>
            Yes. Devotees visiting Gokarna from different parts of India can
            enquire about performing Tripindi Shraddha and receive guidance
            regarding the preparations.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            Is fasting required before Tripindi Shraddha?
            <span className="arrow">⌄</span>
          </summary>

          <p>
            Devotees may be advised to follow simple dietary restrictions before
            the pooja. Exact instructions will be provided during booking.
          </p>
        </details>
      </section>

      {/* BOTTOM CTA */}
      <section className="pooja-bottom-cta">
        <p>
          📞 For Tripindi Shraddha Pooja booking in Gokarna, please{" "}
          <strong>call or WhatsApp us</strong>.
        </p>
      </section>
    </div>
  );
}

export default TripindiShraddha;