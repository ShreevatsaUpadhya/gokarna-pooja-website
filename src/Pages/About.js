import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* ✅ SEO Metadata for About Page */}
      <Helmet>
        <title>About Gokarna Seva Kaarya | Trusted Purohits & Temple Services in Gokarna</title>
        <meta
          name="description"
          content="Gokarna Seva Kaarya offers authentic Hindu pooja services in Gokarna including Narayana Bali, Kaala Sarpa Shanti, Pitru Pooja, and temple sevas. Learn about our mission and trusted purohits."
        />
        <meta
          name="keywords"
          content="about Gokarna Seva Kaarya, Gokarna pooja services, purohit in Gokarna, Narayana Bali, Kaala Sarpa Shanti, temple rituals, Gokarna priests, Hindu poojas"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Gokarna Seva Kaarya | Authentic Temple Pooja Services" />
        <meta
          property="og:description"
          content="Learn about Gokarna Seva Kaarya — dedicated to performing authentic Hindu poojas and temple rituals with trusted priests in Gokarna, Karnataka."
        />
        <meta property="og:url" content="https://www.gokarnapoojas.in/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.gokarnapoojas.in/about" />

        {/* ✅ Structured Data for Organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gokarna Seva Kaarya",
              "url": "https://www.gokarnapoojas.in",
              "logo": "https://www.gokarnapoojas.in/logo.png",
              "sameAs": [
                "https://www.gokarnapoojas.in"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9110893433",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Kannada"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kotiteertha Road, Near Venkatramana Temple",
                "addressLocality": "Gokarna",
                "addressRegion": "Karnataka",
                "postalCode": "581326",
                "addressCountry": "IN"
              },
              "description": "Gokarna Seva Kaarya provides authentic Hindu poojas and temple rituals performed by trusted priests in Gokarna, Karnataka."
            }
          `}
        </script>
      </Helmet>

      {/* ✅ Page Content */}
      <h1>About Us</h1>
      <div className="divider"></div>

      <p>
        Welcome to <strong>Gokarna Seva Kaarya</strong>. We are dedicated to providing
        <strong> authentic </strong> and traditional pooja services in Gokarna, helping
        devotees perform rituals with devotion and ease.
      </p>

      <p>
        Our mission is to assist devotees in deepening their{" "}
        <strong>spiritual connection</strong> — whether for personal, family, or ancestral
        rituals performed in the holy town of Gokarna.
      </p>

      <p>
        With trusted priests and a <strong>deep-rooted tradition</strong>, we ensure that
        every pooja and seva is conducted with sincerity, faith, and respect for sacred customs.
      </p>
    </div>
  );
}

export default About;