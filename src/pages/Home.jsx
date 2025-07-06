function Home() {
  return (
    <main className="fade-in">
      <section style={heroStyle}>
        <div className="container">
          <h1>Innovative Tech Solutions for a Web3 World</h1>
          <p>Imrexx Digital Solutions delivers cutting-edge content creation, software development, and growth strategies for tech startups and founders.</p>
          <a href="/contact" className="btn">Get Started</a>
          {/* [Image Placeholder: Hero background image, e.g., Web3-themed graphic from Pinterest] */}
        </div>
      </section>
      <section style={sectionStyle}>
        <div className="container">
          <h2>Why Choose Us</h2>
          <div style={featuresStyle}>
            <div style={featureItemStyle}>Trust: Transparent and reliable services</div>
            <div style={featureItemStyle}>Expertise: Proven tech solutions for global clients</div>
            <div style={featureItemStyle}>Creativity: Innovative strategies that stand out</div>
          </div>
        </div>
      </section>
      <section style={sectionStyle}>
        <div className="container">
          <h2>Testimonials</h2>
          <div style={testimonialsStyle}>
            <p>“Imrexx transformed our startup’s growth with their community strategies!” - Client A</p>
            <p>“Their software solutions are top-notch and creative.” - Client B</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const heroStyle = {
  background: 'url(/hero-bg.jpg) no-repeat center/cover',
  padding: '5rem 0',
  textAlign: 'center',
};

const sectionStyle = {
  padding: '3rem 0',
};

const featuresStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
};

const featureItemStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
};

const testimonialsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
};

export default Home;