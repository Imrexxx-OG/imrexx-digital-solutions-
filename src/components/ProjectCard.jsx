function ProjectCard({ title, description, image }) {
  return (
    <div className="project-card" style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} loading="lazy" />
      <h3 style={cardTitleStyle}>{title}</h3>
      <p style={cardDescriptionStyle}>{description}</p>
    </div>
  );
}

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Enhanced for hover
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '1rem',
};

const cardTitleStyle = {
  fontWeight: '700',
  fontSize: '1.3rem',
  marginBottom: '0.5rem',
};

const cardDescriptionStyle = {
  fontFamily: 'Roboto Mono, monospace', // Match Home/About/Services
  fontWeight: '400',
  lineHeight: '1.6',
};

export default ProjectCard;