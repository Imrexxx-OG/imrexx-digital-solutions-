import { NavLink } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={footerGridStyle}>

            {/* Brand */}
            <div style={brandColStyle}>
              <NavLink to="/" style={logoTextStyle}>
                IMREXX <span style={{ color: 'var(--primary)', fontWeight: 400 }}>DS</span>
              </NavLink>
              <p style={taglineStyle}>We help ambitious founders ship faster<br />and grow louder.</p>
              <div style={socialStyle}>
                <a
                  href="https://twitter.com/Imrexx_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  aria-label="X / Twitter"
                >
                  𝕏
                </a>
              </div>
            </div>

            {/* Nav links */}
            <div style={colStyle}>
              <p style={colHeadStyle}>Navigation</p>
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([to, label]) => (
                <NavLink key={to} to={to} end={to === '/'} style={footLinkStyle}>
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Contact */}
            <div style={colStyle}>
              <p style={colHeadStyle}>Get in Touch</p>
              <a href="mailto:imrexxdigitalsolutions@gmail.com" style={footLinkStyle}>
                imrexxdigitalsolutions@gmail.com
              </a>
              {/* <a href="tel:+2348028062682" style={footLinkStyle}>
                +234 802 806 2682
              </a>
              <p style={{ ...footLinkStyle, color: 'var(--text-dim)', cursor: 'default' }}>
                Abuja, Nigeria
              </p> */}
            </div>

          </div>

          <div style={bottomStyle}>
            <p style={copyStyle}>© {year} Imrexx Digital Solutions. All rights reserved.</p>
            <p style={copyStyle}>CAC Registered · Nigeria</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  background: 'var(--bg-2)',
  paddingTop: '0',
  marginTop: '4rem',
};

const footerGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '3rem',
  padding: '3rem 0 2rem',
};

const brandColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const logoTextStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: '1.3rem',
  color: '#fff',
  textDecoration: 'none',
  letterSpacing: '-0.02em',
};

const taglineStyle = {
  fontSize: '0.82rem',
  lineHeight: 1.6,
  color: 'var(--text-dim)',
};

const socialStyle = {
  display: 'flex',
  gap: '0.75rem',
};

const socialLinkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '1.1rem',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  border: '1px solid var(--border)',
  transition: 'all 0.2s ease',
};

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
};

const colHeadStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '0.8rem',
  color: 'var(--text)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '0.25rem',
};

const footLinkStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  display: 'block',
};

const bottomStyle = {
  borderTop: '1px solid var(--border)',
  padding: '1.5rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '0.5rem',
};

const copyStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  color: 'var(--text-dim)',
};

export default Footer;
