import BackgroundAnimation from '@/components/ui/background-animation';
import { BoxesCore } from '@/components/ui/background-boxes';
import React from 'react';

export default function GridBackgroundDemo() {
  return (
    // <div className="h-screen w-full dark:bg-slate-900 bg-white dark:bg-grid-white/[0.15] bg-grid-black/[0.2] relative flex items-center justify-center">
    //   {/* Radial gradient for the container to give a faded look */}
    //   <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    //   <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    //     Backgrounds
    //   </p>
    // </div>
    // <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
    //   <BoxesCore />
    //   <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    //   <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    //     Backgrounds
    //   </p>
    // </div>
    <section>
      <div className="h-screen w-full dark:bg-slate-900 bg-white dark:bg-grid-white/[0.15] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Mamank Resing
        </p>
      </div>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        laudantium neque earum impedit? Maxime, placeat repellat atque quisquam
        nemo pariatur aspernatur consequuntur quae enim qui dolorum libero
        doloremque, voluptas voluptatum odit labore! Obcaecati dolore cumque
        explicabo asperiores sequi? Ratione perferendis quos neque. Voluptas
        vitae ratione sit sint tempore voluptatum esse?
      </div>
    </section>
  );
}
