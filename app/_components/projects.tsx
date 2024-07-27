import React from 'react';
import { styles } from '../styles';
import { CardOverlay } from '@/components/ui/card-overlay';
import { projects } from '@/constant/projects';
import { CardAnimation } from '@/components/animation/card';
import TitleAnimation from '@/components/animation/title';

export const Projects = () => {
  return (
    <section className="px-10 lg:container 2xl:px-14 flex flex-col py-0 md:py-16">
      <TitleAnimation>
        <h1 className={styles.headText}>Projects</h1>
        <div className={styles.divider} />
        <p className={styles.subHeadText}>Check out some of my work here</p>
      </TitleAnimation>

      <div className="py-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <CardAnimation key={idx} idx={idx}>
            <CardOverlay project={project} />
          </CardAnimation>
        ))}
      </div>
    </section>
  );
};
