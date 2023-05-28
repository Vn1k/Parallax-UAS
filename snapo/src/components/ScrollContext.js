import React, { useState, useEffect } from 'react';

export const ScrollContext = React.createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [newDegree, setNewDegree] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const degree = (90 / window.innerHeight) * position;

      setScrollPosition(position);
      setNewDegree(degree);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={ scrollPosition }>
      <div id="changing-bg" style={{background: `linear-gradient(${newDegree}deg, rgba(16,12,8,1) 70%, rgba(70,59,18,1) 100%)`}}></div>
      {children}
    </ScrollContext.Provider>
  );
};
