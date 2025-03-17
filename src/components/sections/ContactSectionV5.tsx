
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ContactSectionV5 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Empty left column for spacing on large screens */}
        <div className="hidden md:block md:w-72 lg:w-96 flex-shrink-0"></div>
        
        {/* Right content column */}
        <div className="w-full px-6 py-24 md:py-16">
          <div 
            ref={ref}
            className={`max-w-xl transition-all duration-500 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-xl uppercase tracking-widest text-slate-light mb-8">Get In Touch</h2>
            <p className="text-slate mb-10">
              Although I'm not currently looking for new opportunities, my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a 
              href="mailto:hello@example.com"
              className="inline-block border border-aqua text-aqua font-mono px-8 py-4 rounded hover:bg-aqua/10 transition-colors duration-300 text-lg"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionV5;
