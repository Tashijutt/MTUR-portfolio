
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const HeroSectionV5 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full max-w-7xl mx-auto flex flex-col md:flex-row">
      {/* Left sidebar navigation */}
      <div className="w-full md:w-72 lg:w-96 flex-shrink-0 py-10 md:sticky md:top-0 md:h-screen md:flex md:flex-col">
        <div className="px-6 md:px-10">
          <h1 
            className={`transition-all duration-300 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-3xl md:text-4xl font-semibold text-slate-light leading-tight block">
              Brittany Chiang
            </span>
            <span className="text-xl text-slate block mt-1">
              Front End Engineer
            </span>
          </h1>
          
          <p 
            className={`text-slate mt-4 mb-12 transition-all duration-300 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          {/* Navigation links */}
          <nav className="mt-12 hidden md:block">
            <ul 
              className={`space-y-5 transition-all duration-300 delay-400 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <li>
                <a href="#bio" className="text-slate hover:text-aqua transition-colors">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate hover:text-aqua transition-colors">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#work" className="text-slate hover:text-aqua transition-colors">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate hover:text-aqua transition-colors">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile navigation */}
          <nav className="flex md:hidden justify-center mt-8">
            <ul className="flex space-x-5">
              <li>
                <a href="#bio" className="text-slate hover:text-aqua transition-colors px-2 py-1">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate hover:text-aqua transition-colors px-2 py-1">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#work" className="text-slate hover:text-aqua transition-colors px-2 py-1">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate hover:text-aqua transition-colors px-2 py-1">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* No content in the Hero section's right part - this will be filled by BioSectionV5 */}
    </section>
  );
};

export default HeroSectionV5;
