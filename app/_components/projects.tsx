import React from 'react';
import { styles } from '../styles';
import { CardOverlay } from '@/components/ui/card-overlay';

export const Projects = () => {
  return (
    <section className="container flex flex-col py-10">
      <h1 className={styles.headText}>Projects</h1>
      <div className={styles.divider} />
      <p className={styles.subHeadText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className='py-8 flex gap-7'>
        <CardOverlay />
        <CardOverlay />
      </div>
    </section>
  );
};
