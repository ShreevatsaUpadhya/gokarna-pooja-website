import "./Contact.css";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState({});
  // const [formMessage, setFormMessage] = useState(null);

  // const validate = () => {
  //   let newErrors = {};

  //   // Name
  //   if (!formData.name.trim()) {
  //     newErrors.name = "Name is required.";
  //   } else if (formData.name.length < 3) {
  //     newErrors.name = "Name should be at least 3 characters.";
  //   }

  //   // Email
  //   if (!formData.email.trim()) {
  //     newErrors.email = "Email is required.";
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  //     newErrors.email = "Enter a valid email address.";
  //   }

  //   // Phone
  //   if (!formData.phone.trim()) {
  //     newErrors.phone = "Phone number is required.";
  //   } else if (!/^\d{10}$/.test(formData.phone)) {
  //     newErrors.phone = "Enter a valid 10-digit phone number.";
  //   }

  //   // Message
  //   if (!formData.message.trim()) {
  //     newErrors.message = "Message cannot be empty.";
  //   }

  //   return newErrors;
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setErrors({ ...errors, [e.target.name]: "" }); // clear error when typing
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newErrors = validate();
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   try {
  //     const res = await fetch("http://localhost:5000/api/bookings", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       setFormMessage("Booking submitted successfully!");
  //       setFormData({ name: "", email: "", phone: "", message: "" });
  //       setTimeout(() => setFormMessage(null), 3000);
  //     } else {
  //       setFormMessage("Something went wrong. Try again.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setFormMessage("Server error. Please try later.");
  //   }
  // };

  return (
    <div className="contact-page">
      <h2>📞 Contact Us</h2>
      <p>
        We are here to help you with all pooja bookings and seva services at Gokarna.
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
    {/* <div className="contact-form">
        <h3>Book a Pooja</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}

          <button type="submit">Submit</button>
        </form>

        {formMessage && <div className="success-text">{formMessage}</div>}
      </div> */}
   
    </div>
  );
}

export default Contact;