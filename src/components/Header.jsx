import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
    background: isActive ? 'var(--primary-dim)' : 'transparent',
  });

  return (
    <header style={{
      ...headerStyle,
      background: scrolled
        ? 'rgba(2, 2, 9, 0.92)'
        : 'rgba(2, 2, 9, 0.7)',
      borderBottom: scrolled
        ? '1px solid var(--border)'
        : '1px solid transparent',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
    }}>
      <div className="container">
        <div style={navWrapStyle}>
          {/* Logo */}
          <NavLink to="/" style={logoWrapStyle} onClick={() => setIsMenuOpen(false)}>
            <img
              src="/imrexx.JPG"
              alt="Imrexx Digital Solutions"
              style={logoStyle}
            />
          </NavLink>

          {/* Desktop nav */}
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            {['/', '/about', '/services', '/portfolio', '/contact'].map((path, i) => {
              const labels = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
              return (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  style={linkStyle}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {labels[i]}
                </NavLink>
              );
            })}
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginLeft: '0.5rem',
                padding: '0.45rem 1rem',
                background: 'var(--primary)',
                color: '#000',
                borderRadius: '6px',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              Hire Us
            </NavLink>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            style={hamburgerStyle}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  padding: '0.875rem 0',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  transition: 'all 0.3s ease',
};

const navWrapStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoWrapStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  flexShrink: 0,
};

const logoStyle = {
  height: '38px',
  width: 'auto',
  maxWidth: '180px',
  objectFit: 'contain',
};

const hamburgerStyle = {
  display: 'none',
  background: 'none',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  fontSize: '1.1rem',
  cursor: 'pointer',
  padding: '0.4rem 0.6rem',
  borderRadius: '6px',
  lineHeight: 1,
  transition: 'all 0.2s ease',
};

export default Header;
