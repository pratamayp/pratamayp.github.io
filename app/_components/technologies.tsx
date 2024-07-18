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
    icon: 'html.png',
    title: 'HTML',
  },
  {
    icon: 'html.png',
    title: 'HTML',
  },
  {
    icon: 'html.png',
    title: 'HTML',
  },
  {
    icon: 'html.png',
    title: 'HTML',
  },
  {
    icon: 'html.png',
    title: 'HTML',
  },
  {
    icon: 'html.png',
    title: 'HTML',
  },
  {
    icon: 'html.png',
    title: 'HTML',
  },
];

export const Technologies = () => {
  return (
    <section className="container flex flex-col py-10">
      <h1 className={styles.headText}>Technologies</h1>
      <div className={styles.divider} />
      <p className={styles.subHeadText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex flex-wrap py-8 gap-7">
        {tech.map(({ title, icon }, index) => (
          <TechGradientCard key={index} />
          // <TechCard key={title} icon={icon} title={title} />
        ))}
      </div>
    </section>
  );
};

const TechCard = ({ icon, title }: TechCardProps) => {
  return (
    <div className="flex flex-col border shadow-white shadow-md rounded-lg p-6 px-8 gap-4 hover:scale-[102%] ease-out">
      <div className="relative size-16">
        <Image src={`/${icon}`} alt="html" fill className="object-cover" />
      </div>
      <p className="text-center text-sm">{title}</p>
    </div>
  );
};

const TechGradientCard = () => {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Image
        src={`/html.png`}
        alt="jordans"
        height="100"
        width="100"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
        Shoes
      </p>
    </BackgroundGradient>
  );
};
