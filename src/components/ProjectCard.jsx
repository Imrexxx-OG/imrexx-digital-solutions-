function ProjectCard({ title, description, image, tag }) {
  return (
    <div className="project-card card" style={cardStyle}>
      <div style={imageWrapStyle}>
        <img src={image} alt={title} style={imageStyle} loading="lazy" />
        {tag && <span style={tagStyle}>{tag}</span>}
      </div>
      <div style={bodyStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descStyle}>{description}</p>
      </div>
    </div>
  );
}

const cardStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
};

const imageWrapStyle = {
  position: 'relative',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: '210px',
  objectFit: 'cover',
  display: 'block',
  transition: 'transform 0.4s ease',
};

const tagStyle = {
  position: 'absolute',
  top: '12px',
  left: '12px',
  background: 'rgba(0, 209, 178, 0.9)',
  color: '#000',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.7rem',
  fontWeight: 700,
  padding: '0.25rem 0.6rem',
  borderRadius: '4px',
  letterSpacing: '0.05em',
};

const bodyStyle = {
  padding: '1.5rem',
  flex: 1,
};

const titleStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1.1rem',
  color: 'var(--text)',
  marginBottom: '0.5rem',
};

const descStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.85rem',
  color: 'var(--text-muted)',
  lineHeight: 1.7,
  margin: 0,
};

export default ProjectCard;
