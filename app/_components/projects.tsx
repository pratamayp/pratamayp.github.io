import React from 'react';
import { styles } from '../styles';
import { CardOverlay } from '@/components/ui/card-overlay';

export interface Project {
  title: string;
  description: string;
  thumbnail: any;
  techstack: string[];
  web_url?: string;
  github_url?: string;
}

const projects: Project[] = [
  {
    title: 'Gudangternak',
    description:
      'Web application designed to facilitate the management of livestock that will be used for qurbani. This application provides features to monitor and manage all aspects related to livestock, transaction, distribution, and reporting.',
    thumbnail: 'gudangternak.jpg',
    techstack: [
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Chakra UI',
      'Google Maps API',
    ],
    web_url: 'https://gudangternak.dropadi.com/',
  },
  {
    title: 'Lexi Super App',
    description:
      'Web application aims to meet the needs of the Faculty of Law, Universitas Islam Indonesia. There are various features to manage the idea exchange, governance, activities, and data inventory.',
    thumbnail: 'lexi-uii.jpg',
    techstack: ['Next.js', 'TypeScript', 'GraphQL', 'Firebase', 'Chakra UI'],
    web_url: 'https://lexi-portal.oemahsolution.com/',
  },
  {
    title: 'Telkominfra Dashboard',
    description:
      'Web application designed to monitor Key Performance Indicators (KPIs) of BTS/Sites. The app provides various features that allow users to manage sites, analyze KPI charts, manage tickets, manage alarms, etc.',
    thumbnail: 'telkominfra.jpg',
    techstack: [
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Chakra UI',
      'Socket.io',
      'AWS S3',
      'Google Maps API',
    ],
    web_url: 'https://web-telkominfra-uso.oemahsolution.com/',
  },
  {
    title: 'Scoolaa.id',
    description:
      'Scoolaa.id is a web-based and mobile application that can help manage educational facilities. Services offered include attendance features, payment of tuition fees, pocket money, health reports, grade reports, class schedules, lists of teachers and employees, donations and many other service features.',
    thumbnail: 'scoolaa.jpg',
    techstack: ['Vue.js', 'GraphQL', 'Bootstrap', 'FCM', 'Socket.io', 'i18n'],
    web_url: 'https://dashboard.scoolaa.id/',
  },
  {
    title: 'UPL Tracko',
    description:
      'Web application developed for PT UPL Indonesia allows for the tracking of sales activities, offering comprehensive insight into sales performance. This platform provides a user-friendly interface, facilitating efficient monitoring and analysis of sales data.',
    thumbnail: 'upl.jpg',
    techstack: ['Vue.js', 'GraphQL', 'Bootstrap', 'i18n'],
    web_url: 'https://upl-treko.com/',
  },
];

export const Projects = () => {
  return (
    <section className="px-10 lg:container flex flex-col py-0 md:py-16">
      <h1 className={styles.headText}>Projects</h1>
      <div className={styles.divider} />
      <p className={styles.subHeadText}>Check out some of my work here</p>

      <div className="py-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <CardOverlay key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};
