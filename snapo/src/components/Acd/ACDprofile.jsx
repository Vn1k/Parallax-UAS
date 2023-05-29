import React, { useContext, useState } from "react";
import { NameContext } from "../NAS/AboutUs";
import BackButton from "../NAS/BackButton";
import './ACDprof.css';
import FollowACD from "./FollowACD";

function ACDprofile ()
{
    const [lokasiUMN, setLokasiUMN] = useState(null);
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
        
        <img src={Me4} alt="" id="bgProf"/>
        <BackButton onClick={handleResetClick} id="buttonBack"/>
        <div onClick={InfoLokasiUMN} id="InfoLokasiUMN" class="name">Amanda Citra Dewanti
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
