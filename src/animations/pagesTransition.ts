/*
initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
*/

export const pageTransitionIn = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
  transition: {
    type: "spring",
    mass: 0.35,
    stiffness: 75,
    duration: 0.3,
  },
};

export const pageTransitionOut = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
  transition: {
    type: "spring",
    mass: 0.35,
    stiffness: 75,
    duration: 0.3,
  },
};
