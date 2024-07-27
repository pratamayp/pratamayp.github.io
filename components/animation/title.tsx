'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideRight } from '@/lib/motion';

const TitleAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={slideRight()}
    >
      {children}
    </motion.div>
  );
};

export default TitleAnimation;
