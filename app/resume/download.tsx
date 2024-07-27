'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DownloadFile = ({ downloadPath }: { downloadPath: string }) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleDownload = () => {
    if (loading) return;

    setLoading(true);
    const link = document.createElement('a');
    link.href = downloadPath;
    link.click();
    setTimeout(() => {
      setLoading(false);
    }, 2250);
  };

  return (
    <Button
      variant="default"
      disabled={loading}
      onClick={handleDownload}
      className={cn('w-24')}
    >
      {loading ? <LoaderCircle className="animate-spin mr-1" /> : 'Download'}
    </Button>
  );
};

export default DownloadFile;
