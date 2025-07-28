import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="fade-in">
      <section style={sectionStyle}>
        <div className="container">
          <h1 style={headerStyle}>Contact Us</h1>
          <p style={paragraphStyle}>Ready to transform your business? Reach out to Imrexx Digital Solutions today!</p>
          {submitted ? (
            <p style={successStyle}>Thank you! We'll get back to you soon.</p>
          ) : (
            <form
              action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
              method="POST"
              style={formStyle}
              onSubmit={handleSubmit}
            >
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                style={inputStyle}
                required
              />
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                style={inputStyle}
                required
              />
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                style={textareaStyle}
                required
              ></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          )}
          <p style={paragraphStyle}>Email: <a href="mailto:info@imrexxdigitalsolutions.com" style={linkStyle}>info@imrexxdigitalsolutions.com</a></p>
          <p style={paragraphStyle}>Phone: <a href="tel:+2348028062682" style={linkStyle}>+234 8028062682</a></p>
          <p style={paragraphStyle}>Address: Abuja, Nigeria</p>
        </div>
      </section>
    </main>
  );
}

const sectionStyle = {
  padding: '3rem 0',
};

const headerStyle = {
  fontWeight: '800', // Match Home/About/Services/Portfolio
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', // Match other pages
};

const paragraphStyle = {
  fontFamily: 'Roboto Mono, monospace', // Match other pages
  fontWeight: '400',
  lineHeight: '1.6',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem', // Increased for better spacing
  maxWidth: '500px',
  margin: '2rem auto',
};

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '4px',
  border: 'none',
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  transition: 'box-shadow 0.3s ease', // Added for focus
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '150px',
};

const labelStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '0.9rem',
  color: '#fff',
};

const successStyle = {
  fontFamily: 'Roboto Mono, monospace',
  color: '#00d1b2', // Match CTA color
  textAlign: 'center',
  margin: '2rem 0',
};

const linkStyle = {
  color: '#00d1b2',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

export default Contact;