import React from 'react';
import { styles } from '../styles';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/card-bg-gradient';
import { tech, TechCardProps } from '@/constant/technologies';
import TitleAnimation from '@/components/animation/title';
import { CardAnimation } from '@/components/animation/card';

export const Technologies = () => {
  return (
    <section className="px-10 lg:container 2xl:px-14 flex flex-col py-0 md:py-16">
      <TitleAnimation>
        <h1 className={styles.headText}>Technologies</h1>
        <div className={styles.divider} />
        <p className={styles.subHeadText}>
          These are the technologies I&apos;ve worked with
        </p>
      </TitleAnimation>
      <div className="py-8 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {tech.map(({ title, icon }, idx) => (
          <CardAnimation key={idx} idx={idx}>
            <TechGradientCard title={title} icon={icon} />
          </CardAnimation>
        ))}
      </div>
    </section>
  );
};

const TechGradientCard = ({ title, icon }: TechCardProps) => {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:px-4 py-8 bg-white dark:bg-black/70 grayscale hover:grayscale-0 ease duration-300">
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
