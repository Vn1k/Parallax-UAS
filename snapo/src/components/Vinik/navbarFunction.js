export const handleScroll = (
  setIsNavbarVisible,
  setPrevScrollPos,
  prevScrollPos
) => () => {
  const currentScrollPos = window.pageYOffset;
  const isScrolledUp = prevScrollPos > currentScrollPos || currentScrollPos === 0;

  setIsNavbarVisible(isScrolledUp);
  setPrevScrollPos(currentScrollPos);
};
