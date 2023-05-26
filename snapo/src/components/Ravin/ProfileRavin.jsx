import React, { useContext } from "react";
import { NameContext } from "../NAS/AboutUs";
import BackButton from "../NAS/BackButton";
import FollowRavin from "./FollowRavin";
import './followRavin.css';


function ProfileRavin(){
    const { name, setName, aboutIndividualRef } = useContext(NameContext);
    const Me1 = require("../../ASET/Ravin/Ravin1.jpg");
    // const Me2 = require("");
    // const Me3 = require("");
    // const Me4 = require("");

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
        <BackButton onClick={handleResetClick} id="buttonBack"/>
        {/* <img src={Me4} alt="" id="bgProf"/> */}
        
        <div id="name">Robertus Ravin Woenarso</div>
        <div id="nim">00000066411</div>
        <div id="conimg">
            <div id="Ime1">
                <img src={Me1} alt="" />
            </div>
            {/* <div id="Ime2">
                <img src={Me2} alt="" />
            </div>
            <div id="Ime3">
                <img src={Me3} alt="" />
            </div> */}
        </div>
        <div id="FollowON">
          <FollowRavin />
        </div>
      </div>
    </>

  );
}

export default ProfileRavin;