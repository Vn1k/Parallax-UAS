import React from "react";
import anime from "animejs/lib/anime.es";

function Individual(parameter) {
  function handleHover(event) {
    const image = event.target;
    anime({
        targets: image,
        scale: 1.1,
        duration: 500,
        easing: "easeOutSine",
    });
  }

  function handleHoverOut(event) {
    const image = event.target;
    anime({
        targets: image,
        scale: 1,
        duration: 500,
        easing: 'easeOutSine',
    });
  }  

  return (
    <img
      id={parameter.key}
      src={parameter.img_path}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      draggable="false"
    />
  );
}

export default Individual;
