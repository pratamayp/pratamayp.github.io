import React from 'react';
import { styles } from '../styles';

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-10 lg:container">
      <h1 className="text-xl md:text-[36px] font-semibold md:mb-6">
        Hello!
      </h1>
      <h1 className="text-3xl md:text-[54px] font-semibold leading-10">I&apos;m Yoga Pratama</h1>
      <div className={`${styles.subHeadText} mt-4 max-w-screen-sm`}>
        A Front End Developer specializing in building secure and user-friendly
        web applications. Proficient in Next.js and Vue.js for seamless
        development.
      </div>
    </section>
  );
};
