
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Github, ExternalLink } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useInView } from 'react-intersection-observer';

// Extended project type with additional fields for archive page
type ArchiveProject = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: string;
  github?: string;
  external?: string;
  company?: string;
  tech?: string[];
  showInProjects?: boolean;
};

// A more comprehensive list for the archive
const archiveProjects: ArchiveProject[] = [
  {
    id: 1,
    year: '2023',
    title: 'Halcyon Theme',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    tags: ['VS Code', 'Sublime Text', 'Atom'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Self',
    tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    showInProjects: true
  },
  {
    id: 2,
    year: '2023',
    title: 'Spotify Profile',
    description: 'A web app for visualizing personalized Spotify data.',
    tags: ['React', 'Styled Components', 'Spotify API'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Self',
    tech: ['React', 'Styled Components', 'Spotify API'],
    showInProjects: true
  },
  {
    id: 3,
    year: '2022',
    title: 'Build a Spotify Connected App',
    description: 'A guide on building a Spotify connected app with React',
    tags: ['React', 'Express', 'Spotify API', 'Styled Components'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Self',
    tech: ['React', 'Express', 'Spotify API'],
    showInProjects: true
  },
  {
    id: 4,
    year: '2022',
    title: 'Integrating Algolia Search with WordPress Multisite',
    description: 'Building a custom multisite WordPress plugin for Algolia search',
    tags: ['Algolia', 'WordPress', 'PHP'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Upstatement',
    tech: ['WordPress', 'PHP', 'Algolia'],
    showInProjects: true
  },
  {
    id: 5,
    year: '2021',
    title: 'Time to Have More Fun',
    description: 'A single page app for helping me choose where to travel',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Self',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
    showInProjects: true
  },
  {
    id: 6,
    year: '2021',
    title: 'Building a Headless Mobile App CMS From Scratch',
    description: 'Find out how we built a custom headless CMS',
    tags: ['Node.js', 'Express', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Upstatement',
    tech: ['Node.js', 'Express', 'Firebase'],
    showInProjects: true
  },
  {
    id: 7,
    year: '2020',
    title: 'OctoProfile',
    description: 'A nicer look at your GitHub profile stats',
    tags: ['React', 'Chart.js', 'GitHub API'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Self',
    tech: ['React', 'Chart.js', 'GitHub API'],
    showInProjects: true
  },
  {
    id: 8,
    year: '2020',
    title: 'Google Keep Clone',
    description: 'A simple Google Keep clone built with Vue and Firebase',
    tags: ['Vue', 'Firebase'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Self',
    tech: ['Vue', 'Firebase'],
    showInProjects: true
  },
  {
    id: 9,
    year: '2019',
    title: 'Apple Music Embeddable Web Player Widget',
    description: 'Embeddable Apple Music player widget for WordPress',
    tags: ['WordPress', 'Apple Music API', 'JS'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Upstatement',
    tech: ['WordPress', 'PHP', 'JS'],
    showInProjects: true
  },
  {
    id: 10,
    year: '2019',
    title: 'Devoted Health',
    description: 'A website for a Medicare insurance company',
    tags: ['Gatsby', 'TypeScript', 'GraphQL'],
    external: 'https://example.com',
    company: 'Upstatement',
    tech: ['Gatsby', 'TypeScript', 'GraphQL'],
    showInProjects: true
  },
  {
    id: 11,
    year: '2018',
    title: 'Flagship Pioneering',
    description: 'A website for a biotech incubator',
    tags: ['Gatsby', 'TypeScript'],
    external: 'https://example.com',
    company: 'Upstatement',
    tech: ['Gatsby', 'TypeScript', 'Contentful'],
    showInProjects: true
  },
  {
    id: 12,
    year: '2018',
    title: 'Personal Website V4',
    description: 'Fourth iteration of my personal website',
    tags: ['Gatsby', 'React', 'GraphQL'],
    github: 'https://github.com',
    external: 'https://example.com',
    company: 'Self',
    tech: ['Gatsby', 'React', 'GraphQL'],
    showInProjects: true
  }
];

const Archive = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(archiveProjects.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = archiveProjects.slice(indexOfFirstItem, indexOfLastItem);

  // Make sure we scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-500 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Link 
          to="/#other-projects" 
          className="inline-flex items-center font-mono text-aqua mb-12 hover:underline"
        >
          <ChevronLeft size={16} className="mr-1" /> Back to Projects
        </Link>
        
        <h1 className="text-slate-light text-4xl md:text-5xl font-bold mb-16">Archive</h1>
        <p className="text-slate mb-10 max-w-2xl">
          A collection of things I've worked on or built over the years, from side projects to professional work.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-dark">
                <th className="py-4 px-2 font-mono text-aqua font-normal">Year</th>
                <th className="py-4 px-2 font-mono text-aqua font-normal">Title</th>
                <th className="py-4 px-2 font-mono text-aqua font-normal hidden md:table-cell">Made at</th>
                <th className="py-4 px-2 font-mono text-aqua font-normal hidden md:table-cell">Built with</th>
                <th className="py-4 px-2 font-mono text-aqua font-normal">Links</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project) => (
                <tr 
                  key={project.id}
                  className="border-b border-slate-dark hover:bg-navy-light transition-colors"
                >
                  <td className="py-4 px-2 font-mono text-slate text-sm">{project.year}</td>
                  <td className="py-4 px-2">
                    <h3 className="font-bold text-slate-light">{project.title}</h3>
                    <p className="text-slate text-sm mt-1 hidden md:block">{project.description}</p>
                  </td>
                  <td className="py-4 px-2 font-mono text-slate text-sm hidden md:table-cell">{project.company}</td>
                  <td className="py-4 px-2 hidden md:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {project.tech?.slice(0, 3).map((tech, i) => (
                        <li key={i} className="font-mono text-xs text-slate-light">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
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
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-16">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className="cursor-pointer text-slate-light hover:text-aqua hover:bg-navy-light"
                  />
                </PaginationItem>
              )}
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`cursor-pointer ${
                      currentPage === index + 1 
                        ? 'text-aqua border-aqua' 
                        : 'text-slate-light hover:text-aqua hover:bg-navy-light'
                    }`}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className="cursor-pointer text-slate-light hover:text-aqua hover:bg-navy-light"
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Archive;
