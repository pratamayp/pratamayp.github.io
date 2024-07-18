import { GithubIcon } from '@/components/icons/github';
import { LinkedinIcon } from '@/components/icons/linkedin';
import Link from 'next/link';
import React from 'react';

export const Contact = () => {
  return (
    <section className="container">
      <hr />
      <div className="flex py-8 justify-between">
        <div className="flex gap-14">
          <ContactSection
            title="Phone"
            value="+6285157712278"
            href="https://wa.me/6285157712278"
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
    <div className="flex flex-col gap-4">
      <div className="uppercase text-zinc-500 text-xs font-semibold">
        {title}
      </div>
      <Link
        target="_blank"
        href={href}
        className="text-zinc-200 hover:text-white"
      >
        {value}
      </Link>
    </div>
  );
};
