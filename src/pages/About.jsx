function About() {
  return (
    <main className="fade-in">
      <section style={sectionStyle}>
        <div className="container">
          <h1>About Imrexx Digital Solutions</h1>
          <p>We are a CAC-registered tech company specializing in innovative solutions for startups and founders. Our mission is to drive success through trust, expertise, and creativity.</p>
          <p>With a focus on Web3 technologies, we offer tailored services to help your business thrive in the digital age.</p>
          <img src="/team.jpg" style={teamStyle} alt="team picture" />
          <a href="/contact" className="btn">Work With Us</a>
        </div>
      </section>
    </main>
  );
}


const sectionStyle = {
  padding: '3rem 0',
};

const teamStyle = {
  display: 'block',
  width: '100%',
  maxWidth: '600px',
  borderRadius: '8px',
  margin: '0.5rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default About;