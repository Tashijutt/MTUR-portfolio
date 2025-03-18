
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Folder, Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Combined list of all projects (featured and other projects)
const allProjects = [
  {
    title: 'Halcyon Theme',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    tags: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2022
  },
  {
    title: 'Spotify Profile',
    description: 'A web app for visualizing personalized Spotify data.',
    tags: ['React', 'Styled Components', 'Spotify API'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2021
  },
  {
    title: 'Build a Spotify Connected App',
    description: 'A comprehensive guide on building a Spotify connected app with user authentication.',
    tags: ['React', 'Express', 'Spotify API', 'Styled Components'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2020
  },
  {
    title: 'Integrating Algolia Search with WordPress Multisite',
    description: 'Building a custom multisite WordPress plugin to build global search with Algolia.',
    tags: ['Algolia', 'WordPress', 'PHP'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2022
  },
  {
    title: 'Time to Have More Fun',
    description: 'A single page web app for helping me choose where to travel.',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2021
  },
  {
    title: 'Building a Headless Mobile App CMS From Scratch',
    description: 'Find out how we built a custom headless CMS for a mobile app.',
    tags: ['Node.js', 'Express', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2020
  },
  {
    title: 'OctoProfile',
    description: 'A nicer look at your GitHub profile and repo stats.',
    tags: ['React', 'Chart.js', 'GitHub API'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2019
  },
  {
    title: 'Google Keep Clone',
    description: 'A simple Google Keep clone built with Vue and Firebase.',
    tags: ['Vue', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2018
  },
  {
    title: 'Apple Music Embeddable Web Player Widget',
    description: 'Embeddable Apple Music web player widget for WordPress blogs.',
    tags: ['WordPress', 'Apple Music API', 'JS'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2017
  },
  {
    title: 'Markdown Note Taking App',
    description: 'A simple markdown note-taking application with cloud sync.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2022
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard showing current conditions and forecasts.',
    tags: ['JavaScript', 'CSS', 'Weather API'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2021
  },
  {
    title: 'Portfolio v1',
    description: 'My first portfolio website built with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    external: 'https://example.com',
    year: 2019
  }
];

const ProjectCard = ({ project }: { project: any }) => (
  <div className="flex items-center py-6 border-b border-slate-800">
    <div className="w-32 text-right pr-8 text-slate-light font-mono text-sm hidden md:block">
      {project.year}
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-slate-light hover:text-aqua transition-colors">
        <a 
          href={project.external || project.github}
          target="_blank"
          rel="noopener noreferrer" 
          className="hover:text-aqua"
        >
          {project.title}
        </a>
      </h3>
      <p className="text-slate mb-3">{project.description}</p>
      <div className="flex flex-wrap items-center gap-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-2">
          {project.tags.map((tag: string) => (
            <li key={tag} className="text-xs font-mono text-slate-light">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 ml-auto">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-aqua transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
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
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Extract all unique tags from all projects
  const allTags = Array.from(new Set(
    allProjects.flatMap(project => project.tags)
  )).sort();

  // Filter projects based on search term and active tag
  useEffect(() => {
    let results = allProjects;
    
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      results = results.filter(project => 
        project.title.toLowerCase().includes(lowercasedSearch) || 
        project.description.toLowerCase().includes(lowercasedSearch) ||
        project.tags.some((tag: string) => tag.toLowerCase().includes(lowercasedSearch))
      );
    }
    
    if (activeTag) {
      results = results.filter(project => 
        project.tags.includes(activeTag)
      );
    }
    
    setFilteredProjects(results);
  }, [searchTerm, activeTag]);

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div 
        ref={ref} 
        className={cn(
          "max-w-5xl mx-auto px-6 transition-all duration-500 transform",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <Link 
          to="/" 
          className="inline-flex items-center text-aqua hover:underline mb-10 font-mono text-sm"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        
        <header className="mb-12">
          <h1 className="text-slate-light text-5xl font-bold mb-6">Archive</h1>
          <p className="text-slate text-lg mb-8">
            A collection of things I've worked on
          </p>
          
          {/* Filter controls */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-navy-light text-slate-light border-slate-800 max-w-md"
            />
            
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={cn(
                    "border border-slate-800 text-xs font-mono",
                    activeTag === tag 
                      ? "bg-aqua/10 text-aqua border-aqua" 
                      : "text-slate-light hover:border-aqua hover:text-aqua"
                  )}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </header>
        
        {/* Projects Table */}
        <div className="mb-10">
          <table className="w-full border-collapse">
            <thead className="font-mono text-aqua text-sm">
              <tr>
                <th className="py-3 text-left pl-3 md:pl-0">Year</th>
                <th className="py-3 text-left">Title</th>
                <th className="py-3 text-left hidden md:table-cell">Made with</th>
                <th className="py-3 text-left">Links</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, i) => (
                <tr 
                  key={i} 
                  className="border-b border-slate-800 hover:bg-navy-light transition-colors"
                >
                  <td className="py-4 text-slate-light font-mono text-sm pl-3 md:pl-0">
                    {project.year}
                  </td>
                  <td className="py-4">
                    <a 
                      href={project.external || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-light font-semibold hover:text-aqua transition-colors"
                    >
                      {project.title}
                    </a>
                    <p className="text-slate text-sm mt-1 pr-8">{project.description}</p>
                  </td>
                  <td className="py-4 hidden md:table-cell">
                    <ul className="flex flex-wrap gap-x-3 gap-y-2">
                      {project.tags.map((tag: string) => (
                        <li key={tag} className="text-xs font-mono text-slate-light">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-light hover:text-aqua transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
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
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-slate">
              <p>No projects match your current filters. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Archive;
