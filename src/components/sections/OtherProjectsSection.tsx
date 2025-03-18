
import React, { useState } from 'react';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const otherProjects = [
  {
    title: 'Integrating Algolia Search with WordPress Multisite',
    description: 'Building a custom multisite WordPress plugin to build global search with Algolia',
    tags: ['Algolia', 'WordPress', 'PHP'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Time to Have More Fun',
    description: 'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Building a Headless Mobile App CMS From Scratch',
    description: 'Find out how we built a custom headless CMS with Node, Express, and Firebase for a mobile app',
    tags: ['Node.js', 'Express', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  // Adding more projects to make the "Show More" button actually needed
  {
    title: 'OctoProfile',
    description: 'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
    tags: ['React', 'Chart.js', 'GitHub API'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Google Keep Clone',
    description: 'A simple Google Keep clone built with Vue and Firebase',
    tags: ['Vue', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Apple Music Embeddable Web Player Widget',
    description: 'Embeddable Apple Music web player widget for WordPress blogs, with playlist support.',
    tags: ['WordPress', 'Apple Music API', 'JS'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Markdown Note Taking App',
    description: 'A simple markdown note-taking application with cloud sync capabilities',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that shows current conditions and forecasts using the OpenWeather API',
    tags: ['JavaScript', 'CSS', 'Weather API'],
    github: 'https://github.com',
    external: 'https://example.com'
  }
];

const ProjectCard = ({ project, index }: { project: typeof otherProjects[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100 * index, // Stagger the animations
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col h-full bg-navy-light rounded-md p-6 shadow-md transition-all duration-300",
        "transform hover:-translate-y-2 hover:shadow-lg",
        "opacity-0 translate-y-10",
        inView && "opacity-100 translate-y-0"
      )}
    >
      <header className="flex justify-between items-start mb-6">
        <div className="text-aqua">
          <Folder size={40} />
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-aqua transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          {project.external && (
            <a 
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-aqua transition-colors"
              aria-label="External Link"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </header>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-light mb-2 hover:text-aqua transition-colors">
          <a 
            href={project.external || project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-slate text-sm mb-6">{project.description}</p>
      </div>
      <footer>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 mt-2">
          {project.tags.map(tag => (
            <li key={tag} className="text-xs font-mono text-slate-light">
              {tag}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

const OtherProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);
  
  // Only show 3 projects initially, then up to all when "Show More" is clicked
  const visibleProjects = showMore ? otherProjects : otherProjects.slice(0, 3);
  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="other-projects" className="relative py-12 md:py-20">
      <div 
        ref={ref}
        className={`text-center mb-16 transition-all duration-500 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-slate-light text-3xl font-bold">Other Noteworthy Projects</h2>
        <Link 
          to="/archive"
          className="inline-block text-aqua hover:underline font-mono text-sm mt-2"
        >
          view the archive
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      
      {otherProjects.length > 3 && (
        <div className="flex justify-center mt-16">
          <Button
            onClick={toggleShowMore}
            variant="outline"
            className="border border-aqua text-aqua hover:bg-aqua/10 px-6 py-3 rounded font-mono"
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </SectionContainer>
  );
};

export default OtherProjectsSection;
