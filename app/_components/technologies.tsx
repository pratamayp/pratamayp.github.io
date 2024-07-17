import React from 'react';
import { styles } from '../styles';
import Image from 'next/image';
import { CardBackgroundGradient } from '@/components/ui/card-bg-gradient';

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
          <CardBackgroundGradient key={index} />
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
