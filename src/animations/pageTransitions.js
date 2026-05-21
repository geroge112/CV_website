export const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.22, ease: "easeOut" },
};

export const staggerList = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const cardReveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};
