
import React from 'react';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const jobs = [
  {
    period: '2021 - PRESENT',
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Kleytcx',
    companyUrl: '#',
    description: `Lead and collaborate with engineers across various Kleytcx frontend teams, focusing on ensuring accessibility throughout the platform. Train and mentor developers, designers, and product managers to implement best practices for web products in web accessibility.`,
    tags: ['Javascript', 'TypeScript', 'React', 'StoryBook']
  },
  {
    period: '2018 - 2021',
    title: 'Lead Engineer',
    company: 'Upstatement',
    companyUrl: '#',
    description: `Built, styled, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership, technical guidance, architectural direction, and approaching the development of products.`,
    tags: ['Next.js', 'TypeScript', 'PHP', 'React', 'WordPress']
  },
  {
    period: 'JULY - OCT 2017',
    title: 'UI Engineer Co-op',
    company: 'Apple',
    companyUrl: '#',
    description: `Developed and shipped highly interactive web applications for Apple Music using Ember and helped build the internal CMS that Apple Music's content team uses to publish and manage content. Implemented new features, fixed bugs, and improved overall application performance.`,
    tags: ['Ember', 'SCSS', 'JavaScript', 'WebSockets']
  },
  {
    period: '2016 - 2017',
    title: 'Developer',
    company: 'Scout Studio',
    companyUrl: '#',
    description: `Collaborated with small teams of student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.`,
    tags: ['HTML', 'SCSS', 'JavaScript', 'WordPress']
  }
];

const ExperienceSectionV5 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="experience" className="py-16">
      <h2 className="text-xl uppercase tracking-widest text-slate-light mb-8">Experience</h2>
      
      <div 
        ref={ref}
        className={`space-y-12 transition-all duration-500 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {jobs.map((job, index) => (
          <div key={index} className="pb-12 relative last:pb-0">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 flex-shrink-0">
                <p className="font-mono text-xs text-slate">{job.period}</p>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl text-slate-light font-semibold flex items-center gap-2 mb-1">
                  {job.title}
                  {job.company && (
                    <>
                      <span className="text-slate-dark">&mdash;</span>
                      <a 
                        href={job.companyUrl} 
                        className="text-aqua hover:underline inline-flex items-center" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {job.company}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </>
                  )}
                </h3>
                <p className="text-slate mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs py-1 px-3 rounded-full border border-slate-dark text-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSectionV5;
