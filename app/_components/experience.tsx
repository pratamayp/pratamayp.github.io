import React from 'react';
import { styles } from '../styles';
import { CardHoverEffect } from '@/components/ui/card-hover-effect';

export const Experience = () => {
  return (
    <section className="container flex flex-col py-10">
      <h1 className={styles.headText}>Work Experience</h1>
      <div className={styles.divider} />
      <p className={styles.subHeadText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="">
        <CardHoverEffect items={experiences} isFull />
      </div>
    </section>
  );
};

const experiences = [
  {
    title: 'WORK POSITION',
    subtitle: 'PT Lorem Ipsum',
    date: 'Aug 2001 - Present',
    place: 'Yogyakarta',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com',
  },
  {
    title: 'WORK POSITION',
    subtitle: 'PT Lorem Ipsum',
    date: 'Aug 2001 - Present',
    place: 'Yogyakarta',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com',
  },
];
