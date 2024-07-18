'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function CardOverlay({}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-xs w-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'group w-full cursor-pointer overflow-hidden relative card h-96 rounded-3xl shadow-xl mx-auto flex flex-col justify-end p-4 border-[3px] border-transparent dark:border-neutral-800',
          'bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover',
          'transition-all duration-500'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-black transition-opacity duration-500',
            isHovered ? 'opacity-65' : 'opacity-0'
          )}
        ></div>
        {/* <div
          className={cn(
            'text relative z-50 transition-opacity duration-500',
            isHovered ? 'opacity-0' : 'opacity-100'
          )}
        >
          <h1 className="font-bold text-md md:text-xl text-gray-50 relative text-center">
            Nama Aplikasi
          </h1>
        </div> */}
        <div
          className={cn(
            'text z-50 transition-opacity duration-500 absolute inset-0 flex flex-col justify-end p-4',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          <p className="font-normal text-base text-gray-50 relative my-4 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quo, laboriosam commodi fuga eum quidem accusamus delectus exercitationem? Delectus sed, corrupti recusandae rem saepe illum consequatur eveniet vel beatae nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
