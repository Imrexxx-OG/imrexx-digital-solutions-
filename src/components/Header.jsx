import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <div style={navStyle}>
          <img src="/imrexx.JPG" alt="Imrexx Digital Solutions Logo" style={logoStyle} />
          <button className="hamburger" onClick={toggleMenu} style={hamburgerStyle}>
            ☰
          </button>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                ...navLinkStyle,
                color: isActive ? '#00d1b2' : '#fff',
              })}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                ...navLinkStyle,
                color: isActive ? '#00d1b2' : '#fff',
              })}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                ...navLinkStyle,
                color: isActive ? '#00d1b2' : '#fff',
              })}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                ...navLinkStyle,
                color: isActive ? '#00d1b2' : '#fff',
              })}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                ...navLinkStyle,
                color: isActive ? '#00d1b2' : '#fff',
              })}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  background: 'rgba(0, 0, 0, 0.8)',
  padding: '1rem 0',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  height: '40px',
  width: 'auto',
  maxWidth: '200px',
  objectFit: 'contain',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '2rem',
  fontSize: '1.1rem',
  transition: 'color 0.3s ease, border-bottom 0.3s ease',
};

const hamburgerStyle = {
  display: 'none', // Hidden on desktop
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '1.5rem',
  cursor: 'pointer',
};

export default Header;