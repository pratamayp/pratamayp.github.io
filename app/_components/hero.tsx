'use client';

import React from 'react';
import { styles } from '../styles';
import { TwistingGlareButton } from '@/components/ui/button-twisting-glare';
import { motion } from 'framer-motion';

import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="h-screen flex px-10 lg:container 2xl:px-14 relative">
      <motion.div
        className="flex flex-col justify-center h-full"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.6 }}
      >
        <h1 className="text-xl md:text-[36px] font-semibold md:mb-6 text-zinc-300">
          Hello!
        </h1>
        <h1 className="text-3xl md:text-[54px] font-semibold leading-10">
          I&apos;m{' '}
          <span className="bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
            Yoga Pratama
          </span>
        </h1>
        <div className={`${styles.subHeadText} mt-4 max-w-screen-sm z-10`}>
          A Front End Developer specializing in building secure and
          user-friendly web applications. Proficient in Next.js and Vue.js for
          seamless development.
        </div>
        <div className="flex gap-2">
          <Link href="#contact">
            <TwistingGlareButton value="Get in Touch" sendIcon />
          </Link>
          <Link href="/resume/en" target="_blank">
            <TwistingGlareButton value="Resume" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
