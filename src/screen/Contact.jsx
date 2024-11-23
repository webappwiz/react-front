import React, { useState } from 'react';
import './Contact.css';
import call from '../assets/call.png';
import clock from '../assets/clock.png';
import location from '../assets/location.png';
import emailer from '../assets/emailer.png';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState(""); // Fixed typo

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Fixed case
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="comtacthead">
        <h2>Contact Me</h2>
      </div>
      <div className="get">
        <h4>Get In Touch With Webappwiz</h4>
      </div>

      <div className="rowcontain">
        <div className="bluediv">
          <img src={emailer} alt="email" className="callimg1" />
          <p><b>Email us</b></p>
          <p>webappwiz0@gmail.com</p>
        </div>
        <div className="whitediv">
          <img src={call} alt="number" className="callimg" />
          <p><b>Number</b></p>
          <p>+2347013120897</p>
        </div>
        <div className="bluediv">
          <img src={location} alt="location" className="callimg1" />
          <p><b>Location</b></p>
          <p>Delta State, Nigeria</p>
        </div>
        <div className="whitediv">
          <img src={clock} alt="working hours" className="callimg" />
          <p><b>Working Hour</b></p>
          <p>Sunday-Friday</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {responseMessage && <p className="response-message">{responseMessage}</p>} {/* Display feedback */}
    </div>
  );
}

export default Contact;