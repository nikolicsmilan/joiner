export const transition = { type: "spring", duration: 0.8 };
export const myAnimation =(direction)=>{
    return {
      initial: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0.5 },
      },
      animate: {
        x: direction === "left" ? 0 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 20 : direction === "down" ? -100 : 0,
        opacity: 0.85,
        transition: { ...transition, delay: 0 },
      },
      exit: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        transition: { ...transition, delay: 0 },
        opacity: 0,
      },
    };
  }

  