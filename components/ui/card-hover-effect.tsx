'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { CardAnimation } from '../animation/card';

interface DefaultProps {
  className?: string;
  children: React.ReactNode;
}

interface ItemProps {
  title: string;
  subtitle: string;
  date: string;
  place: string;
  description: string;
  link?: string;
}

export const CardHoverEffect = ({
  items,
  className,
  isFull,
}: {
  items: ItemProps[];
  className?: string;
  isFull?: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 py-4',
        !isFull && 'md:grid-cols-2  lg:grid-cols-3',
        className
      )}
    >
      {items.map((item, idx) => (
        <CardAnimation key={idx} idx={idx}>
          <div
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardSubtitle>{`${item.subtitle}, ${item.place}`}</CardSubtitle>
              <CardSubtitle>{item.date}</CardSubtitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        </CardAnimation>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: DefaultProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden bg-black/60 border-2 border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }: DefaultProps) => {
  return (
    <h4
      className={cn(
        'text-zinc-100 font-semibold text-xl tracking-wide',
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardSubtitle = ({ className, children }: DefaultProps) => {
  return <h5 className={cn('text-zinc-500 text-sm', className)}>{children}</h5>;
};

export const CardDescription = ({ className, children }: DefaultProps) => {
  return (
    <p
      className={cn(
        'mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};
