import React, { useContext } from "react";
import { NameContext } from "../NAS/AboutUs";
import BackButton from "../NAS/BackButton";
import FollowRavin from "./FollowRavin";
import './Ravinprofile.css';


function ProfileRavin(){
    const { name, setName, aboutIndividualRef } = useContext(NameContext);
    const RMe1 = require("../../ASET/Individuals/Ravin1.jpg");
    const RMe2 = require("../../ASET/Individuals/Ravin2.jpg");
    const RMe3 = require("../../ASET/Individuals/Ravin3.jpg");
    const RMe4 = require("../../ASET/Individuals/RW.jpg");

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
        <img src={RMe4} alt="" id="bgProf"/>
        
        <div id="name">Robertus Ravin Woenarso</div>
        <div id="nim">00000066411</div>
        <div id="conimg">
            <div id="Ime1">
                <img src={RMe1} alt="" />
            </div>
            <div id="Ime2">
                <img src={RMe2} alt="" />
            </div>
            <div id="Ime3">
                <img src={RMe3} alt="" />
            </div> 
        </div>
        <div id="FollowON">
          <FollowRavin />
        </div>
      </div>
    </>

  );
}

export default ProfileRavin;