
import React from 'react';

const Footer = () => {
  return (
    <footer className="p-6 text-center text-slate font-mono text-sm">
      <div className="max-w-4xl mx-auto">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-aqua transition-colors duration-300"
        >
          <p className="mb-1">Designed & Built by John Smith</p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
