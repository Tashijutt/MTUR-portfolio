
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

interface SocialLinksProps {
  orientation?: 'vertical' | 'horizontal';
}

const SocialLinks = ({ orientation = 'vertical' }: SocialLinksProps) => {
  const socialItems = [
    { 
      Icon: Github, 
      href: 'https://github.com/bchiang7', 
      label: 'GitHub'
    },
    { 
      Icon: Linkedin, 
      href: 'https://linkedin.com/in/bchiang7', 
      label: 'LinkedIn'
    },
    { 
      Icon: Twitter, 
      href: 'https://twitter.com/bchiang7', 
      label: 'Twitter'
    },
    { 
      Icon: Instagram, 
      href: 'https://instagram.com/bchiang7', 
      label: 'Instagram'
    }
  ];

  return (
    <div className={`fixed bottom-0 ${orientation === 'vertical' ? 'left-10 lg:left-12 hidden md:block' : 'left-0 w-full block md:hidden'}`}>
      <div className={`flex ${orientation === 'vertical' ? 'flex-col items-center' : 'flex-row justify-center space-x-6'}`}>
        {socialItems.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-slate hover:text-aqua transition-all duration-300 ease-in-out transform hover:-translate-y-1 p-2"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      {orientation === 'vertical' && (
        <div className="w-px h-24 bg-slate mx-auto mt-6"></div>
      )}
      {orientation === 'horizontal' && (
        <div className="w-full h-px bg-slate mt-6 mb-8 max-w-[150px] mx-auto"></div>
      )}
    </div>
  );
};

export default SocialLinks;
