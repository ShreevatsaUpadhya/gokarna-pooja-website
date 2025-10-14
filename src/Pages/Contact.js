import "./Contact.css";
import React from "react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      {/* ✅ SEO Metadata for Contact Page */}
      <Helmet>
        <title>Contact Gokarna Seva Kaarya | Book Pooja & Temple Rituals in Gokarna</title>
        <meta
          name="description"
          content="Get in touch with Gokarna Seva Kaarya to book temple poojas, homas, and rituals in Gokarna, Karnataka. Call or WhatsApp us for Narayana Bali, Kaala Sarpa Shanti, Rudrabhisheka, and more."
        />
        <meta
          name="keywords"
          content="contact gokarna pooja, Gokarna Seva Kaarya contact, book pooja Gokarna, temple seva contact, purohit Gokarna phone number, Narayana Bali booking"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Gokarna Seva Kaarya | Pooja & Seva Bookings" />
        <meta
          property="og:description"
          content="Book Hindu poojas in Gokarna including Kaala Sarpa Shanti, Narayana Bali, Rudrabhisheka, and Pitru rituals. Call or WhatsApp for assistance."
        />
        <meta property="og:url" content="https://www.gokarnapoojas.in/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.gokarnapoojas.in/contact" />

        {/* ✅ Schema.org for Contact Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Gokarna Seva Kaarya",
                "url": "https://www.gokarnapoojas.in",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9110893433",
                  "contactType": "Customer Service",
                  "areaServed": "IN",
                  "availableLanguage": "English, Kannada"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* ✅ Page Content */}
      <h1>📞 Contact Us</h1>
      <p>
        We are here to assist you with all{" "}
        <strong>pooja bookings</strong> and{" "}
        <strong>seva services</strong> in Gokarna.
      </p>

      <div className="contact-actions">
        <a href="tel:+919110893433" className="contact-btn phone-btn">
          <FaPhoneAlt size={20} /> Call Us
        </a>

        <a
          href="https://wa.me/919110893433?text=Namaste%2C%20I%20want%20to%20book%20a%20pooja"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp-btn"
        >
          <FaWhatsapp size={20} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Contact;