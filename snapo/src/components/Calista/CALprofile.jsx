import React, { useContext, useState } from "react";
import { NameContext } from "../NAS/AboutUs";
import BackButton from "../NAS/BackButton";
import './Calprofile.css';
import FollowCAL from "./FollowCAL";


function CALprofile ()
{
  const [lokasiUMN, setLokasiUMN] = useState(null);
    const { name, setName, aboutIndividualRef } = useContext(NameContext);
    const CMe1 = require("../../ASET/Individuals/ppcalmacan.jpg");
    const CMe2 = require("../../ASET/Individuals/ppcalmacan2.jpg");
    const CMe3 = require("../../ASET/Individuals/ppcalsarinah2.jpg");
    const CMe4 = require("../../ASET/Individuals/CB.jpg");

  function handleResetClick() {
    setTimeout(() => {
      setName(null);
      aboutIndividualRef.current.classList.add("Invisible");
    },1500);
    aboutIndividualRef.current.style.left = "100%";
    document.body.style.overflow = "scroll";

  }

  const InfoLokasiUMN = async () => {
    try {
      const response = await fetch(
        'https://api.goapi.id/v1/places?search=Universitas+Multimedia+Nusantara&api_key=EWQM9E7G3f8p8frUlOR1hUB5qXr2Ei'
      );
      const jsonData = await response.json();
      if(lokasiUMN){
        setLokasiUMN(null);
      } else {
        setLokasiUMN(jsonData.data.results);
        console.log(jsonData.data.results);

      }
    } catch (error) {
      alert("API Error");
      console.log('An error occurred:', error);
    }
  };

  return (
    <>
      <div id="containerProf">
        
        <img src={CMe4} alt="" id="bgProf"/>
        <BackButton onClick={handleResetClick} id="buttonBack"/>
        <div onClick={InfoLokasiUMN} id="InfoLokasiUMN" class="name">Calista Belva
        {lokasiUMN ? (
          <div id="APIUMN">
            {lokasiUMN.map((item) => (
              <div key={item.id}>{item.displayName}</div>
              ))}
              </div>
              ) : (
                <div></div>
                )}
        </div>        
        <div id="nim">00000067339</div>
        <div id="conimg">
            <div id="Ime1">
                <img src={CMe1} alt="" />
            </div>
            <div id="Ime2">
                <img src={CMe2} alt="" />
            </div>
            <div id="Ime3">
                <img src={CMe3} alt="" />
            </div>
        </div>
        <div id="FollowON">
          <FollowCAL />
        </div>
      </div>
    </>

  );
}

export default CALprofile;
