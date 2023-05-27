import React, { useContext } from "react";
import { NameContext } from "../../NAS/AboutUs";
import BackButton from "../../NAS/BackButton";
import './Vinprofile.css';
import FollowKEN from "./FollowKEN";

function Vinprof() {
  const { name, setName, aboutIndividualRef } = useContext(NameContext);
  const KMe1 = require("../../../ASET/Individuals/KEN1.jpg");
  const KMe2 = require("../../../ASET/Individuals/KEN2.jpg");
  const KMe3 = require("../../../ASET/Individuals/KEN3.jpg");
  const KMe4 = require("../../../ASET/Individuals/KK.jpg");

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
        
        <img src={KMe4} alt="" id="bgProf"/>
        <BackButton onClick={handleResetClick} id="buttonBack"/>
        <div id="name">Kevin Ken</div>
        <div id="nim">00000067060</div>
        <div id="conimg">
            <div id="Ime1">
                <img src={KMe1} alt="" />
            </div>
            <div id="Ime2">
                <img src={KMe2} alt="" />
            </div>
            <div id="Ime3">
                <img src={KMe3} alt="" />
            </div>
        </div>
        <div id="FollowON">
          <FollowKEN />
        </div>
      </div>
    </>
  );
}

export default Vinprof;
