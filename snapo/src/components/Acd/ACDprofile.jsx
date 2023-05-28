import React, { useContext } from "react";
import { NameContext } from "../NAS/AboutUs";
import BackButton from "../NAS/BackButton";
import './ACDprof.css';
import FollowACD from "./FollowACD";

function ACDprofile ()
{
    const { name, setName, aboutIndividualRef } = useContext(NameContext);
    const Me1 = require("../../ASET/ACD/fd.jpg");
    const Me2 = require("../../ASET/ACD/red.jpg");
    const Me3 = require("../../ASET/ACD/fs.jpg");
    const Me4 = require("../../ASET/Individuals/ACD.jpg");

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
        
        <img src={Me4} alt="" id="bgProf"/>
        <BackButton onClick={handleResetClick} id="buttonBack"/>
        <div id="name">Amanda Citra Dewanti</div>
        <div id="nim">00000066344</div>
        <div id="conimg">
            <div id="Ime1">
                <img src={Me1} alt="" />
            </div>
            <div id="Ime2">
                <img src={Me2} alt="" />
            </div>
            <div id="Ime3">
                <img src={Me3} alt="" />
            </div>
        </div>
        <div id="FollowON">
          <FollowACD />
        </div>
      </div>
    </>

  );
}

export default ACDprofile;
