import React, { useState, useEffect } from 'react';

export const ScrollContext = React.createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      console.log(position)
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollPosition}>
      {children}
    </ScrollContext.Provider>
  );
};
