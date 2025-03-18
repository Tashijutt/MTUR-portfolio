
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Sample project data - you can replace this with your actual projects
const otherProjects = [
  {
    title: 'Markdown Previewer',
    description: 'A real-time markdown previewer built with React. Features include syntax highlighting, custom toolbar, and export options.',
    tags: ['React', 'Markdown', 'CSS'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Finance Tracker',
    description: 'A personal finance tracking application with data visualization, budget planning, and expense categorization features.',
    tags: ['TypeScript', 'Chart.js', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Recipe Finder',
    description: 'Search engine for recipes based on available ingredients. Includes filtering by dietary restrictions and nutritional information.',
    tags: ['JavaScript', 'API', 'Responsive Design'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'Kanban-style task management application with drag-and-drop functionality, due dates, priority levels, and team assignment features.',
    tags: ['React', 'DnD', 'Node.js'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Portfolio Template',
    description: 'Customizable portfolio template for developers and designers. Features include dark/light mode, project showcase, and contact form.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    external: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather forecast application showing current conditions and 5-day predictions. Integrates with geolocation and saves favorite locations.',
    tags: ['React', 'Weather API', 'Geolocation'],
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
        <div className="flex gap-3">
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
        <p className="text-slate mb-4">{project.description}</p>
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
  const visibleProjects = showMore ? otherProjects : otherProjects.slice(0, 6);
  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <SectionContainer id="other-projects" className="relative">
      <div className="text-center mb-12">
        <SectionHeading number="04" title="Other Noteworthy Projects" className="justify-center" />
        <a 
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-aqua hover:underline font-mono text-sm"
        >
          view the archive
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      
      {otherProjects.length > 6 && (
        <div className="flex justify-center mt-12">
          <Button
            onClick={toggleShowMore}
            variant="outline"
            className="border border-aqua text-aqua hover:bg-aqua/10 px-5 py-3 rounded"
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </SectionContainer>
  );
};

export default OtherProjectsSection;
