
import React from 'react';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="contact" className="text-center">
      <div 
        ref={ref}
        className={`max-w-xl mx-auto transition-all duration-500 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="font-mono text-aqua mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-light mb-6">Get In Touch</h2>
        <p className="text-slate mb-10">
          Whether you have a question or just want to say hi, I'll try my best to get back to you! 
          My inbox is always open for discussing new opportunities, creative ideas, or just a casual chat about web development.
        </p>
        <a 
          href="mailto:email@example.com"
          className="inline-block border-2 border-aqua text-aqua font-mono px-8 py-4 rounded hover:bg-aqua/10 transition-colors duration-300 text-lg"
        >
          Say Hello
        </a>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
