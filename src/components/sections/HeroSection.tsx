
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full max-w-5xl mx-auto px-6 flex flex-col justify-center">
      <div className="space-y-5">
        <p 
          className={`text-aqua font-mono mb-5 transition-all duration-300 delay-100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Hi, my name is
        </p>
        
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-light leading-tight transition-all duration-300 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Brittany Chiang.
        </h1>
        
        <h2 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate leading-tight transition-all duration-300 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          I build things for the web.
        </h2>
        
        <p 
          className={`text-slate max-w-xl text-lg mt-5 transition-all duration-300 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products at{' '}
          <a 
            href="https://upstatement.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-aqua hover:underline"
          >
            Upstatement
          </a>.
        </p>
        
        <div 
          className={`mt-10 transition-all duration-300 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="https://github.com/bchiang7/v4" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-aqua text-aqua font-mono px-7 py-4 rounded hover:bg-aqua/10 transition-colors duration-300"
          >
            Check out my portfolio!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
