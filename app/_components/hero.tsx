import React from 'react';
import { styles } from '../styles';

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-10 lg:container">
      <h1 className="text-2xl md:text-[48px] font-semibold leading-10">
        Hello!
      </h1>
      <h1 className="text-3xl md:text-[54px] font-semibold">I&apos;m Yoga Pratama</h1>
      <div className={`${styles.subHeadText} mt-4 max-w-screen-sm`}>
        A Front End Developer specializing in building secure and user-friendly
        web applications. Proficient in Next.js and Vue.js for seamless
        development.
      </div>
    </section>
  );
};
