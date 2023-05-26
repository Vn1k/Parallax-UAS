import React, { useEffect, useRef, useState } from "react";
import leftrightanimation from "./leftrightanimation";
import Individuals from "./Individuals";
import NASprofile from "./NASprofile";
import Vin from "../Vinik/Aboutvin/Vinprof";
import ACDProfile from "../Acd/ACDprofile";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileRavin from "../Ravin/ProfileRavin";

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

  return (
    <NameContext.Provider value={{ name, setName, aboutIndividualRef }}>
      <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-anchor-placement="top-center" id="about-us">
        <img id="bg-image-about-us" src={GMBRUS}/>
        <Individuals onImageClick={handleImageClick} />
      </div>
      <div id="about-individual" className="Invisible" ref={aboutIndividualRef}>
        {name === "Amanda Citra Dewanti" && <ACDProfile/>}
        {name === "Calista Belva" && <p>cb</p>}
        {name === "Kevin Ken" && <Vin/>}
        {name === "Nathan Angelo Stenlie" && <NASprofile />}
        {name === "Robertus Ravin Woenarso" && <ProfileRavin />}
      </div>
    </NameContext.Provider>
  );
}

AOS.init();

export default AboutUs;
