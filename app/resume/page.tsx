import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Resume | Yoga Pratama',
  description: "Yoga Pratama's resume",
};

const Resume = () => {
  return (
    <div className="flex justify-center h-screen">
      <iframe
        src="https://drive.google.com/file/d/11AhZqH8jzvB-LgJEdiZ3Up6KRMsrdkJG/preview"
        className="w-full"
        style={{ border: 0 }}
      />
    </div>
  );
};

export default Resume;
