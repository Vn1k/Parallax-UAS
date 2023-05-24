import React, { useState, useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es";

function Individual(parameter) {
  const [name, setName] = useState("");
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const fadeOutTimeoutRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 });

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

  function handleMouseDown(event) {
    setInitialMousePosition({ x: event.clientX, y: event.clientY });
  }

  function handleClick(event) {
    const currentMousePosition = { x: event.clientX, y: event.clientY };
    const movementThreshold = 5; // Adjust this value to set the movement threshold

    if (
      Math.abs(currentMousePosition.x - initialMousePosition.x) <= movementThreshold &&
      Math.abs(currentMousePosition.y - initialMousePosition.y) <= movementThreshold
    ) {
      setScrollEnabled(false);
      // Pass the individual_name to the parent component
      parameter.onImageClick(parameter.individual_name);
      document.body.style.overflow = "hidden";
    }
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
        onMouseDown={handleMouseDown}
        onMouseUp={handleClick}
        draggable="false"
      />
      <h1 id={visible ? "fade-in" : "fade-out"}>{name}</h1>
    </div>
  );
}

export default Individual;