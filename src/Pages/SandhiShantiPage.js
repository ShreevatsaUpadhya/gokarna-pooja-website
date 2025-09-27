import React from "react";
import "./SandhiShantiPage.css";

const sandhiShantiList = [
  {
    name: "Kuja Rahu Sandhi Shanti",
    details: "This ritual is performed when Mars (Kuja) and Rahu are in critical planetary positions in a horoscope.\nIt helps reduce aggression, conflicts, accidents, and health issues caused by this combination, and brings balance in personal and professional life.",
  },
  {
    name: "Rahu Brihaspati Sandhi Shanti",
    details: "When Rahu and Jupiter (Brihaspati) align unfavorably, it can cause delays, financial struggles, and obstacles in education or career.\nThis pooja reduces the malefic effects of Rahu, strengthens Jupiter’s blessings, and supports wisdom, growth, and stability.",
  },
  {
    name: "Shukra Aditya Sandhi Shanti",
    details: "When Venus (Shukra) and Sun (Aditya) are in a critical state, it can disturb relationships, finances, and self-confidence.\nPerforming this ritual harmonizes energy between Sun and Venus, improves family harmony, prosperity, and brings overall balance in life.",
  },
];

const SandhiShantiPage = () => {
  return (
    <div className="sandhi-page">
        <div className="sandhi-shanti-content">
      <h2 className="sandhi-heading">🕉 Sandhi Shanti Poojas</h2>
      <p className="sandhi-intro">
        Sandhi Shanti poojas are performed during critical planetary transitions
        to remove obstacles, reduce doshas, and bring peace.
      </p>
      
       <ul className="sandhi-list">
        {sandhiShantiList.map((p, i) => (
          <li key={i} className="sandhi-item">
            <h3>{p.name}</h3>
            <p>{p.details}</p>
          </li>
        ))}
      </ul>
    
    </div>
    </div>
  );
};
export default SandhiShantiPage;
