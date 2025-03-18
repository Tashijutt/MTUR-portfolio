
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ id, children, className }: SectionContainerProps) => {
  return (
    <section 
      id={id}
      className={cn(
        'min-h-screen w-full max-w-5xl mx-auto px-6 py-24 md:py-28 flex flex-col',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
