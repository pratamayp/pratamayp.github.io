import React from 'react';

import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { LangSelect } from '../lang-dropdown';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Link from 'next/link';
import DownloadFile from '../download';

export const metadata: Metadata = {
  title: 'Resume | Yoga Pratama',
  description: "Yoga Pratama's resume",
};

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }];
}

interface ResumeParams extends Params {
  lang: string;
}

const Resume = ({ params }: { params: ResumeParams }) => {
  const { lang } = params;

  const docId =
    lang === 'en'
      ? '1t6Qm-IsxHRMICpqchzPZpsUa1xnMTtLJ'
      : '1ilo7eM_oXSHHLem6qBLbZpUWPQqXgPT2';

  const viewPath = `https://drive.google.com/file/d/${docId}/preview`;

  const downloadPath = `https://drive.google.com/uc?export=download&id=${docId}`;

  return (
    <div className="flex flex-col">
      <div className="bg-[#313131] flex justify-end p-2 gap-2">
        <LangSelect />
        <DownloadFile downloadPath={downloadPath} />
      </div>
      <iframe
        src={viewPath}
        className="w-full h-screen"
        style={{ border: 0 }}
      />
    </div>
  );
};

export default Resume;
