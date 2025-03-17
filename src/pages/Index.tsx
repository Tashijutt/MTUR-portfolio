
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import SocialLinks from '@/components/SocialLinks';
import EmailLink from '@/components/EmailLink';
import Footer from '@/components/Footer';
import VersionToggle from '@/components/VersionToggle';

// V4 Components (Current)
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';

// V5 Components (New)
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
              top: element.offsetTop - 80, // Offset for header
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const toggleVersion = () => {
    setCurrentVersion(prev => prev === 'v4' ? 'v5' : 'v4');
  };

  return (
    <div className="relative">
      <Header />
      <main className="bg-navy pt-16 pb-12">
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
          <>
            <HeroSectionV5 />
            <BioSectionV5 />
            <ExperienceSectionV5 />
            <WorkSectionV5 />
            <ContactSectionV5 />
          </>
        )}
      </main>
      <SocialLinks orientation="vertical" />
      <SocialLinks orientation="horizontal" />
      <EmailLink />
      <Footer />
      <VersionToggle onToggleVersion={toggleVersion} currentVersion={currentVersion} />
    </div>
  );
};

export default Index;
