
import React from 'react';
import { useInView } from 'react-intersection-observer';

const WorkSectionV5 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Project data
  const projects = [
    {
      title: "Build a Spotify Connected App",
      description: "Video course that teaches how to build a web app with the Spotify API. Learn the principles of REST APIs, how to set up user authentication, fetch data from the Spotify API, build custom React hooks, styled components, and more.",
      tags: ['React', 'Express', 'Spotify API', 'Styled Components'],
      image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Ffeatured%2Fbuilding-spotify-connected-app.png&w=1080&q=75",
      link: "#",
      featured: true
    },
    {
      title: "Spotify Profile",
      description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and manage playlists.",
      tags: ['React', 'Express', 'Spotify API', 'Heroku'],
      image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Ffeatured%2Fspotify-profile.png&w=1080&q=75",
      link: "#",
      featured: true
    },
    {
      title: "Halcyon Theme",
      description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      tags: ['VS Code', 'Sublime Text', 'Atom', 'iTerm'],
      image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Ffeatured%2Fhalcyon.png&w=1080&q=75",
      link: "#",
      featured: true
    }
  ];

  return (
    <section id="work" className="w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Empty left column for spacing on large screens */}
        <div className="hidden md:block md:w-72 lg:w-96 flex-shrink-0"></div>
        
        {/* Right content column */}
        <div className="w-full px-6 py-24 md:py-16">
          <h2 className="text-xl uppercase tracking-widest text-slate-light mb-16">Some Things I've Built</h2>
          
          <div 
            ref={ref}
            className={`space-y-24 transition-all duration-500 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-dark/70 transition-opacity duration-300"></div>
                  </div>
                </a>

                <div className="mt-4">
                  <h3 className="text-2xl font-semibold text-slate-light">{project.title}</h3>
                  <p className="mt-2 text-slate">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-slate px-3 py-1 rounded-full border border-slate-dark">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="#" 
              className="inline-block border border-aqua text-aqua px-6 py-3 rounded font-mono hover:bg-aqua/10 transition-colors"
            >
              View Full Project Archive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSectionV5;
