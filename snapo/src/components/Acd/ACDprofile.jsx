import React, { useContext } from "react";
import { NameContext } from "./AboutUs";
import BackButton from "./BackButton";

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
        <div id="name">Amanda Citra Dewanti</div>
        <div id="nim">00000066344</div>
        <div id="conimg">
            
        </div>
      </div>
    </>

  );
}
