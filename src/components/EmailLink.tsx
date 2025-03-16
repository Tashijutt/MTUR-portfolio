
import React from 'react';

const EmailLink = () => {
  return (
    <div className="fixed bottom-0 right-10 lg:right-12 hidden md:block">
      <a
        href="mailto:email@example.com"
        className="font-mono text-slate hover:text-aqua transition-all duration-300 ease-in-out transform hover:-translate-y-1 tracking-widest"
        style={{ writingMode: 'vertical-rl' }}
      >
        email@example.com
      </a>
      <div className="w-px h-24 bg-slate mx-auto mt-6"></div>
    </div>
  );
};

export default EmailLink;
