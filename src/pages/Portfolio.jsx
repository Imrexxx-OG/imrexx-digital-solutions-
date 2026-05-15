import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

/*
  Images: place your assets in src/assets/ and update these imports.
  For now they reference the same files from your original project.
*/
import startupImg    from '../assets/start-up.jpg';
import buildWebsiteImg from '../assets/build-website.jpg';
import socialMediaImg  from '../assets/social-media.jpg';

const projects = [
  {
    title: 'Startup Community Platform',
    description:
      'Took a Lagos Web3 startup from 0 to 5,000 community members in 90 days.',
    image: startupImg,
    tag: 'Community',
  },
  {
    title: 'E-Commerce Website',
    description:
      'Delivered a conversion-optimised e-commerce site for an international client in under 2 weeks',
    image: buildWebsiteImg,
    tag: 'Dev',
  },
  {
    title: 'Social Media Campaign',
    description:
      "Grew a tech founder's X account 3× in engagement within 60 days of rebranding.",
    image: socialMediaImg,
    tag: 'Branding',
  },
];

function Portfolio() {
  return (
    <main className="fade-in">

      {/* ── Hero ── */}
      <section style={heroStyle}>
        <div className="container">
          <p className="section-label">Our Work</p>
          <h1 style={{ maxWidth: '640px' }}>
            Projects We're<br />
            <span style={{ color: 'var(--primary)' }}>Proud to Ship</span>
          </h1>
          <p style={heroSubStyle}>
            A selection of client work spanning software development, community growth, and
            social media strategy. More available on request.
          </p>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={gridStyle}>
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={ctaStyle}>
        <div className="container">
          <div style={ctaCardStyle}>
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>Want to Be Our Next Case Study?</h2>
              <p style={{ margin: 0, maxWidth: '460px' }}>
                We're actively taking on new projects. Drop us a message and let's see what
                we can build together.
              </p>
            </div>
            <Link to="/contact" className="btn" style={{ flexShrink: 0 }}>
              Start a Project
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

const heroStyle = { padding: '6rem 0 3rem' };

const heroSubStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.95rem',
  color: 'var(--text-muted)',
  lineHeight: 1.8,
  maxWidth: '540px',
  marginTop: '1rem',
};

const sectionStyle = { padding: '2rem 0 5rem' };

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
};

const ctaStyle = { padding: '0 0 6rem' };

const ctaCardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  padding: '2.5rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-xl)',
};

export default Portfolio;
