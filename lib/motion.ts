export const slideUp = (idx: number) => {
  return {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.2, delay: 0.4 * idx },
    },
  };
};

export const slideRight = () => {
  return {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.4 },
    },
  };
};
