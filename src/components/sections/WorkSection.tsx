
import React from 'react';
import SectionHeading from '../SectionHeading';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Spotify Profile',
    description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    tags: ['React', 'Styled Components', 'Spotify API'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com',
    external: 'https://example.com',
    featured: true
  },
  {
    title: 'Minimalist Weather App',
    description: 'A weather app with a beautiful, minimalist interface that displays current weather conditions and forecasts. Features include location-based weather updates, customizable units, and hourly predictions.',
    tags: ['React Native', 'TypeScript', 'Weather API'],
    image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    github: 'https://github.com',
    external: 'https://example.com',
    featured: true
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'An administrative dashboard for e-commerce platforms, providing analytics, inventory management, and order processing capabilities with an intuitive interface designed for efficiency.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    github: 'https://github.com',
    external: 'https://example.com',
    featured: true
  }
];

const FeaturedProject = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`relative grid md:grid-cols-12 gap-4 items-center my-16 transition-all duration-500 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Image Side */}
      <div className={`relative md:col-span-7 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <a 
          href={project.external}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <div className="relative w-full aspect-video bg-navy-light rounded overflow-hidden">
            <div className="absolute inset-0 bg-aqua/30 hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </a>
      </div>

      {/* Content Side */}
      <div 
        className={`relative z-20 md:col-span-6 md:absolute ${
          isEven ? 'md:right-0 text-right' : 'md:left-0 text-left'
        }`}
      >
        <p className="font-mono text-aqua mb-1">Featured Project</p>
        <h3 className="text-2xl font-bold text-slate-light mb-4">
          <a 
            href={project.external}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-aqua transition-colors duration-300"
          >
            {project.title}
          </a>
        </h3>
        <div className="bg-navy-light p-6 rounded shadow-xl mb-4">
          <p className="text-slate">{project.description}</p>
        </div>
        <ul className={`flex flex-wrap gap-x-4 gap-y-2 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
          {project.tags.map(tag => (
            <li key={tag} className="font-mono text-xs text-slate-light">
              {tag}
            </li>
          ))}
        </ul>
        <div className={`flex gap-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-aqua transition-colors duration-300"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
          <a 
            href={project.external}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-aqua transition-colors duration-300"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <SectionContainer id="work" className="relative">
      <SectionHeading number="03" title="Some Things I've Built" />
      
      <div>
        {projects.map((project, index) => (
          <FeaturedProject key={index} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default WorkSection;
