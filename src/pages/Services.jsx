import { Link } from 'react-router-dom';

function Services() {
  return (
    <main className="fade-in">
      <section style={sectionStyle}>
        <div className="container">
          <h1 style={headerStyle}>Our Services</h1>
          <div style={servicesStyle}>
            <div className="service-item" style={serviceItemStyle}>
              <h3>Content Creation for Projects</h3>
              <p style={paragraphStyle}>Engaging content that resonates with your audience and boosts project visibility.</p>
            </div>
            <div className="service-item" style={serviceItemStyle}>
              <h3>Software Development</h3>
              <p style={paragraphStyle}>Custom software and app solutions tailored to your business needs.</p>
            </div>
            <div className="service-item" style={serviceItemStyle}>
              <h3>Community Growth Strategy</h3>
              <p style={paragraphStyle}>Proven strategies to build and engage communities for tech startups.</p>
            </div>
            <div className="service-item" style={serviceItemStyle}>
              <h3>Social Media Branding</h3>
              <p style={paragraphStyle}>Creative branding solutions for founders and projects to stand out online.</p>
            </div>
          </div>
          <Link to="/contact" className="btn">Get a Quote</Link>
        </div>
      </section>
    </main>
  );
}

const sectionStyle = {
  padding: '3rem 0',
};

const headerStyle = {
  fontWeight: '800', // Match Home/About
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', // Match Home/About
};

const paragraphStyle = {
  fontFamily: 'Roboto Mono, monospace', // Match Home/About
  fontWeight: '400',
  lineHeight: '1.6',
};

const servicesStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2.5rem', // Match Home
};

const serviceItemStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Enhanced for hover
};

export default Services;