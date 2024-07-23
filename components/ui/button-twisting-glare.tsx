'use client';

import React from 'react';
import { HoverBorderGradient } from '@/components/ui/button-hover-gradient';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export const TwistingGlareButton = ({
  value,
  sendIcon,
}: {
  value: string;
  sendIcon?: boolean;
}) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <div
      className="mt-4 w-fit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <HoverBorderGradient
        containerClassName="rounded-2xl"
        as="button"
        className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2 px-4 ,md:px-6 py2 md:py-4"
      >
        <span>{value}</span>
        {sendIcon && (
          <Send
            className={cn('size-5 ease duration-500', hovered && 'rotate-45')}
          />
        )}
      </HoverBorderGradient>
    </div>
  );
};
