import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import heroImage from "../assets/temple-bg.jpg";

function Home() {
  return (
    <div className="home">
      {/* ✅ SEO Metadata for Home Page */}
      <Helmet>
        <title>Gokarna Pooja Services | Authentic Temple Rituals in Gokarna</title>
        <meta
          name="description"
          content="Experience authentic Gokarna pooja services, including Narayana Bali, Pitru Dosh Nivarana, and Devatha Kaarya. Book trusted purohits for traditional temple rituals in Gokarna, Karnataka."
        />
        <meta
          name="keywords"
          content="Gokarna pooja services, Gokarna temple rituals, Narayana Bali pooja, Pitru pooja Gokarna, Gokarna purohit booking, Apara karma Gokarna, Gokarna priest services"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Gokarna Pooja Services | Authentic Rituals in Gokarna" />
        <meta
          property="og:description"
          content="Book Gokarna pooja services with trusted priests for Narayana Bali, Pitru Dosh Nivarana, and Devatha Kaarya rituals."
        />
        <meta property="og:url" content="https://gokarnapoojas.in" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ✅ Main Hero Section */}
      <div
        className="hero"
        style={{ "--hero-bg": `url(${heroImage})` }}
      >
        <h1>Welcome to Gokarna Pooja Services</h1>
        <p>
          We provide authentic <strong>Devatha Kaarya</strong> and <strong>Apara</strong>{" "}
          pooja services in Gokarna. Explore our offerings and contact us for
          bookings with trusted Vedic priests.
        </p>
      </div>
    </div>
  );
}

export default Home;