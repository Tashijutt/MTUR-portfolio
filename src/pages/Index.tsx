
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import SocialLinks from '@/components/SocialLinks';
import EmailLink from '@/components/EmailLink';
import Footer from '@/components/Footer';
import VersionToggle from '@/components/VersionToggle';

// V4 Components (Previous)
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';

// V5 Components (Latest)
import HeroSectionV5 from '@/components/sections/HeroSectionV5';
import BioSectionV5 from '@/components/sections/BioSectionV5';
import ExperienceSectionV5 from '@/components/sections/ExperienceSectionV5';
import WorkSectionV5 from '@/components/sections/WorkSectionV5';
import ContactSectionV5 from '@/components/sections/ContactSectionV5';

const Index = () => {
  const [currentVersion, setCurrentVersion] = useState<'v4' | 'v5'>('v5');

  // Helper function to handle smooth scrolling to anchors
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const elementId = href.slice(1);
          const element = document.getElementById(elementId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - (currentVersion === 'v4' ? 80 : 0), // Offset for header only in v4
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [currentVersion]);

  const toggleVersion = () => {
    setCurrentVersion(prev => prev === 'v4' ? 'v5' : 'v4');
  };

  return (
    <div className={`relative ${currentVersion === 'v5' ? 'pt-0' : 'pt-16'}`}>
      {/* Only show header in v4 */}
      {currentVersion === 'v4' && <Header currentVersion={currentVersion} />}
      
      <main className={`bg-navy ${currentVersion === 'v5' ? '' : 'pt-16 pb-12'}`}>
        {currentVersion === 'v4' ? (
          // V4 Content
          <>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <WorkSection />
            <ContactSection />
          </>
        ) : (
          // V5 Content
          <div className="min-h-screen">
            <HeroSectionV5 />
            <div className="md:ml-0 md:pl-0">
              <BioSectionV5 />
              <ExperienceSectionV5 />
              <WorkSectionV5 />
              <ContactSectionV5 />
            </div>
          </div>
        )}
      </main>
      
      {/* Only show social links and email link in v4 mode */}
      {currentVersion === 'v4' && (
        <>
          <SocialLinks orientation="vertical" />
          <SocialLinks orientation="horizontal" />
          <EmailLink />
        </>
      )}
      
      <Footer />
      <VersionToggle onToggleVersion={toggleVersion} currentVersion={currentVersion} />
    </div>
  );
};

export default Index;
