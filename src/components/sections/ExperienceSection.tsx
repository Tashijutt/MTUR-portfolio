
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const jobs = [
  {
    company: 'Upstatement',
    url: 'https://upstatement.com',
    title: 'Lead Engineer',
    range: 'May 2021 - Present',
    duties: [
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, and Pratt Institute',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions for clients',
      'Collaborate with designers, ensuring designs are technically feasible while maintaining the creative vision',
      'Mentor junior developers through code reviews and pair programming sessions'
    ]
  },
  {
    company: 'Apple',
    url: 'https://apple.com',
    title: 'UI Engineer',
    range: 'July 2019 - April 2021',
    duties: [
      'Developed and maintained code for internal tools with a focus on usability and performance',
      'Collaborated with designers and product managers to create intuitive user interfaces',
      'Implemented responsive design principles to ensure compatibility across multiple devices',
      'Participated in code reviews and contributed to documentation to improve team productivity'
    ]
  },
  {
    company: 'Scout Studio',
    url: 'https://scout.camd.northeastern.edu/',
    title: 'Developer',
    range: 'January 2018 - June 2019',
    duties: [
      'Collaborated with a small team of student designers and engineers to build websites and digital experiences for clients',
      'Worked closely with designers to transform their creative concepts into functional websites',
      'Managed multiple project deadlines and deliverables in a fast-paced environment',
      'Participated in client meetings to gather requirements and present progress updates'
    ]
  },
  {
    company: 'Starry',
    url: 'https://starry.com',
    title: 'Software Engineer Co-op',
    range: 'July 2017 - December 2017',
    duties: [
      'Built and shipped production code for a customer-facing web application using React, Redux, and TypeScript',
      'Implemented a system to dynamically generate marketing pages for multiple services',
      'Collaborated with the design team to ensure consistent implementation of visual elements',
      'Participated in daily stand-ups and sprint planning to maintain project timelines'
    ]
  }
];

const ExperienceSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="experience">
      <SectionHeading number="02" title="Where I've Worked" />
      
      <div 
        ref={ref}
        className={`flex flex-col md:flex-row gap-4 transition-all duration-500 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Tab list */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-dark">
          {jobs.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className={cn(
                'px-5 py-3 font-mono text-sm whitespace-nowrap transition-all duration-300 md:border-l-2 md:border-l-transparent focus:outline-none focus:bg-navy-light',
                activeTabIndex === index 
                  ? 'text-aqua md:border-l-aqua bg-navy-light/50' 
                  : 'text-slate hover:text-slate-light hover:bg-navy-light/30'
              )}
            >
              {job.company}
            </button>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="p-2 md:p-6">
          {jobs.map((job, index) => (
            <div 
              key={index}
              className={cn(
                'transition-all duration-300 transform space-y-6',
                activeTabIndex === index ? 'block opacity-100' : 'hidden opacity-0'
              )}
            >
              <h3 className="text-xl text-slate-light">
                <span>{job.title}</span>
                <span className="text-aqua"> @ </span>
                <a 
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:underline"
                >
                  {job.company}
                </a>
              </h3>
              
              <p className="font-mono text-sm text-slate">
                {job.range}
              </p>
              
              <ul className="space-y-3">
                {job.duties.map((duty, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-aqua mr-2 mt-1">▹</span>
                    <span className="text-slate">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
