import { Link } from 'react-router-dom';

const services = [
  {
    icon: '✍️',
    title: 'Content Creation',
    tag: 'Popular',
    desc: 'Threads, long-form posts, newsletters, and scripts that drive engagement for Web3 projects and tech founders.',
    points: ['Twitter/X thread strategy', 'Newsletter copywriting', 'Project announcements & whitepapers'],
  },
  {
    icon: '💻',
    title: 'Software Development',
    tag: null,
    desc: 'Custom web apps, landing pages, and software solutions built with modern tech stacks — fast and production-ready.',
    points: ['React / Next.js frontends', 'Full-stack web applications', 'Landing pages & dashboards'],
  },
  {
    icon: '🚀',
    title: 'Community Growth',
    tag: 'High Demand',
    desc: 'Proven systems to build, activate, and retain communities for crypto projects, DAOs, and tech startups.',
    points: ['Discord & Telegram setup', 'Growth campaigns', 'Engagement & moderation strategy'],
  },
  {
    icon: '📣',
    title: 'Social Media Branding',
    tag: null,
    desc: 'End-to-end personal and brand presence for founders — from profile optimisation to content calendars.',
    points: ['Profile & bio overhaul', 'Content calendar planning', 'Analytics & growth tracking'],
  },
];

function Services() {
  return (
    <main className="fade-in">

      {/* ── Hero ── */}
      <section style={heroStyle}>
        <div className="container">
          <p className="section-label">What We Do</p>
          <h1 style={{ maxWidth: '640px' }}>
            Services That<br />
            <span style={{ color: 'var(--primary)' }}>Actually Move the Needle</span>
          </h1>
          <p style={heroSubStyle}>
            No generic packages. Every engagement is scoped to what your project
            actually needs right now.
          </p>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={gridStyle}>
            {services.map((s) => (
              <div key={s.title} className="card service-card" style={cardStyle}>
                {/* Tag */}
                {s.tag && <span style={tagStyle}>{s.tag}</span>}

                <span style={iconStyle}>{s.icon}</span>
                <h3 style={cardTitleStyle}>{s.title}</h3>
                <p style={cardDescStyle}>{s.desc}</p>

                <ul style={listStyle}>
                  {s.points.map((pt) => (
                    <li key={pt} style={listItemStyle}>
                      <span style={{ color: 'var(--primary)', marginRight: '0.5rem' }}>→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process strip ── */}
      <section style={processStyle}>
        <div className="container">
          <p className="section-label">How It Works</p>
          <h2 style={{ marginBottom: '2.5rem' }}>Simple Process, Real Results</h2>
          <div style={stepsStyle}>
            {[
              { n: '01', label: 'Discovery Call', desc: 'We understand your goals, timeline, and budget — no pressure.' },
              { n: '02', label: 'Custom Proposal', desc: 'You receive a tailored scope, not a menu of packages.' },
              { n: '03', label: 'We Execute', desc: 'Fast, communicative, with regular updates throughout.' },
              { n: '04', label: 'Ship & Scale', desc: 'Delivery, review, and ongoing support as needed.' },
            ].map((step) => (
              <div key={step.n} style={stepItemStyle}>
                <span style={stepNumStyle}>{step.n}</span>
                <h3 style={{ color: 'var(--text)', marginBottom: '0.35rem' }}>{step.label}</h3>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={ctaStyle}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Let's Discuss Your Project</h2>
          <p style={{ marginBottom: '2rem', maxWidth: '420px', margin: '0.75rem auto 2rem' }}>
            Get a free quote within 24 hours. We respond fast.
          </p>
          <Link to="/contact" className="btn">Get a Free Quote</Link>
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
};

const cardStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  padding: '2rem',
  position: 'relative',
  transition: 'all 0.3s ease',
};

const tagStyle = {
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  background: 'var(--gold-dim)',
  color: 'var(--gold)',
  border: '1px solid rgba(240,165,0,0.25)',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.68rem',
  fontWeight: 700,
  padding: '0.2rem 0.55rem',
  borderRadius: '4px',
  letterSpacing: '0.05em',
};

const iconStyle = {
  fontSize: '2rem',
  display: 'block',
  marginBottom: '1.25rem',
};

const cardTitleStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1.15rem',
  color: 'var(--text)',
  marginBottom: '0.6rem',
};

const cardDescStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.88rem',
  color: 'var(--text-muted)',
  lineHeight: 1.7,
  marginBottom: '1.25rem',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.45rem',
  borderTop: '1px solid var(--border)',
  paddingTop: '1.25rem',
};

const listItemStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  display: 'flex',
  alignItems: 'baseline',
};

const processStyle = {
  padding: '5rem 0',
  background: 'var(--bg-2)',
  borderTop: '1px solid var(--border)',
  borderBottom: '1px solid var(--border)',
};

const stepsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
};

const stepItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const stepNumStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: '2.5rem',
  color: 'var(--primary)',
  opacity: 0.3,
  lineHeight: 1,
  marginBottom: '0.25rem',
};

const ctaStyle = {
  padding: '6rem 0',
};

export default Services;
