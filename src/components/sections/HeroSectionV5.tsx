
import React, { useEffect, useState } from 'react';

const HeroSectionV5 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full max-w-5xl mx-auto px-6 flex flex-col justify-center py-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 md:self-center">
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
            className={`text-slate mt-4 transition-all duration-300 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I build accessible, user-perfect digital experiences for the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV5;
