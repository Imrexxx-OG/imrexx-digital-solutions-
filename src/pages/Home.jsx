import { Link } from 'react-router-dom';

/* ── Testimonial data ── */
const testimonials = [
  {
    handle: '@wydagoat',
    name: 'Kenny',
    avatar: '/wydagoat.jpg',    // Drop this image in your /public folder
    quote:
      'Imrexx helped grow our community from the ground up. Consistent, reliable and actually understands Web3 culture. would recommend to any founder looking for content and growth support in the space.',
    link: 'https://x.com/wydagoat',
  },
  {
    handle: '@resmaliks',
    name: 'Malik',
    avatar: '/resmaliks.jpg',    // Drop this image in your /public folder
    quote:
      'Been working with Imrexx on content for a while now. Quality is consistent and he gets the brief without much back and forth.',
    link: 'https://x.com/resmaliks',
  },
  {
    handle: '@Web3Niels',
    name: 'Niels',
    avatar: '/web3niels.jpg',   // Drop this image in your /public folder
    quote:
      'Solid content work. Understands the Web3 space and delivers without needing hand-holding. Would recommend.',
    link: 'https://x.com/web3niels',
  },{
    handle: '@digi_dargonne',
    name: 'Dargonne',
    avatar: '/digi_dargonne.jpg',    // Drop this image in your /public folder
    quote:
      'We built together for a hackathon. Fast with the dev work, good under pressure. Looking forward to working together again.',
    link: 'https://x.com/digi_dargonne',
  }
];

/* ── Stats bar ── */
const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '3+',  label: 'Years Operating' },
  { value: '100%', label: 'Client Retention' },
  { value: '24+',  label: 'Countries Served' },
];

/* ── Why choose us ── */
const features = [
  {
    icon: '🔒',
    title: 'Trust',
    desc: 'CAC-registered and fully transparent. We show up, we deliver.',
  },
  {
    icon: '⚡',
    title: 'Expertise',
    desc: 'Proven Web3 and software solutions for founders across Nigeria and globally.',
  },
  {
    icon: '🎯',
    title: 'Creativity',
    desc: 'We don\'t copy templates. Every strategy is built around your specific goals.',
  },
];

function Home() {
  return (
    <main className="fade-in">

      {/* ── Hero ── */}
      <section style={heroSection}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Abuja, Nigeria · Est. 2022</p>
          <h1 style={heroH1}>
            Innovative Tech<br />
            Solutions for a<br />
            <span style={accentText}>Web3 World</span>
          </h1>
          <p style={heroSubStyle}>
            Imrexx Digital Solutions delivers cutting-edge content creation,<br />
            software development, and growth strategies for tech founders.
          </p>
          <div style={ctaRowStyle}>
            <Link to="/contact" className="btn">Get Started</Link>
            <Link to="/services" className="btn-ghost">View Services →</Link>
          </div>

          {/* Floating badge */}
          <div style={badgeStyle}>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>●</span>
            &nbsp;Available for new projects
          </div>
        </div>

        {/* Hero glow orb */}
        <div style={heroOrbStyle} />
      </section>

      {/* ── Stats bar ── */}
      <section style={statsSection}>
        <div className="container">
          <div style={statsGridStyle}>
            {stats.map((s) => (
              <div key={s.label} style={statItemStyle}>
                <span style={statValueStyle}>{s.value}</span>
                <span style={statLabelStyle}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section style={sectionStyle}>
        <div className="container">
          <p className="section-label">Why Us</p>
          <h2>Built for Founders Who<br />Move Fast</h2>
          <div style={featuresGridStyle}>
            {features.map((f) => (
              <div key={f.title} className="card service-card" style={featureCardStyle}>
                <span style={iconStyle}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ ...sectionStyle, background: 'var(--bg-2)', padding: '4rem 0' }}>
        <div className="container">
          <p className="section-label">Social Proof</p>
          <h2>Trusted by Builders in the Space</h2>
          <div style={testimonialsGridStyle}>
            {testimonials.map((t) => (
              <a
                key={t.handle}
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                style={tweetCardStyle}
                className="card"
              >
                {/* X icon top right */}
                <span style={xIconStyle}>𝕏</span>

                {/* Avatar + name */}
                <div style={tweetHeaderStyle}>
                  <div style={avatarWrapStyle}>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={avatarStyle}
                      onError={(e) => {
                        /* Fallback to initials if image missing */
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ ...avatarFallbackStyle, display: 'none' }}>
                      {t.name[0]}
                    </div>
                  </div>
                  <div>
                    <p style={tweetNameStyle}>{t.name}</p>
                    <p style={tweetHandleStyle}>{t.handle}</p>
                  </div>
                </div>

                {/* Quote */}
                <p style={quoteStyle}>"{t.quote}"</p>
              </a>
            ))}
          </div>
          <p style={addMoreStyle}>
            + more testimonials coming · reach out:{' '}
            <a href="mailto:imrexxdigitalsolutions@gmail.com" style={{ color: 'var(--primary)' }}>
              imrexxdigitalsolutions@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section style={ctaBandStyle}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', marginBottom: '0.5rem' }}>
            Ready to Ship Something Real?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            Let's talk about your project. We deliver results.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.9rem 2rem',
              background: '#000',
              color: '#fff',
              borderRadius: '8px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
          >
            Start a Conversation →
          </Link>
        </div>
      </section>

    </main>
  );
}

/* ── Styles ── */
const heroSection = {
  padding: '6rem 0 5rem',
  position: 'relative',
  overflow: 'hidden',
};

const heroH1 = {
  marginBottom: '1.5rem',
  maxWidth: '700px',
};

const accentText = {
  color: 'var(--primary)',
  display: 'inline-block',
};

const heroSubStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '1rem',
  color: 'var(--text-muted)',
  lineHeight: 1.8,
  maxWidth: '560px',
  marginBottom: '2.5rem',
};

const ctaRowStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  marginTop: '3rem',
  padding: '0.4rem 0.9rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: '999px',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  color: 'var(--text-muted)',
};

const heroOrbStyle = {
  position: 'absolute',
  top: '10%',
  right: '-10%',
  width: '600px',
  height: '600px',
  background: 'radial-gradient(circle, rgba(0,209,178,0.06) 0%, transparent 65%)',
  borderRadius: '50%',
  pointerEvents: 'none',
};

const statsSection = {
  padding: '0',
  borderTop: '1px solid var(--border)',
  borderBottom: '1px solid var(--border)',
  background: 'var(--bg-2)',
};

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  padding: '2rem 0',
};

const statItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.3rem',
  padding: '1rem',
  borderRight: '1px solid var(--border)',
};

const statValueStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: '2rem',
  color: 'var(--primary)',
  letterSpacing: '-0.02em',
};

const statLabelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.72rem',
  color: 'var(--text-dim)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
};

const sectionStyle = {
  padding: '5rem 0',
};

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '1.5rem',
  marginTop: '2.5rem',
};

const featureCardStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  padding: '2rem',
  transition: 'all 0.3s ease',
};

const iconStyle = {
  fontSize: '2rem',
  display: 'block',
  marginBottom: '1rem',
};

const testimonialsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
  marginTop: '2.5rem',
};

const tweetCardStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  padding: '1.75rem',
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  position: 'relative',
  transition: 'all 0.3s ease',
};

const xIconStyle = {
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  color: 'var(--text-dim)',
  fontSize: '1.1rem',
};

const tweetHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '1rem',
};

const avatarWrapStyle = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '2px solid var(--border)',
  flexShrink: 0,
  position: 'relative',
};

const avatarStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const avatarFallbackStyle = {
  width: '100%',
  height: '100%',
  background: 'var(--primary-dim)',
  color: 'var(--primary)',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1.1rem',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
};

const tweetNameStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '0.95rem',
  color: 'var(--text)',
  margin: 0,
  lineHeight: 1.3,
};

const tweetHandleStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  color: 'var(--text-dim)',
  margin: 0,
};

const quoteStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.88rem',
  color: 'var(--text-muted)',
  lineHeight: 1.75,
  margin: 0,
  fontStyle: 'italic',
};

const addMoreStyle = {
  marginTop: '2rem',
  fontSize: '0.82rem',
  color: 'var(--text-dim)',
  textAlign: 'center',
  fontFamily: 'var(--font-mono)',
};

const ctaBandStyle = {
  background: 'var(--primary)',
  padding: '5rem 0',
};

export default Home;
