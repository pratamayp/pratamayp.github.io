'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Project } from '@/app/_components/projects';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function CardOverlay({
  project: { title, description, techstack, thumbnail, web_url },
}: {
  project: Project;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-72 w-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'group w-full cursor-default overflow-hidden relative card h-96 rounded-3xl shadow-xl mx-auto flex flex-col justify-end p-4 border-2 border-transparent dark:border-neutral-800',
          'transition-all duration-500'
        )}
        style={{
          backgroundImage: `url(${thumbnail})`,
          // backgroundImage: `@/public/${thumbnail}`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500 ease-in-out',
            isHovered
              ? 'bg-gradient-to-t from-black/90 to-black/90'
              : 'bg-gradient-to-b from-black/30 to-black/90'
          )}
        />
        <div
          className={cn(
            'text relative z-50 transition-opacity duration-500',
            isHovered ? 'opacity-0' : 'opacity-100'
          )}
        >
          <h1 className="font-bold text-md md:text-xl text-zinc-100 relative text-center">
            {title}
          </h1>
        </div>
        <div
          className={cn(
            'text z-50 transition-opacity duration-500 absolute inset-0 flex flex-col justify-end p-4',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          <p className="font-normal text-sm text-zinc-100 relative my-4 text-center">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 justify-center">
            {techstack.map((tc) => (
              <TechstackBadge key={tc} value={tc} />
            ))}
          </div>
          <div className="text-center mt-4">
            <OutlineButton web={web_url} />
          </div>
        </div>
      </div>
    </div>
  );
}

const TechstackBadge = ({ value }: { value: string }) => {
  return (
    <div className="px-2 py-1 border font-semibold font-mono bg-zinc-800 rounded-lg text-xs">
      {value}
    </div>
  );
};

const OutlineButton = ({ web }: { web?: string }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Link href={web ?? '#'} target="_blank">
      <button
        className="border-2 border-neutral-600 hover:border-neutral-400 rounded-full px-6 py-2 ease-in-out duration-200 hover:scale-105 hover:bg-zinc-800 active:scale-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            'flex items-center gap-2 text-xs ease-in-out duration-200',
            !isHovered ? 'text-zinc-400' : 'text-zinc-100'
          )}
        >
          Visit
          <ChevronRight
            className={cn(
              'size-4 transition-transform motion-reduce:transform-none',
              isHovered && 'animate-accordion-right'
            )}
          />
        </div>
      </button>
    </Link>
  );
};
