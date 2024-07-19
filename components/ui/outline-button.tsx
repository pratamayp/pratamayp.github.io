'use client';

import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const OutlineButton = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      className="relative p-[2px] active:scale-100 rounded-xl transition-transform duration-300 ease-in-out overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-xl',
          isHovered
            ? 'absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4ade80_0%,#393BB2_30%,#4ade80_100%)]'
            : 'bg-transparent'
        )}
      />
      <div
        className={cn(
          'relative w-fit px-6 py-2 bg-zinc-950 rounded-[10px] transition-all duration-300 ease-in-out'
        )}
      >
        <div
          className={cn(
            'flex items-center gap-2 text-xs transition-colors duration-300 ease-in-out font-semibold',
            isHovered ? 'text-zinc-100' : 'text-zinc-300'
          )}
        >
          Visit
          <ChevronRight
            className={cn(
              'size-4 transition-transform duration-500 ease-in-out motion-reduce:transform-none',
              isHovered && 'animate-accordion-right'
            )}
          />
        </div>
      </div>
    </div>
  );
};
