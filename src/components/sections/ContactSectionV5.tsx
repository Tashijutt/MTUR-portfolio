
import React from 'react';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';

const ContactSectionV5 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="contact" className="text-center py-24">
      <div 
        ref={ref}
        className={`max-w-xl mx-auto transition-all duration-500 transform ${
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
    </SectionContainer>
  );
};

export default ContactSectionV5;
