import React, { useContext } from "react";
import { NameContext } from "./AboutUs";
import BackButton from "./BackButton";
import '../Acd/ACD'

function ACDprofile() {
  const { name, setName, aboutIndividualRef } = useContext(NameContext);

  function handleResetClick() {
    setTimeout(() => {
      setName(null);
      aboutIndividualRef.current.classList.add("Invisible");
    },1500);
    aboutIndividualRef.current.style.left = "100%";
    document.body.style.overflow = "scroll";

  }

  const Me1 = require("../../ASET/ACD/IMG_20230429_112415.jpg");
  const Me2 = require("../../ASET/ACD/IMG_20230524_234558.jpg");
  const Me3 = require("../../ASET/ACD/IMG_20230429_112720.jpg");
  const Me4 = require("../../ASET/ACD/IMG_20230524_234615.jpg");

  return (
    <>
      <BackButton onClick={handleResetClick} />
        <div id="containerACD">
          <div id="namaACD">Amanda Citra Dewanti</div>
          <div id="nimACD">00000066344</div>
          <div id="iamgeACD">
            <img src={Me1} alt="" id="me1" />
            <img src={Me2} alt="" id="me2" />
            <img src={Me3} alt="" id="me3" />
            <img src={Me4} alt="" id="me4" />
           </div>
        </div>
    </>
  );
}

export default ACDprofile;
