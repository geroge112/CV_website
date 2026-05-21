export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.18, ease: "easeOut" },
};

export const staggerList = {
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const cardReveal = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};
