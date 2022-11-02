export const getTransitionStyles = (TIMEOUT = 500) => {
  return {
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: `translateY(-50px)`,
    },
    entered: {
      transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0px)`,
    },
    exiting: {
      transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${
        TIMEOUT / 3
      }ms ease-in-out`,
      opacity: 0,
      transform: `translateY(-50px)`,
    },
  };
};
export default getTransitionStyles;
