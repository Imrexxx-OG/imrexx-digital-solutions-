function ProjectCard({ title, description, image }) {
  return (
    <div style={cardStyle}>
      {/* [Image Placeholder: Project image from Pinterest, e.g., /project1.jpg] */}
      <img src={image} alt={title} style={imageStyle} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'transform 0.3s ease',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '1rem',
};

export default ProjectCard;