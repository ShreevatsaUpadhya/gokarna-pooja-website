// import React from "react";
// import { Helmet } from "react-helmet";
// import "./PitruPaksha.css";

// const PitruPaksha = () => {
//     const whatsappNumber = "9110893433";
//     const phoneNumber = "+919110893433";

//     const whatsappMessage =
//         "Namaste, I would like to enquire about Pitru Paksha Pooja in Gokarna.";

//     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//         whatsappMessage
//     )}`;

//     return (
//         <>
//             <Helmet>
//                 {/* =========================
//             SEO
//         ========================== */}

//                 <title>
//                     Pitru Paksha Pooja in Gokarna | Pitru Pooja & Shraddha
//                 </title>

//                 <meta
//                     name="description"
//                     content="Plan Pitru Paksha Pooja in Gokarna, including Pitru Tarpana, Shraddha and Pinda Pradana. Learn about traditional ancestral rituals and enquire with Gokarna Poojas."
//                 />

//                 <meta
//                     name="keywords"
//                     content="Pitru Paksha Pooja in Gokarna, Pitru Pooja in Gokarna, Pitru Tarpana Gokarna, Shraddha Pooja Gokarna, Pinda Pradana Gokarna, Pitru rituals Gokarna, Narayana Bali Gokarna, Tripindi Shraddha Gokarna"
//                 />

//                 <meta name="robots" content="index, follow" />

//                 {/* Canonical URL */}
//                 <link
//                     rel="canonical"
//                     href="https://www.gokarnapoojas.in/pitru-paksha-pooja"
//                 />

//                 {/* =========================
//             OPEN GRAPH
//         ========================== */}

//                 <meta property="og:type" content="website" />

//                 <meta
//                     property="og:title"
//                     content="Pitru Paksha Pooja in Gokarna | Gokarna Poojas"
//                 />

//                 <meta
//                     property="og:description"
//                     content="Learn about Pitru Paksha Pooja in Gokarna, including traditional Pitru Tarpana, Shraddha and Pinda Pradana rituals."
//                 />

//                 <meta
//                     property="og:url"
//                     content="https://www.gokarnapoojas.in/pitru-paksha-pooja"
//                 />

//                 {/* We will finalize the public image URL later */}
//                 <meta
//                     property="og:image"
//                     content="https://www.gokarnapoojas.in/images/pitru-paksha-hero.jpg"
//                 />

//                 <meta
//                     property="og:image:alt"
//                     content="Gokarna Mahabaleshwar Temple"
//                 />

//                 {/* =========================
//             TWITTER / X
//         ========================== */}

//                 <meta name="twitter:card" content="summary_large_image" />

//                 <meta
//                     name="twitter:title"
//                     content="Pitru Paksha Pooja in Gokarna | Gokarna Poojas"
//                 />

//                 <meta
//                     name="twitter:description"
//                     content="Traditional Pitru-related rituals and pooja information in Gokarna."
//                 />

//                 <meta
//                     name="twitter:image"
//                     content="https://www.gokarnapoojas.in/images/pitru-paksha-hero.jpg"
//                 />

//                 {/* =========================
//             FAQ SCHEMA
//         ========================== */}

//                 <script type="application/ld+json">
//                     {JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@type": "FAQPage",

//                         mainEntity: [
//                             {
//                                 "@type": "Question",
//                                 name: "What is Pitru Paksha?",
//                                 acceptedAnswer: {
//                                     "@type": "Answer",
//                                     text:
//                                         "Pitru Paksha is a traditional period dedicated to remembering ancestors and performing ancestral rituals and offerings.",
//                                 },
//                             },

//                             {
//                                 "@type": "Question",
//                                 name: "Can I perform Pitru Pooja in Gokarna?",
//                                 acceptedAnswer: {
//                                     "@type": "Answer",
//                                     text:
//                                         "Traditional Pitru-related rituals are performed in Gokarna. Contact Gokarna Poojas to understand the available rituals and arrangements for your requirements.",
//                                 },
//                             },

//                             {
//                                 "@type": "Question",
//                                 name: "Which Pitru rituals can be performed in Gokarna?",
//                                 acceptedAnswer: {
//                                     "@type": "Answer",
//                                     text:
//                                         "Depending on the family tradition and requirement, different ancestral rituals may be performed, including Tarpana, Shraddha, Pinda Pradana, Narayana Bali and Tripindi Shraddha.",
//                                 },
//                             },

//                             {
//                                 "@type": "Question",
//                                 name: "How can I enquire about Pitru Paksha Pooja?",
//                                 acceptedAnswer: {
//                                     "@type": "Answer",
//                                     text:
//                                         "You can contact Gokarna Poojas through WhatsApp or phone to enquire about the ritual, date and arrangements.",
//                                 },
//                             },

//                             {
//                                 "@type": "Question",
//                                 name: "Should I book the pooja in advance?",
//                                 acceptedAnswer: {
//                                     "@type": "Answer",
//                                     text:
//                                         "Advance enquiry is recommended, particularly during busy periods such as Pitru Paksha, so that the required arrangements can be discussed beforehand.",
//                                 },
//                             },
//                         ],
//                     })}
//                 </script>
//                 {/* =========================
//     BREADCRUMB SCHEMA
// ========================== */}

//                 <script type="application/ld+json">
//                     {JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@type": "BreadcrumbList",
//                         itemListElement: [
//                             {
//                                 "@type": "ListItem",
//                                 position: 1,
//                                 name: "Home",
//                                 item: "https://www.gokarnapoojas.in/",
//                             },
//                             {
//                                 "@type": "ListItem",
//                                 position: 2,
//                                 name: "Pitru Paksha Pooja",
//                                 item: "https://www.gokarnapoojas.in/pitru-paksha-pooja",
//                             },
//                         ],
//                     })}
//                 </script>
//             </Helmet>

//             <main className="pitru-page">

//                 {/* =========================
//             HERO
//         ========================== */}

//                 <section className="pitru-hero">
//                     <div className="pitru-hero-overlay">
//                         <div className="pitru-container">

//                             <p className="pitru-eyebrow">
//                                 🕉️ PITRU PAKSHA
//                             </p>

//                             <h1>
//                                 Pitru Paksha Pooja in Gokarna
//                             </h1>

//                             <p className="pitru-hero-text">
//                                 Learn about traditional Pitru-related rituals in Gokarna,
//                                 including Pitru Tarpana, Shraddha and Pinda Pradana,
//                                 and enquire about arrangements for your visit.
//                             </p>

//                             <div className="pitru-hero-buttons">

//                                 <a
//                                     href={whatsappLink}
//                                     className="pitru-btn pitru-btn-primary"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     Enquire on WhatsApp
//                                 </a>

//                                 <a
//                                     href={`tel:${phoneNumber}`}
//                                     className="pitru-btn pitru-btn-secondary"
//                                 >
//                                     Call for Enquiry
//                                 </a>

//                             </div>

//                         </div>
//                     </div>
//                 </section>


//                 {/* =========================
//             INTRODUCTION
//         ========================== */}

//                 <section className="pitru-section">

//                     <div className="pitru-container">

//                         <p className="pitru-section-label">
//                             PITRU PAKSHA
//                         </p>

//                         <h2>
//                             A Sacred Time to Remember Our Ancestors
//                         </h2>

//                         <p>
//                             Pitru Paksha is a traditional period dedicated to remembering
//                             and offering prayers for departed ancestors. During this time,
//                             families perform various ancestral rituals as a way of expressing
//                             remembrance, gratitude and respect towards their forefathers.
//                         </p>

//                         <p>
//                             Gokarna is a revered pilgrimage destination in Karnataka and is
//                             associated with several traditional religious rituals. Devotees
//                             visit Gokarna from different parts of India to perform poojas,
//                             prayers and ancestral rites.
//                         </p>

//                         <p>
//                             If you are planning to perform Pitru-related rituals in Gokarna
//                             during Pitru Paksha, Gokarna Poojas can assist you with
//                             information and booking guidance.
//                         </p>

//                     </div>

//                 </section>


//                 {/* =========================
//             SERVICES
//         ========================== */}

//                 <section className="pitru-section pitru-services-section">

//                     <div className="pitru-container">

//                         <p className="pitru-section-label">
//                             TRADITIONAL RITUALS
//                         </p>

//                         <h2>
//                             Pitru-Related Poojas & Rituals in Gokarna
//                         </h2>

//                         <div className="pitru-services-grid">

//                             <div className="pitru-service-card">

//                                 <div className="pitru-service-icon">
//                                     🪔
//                                 </div>

//                                 <h3>
//                                     Pitru Tarpana
//                                 </h3>

//                                 <p>
//                                     A traditional offering performed in remembrance of
//                                     departed ancestors.
//                                 </p>

//                             </div>


//                             <div className="pitru-service-card">

//                                 <div className="pitru-service-icon">
//                                     🙏
//                                 </div>

//                                 <h3>
//                                     Shraddha
//                                 </h3>

//                                 <p>
//                                     Traditional ancestral rites performed with prayers,
//                                     offerings and remembrance.
//                                 </p>

//                             </div>


//                             <div className="pitru-service-card">

//                                 <div className="pitru-service-icon">
//                                     🌿
//                                 </div>

//                                 <h3>
//                                     Pinda Pradana
//                                 </h3>

//                                 <p>
//                                     A traditional ancestral offering performed as part of
//                                     specific Pitru-related rituals.
//                                 </p>

//                             </div>


//                             <div className="pitru-service-card">

//                                 <div className="pitru-service-icon">
//                                     🕉️
//                                 </div>

//                                 <h3>
//                                     Narayana Bali
//                                 </h3>

//                                 <p>
//                                     A traditional ritual with specific procedures and
//                                     significance in ancestral rites.
//                                 </p>

//                                 <a href="/narayana-bali">
//                                     Learn More →
//                                 </a>

//                             </div>


//                             <div className="pitru-service-card">

//                                 <div className="pitru-service-icon">
//                                     🪷
//                                 </div>

//                                 <h3>
//                                     Tripindi Shraddha
//                                 </h3>

//                                 <p>
//                                     A traditional ancestral ritual performed according to
//                                     prescribed religious practices.
//                                 </p>

//                                 <a href="/tripindi-shraddha">
//                                     Learn More →
//                                 </a>

//                             </div>

//                         </div>

//                     </div>

//                 </section>


//                 {/* =========================
//             WHY GOKARNA
//         ========================== */}

//                 <section className="pitru-section">

//                     <div className="pitru-container pitru-two-column">

//                         <div>

//                             <p className="pitru-section-label">
//                                 SACRED GOKARNA
//                             </p>

//                             <h2>
//                                 Why Perform Pitru Rituals in Gokarna?
//                             </h2>

//                             <p>
//                                 Gokarna is an important pilgrimage destination in Karnataka,
//                                 known for its temples and sacred traditions. The town attracts
//                                 devotees who come to perform various religious ceremonies and
//                                 ancestral rites.
//                             </p>

//                             <p>
//                                 For families looking to perform traditional Pitru-related
//                                 rituals in Gokarna, planning the ceremony in advance can help
//                                 ensure that the required arrangements and guidance are
//                                 available.
//                             </p>

//                         </div>


//                         <div className="pitru-info-box">

//                             <h3>
//                                 Planning a Pitru Pooja?
//                             </h3>

//                             <p>
//                                 Contact us to understand the available rituals, required
//                                 arrangements and booking process.
//                             </p>

//                             <a
//                                 href={whatsappLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="pitru-btn pitru-btn-primary"
//                             >
//                                 Enquire on WhatsApp
//                             </a>

//                         </div>

//                     </div>

//                 </section>


//                 {/* =========================
//             PROCESS
//         ========================== */}

//                 <section className="pitru-section pitru-process-section">

//                     <div className="pitru-container">

//                         <p className="pitru-section-label">
//                             SIMPLE PROCESS
//                         </p>

//                         <h2>
//                             How to Plan Your Pitru Pooja in Gokarna
//                         </h2>

//                         <div className="pitru-process-grid">

//                             <div className="pitru-process-card">

//                                 <span>01</span>

//                                 <h3>
//                                     Contact Us
//                                 </h3>

//                                 <p>
//                                     Get in touch with us through WhatsApp or phone.
//                                 </p>

//                             </div>


//                             <div className="pitru-process-card">

//                                 <span>02</span>

//                                 <h3>
//                                     Share Details
//                                 </h3>

//                                 <p>
//                                     Share your preferred date and the ritual you are looking
//                                     for.
//                                 </p>

//                             </div>


//                             <div className="pitru-process-card">

//                                 <span>03</span>

//                                 <h3>
//                                     Receive Guidance
//                                 </h3>

//                                 <p>
//                                     We provide information about the available arrangements
//                                     and procedure.
//                                 </p>

//                             </div>


//                             <div className="pitru-process-card">

//                                 <span>04</span>

//                                 <h3>
//                                     Plan Your Visit
//                                 </h3>

//                                 <p>
//                                     Complete the arrangements and plan your visit to Gokarna.
//                                 </p>

//                             </div>

//                         </div>

//                     </div>

//                 </section>


//                 {/* =========================
//             FAQ
//         ========================== */}

//                 <section className="pitru-section">

//                     <div className="pitru-container">

//                         <p className="pitru-section-label">
//                             FAQ
//                         </p>

//                         <h2>
//                             Frequently Asked Questions
//                         </h2>

//                         <div className="pitru-faq">

//                             <details>

//                                 <summary>
//                                     What is Pitru Paksha?
//                                 </summary>

//                                 <p>
//                                     Pitru Paksha is a traditional period dedicated to
//                                     remembering ancestors and performing ancestral rituals
//                                     and offerings.
//                                 </p>

//                             </details>


//                             <details>

//                                 <summary>
//                                     Can I perform Pitru Pooja in Gokarna?
//                                 </summary>

//                                 <p>
//                                     Traditional Pitru-related rituals are performed in Gokarna.
//                                     Contact us to understand the available rituals and
//                                     arrangements for your requirements.
//                                 </p>

//                             </details>


//                             <details>

//                                 <summary>
//                                     Which Pitru rituals can be performed in Gokarna?
//                                 </summary>

//                                 <p>
//                                     Depending on the family tradition and requirement,
//                                     different ancestral rituals may be performed, including
//                                     Tarpana, Shraddha, Pinda Pradana, Narayana Bali and
//                                     Tripindi Shraddha.
//                                 </p>

//                             </details>


//                             <details>

//                                 <summary>
//                                     How can I enquire about Pitru Paksha Pooja?
//                                 </summary>

//                                 <p>
//                                     You can contact Gokarna Poojas through WhatsApp or phone
//                                     to enquire about the ritual, date and arrangements.
//                                 </p>

//                             </details>


//                             <details>

//                                 <summary>
//                                     Should I book the pooja in advance?
//                                 </summary>

//                                 <p>
//                                     Advance enquiry is recommended, particularly during busy
//                                     periods such as Pitru Paksha, so that the required
//                                     arrangements can be discussed beforehand.
//                                 </p>

//                             </details>

//                         </div>

//                     </div>

//                 </section>


//                 {/* =========================
//             FINAL CTA
//         ========================== */}

//                 <section className="pitru-final-cta">

//                     <div className="pitru-container">

//                         <p className="pitru-section-label">
//                             GOKARNA POOJAS
//                         </p>

//                         <h2>
//                             Planning Pitru Paksha Rituals in Gokarna?
//                         </h2>

//                         <p>
//                             Contact us for information and booking assistance.
//                         </p>

//                         <div className="pitru-hero-buttons">

//                             <a
//                                 href={whatsappLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="pitru-btn pitru-btn-primary"
//                             >
//                                 WhatsApp Enquiry
//                             </a>

//                             <a
//                                 href={`tel:${phoneNumber}`}
//                                 className="pitru-btn pitru-btn-secondary"
//                             >
//                                 Call Now
//                             </a>

//                         </div>

//                     </div>

//                 </section>

//             </main>
//         </>
//     );
// };

// export default PitruPaksha;

import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./PitruPaksha.css";

const PitruPaksha = () => {
    const whatsappNumber = "919110893433";
    const phoneNumber = "+919110893433";

    const whatsappMessage =
        "Namaste, I would like to enquire about Pitru Paksha Pooja in Gokarna.";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <>
            <Helmet>

                {/* =========================
                    SEO
                ========================== */}

                <title>
                    Pitru Paksha Pooja in Gokarna | Pitru Pooja & Shraddha
                </title>

                <meta
                    name="description"
                    content="Learn about Pitru Paksha Pooja in Gokarna, including Pitru Tarpana, Shraddha, Pinda Pradana and other traditional ancestral rituals. Enquire about dates and arrangements."
                />

                <meta
                    name="keywords"
                    content="Pitru Paksha Pooja in Gokarna, Pitru Pooja in Gokarna, Pitru Tarpana Gokarna, Shraddha Pooja Gokarna, Pinda Pradana Gokarna, Pitru rituals Gokarna, Narayana Bali Gokarna, Tripindi Shraddha Gokarna"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <link
                    rel="canonical"
                    href="https://www.gokarnapoojas.in/pitru-paksha-pooja"
                />

                {/* =========================
                    OPEN GRAPH
                ========================== */}

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:title"
                    content="Pitru Paksha Pooja in Gokarna | Gokarna Poojas"
                />

                <meta
                    property="og:description"
                    content="Learn about traditional Pitru Tarpana, Shraddha, Pinda Pradana and other ancestral rituals in Gokarna."
                />

                <meta
                    property="og:url"
                    content="https://www.gokarnapoojas.in/pitru-paksha-pooja"
                />

                <meta
                    property="og:site_name"
                    content="Gokarna Seva Kaarya"
                />

                <meta
                    property="og:image:alt"
                    content="Pitru Paksha Pooja and traditional rituals in Gokarna"
                />

                {/* =========================
                    TWITTER / X
                ========================== */}

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Pitru Paksha Pooja in Gokarna | Gokarna Poojas"
                />

                <meta
                    name="twitter:description"
                    content="Learn about traditional Pitru-related rituals and ancestral offerings in Gokarna."
                />

                {/* =========================
                    FAQ SCHEMA
                ========================== */}

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is Pitru Paksha?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "Pitru Paksha is a traditional period dedicated to remembering ancestors and performing ancestral rituals and offerings.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I perform Pitru Pooja in Gokarna?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "Traditional Pitru-related rituals are performed in Gokarna. Contact Gokarna Poojas to understand the available rituals and arrangements for your requirements.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which Pitru rituals can be performed in Gokarna?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "Depending on family tradition and individual requirements, different ancestral rituals may be performed, including Tarpana, Shraddha, Pinda Pradana, Narayana Bali and Tripindi Shraddha.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How can I enquire about Pitru Paksha Pooja?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "You can contact Gokarna Poojas through WhatsApp or phone to enquire about the ritual, suitable date and arrangements.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Should I enquire about the pooja in advance?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "Advance enquiry is recommended, particularly during busy periods such as Pitru Paksha, so that the required arrangements can be discussed beforehand.",
                                },
                            },
                        ],
                    })}
                </script>

                {/* =========================
                    BREADCRUMB SCHEMA
                ========================== */}

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://www.gokarnapoojas.in/",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Pitru Paksha Pooja",
                                item: "https://www.gokarnapoojas.in/pitru-paksha-pooja",
                            },
                        ],
                    })}
                </script>

            </Helmet>

            <main className="pitru-page">

                {/* =========================
                    HERO
                ========================== */}

                <section className="pitru-hero">
                    <div className="pitru-hero-overlay">

                        <div className="pitru-container">

                            <p className="pitru-eyebrow">
                                🕉️ PITRU PAKSHA
                            </p>

                            <h1>
                                Pitru Paksha Pooja in Gokarna
                            </h1>

                            <p className="pitru-hero-text">
                                Learn about traditional Pitru-related rituals in Gokarna,
                                including Pitru Tarpana, Shraddha and Pinda Pradana,
                                and enquire about arrangements for your visit.
                            </p>

                            <div className="pitru-hero-buttons">

                                <a
                                    href={whatsappLink}
                                    className="pitru-btn pitru-btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Enquire on WhatsApp
                                </a>

                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="pitru-btn pitru-btn-secondary"
                                >
                                    Call for Enquiry
                                </a>

                            </div>

                        </div>

                    </div>
                </section>

                {/* =========================
                    INTRODUCTION
                ========================== */}

                <section className="pitru-section">

                    <div className="pitru-container">

                        <p className="pitru-section-label">
                            PITRU PAKSHA
                        </p>

                        <h2>
                            A Sacred Time to Remember Our Ancestors
                        </h2>

                        <p>
                            Pitru Paksha is a traditional period dedicated to remembering
                            and offering prayers for departed ancestors. During this time,
                            families perform various ancestral rituals as a way of expressing
                            remembrance, gratitude and respect towards their forefathers.
                        </p>

                        <p>
                            Gokarna is a revered pilgrimage destination in Karnataka and is
                            associated with several traditional religious rituals. Devotees
                            visit Gokarna from different parts of India to perform poojas,
                            prayers and ancestral rites.
                        </p>

                        <p>
                            If you are planning to perform Pitru-related rituals in Gokarna
                            during Pitru Paksha, Gokarna Poojas can assist you with
                            information and booking guidance.
                        </p>

                    </div>

                </section>

                {/* =========================
                    SERVICES
                ========================== */}

                <section className="pitru-section pitru-services-section">

                    <div className="pitru-container">

                        <p className="pitru-section-label">
                            TRADITIONAL RITUALS
                        </p>

                        <h2>
                            Pitru-Related Poojas & Rituals in Gokarna
                        </h2>

                        <div className="pitru-services-grid">

                            <div className="pitru-service-card">

                                <div className="pitru-service-icon">
                                    🪔
                                </div>

                                <h3>
                                    Pitru Tarpana
                                </h3>

                                <p>
                                    A traditional offering performed in remembrance of
                                    departed ancestors.
                                </p>

                            </div>

                            <div className="pitru-service-card">

                                <div className="pitru-service-icon">
                                    🙏
                                </div>

                                <h3>
                                    Shraddha
                                </h3>

                                <p>
                                    Traditional ancestral rites performed with prayers,
                                    offerings and remembrance.
                                </p>

                            </div>

                            <div className="pitru-service-card">

                                <div className="pitru-service-icon">
                                    🌿
                                </div>

                                <h3>
                                    Pinda Pradana
                                </h3>

                                <p>
                                    A traditional ancestral offering performed as part of
                                    specific Pitru-related rituals.
                                </p>

                            </div>

                            <div className="pitru-service-card">

                                <div className="pitru-service-icon">
                                    🕉️
                                </div>

                                <h3>
                                    Narayana Bali
                                </h3>

                                <p>
                                    A traditional ritual with specific procedures and
                                    significance in ancestral rites.
                                </p>

                                <Link to="/narayana-bali">
                                    Learn More →
                                </Link>

                            </div>

                            <div className="pitru-service-card">

                                <div className="pitru-service-icon">
                                    🪷
                                </div>

                                <h3>
                                    Tripindi Shraddha
                                </h3>

                                <p>
                                    A traditional ancestral ritual performed according to
                                    prescribed religious practices.
                                </p>

                                <Link to="/tripindi-shraddha">
                                    Learn More →
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================
                    WHY GOKARNA
                ========================== */}

                <section className="pitru-section">

                    <div className="pitru-container pitru-two-column">

                        <div>

                            <p className="pitru-section-label">
                                SACRED GOKARNA
                            </p>

                            <h2>
                                Why Perform Pitru Rituals in Gokarna?
                            </h2>

                            <p>
                                Gokarna is an important pilgrimage destination in Karnataka,
                                known for its temples and religious traditions. The town
                                attracts devotees who come to perform various religious
                                ceremonies and ancestral rites.
                            </p>

                            <p>
                                For families looking to perform traditional Pitru-related
                                rituals in Gokarna, planning the ceremony in advance can help
                                ensure that the required arrangements and guidance are
                                discussed beforehand.
                            </p>

                        </div>

                        <div className="pitru-info-box">

                            <h3>
                                Planning a Pitru Pooja?
                            </h3>

                            <p>
                                Contact us to understand the available rituals, required
                                arrangements and booking process.
                            </p>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pitru-btn pitru-btn-primary"
                            >
                                Enquire on WhatsApp
                            </a>

                        </div>

                    </div>

                </section>

                {/* =========================
                    PROCESS
                ========================== */}

                <section className="pitru-section pitru-process-section">

                    <div className="pitru-container">

                        <p className="pitru-section-label">
                            SIMPLE PROCESS
                        </p>

                        <h2>
                            How to Plan Your Pitru Pooja in Gokarna
                        </h2>

                        <div className="pitru-process-grid">

                            <div className="pitru-process-card">

                                <span>01</span>

                                <h3>
                                    Contact Us
                                </h3>

                                <p>
                                    Get in touch with us through WhatsApp or phone.
                                </p>

                            </div>

                            <div className="pitru-process-card">

                                <span>02</span>

                                <h3>
                                    Share Details
                                </h3>

                                <p>
                                    Share your preferred date and the ritual you are
                                    looking for.
                                </p>

                            </div>

                            <div className="pitru-process-card">

                                <span>03</span>

                                <h3>
                                    Receive Guidance
                                </h3>

                                <p>
                                    We provide information about the available arrangements
                                    and procedure.
                                </p>

                            </div>

                            <div className="pitru-process-card">

                                <span>04</span>

                                <h3>
                                    Plan Your Visit
                                </h3>

                                <p>
                                    Complete the arrangements and plan your visit to Gokarna.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================
                    FAQ
                ========================== */}

                <section className="pitru-section">

                    <div className="pitru-container">

                        <p className="pitru-section-label">
                            FAQ
                        </p>

                        <h2>
                            Frequently Asked Questions
                        </h2>

                        <div className="pitru-faq">

                            <details>

                                <summary>
                                    What is Pitru Paksha?
                                </summary>

                                <p>
                                    Pitru Paksha is a traditional period dedicated to
                                    remembering ancestors and performing ancestral rituals
                                    and offerings.
                                </p>

                            </details>

                            <details>

                                <summary>
                                    Can I perform Pitru Pooja in Gokarna?
                                </summary>

                                <p>
                                    Traditional Pitru-related rituals are performed in
                                    Gokarna. Contact us to understand the available rituals
                                    and arrangements for your requirements.
                                </p>

                            </details>

                            <details>

                                <summary>
                                    Which Pitru rituals can be performed in Gokarna?
                                </summary>

                                <p>
                                    Depending on family tradition and individual requirements,
                                    different ancestral rituals may be performed, including
                                    Tarpana, Shraddha, Pinda Pradana, Narayana Bali and
                                    Tripindi Shraddha.
                                </p>

                            </details>

                            <details>

                                <summary>
                                    How can I enquire about Pitru Paksha Pooja?
                                </summary>

                                <p>
                                    You can contact Gokarna Poojas through WhatsApp or phone
                                    to enquire about the ritual, suitable date and
                                    arrangements.
                                </p>

                            </details>

                            <details>

                                <summary>
                                    Should I enquire about the pooja in advance?
                                </summary>

                                <p>
                                    Advance enquiry is recommended, particularly during busy
                                    periods such as Pitru Paksha, so that the required
                                    arrangements can be discussed beforehand.
                                </p>

                            </details>

                        </div>

                    </div>

                </section>

                {/* =========================
                    FINAL CTA
                ========================== */}

                <section className="pitru-final-cta">

                    <div className="pitru-container">

                        <p className="pitru-section-label">
                            GOKARNA POOJAS
                        </p>

                        <h2>
                            Planning Pitru Paksha Rituals in Gokarna?
                        </h2>

                        <p>
                            Contact us for information and booking assistance.
                        </p>

                        <div className="pitru-hero-buttons">

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pitru-btn pitru-btn-primary"
                            >
                                WhatsApp Enquiry
                            </a>

                            <a
                                href={`tel:${phoneNumber}`}
                                className="pitru-btn pitru-btn-secondary"
                            >
                                Call Now
                            </a>

                        </div>

                    </div>

                </section>

            </main>
        </>
    );
};

export default PitruPaksha;