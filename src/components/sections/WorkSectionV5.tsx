
import React from 'react';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Build a Spotify Connected App',
    description: 'A web app for visualizing personalized Spotify data with the Spotify API. Features include viewing top artists, tracks, playlists, favorites, stats, React, Node, Express, React Styled Components, and more.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com',
    external: 'https://example.com',
    stats: {
      stars: 877
    },
    tags: ['React', 'Express', 'Spotify API', 'Heroku']
  },
  {
    title: 'Spotify Profile',
    description: 'Web app for visualizing personalized Spotify data. View your top artists, tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    github: 'https://github.com',
    external: 'https://example.com',
    stats: {
      stars: null
    },
    tags: ['React', 'Express', 'Spotify API', 'Heroku']
  },
  {
    title: 'Halcyon Theme',
    description: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    github: 'https://github.com',
    external: 'https://example.com',
    stats: {
      installs: '500K+'
    },
    tags: []
  }
];

const WorkSectionV5 = () => {
  return (
    <SectionContainer id="work" className="py-16">
      <h2 className="text-xl uppercase tracking-widest text-slate-light mb-12">Projects</h2>
      
      <div className="space-y-24">
        {featuredProjects.map((project, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <div 
              key={index}
              ref={ref}
              className={`transition-all duration-500 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="mb-4">
                <a 
                  href={project.external} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group overflow-hidden bg-navy-light rounded-lg"
                >
                  <div className="aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-dark/60 group-hover:bg-transparent transition-all duration-500"></div>
                  </div>
                </a>
              </div>
              
              <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-light mb-2">
                <a 
                  href={project.external} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-aqua transition-colors"
                >
                  {project.title}
                </a>
                <ExternalLink 
                  className="text-slate hover:text-aqua transition-colors" 
                  size={18} 
                />
              </h3>
              
              <p className="text-slate mb-4">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                {project.stats.stars && (
                  <span className="text-sm text-slate flex items-center gap-1">
                    ★ {project.stats.stars}
                  </span>
                )}
                {project.stats.installs && (
                  <span className="text-sm text-slate flex items-center gap-1">
                    ↓ {project.stats.installs} installs
                  </span>
                )}
              </div>
              
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs py-1 px-3 rounded-full border border-slate-dark text-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default WorkSectionV5;
