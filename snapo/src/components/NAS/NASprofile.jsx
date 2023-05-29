import React, { useContext, useState } from "react";
import { NameContext } from "./AboutUs";
import BackButton from "./BackButton";
import './NASprofile.css'
import FollowNAS from "./FollowNAS";

function NASprofile() {
  const [lokasiUMN, setLokasiUMN] = useState(null);
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
        
        <img src={NMe4} alt="" id="bgProf"/>
        <BackButton onClick={handleResetClick} id="buttonBack"/>
        <div onClick={InfoLokasiUMN} id="InfoLokasiUMN" class="name">Nathan Angelo Stenlie
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
