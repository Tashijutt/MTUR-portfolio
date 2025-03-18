
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

const SectionHeading = ({ number, title, className }: SectionHeadingProps) => {
  const isCentered = className?.includes('justify-center');

  return (
    <div className={cn('flex items-center w-full my-8 gap-4', className)}>
      <h2 className="flex items-center whitespace-nowrap text-slate-light text-2xl font-semibold">
        <span className="text-aqua font-mono text-xl mr-2">{number}.</span>
        {title}
      </h2>
      <div className="h-px bg-slate-dark flex-grow max-w-[300px]"></div>
    </div>
  );
};

export default SectionHeading;
