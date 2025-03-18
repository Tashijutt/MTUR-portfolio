
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import SocialLinks from '@/components/SocialLinks';
import EmailLink from '@/components/EmailLink';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import WorkSection from '@/components/sections/WorkSection';
import OtherProjectsSection from '@/components/sections/OtherProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';

const Index = () => {
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

  return (
    <div className="relative">
      <Header />
      <main className="bg-navy pt-16 pb-12">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <OtherProjectsSection />
        <ContactSection />
      </main>
      <SocialLinks orientation="vertical" />
      <SocialLinks orientation="horizontal" />
      <EmailLink />
      <Footer />
    </div>
  );
};

export default Index;
