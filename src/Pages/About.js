
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>
          About Gokarna Seva Kaarya | Authentic Pooja Services in Gokarna
        </title>
        <meta
          name="description"
          content="Learn about Gokarna Seva Kaarya, our family's Vedic heritage, Agnihotra tradition, and traditional Hindu pooja services in Gokarna."
        />
        <link
          rel="canonical"
          href="https://www.gokarnapoojas.in/about"
        />
      </Helmet>

      <h1>About Gokarna Seva Kaarya</h1>
      <div className="divider"></div>

      <p>
        <strong>Gokarna Seva Kaarya</strong> is a devotional service
        initiative created to assist devotees in performing traditional
        Hindu poojas and temple rituals in the sacred kshetra of{" "}
        <strong>Gokarna</strong>.
      </p>

      <p>
        We help devotees with arrangements and guidance for important
        rituals such as{" "}
        <strong>
          Narayana Bali, Pitru Pooja, Apara Karma, Rudrabhisheka,
          and other temple sevas
        </strong>{" "}
        as per established traditions followed in Gokarna.
      </p>

      <p>
        Our focus is to help devotees perform these rituals peacefully,
        with clarity about the procedures, requirements, and customs,
        especially for families visiting Gokarna from outside.
      </p>

      <p>
        Every pooja is approached with respect for tradition, sincerity,
        and the spiritual significance of Gokarna as a revered
        pilgrimage destination.
      </p>

      <section className="about-legacy">
        <span className="about-legacy-label">
          OUR FAMILY HERITAGE
        </span>

        <h2>A Legacy Rooted in Vedic Tradition</h2>

        <p>
          Our family's history is connected with generations of Vedic
          learning and the Agnihotri tradition. We honour the lives
          and contributions of Ananta Mahabaleshwar Upadhyaya,
          Umashiva Ananta Upadhyaya, and our grandfather,
          Dwijaraja Upadhyaya.
        </p>

        <p>
          Discover our family history, the sacred Agnihotra tradition,
          and the documented honours received by Dwijaraja Upadhyaya.
        </p>

        <Link
          to="/our-legacy"
          className="about-legacy-link"
          aria-label="Explore our family legacy"
        >
          Explore Our Family Legacy
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <p className="about-cta">
        For pooja details and arrangements, please feel free to{" "}
        <strong>call or WhatsApp us</strong>.
      </p>
    </div>
  );
}

export default About;
