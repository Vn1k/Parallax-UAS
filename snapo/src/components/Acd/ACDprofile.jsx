import React, { useContext } from "react";
import { NameContext } from "../NAS/AboutUs";
import BackButton from "../NAS/BackButton";
import './ACDprof.css';

function ACDprofile ()
{
    const { name, setName, aboutIndividualRef } = useContext(NameContext);
    const Me1 = require("../../ASET/ACD/IMG-20230414-WA0019.jpg");
    const Me2 = require("../../ASET/ACD/IMG_20230524_234558.jpg");
    const Me3 = require("../../ASET/ACD/IMG_20230429_112720.jpg");

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
      <BackButton onClick={handleResetClick} />
      <div id="containerProf">
        <div id="name">Amanda Citraa Dewanti</div>
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
      </div>
    </>

  );
}

export default ACDprofile;
