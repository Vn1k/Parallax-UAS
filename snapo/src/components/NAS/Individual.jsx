import React, { useState, useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es";

function Individual(parameter) {
  const [name, setName] = useState("");
  const fadeOutTimeoutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  function handleHover(event) {
    setName(parameter.individual_name);
    clearTimeout(fadeOutTimeoutRef.current);
    const image = event.target;
    anime({
      targets: image,
      scale: 1.2,
      duration: 500,
      easing: "easeOutSine",
    });
    setVisible(true);
  }

  function handleHoverOut(event) {
    const image = event.target;
    anime({
      targets: image,
      scale: 1,
      duration: 500,
      easing: "easeOutSine",
    });

    fadeOutTimeoutRef.current = setTimeout(() => {
      setName("");
    }, 500);
    setVisible(false);
  }

  useEffect(() => {
    return () => {
      clearTimeout(fadeOutTimeoutRef.current);
    };
  }, []);

  return (
    <div id="image-container">
      <img
        src={parameter.img_path}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        draggable="false"
      />
      <h1 id={visible ? "fade-in" : "fade-out"}>{name}</h1>
    </div>
  );
}

export default Individual;
