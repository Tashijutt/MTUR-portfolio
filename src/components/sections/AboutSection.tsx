
import React, { useState, useEffect } from 'react';
import SectionHeading from '../SectionHeading';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 
    'Node.js', 'Next.js', 'Angular',
    'TailwindCSS', 'GraphQL', 'Python'
  ];

  return (
    <SectionContainer id="about">
      <SectionHeading number="01" title="About Me" />
      
      <div 
        ref={ref}
        className={`grid md:grid-cols-3 gap-10 transition-all duration-500 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="md:col-span-2 space-y-4 text-slate">
          <p>
            Hello! My name is John and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          
          <p>
            Fast-forward to today, and I've had the privilege of working at{' '}
            <a href="#" className="text-aqua hover:underline">an advertising agency</a>,{' '}
            <a href="#" className="text-aqua hover:underline">a start-up</a>,{' '}
            <a href="#" className="text-aqua hover:underline">a huge corporation</a>, and{' '}
            <a href="#" className="text-aqua hover:underline">a student-led design studio</a>.
          </p>
          
          <p>
            My main focus these days is building accessible, inclusive products and digital experiences at{' '}
            <a href="#" className="text-aqua hover:underline">Company Name</a> for a variety of clients.
          </p>
          
          <p>Here are a few technologies I've been working with recently:</p>
          
          <ul className="grid grid-cols-2 mt-5 gap-1">
            {skills.map((skill) => (
              <li key={skill} className="flex items-start">
                <span className="text-aqua mr-2">▹</span>
                <span className="font-mono text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative group">
          <div className="relative w-full aspect-square rounded overflow-hidden bg-aqua/20 z-10">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
              alt="John Smith" 
              className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 hover:mix-blend-normal transition-all duration-300"
            />
            <div className="absolute inset-0 bg-aqua/20 hover:bg-transparent transition-colors duration-300"></div>
          </div>
          <div className="absolute inset-0 border-2 border-aqua rounded translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 z-0"></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
