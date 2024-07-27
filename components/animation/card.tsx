'use client';

import { slideUp } from '@/lib/motion';
import { motion } from 'framer-motion';

export const CardAnimation = ({
  children,
  idx,
}: {
  children: React.ReactNode;
  idx: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    variants={slideUp(idx)}
  >
    {children}
  </motion.div>
);
