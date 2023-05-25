import React, { useEffect, useRef, useState } from "react";
import leftrightanimation from "./leftrightanimation";
import Individuals from "./Individuals";
import NASprofile from "./NASprofile";
import Vin from "../Vinik/Aboutvin/Vinprof";
import ACDProfile from "../Acd/ACDprofile";

export const NameContext = React.createContext();

function AboutUs() {
  const aboutIndividualRef = useRef(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    leftrightanimation();
  }, []);

  function handleImageClick(clickedName) {
    setName(clickedName);
    aboutIndividualRef.current.classList.remove("Invisible");
    setTimeout(() => {
        aboutIndividualRef.current.style.left = "0%";
    }, 100);
  }

  return (
    <NameContext.Provider value={{ name, setName, aboutIndividualRef }}>
      <div id="about-us">
        <Individuals onImageClick={handleImageClick} />
      </div>
      <div id="about-individual" className="Invisible" ref={aboutIndividualRef}>
        {name === "Amanda Citra Dewanti" && <ACDProfile/>}
        {name === "Calista Belva" && <p>cb</p>}
        {name === "Kevin Ken" && <Vin/>}
        {name === "Nathan Angelo Stenlie" && <NASprofile />}
        {name === "Robertus Ravin Woenarso" && <p>rrw</p>}
      </div>
    </NameContext.Provider>
  );
}

export default AboutUs;
