
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Repeat } from 'lucide-react';

interface VersionToggleProps {
  onToggleVersion: () => void;
  currentVersion: 'v4' | 'v5';
}

const VersionToggle = ({ onToggleVersion, currentVersion }: VersionToggleProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button 
            className="rounded-full w-12 h-12 bg-aqua text-navy hover:bg-aqua/90 p-0 flex items-center justify-center"
            aria-label="Toggle version"
          >
            <Repeat size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-navy-light border-aqua/20 text-slate-light p-4 w-64">
          <div className="space-y-3">
            <h3 className="font-medium text-aqua">Website Version</h3>
            <p className="text-sm text-slate">
              Switch between different versions of this portfolio
            </p>
            <div className="flex gap-2 pt-2">
              <Button
                variant={currentVersion === 'v4' ? 'default' : 'outline'}
                className={currentVersion === 'v4' ? 'bg-aqua text-navy hover:bg-aqua/90' : 'border-aqua text-aqua hover:bg-aqua/10'}
                onClick={() => {
                  onToggleVersion();
                  setIsPopoverOpen(false);
                }}
              >
                {currentVersion === 'v4' ? 'Current: v4' : 'Switch to v4'}
              </Button>
              <Button
                variant={currentVersion === 'v5' ? 'default' : 'outline'}
                className={currentVersion === 'v5' ? 'bg-aqua text-navy hover:bg-aqua/90' : 'border-aqua text-aqua hover:bg-aqua/10'}
                onClick={() => {
                  onToggleVersion();
                  setIsPopoverOpen(false);
                }}
              >
                {currentVersion === 'v5' ? 'Current: v5' : 'Switch to v5'}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default VersionToggle;
