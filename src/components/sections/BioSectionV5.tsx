
import React from 'react';
import SectionContainer from '../SectionContainer';
import { useInView } from 'react-intersection-observer';

const BioSectionV5 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="bio" className="py-16">
      <div 
        ref={ref}
        className={`max-w-4xl transition-all duration-500 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-slate mb-4">
          I'm a developer passionate about crafting accessible, user-perfect experiences, specializing in frontend development. My expertise lives at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
        </p>
        
        <p className="text-slate mb-4">
          Currently, I'm a Senior Front-End Engineer at <a href="#" className="text-aqua hover:underline">Kleytcx</a>, specializing in accessibility. I contribute to the development of UI components that power Kleytcx's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
        </p>
        
        <p className="text-slate mb-4">
          In the past, I've had the opportunity to develop software across a variety of environments—from <a href="#" className="text-aqua hover:underline">advertising agencies</a> to <a href="#" className="text-aqua hover:underline">large corporations</a> to <a href="#" className="text-aqua hover:underline">start-ups</a>—and most recently, I've been helping college students learn web development as an <a href="#" className="text-aqua hover:underline">online video course</a> instructor. A few years ago, guiding learners through building a web app with the Spotify API.
        </p>
        
        <p className="text-slate">
          In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule listening to <a href="#" className="text-aqua hover:underline">Kpop divas</a>.
        </p>
      </div>
    </SectionContainer>
  );
};

export default BioSectionV5;
