
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  version?: 'v4' | 'v5';
}

const SectionContainer = ({ id, children, className, version = 'v4' }: SectionContainerProps) => {
  if (version === 'v5') {
    return (
      <section 
        id={id}
        className={cn(
          'w-full',
          className
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row">
          {/* Empty left column for spacing on large screens */}
          <div className="hidden md:block md:w-72 lg:w-96 flex-shrink-0"></div>
          
          {/* Right content column */}
          <div className="w-full px-6 py-24 md:py-32">
            {children}
          </div>
        </div>
      </section>
    );
  }

  // Original V4 layout
  return (
    <section 
      id={id}
      className={cn(
        'min-h-screen w-full max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col justify-center',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
