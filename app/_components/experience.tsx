import React from 'react';
import { styles } from '../styles';
import { CardHoverEffect } from '@/components/ui/card-hover-effect';

export const Experience = () => {
  return (
    <section className="px-10 lg:container 2xl:px-14 flex flex-col py-0 md:py-16">
      <h1 className={styles.headText}>Work Experience</h1>
      <div className={styles.divider} />
      <p className={styles.subHeadText}>
        A glimpse into my professional journey
      </p>

      <div className="">
        <CardHoverEffect items={experiences} isFull />
      </div>
    </section>
  );
};

const experiences = [
  {
    title: 'Front-End Developer',
    subtitle: 'PT Oemah Solution Indonesia',
    date: 'Aug 2022 - Present',
    place: 'Yogyakarta',
    description:
      'I joined the company after completing a previous internship. I started developing several applications using Vue.js. Later, my lead challenged me to try Next.js, and since then, I have been using it to develop various applications. I developed various applications using technologies such as Next.js, TypeScript, GraphQL, and Firebase, along with different UI libraries.',
    link: 'https://stripe.com',
  },
  {
    title: 'Front-End Developer Intern',
    subtitle: 'PT Oemah Solution Indonesia',
    date: 'Sep 2020 - Mar 2022',
    place: 'Yogyakarta',
    description:
      'I started as an intern from university. I was appointed as the leader of the Front-end team for application development. We began learning the Vue.js framework and started developing a retail web apps. We gained a lot of knowledge about the stages of apps development and creating an user-friendly and manageable apps, as well as teamwork to ensure the timely completion of project',
    link: 'https://stripe.com',
  },
];
