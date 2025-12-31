import React from "react";
import { Helmet } from "react-helmet";
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
          content="Gokarna Seva Kaarya helps devotees perform authentic Hindu poojas and temple rituals in Gokarna, including Narayana Bali, Pitru Pooja, and Apara Karma, with proper guidance and arrangements."
        />
        <link rel="canonical" href="https://www.gokarnapoojas.in/about" />
      </Helmet>

      {/* Page Content */}
      <h1>About Gokarna Seva Kaarya</h1>
      <div className="divider"></div>

      <p>
        <strong>Gokarna Seva Kaarya</strong> is a devotional service initiative created
        to assist devotees in performing traditional Hindu poojas and temple rituals
        in the sacred kshetra of <strong>Gokarna</strong>.
      </p>

      <p>
        We help devotees with arrangements and guidance for important rituals such as{" "}
        <strong>
          Narayana Bali, Pitru Pooja, Apara Karma, Rudrabhisheka, and other temple sevas
        </strong>{" "}
        as per established traditions followed in Gokarna.
      </p>

      <p>
        Our focus is to ensure that devotees can perform these rituals peacefully,
        with clarity about the procedure, requirements, and temple customs —
        especially for families visiting Gokarna from outside.
      </p>

      <p>
        Every pooja is carried out with respect for tradition, sincerity, and adherence
        to the spiritual significance of Gokarna as a revered pilgrimage destination.
      </p>

      <p className="about-cta">
        📞 For pooja details and arrangements, please feel free to{" "}
        <strong>call or WhatsApp us</strong>.
      </p>
    </div>
  );
}

export default About;
