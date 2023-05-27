import React, { useContext } from "react";
import { NameContext } from "./AboutUs";
import BackButton from "./BackButton";
import './NASprofile.css'
import FollowNAS from "./FollowNAS";

function NASprofile() {
  const { name, setName, aboutIndividualRef } = useContext(NameContext);
  const NMe1 = require("../../ASET/Individuals/1NAS.jpg");
  const NMe2 = require("../../ASET/Individuals/2NAS.jpg");
  const NMe3 = require("../../ASET/Individuals/3NAS.jpg");
  const NMe4 = require("../../ASET/Individuals/NAS.jpg");

  function handleResetClick() {
    setTimeout(() => {
      setName(null);
      aboutIndividualRef.current.classList.add("Invisible");
    },1500);
    aboutIndividualRef.current.style.left = "100%";
    document.body.style.overflow = "scroll";

  }

  return (
    <>
      <div id="containerProf">
        
        <img src={NMe4} alt="" id="bgProf"/>
        <BackButton onClick={handleResetClick} id="buttonBack"/>
        <div id="name">Nathan Angelo Stenlie</div>
        <div id="nim">00000066793</div>
        <div id="conimg">
            <div id="Ime1">
                <img src={NMe1} alt="" />
            </div>
            <div id="Ime2">
                <img src={NMe2} alt="" />
            </div>
            <div id="Ime3">
                <img src={NMe3} alt="" />
            </div>
        </div>
        <div id="FollowON">
          <FollowNAS />
        </div>
      </div>
    </>
  );
}

export default NASprofile;
