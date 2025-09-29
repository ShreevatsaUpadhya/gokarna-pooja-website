import React from "react";
 import "./SarpaDoshaPage.css";
const sarpaDoshaList = [
  { name: "Sarpa Sanskara", details: "A powerful ritual performed to atone for Naga Dosha or harm caused to snakes (directly or in past lives).\nIt helps remove obstacles in marriage, fertility issues, health problems, and brings peace to the family." },
  { name: "Chara Naaga Pratishta", details: "This involves installing serpent idols (Naga Devatas) in temples or sacred places.\nIt balances serpent-related karmic issues, protects from doshas, and ensures prosperity, progeny, and spiritual growth." },
  { name: "Aashlesha Bali", details: "Conducted on the Ashlesha Nakshatra day, this ritual is done to please serpent deities.\nIt removes Sarpa Dosha, relieves difficulties in marriage and childbirth, and blesses with harmony and wellbeing" },
  { name: "Kaala Sarpa Shanti", details: "Performed when all planets are trapped between Rahu and Ketu (Kaala Sarpa Dosha in horoscope).\nThis pooja reduces struggles, delays, and hardships, and helps attain stability, peace, and progress in life." },
];

const SarpaDoshaPage = () => {
  return (
    <div className="sarpa-dosha-page">
      <div className="sarpa-dosha-content">
        <h2 className="sarpa-dosha-heading">🕉 Sarpa Dosha Parihaara</h2>
        <p className="sarpa-dosha-intro">
          Sarpa Dosha Parihara is a ritual remedy performed to appease serpent deities and remove the ill effects of Sarpa Dosha. It helps overcome obstacles in marriage, health, and progeny, bringing peace and balance in life.
        </p>

        <ul className="sarpa-dosha-list">
          {sarpaDoshaList.map((p, i) => (
            <li key={i} className="sarpa-dosha-item">
              <h3>{p.name}</h3>
              <p>{p.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SarpaDoshaPage;
