import React, { useEffect, useRef, useState } from "react";
import leftrightanimation from "./leftrightanimation";
import Individuals from "./Individuals";
import NASprofile from "./NASprofile";
import Vin from "../Vinik/Aboutvin/Vinprof";
import ACDProfile from "../Acd/ACDprofile";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rprofile from "../Ravin/Rprofile";
import anime from "animejs";

export const NameContext = React.createContext();

function AboutUs() {
  const aboutIndividualRef = useRef(null);
  const [name, setName] = useState(null);
  const GMBRUS = require("../../ASET/Images/cover AbtUs.jpg");

  useEffect(() => {
    leftrightanimation();
  }, []);

  function handleImageClick(clickedName) {
    setName(clickedName);
    console.log(clickedName);
    aboutIndividualRef.current.classList.remove("Invisible");
    setTimeout(() => {
        aboutIndividualRef.current.style.left = "0%";
    }, 100);
  }

  const [cursorPosition, setCursorPosition] = useState({x:0, y:0});
  useEffect(() => {
    anime({
      targets: "#bg-image-about-us img",
      translateX: -cursorPosition.x,
      translateY: -cursorPosition.y,
      duration: 1000,
      easing: 'easeOutQuad',
    });
  }, [cursorPosition]);
  

  return (
    <NameContext.Provider value={{ name, setName, aboutIndividualRef }}>
      <div onMouseMove={(event)=>{
          let movement_x = event.clientX * 0.05;
          let movement_y = event.clientY * 0.05;
          setCursorPosition({x: movement_x, y: movement_y})
        }} data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-anchor-placement="top-center" id="about-us">
        <div id="bg-image-about-us">
          <img class="selectDisable" draggable="false" style={{position: "absolute", top: -cursorPosition.y, left: -cursorPosition.x}} src={GMBRUS}/>
        </div>
        <Individuals onImageClick={handleImageClick} />
      </div>
      <div id="about-individual" className="Invisible" ref={aboutIndividualRef}>
        {name === "Amanda Citra Dewanti" && <ACDProfile/>}
        {name === "Calista Belva" && <p>cb</p>}
        {name === "Kevin Ken" && <Vin/>}
        {name === "Nathan Angelo Stenlie" && <NASprofile />}
        {name === "Robertus Ravin Woenarso" && <Rprofile/>}
      </div>
    </NameContext.Provider>
  );
}

AOS.init();

export default AboutUs;
