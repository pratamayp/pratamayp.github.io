'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export const LangSelect = () => {
  const path = usePathname();
  const router = useRouter();
  const lang = path.split('/')[2];

  const handleChange = (lang: string) => {
    router.push(`/resume/${lang}`);
  };

  return (
    <Select value={lang} onValueChange={handleChange}>
      <SelectTrigger className="w-20 bg-primary text-primary-foreground shadow hover:bg-primary/90">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent className="bg-primary text-primary-foreground">
        <SelectGroup>
          <SelectItem className="focus:bg-[#313131]" value="en">
            EN
          </SelectItem>
          <SelectItem className="focus:bg-[#313131]" value="id">
            ID
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
