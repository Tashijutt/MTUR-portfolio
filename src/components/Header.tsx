
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      // For background change
      setIsScrolled(window.scrollY > 10);
      
      // For hiding header on scroll down
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isScrolledUp = prevScrollPos > currentScrollPos;
      const isMinimalScroll = currentScrollPos < 50;
      
      setPrevScrollPos(currentScrollPos);
      
      if (isScrolledDown && currentScrollPos > 70 && !isMenuOpen) {
        setVisible(false);
      } else if (isScrolledUp || isMinimalScroll) {
        setVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMenuOpen]);

  const navItems = [
    { name: 'About', href: '#about', delay: '100ms' },
    { name: 'Experience', href: '#experience', delay: '200ms' },
    { name: 'Work', href: '#work', delay: '300ms' },
    { name: 'Contact', href: '#contact', delay: '400ms' },
    { name: 'Resume', href: '/resume.pdf', delay: '500ms', isButton: true }
  ];

  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4',
        isScrolled ? 'bg-navy/90 backdrop-blur shadow-md' : 'bg-transparent',
        visible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="inline-block">
          <div className="text-aqua font-mono text-2xl font-bold">BC</div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navItems.map((item, i) => (
              <li 
                key={item.name} 
                style={{ animationDelay: item.delay }}
                className="animate-slide-right opacity-0"
              >
                {item.isButton ? (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-aqua text-aqua px-4 py-2 rounded hover:bg-aqua/10 transition-colors duration-300 font-mono text-sm"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a 
                    href={item.href}
                    className="text-slate-light hover:text-aqua transition-colors duration-300 font-mono text-sm"
                  >
                    <span className="text-aqua mr-1">0{i + 1}.</span> {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-slate-light hover:text-aqua"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed md:hidden right-0 top-0 bottom-0 w-3/4 bg-navy-light z-50 p-8 shadow-xl transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end">
          <button 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="text-slate-light hover:text-aqua"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="mt-10">
          <ul className="flex flex-col space-y-6 items-center">
            {navItems.map((item, i) => (
              <li key={item.name} className="w-full text-center">
                {item.isButton ? (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-aqua text-aqua px-8 py-3 rounded hover:bg-aqua/10 transition-colors duration-300 font-mono text-sm inline-block w-full"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a 
                    href={item.href}
                    className="text-slate-light hover:text-aqua transition-colors duration-300 font-mono text-lg flex flex-col"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-aqua mb-1">0{i + 1}.</span>
                    <span>{item.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
