function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>&copy; 2025 Imrexx Digital Solutions. All rights reserved.</p>
        <p>CAC: [Your CAC Number] | TIN: [Your TIN] | SCUML: [Your SCUML Number]</p>
      </div>
    </footer>
  );
}

const footerStyle = {
  background: '#0a0a23',
  padding: '1rem 0',
  textAlign: 'center',
  fontSize: '0.9rem',
};

export default Footer;