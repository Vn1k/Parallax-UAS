export const handleScroll = (
    setIsNavbarVisible,
    setPrevScrollPos,
    prevScrollPos
  ) => () => {
    const currentScrollPos = window.pageYOffset;
    setIsNavbarVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };
  
  export const toggleDropdown = (windowWidth, setShowDropdown, showDropdown) => () => {
    if (windowWidth <= 768) {
      setShowDropdown(!showDropdown);
    }
  };
  
  export const closeDropdown = (setShowDropdown) => () => {
    setShowDropdown(false);
  };
  
  export const handleLogoHover = (windowWidth, setIsLogoHovered) => () => {
    if (windowWidth <= 768) {
      setIsLogoHovered(true);
    }
  };
  
  export const handleLogoLeave = (setIsLogoHovered) => () => {
    setIsLogoHovered(false);
  };
  