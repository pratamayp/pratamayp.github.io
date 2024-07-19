import React from 'react';
import { styles } from '../styles';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/card-bg-gradient';

interface TechCardProps {
  icon: string;
  title: string;
}

const tech: TechCardProps[] = [
  {
    icon: 'html.svg',
    title: 'HTML',
  },
  {
    icon: 'css.svg',
    title: 'CSS',
  },
  {
    icon: 'javascript.svg',
    title: 'Javascript',
  },
  {
    icon: 'typescript.svg',
    title: 'Typescript',
  },
  {
    icon: 'vuejs.svg',
    title: 'Vue.js',
  },
  {
    icon: 'react.svg',
    title: 'React',
  },
  {
    icon: 'nextjs.png',
    title: 'Next.js',
  },
  {
    icon: 'tailwind.svg',
    title: 'Tailwind',
  },
  {
    icon: 'aws.svg',
    title: 'AWS',
  },
  {
    icon: 'firebase.svg',
    title: 'Firebase',
  },
  {
    icon: 'git.svg',
    title: 'Git',
  },
  {
    icon: 'figma.svg',
    title: 'Figma',
  },
];

export const Technologies = () => {
  return (
    <section className="container flex flex-col py-10">
      <h1 className={styles.headText}>Technologies</h1>
      <div className={styles.divider} />
      <p className={styles.subHeadText}>
        These are the technologies I&apos;ve worked with
      </p>
      <div className="flex flex-wrap py-8 gap-7">
        {tech.map(({ title, icon }, index) => (
          <TechGradientCard key={index} title={title} icon={icon} />
        ))}
      </div>
    </section>
  );
};

const TechGradientCard = ({ title, icon }: TechCardProps) => {
  return (
    <BackgroundGradient className="rounded-[22px] w-32 p-4 sm:p-4 bg-white dark:bg-black/70 grayscale hover:grayscale-0 ease duration-300">
      <div className="relative size-16 w-full">
        <Image
          src={`/tech/${icon}`}
          alt={icon}
          fill
          className="object-contain"
        />
      </div>
      <p className="text-base sm:text-xs text-black mt-2 dark:text-neutral-200 text-center">
        {title}
      </p>
    </BackgroundGradient>
  );
};
