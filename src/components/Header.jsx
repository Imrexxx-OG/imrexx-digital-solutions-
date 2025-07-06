import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <div style={navStyle}>
          <h1>Imrexx Digital Solutions</h1>
          <nav>
            <NavLink to="/" style={navLinkStyle} activeStyle={activeNavLinkStyle}>Home</NavLink>
            <NavLink to="/about" style={navLinkStyle} activeStyle={activeNavLinkStyle}>About</NavLink>
            <NavLink to="/services" style={navLinkStyle} activeStyle={activeNavLinkStyle}>Services</NavLink>
            <NavLink to="/portfolio" style={navLinkStyle} activeStyle={activeNavLinkStyle}>Portfolio</NavLink>
            <NavLink to="/contact" style={navLinkStyle} activeStyle={activeNavLinkStyle}>Contact</NavLink>
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

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '2rem',
  fontSize: '1.1rem',
  transition: 'color 0.3s ease',
};

const activeNavLinkStyle = {
  color: '#00d1b2',
};

export default Header;