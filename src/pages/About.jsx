import { Link } from 'react-router-dom';

const values = [
  { icon: '🔒', title: 'Trust First', desc: 'CAC-registered and fully transparent. We show up, we deliver.' },
  { icon: '🌍', title: 'Built in Africa', desc: 'Proudly Nigerian, serving clients globally in Web3 and beyond.' },
  { icon: '⚡', title: 'Web3 Native', desc: 'We live and breathe decentralized tech, content, and communities.' },
];

function About() {
  return (
    <main className="fade-in">

      {/* ── Hero ── */}
      <section style={heroStyle}>
        <div className="container">
          <p className="section-label">Who We Are</p>
          <h1 style={{ maxWidth: '700px' }}>
            A Global-Ready Team,<br />
            <span style={{ color: 'var(--primary)' }}>That Gets Things Done</span>
          </h1>
          <p style={heroSubStyle}>
            Imrexx Digital Solutions is a CAC-registered tech house headquartered in Abuja, Nigeria. We specialize in helping startups and Web3 founders globally ship high-performance products and grow active communities without the corporate nonsense.
          </p>
        </div>
      </section>

      {/* ── Team image ── */}
      <section style={imageSectionStyle}>
        <div className="container" style={imageContainerStyle}>
          <img
            src="/team.jpg"
            alt="The Imrexx team"
            className="team-image"
            style={teamImageStyle}
            loading="lazy"
          />
          <div style={imageCapStyle}>
            <span style={imageCapBadgeStyle}>📍 Abuja, Nigeria</span>
            <p style={imageCapTextStyle}>
              A tight-knit crew of developers, designers, and Web3 specialists
              working across time zones to make your vision real.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={missionGridStyle}>
            <div>
              <p className="section-label">Our Mission</p>
              <h2>Built to Compete<br />Globally</h2>
              <p style={bodyTextStyle}>
                We believe great technology shouldn't be gatekept behind bloated agencies
                and six-figure retainers. Imrexx exists to give ambitious founders and the Web3 space access to the same quality
                of work that global brands pay premium for.
              </p>
              <p style={{ ...bodyTextStyle, marginTop: '1rem' }}>
                With a focus on content creation, software development, and community
                growth, we're your one-stop digital solutions partner.
              </p>
              <Link to="/contact" className="btn" style={{ marginTop: '2rem' }}>
                Work With Us
              </Link>
            </div>
            <div style={valuesColStyle}>
              {values.map((v) => (
                <div key={v.title} className="card" style={valueCardStyle}>
                  <span style={valueIconStyle}>{v.icon}</span>
                  <div>
                    <h3 style={{ marginBottom: '0.3rem' }}>{v.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.88rem' }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

const heroStyle = {
  padding: '6rem 0 3rem',
};

const heroSubStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.95rem',
  color: 'var(--text-muted)',
  lineHeight: 1.8,
  maxWidth: '600px',
  marginTop: '1rem',
};

const imageSectionStyle = {
  padding: '0 0 4rem',
};

const imageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const teamImageStyle = {
  width: '100%',
  maxWidth: '720px',
  height: '380px',
  objectFit: 'cover',
  borderRadius: 'var(--radius-xl)',
  border: '1px solid var(--border)',
  display: 'block',
  transition: 'all 0.4s ease',
};

const imageCapStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  maxWidth: '720px',
};

const imageCapBadgeStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  color: 'var(--primary)',
  letterSpacing: '0.08em',
};

const imageCapTextStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.85rem',
  color: 'var(--text-dim)',
  lineHeight: 1.7,
  margin: 0,
};

const sectionStyle = {
  padding: '2rem 0 6rem',
};

const missionGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '4rem',
  alignItems: 'start',
};

const bodyTextStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.92rem',
  color: 'var(--text-muted)',
  lineHeight: 1.8,
  margin: 0,
};

const valuesColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const valueCardStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  padding: '1.25rem 1.5rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  transition: 'all 0.3s ease',
};

const valueIconStyle = {
  fontSize: '1.5rem',
  flexShrink: 0,
  marginTop: '0.15rem',
};

export default About;
