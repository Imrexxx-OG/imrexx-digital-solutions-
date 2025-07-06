function Services() {
  return (
    <main className="fade-in">
      <section style={sectionStyle}>
        <div className="container">
          <h1>Our Services</h1>
          <div style={servicesStyle}>
            <div style={serviceItemStyle}>
              <h3>Content Creation for Projects</h3>
              <p>Engaging content that resonates with your audience and boosts project visibility.</p>
            </div>
            <div style={serviceItemStyle}>
              <h3>Software Development</h3>
              <p>Custom software and app solutions tailored to your business needs.</p>
            </div>
            <div style={serviceItemStyle}>
              <h3>Community Growth Strategy</h3>
              <p>Proven strategies to build and engage communities for tech startups.</p>
            </div>
            <div style={serviceItemStyle}>
              <h3>Social Media Branding</h3>
              <p>Creative branding solutions for founders and projects to stand out online.</p>
            </div>
          </div>
          <a href="/contact" className="btn">Get a Quote</a>
        </div>
      </section>
    </main>
  );
}

const sectionStyle = {
  padding: '3rem 0',
};

const servicesStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
};

const serviceItemStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'transform 0.3s ease',
};

export default Services;