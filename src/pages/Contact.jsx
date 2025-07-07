function Contact() {
  return (
    <main className="fade-in">
      <section style={sectionStyle}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ready to transform your business? Reach out to Imrexx Digital Solutions today!</p>
          <form style={formStyle}>
            <input type="text" placeholder="Name" style={inputStyle} required />
            <input type="email" placeholder="Email" style={inputStyle} required />
            <textarea placeholder="Message" style={textareaStyle} required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
          <p>Email: info@imrexxdigitalsolutions.ng</p>
          <p>Phone: [+234 8028062682]</p>
          <p>Address: Abuja, Nigeria</p>
        </div>
      </section>
    </main>
  );
}

const sectionStyle = {
  padding: '3rem 0',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '500px',
  margin: '2rem auto',
};

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '4px',
  border: 'none',
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '150px',
};

export default Contact;