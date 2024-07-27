'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BackgroundGradient } from './card-bg-gradient';
import { ChevronRight } from 'lucide-react';
import { Project } from '@/constant/projects';

export function CardOverlay({
  project: { title, description, techstack, thumbnail, web_url },
}: {
  project: Project;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group w-full cursor-default overflow-hidden relative card h-96 rounded-3xl shadow-xl mx-auto flex flex-col justify-end p-4 border-2 border-transparent dark:border-neutral-800',
        'transition-all duration-500'
      )}
      style={{
        backgroundImage: `url(/project/${thumbnail})`,
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
        <Link
          target="_blank"
          href={web_url ?? '#'}
          className="text-center pt-4 flex justify-center"
        >
          <VisitButton />
        </Link>
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

const VisitButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <BackgroundGradient className="rounded-[22px] p-2 sm:px-4 bg-white dark:bg-black/70 grayscale hover:grayscale-0 ease duration-300">
          <div
            className={cn(
              'flex items-center gap-2 text-xs transition-colors duration-300 ease-in-out font-semibold group-hover:text-zinc-100 text-zinc-300'
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
        </BackgroundGradient>
      ) : (
        <div
          className={cn(
            'flex p-[10px] items-center gap-2 text-xs transition-colors duration-300 ease-in-out font-semibold group-hover:text-zinc-100 text-zinc-300'
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
      )}
    </div>
  );
};
