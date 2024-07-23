import { GithubIcon } from '@/components/icons/github';
import { LinkedinIcon } from '@/components/icons/linkedin';
import Link from 'next/link';
import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="px-10 lg:container 2xl:px-14">
      <hr />
      <div className="flex flex-col md:flex-row py-8 justify-between gap-6 md:gap-0">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-14">
          <ContactSection
            title="Phone"
            value="+6285157712278"
            href="tel:6285157712278"
          />
          <ContactSection
            title="E-Mail"
            value="yogapr.dev@gmail.com"
            href="mailto:yogapr.dev@gmail.com"
          />
        </div>
        <div className="flex items-center gap-1">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/pratamayp/"
            className="size-10 hover:scale-110 rounded-full hover:bg-slate-700/50 ease-in duration-150 p-1"
          >
            <LinkedinIcon />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/pratamayp"
            className="size-10 hover:scale-110 rounded-full hover:bg-slate-700/50 ease-in duration-150 p-2"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
      <div className="text-zinc-600 text-xs pb-4">
        Build with{' '}
        <Link href="https://nextjs.org/" className="hover:text-zinc-400">
          Next.js
        </Link>
        ,{' '}
        <Link href="https://tailwindcss.com/" className="hover:text-zinc-400">
          Tailwind
        </Link>
      </div>
    </section>
  );
};

const ContactSection = ({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col gap-1 md:gap-4">
      <div className="uppercase text-zinc-500 text-xs font-semibold">
        {title}
      </div>
      <Link
        target="_blank"
        href={href}
        className="text-zinc-200 hover:text-white hover:translate-x-1 ease duration-300"
      >
        {value}
      </Link>
    </div>
  );
};
