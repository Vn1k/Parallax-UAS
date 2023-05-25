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

  export const scrollToTop = () => {
    const targetElement = document.querySelector("#top");
    if (targetElement) {
      targetElement.classList.add("scroll-to-top");
      setTimeout(() => {
        targetElement.classList.remove("scroll-to-top");
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);
    }
  };
