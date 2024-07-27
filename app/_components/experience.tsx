import React from 'react';
import { styles } from '../styles';
import { CardHoverEffect } from '@/components/ui/card-hover-effect';
import { experiences } from '@/constant/experiences';
import TitleAnimation from '@/components/animation/title';

export const Experience = () => {
  return (
    <section className="px-10 lg:container 2xl:px-14 flex flex-col py-0 md:py-16">
      <TitleAnimation>
        <h1 className={styles.headText}>Work Experience</h1>
        <div className={styles.divider} />
        <p className={styles.subHeadText}>
          A glimpse into my professional journey
        </p>
      </TitleAnimation>

      <div>
        <CardHoverEffect items={experiences} isFull />
      </div>
    </section>
  );
};
