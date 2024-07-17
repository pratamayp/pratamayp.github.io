import React from 'react';
import { styles } from '../styles';

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center container">
      <h1 className="text-[64px] font-semibold leading-10">Hello!</h1>
      <h1 className="text-[54px] font-semibold">I&apos;m Yoga Pratama</h1>
      <div className={`${styles.subHeadText} mt-4 max-w-screen-sm`}>
        A Front End Developer specializing in building secure and user-friendly
        web applications. Proficient in Next.js and Vue.js for seamless
        development.
      </div>
    </section>
  );
};
