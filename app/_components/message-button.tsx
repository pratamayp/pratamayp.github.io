'use client';

import React from 'react';
import { HoverBorderGradient } from '@/components/ui/button-hover-gradient';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const MessageButton = () => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <Link
      href="#contact"
      className="mt-4 w-fit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <HoverBorderGradient
        containerClassName="rounded-2xl"
        as="button"
        className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-4"
      >
        <span>Get in Touch</span>
        <Send
          className={cn('size-5 ease duration-500', hovered && 'rotate-45')}
        />
      </HoverBorderGradient>
    </Link>
  );
};
