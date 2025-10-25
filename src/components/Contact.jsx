import { useState } from 'react';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - for now just log
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">
        <span className="gradient">Contact Me</span>
      </h1>
      <div className="underline"></div>
      <p className="contact-subtitle">
        Got a project idea or just want to chat? I'm always open to new collaborations, creative brainstorming, or exciting opportunities.
      </p>

      <div className="contact-container">
        {/* Left Card: Photo Card */}
        <div className="contact-card photo-card">
          <img src="/images/profile.jpg" alt="Your Photo" />
          <p>"Flexible and committed to working across all time zones to support global collaboration and timely delivery."</p>
        </div>

        {/* Middle Card: Details Card */}
        <div className="contact-card details-card">
          <div className="detail-item">
            <i className="bx bx-envelope"></i>
            <h3>Email</h3>
            <p>work.aniketdhankar@gmail.com</p>
            <a href="mailto:work.aniketdhankar@gmail.com">Send a message</a>
          </div>
          <hr />
          <div className="detail-item">
            <i className="bx bx-phone"></i>
            <h3>Phone</h3>
            <p>+91 8073931898</p>
            <a href="tel:+918073931898">Call me</a>
          </div>
          <hr />
          <div className="detail-item">
            <i className="bx bx-map"></i>
            <h3>Location</h3>
            <p>Bengaluru, India</p>
            <a href="https://maps.app.goo.gl/DurBEP95L9yjieeS7" target="_blank" rel="noopener noreferrer">
              View on map
            </a>
          </div>
        </div>

        {/* Right Card: Contact Form Card */}
        <div className="contact-card form-card">
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit">
              <i className="bx bxs-send"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
