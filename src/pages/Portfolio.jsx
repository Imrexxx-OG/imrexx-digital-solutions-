import ProjectCard from '../components/ProjectCard';
import startupImg from '../assets/start-up.jpg';
import buildWebsiteImg from '../assets/build-website.jpg';
import socialMediaImg from '../assets/social-media.jpg';
import { Link } from 'react-router-dom';

function Portfolio() {
  const projects = [
    {
      title: 'Startup Community Platform',
      description: 'Built a community growth platform for a Lagos-based startup.',
      image: startupImg
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed a responsive e-commerce site for a global client.',
      image: buildWebsiteImg
    },
    {
      title: 'Social Media Campaign',
      description: 'Created a branding strategy for a tech founder’s social media presence.',
      image: socialMediaImg
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
          {/* <a href="/contact" className="btn">See More Projects</a> */}
          <Link to="/contact" className="btn">See More Projects</Link>
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