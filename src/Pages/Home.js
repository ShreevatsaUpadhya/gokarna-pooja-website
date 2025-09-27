
import React from "react";
import "./Home.css";
import heroImage from "../assets/temple-bg.jpg";

function Home() {
  return (
    <div className="home">
      <div className="hero"
      style={{ "--hero-bg": `url(${heroImage})` }}>
        <h1>Welcome to the Gokarna Pooja Services</h1>
        <p>
          We provide authentic <strong>Devatha Kaarya</strong> and <strong>Apara</strong>{" "}
          pooja services in Gokarna. Explore our offerings and contact us for
          bookings.
        </p>
      </div>
    </div>
  );
}

export default Home;
