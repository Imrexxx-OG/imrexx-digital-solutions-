import { Link } from 'react-router-dom';

function About() {
  return (
    <main className="fade-in">
      <section style={sectionStyle}>
        <div className="container">
          <h1 style={headerStyle}>About Imrexx Digital Solutions</h1>
          <p style={paragraphStyle}>We are a CAC-registered tech company specializing in innovative solutions for startups and founders. Our mission is to drive success through trust, expertise, and creativity.</p>
          <p style={paragraphStyle}>With a focus on Web3 technologies, we offer tailored services to help your business thrive in the digital age.</p>
          <img src="/team.jpg" style={teamStyle} alt="Team at Imrexx Digital Solutions" className="team-image" loading="lazy" />
          <Link to="/contact" className="btn">Work With Us</Link>
        </div>
      </section>
    </main>
  );
}

const sectionStyle = {
  padding: '3rem 0',
};

const headerStyle = {
  fontWeight: '800', // Match Home.jsx
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', // Match Home.jsx
};

const paragraphStyle = {
  fontFamily: 'Roboto Mono, monospace', // Match Home.jsx
  fontWeight: '400',
  lineHeight: '1.6',
};

const teamStyle = {
  display: 'block',
  width: '100%',
  maxWidth: '600px',
  borderRadius: '8px',
  margin: '2rem 1rem', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added hover
};

export default About;