import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      title: 'Startup Community Platform',
      description: 'Built a community growth platform for a Lagos-based startup.',
      image: '/src/assets/project1.jpg',
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed a responsive e-commerce site for a global client.',
      image: '/src/assets/project2.jpg',
    },
    {
      title: 'Social Media Campaign',
      description: 'Created a branding strategy for a tech founder’s social media presence.',
      image: '/src/assets/project3.jpg',
    },
  ];

  return (
    <main className="fade-in">
      <section style={sectionStyle}>
        <div className="container">
          <h1>Our Portfolio</h1>
          <div style={portfolioStyle}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <a href="/contact" className="btn">See More Projects</a>
        </div>
      </section>
    </main>
  );
}

const sectionStyle = {
  padding: '3rem 0',
};

const portfolioStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  margin: '1rem'
};

export default Portfolio;