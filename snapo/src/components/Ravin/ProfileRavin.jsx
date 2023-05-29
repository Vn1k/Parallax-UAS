import React, { useContext, useState } from "react";
import { NameContext } from "../NAS/AboutUs";
import BackButton from "../NAS/BackButton";
import FollowRavin from "./FollowRavin";
import './Ravinprofile.css';


function ProfileRavin(){
    const [lokasiUMN, setLokasiUMN] = useState(null);
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
        <BackButton onClick={handleResetClick} id="buttonBack"/>
        <img src={RMe4} alt="" id="bgProf"/>
        
        <div onClick={InfoLokasiUMN} id="InfoLokasiUMN" class="name">Robertus Ravin Woenarso
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