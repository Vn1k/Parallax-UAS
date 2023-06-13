import React, { useState } from "react";
import "./calista.css";
import AOS from "aos";
import "aos/dist/aos.css";
import conCredit from "./conCredit";

function Credita(props) {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [lokasiMuseumMacan, setLokasiMuseumMacan] = useState(null);
  const [lokasiMuseumSarinah, setLokasiMuseumSarinah] = useState(null);
  const [lokasiMuseumKatedral, setLokasiMuseumkatedral] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 10);
  };

  const buttonLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 10) % 10);
  };

  const getImage = () => {
    const imageKeys = Object.keys(conCredit[0]);
    const imageKey = imageKeys[currentIndex];
    return conCredit[0][imageKey];
  };

  // const smoothBG = () => {
  //   setIsClicked(true);
  // };

  const InfoLokasiMuseumMacan = async () => {
    try {
      const response = await fetch(
        'https://api.goapi.id/v1/places?search=Museum+Macan&api_key=EWQM9E7G3f8p8frUlOR1hUB5qXr2Ei'
      );
      const jsonData = await response.json();
      if(lokasiMuseumMacan){
        setLokasiMuseumMacan(null);
      } else {
        setLokasiMuseumMacan(jsonData.data.results);
        console.log(jsonData.data.results);

      }
    } catch (error) {
      alert("API Error");
      console.log('An error occurred:', error);
    }
  };

  const InfoLokasiMuseumSarinah = async () => {
    try {
      const response = await fetch(
        'https://api.goapi.id/v1/places?search=Sarinah,%2011+Jakarta&api_key=EWQM9E7G3f8p8frUlOR1hUB5qXr2Ei'
      );
      const jsonData = await response.json();
      if(lokasiMuseumSarinah){
        setLokasiMuseumSarinah(null);
      } else {
        setLokasiMuseumSarinah(jsonData.data.results);
      }
    } catch (error) {
      alert("API Error");
      console.log('An error occurred:', error);
    }
  };

  const InfoLokasiMuseumKatedral = async () => {
    try {
      const response = await fetch(
        'https://api.goapi.id/v1/places?search=Katedral+Jakarta&api_key=EWQM9E7G3f8p8frUlOR1hUB5qXr2Ei'
      );
      const jsonData = await response.json();
      if(lokasiMuseumKatedral){
        setLokasiMuseumkatedral(null);
      } else {
        setLokasiMuseumkatedral(jsonData.data.results);
      }
    } catch (error) {
      alert("API Error");
      console.log('An error occurred:', error);
    }
  };

  var defaultBackground = true;
  var defaultBackgroundColor = "";

  function changeBackground(content) {   
    const smoothBG = document.getElementById("backgroundImageCredita");
    smoothBG.classList.add("show");

    if (content === "Museum4") {
      setBackgroundImage(require("../../ASET/Images/Macan.JPG"));

      defaultBackground = false;
    } else if (content === "Museum5") {
      setBackgroundImage(require("../../ASET/Images/Sarinah.JPG"));
      
      defaultBackground = false;
    } else if (content === "Museum6") {
      setBackgroundImage(require("../../ASET/Images/Katedral.JPG"));

      defaultBackground = false;
    } else if (content === "Default") {
      setBackgroundImage(defaultBackgroundColor);    
    } 
    defaultBackground = content === "Default";

    setTimeout(() => {
      smoothBG.classList.remove("show");
    }, 4000);
  };

    return (
        <div id="cardCredita" >
          <section id="c381">
          <button onClick={buttonLeftClick} id="buttonLeft">&lt;</button>
          <button onClick={buttonRightClick} id="buttonRight">&gt;</button>
            <img id="backgroundImageCredita" className="smoothBG" src={backgroundImage}/>
                <div id="image3Credita">
                  <img id="slideShowImageCredita" src={getImage()} />
                </div>
                <div id="Museum">
                    <div onClick={InfoLokasiMuseumMacan} id="InfoLokasiMuseumMacan" data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="200" class="museum1">{props.title1}
                      {lokasiMuseumMacan ? (
                        <div id="APIMUSEUMMACAN">
                          {lokasiMuseumMacan.map((item) => (
                            <div key={item.id}>{item.displayName}</div>
                          ))}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="280" id="museum4" 
                    // className={isClicked ? "smoothBG" : ""}
                    onClick={() => changeBackground(defaultBackground ? "Museum4" : "Default")}
                    // onClick={handleClick}
                    >{defaultBackground ? props.title4 : "Default"}</div>
                    <div onClick={InfoLokasiMuseumSarinah} id="InfoLokasiMuseumSarinah" data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="120" class="museum2">{props.title2}
                      {lokasiMuseumSarinah ? (
                        <div id="APIMUSEUMSARINAH">
                          {lokasiMuseumSarinah.map((item) => (
                            <div key={item.id}>{item.displayName}</div>
                          ))}
                        </div>
                      ) : (
                        <div></div>
                      )}                      
                      </div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="180" id="museum5" 
                    // className={isClicked ? "smoothBG" : ""}
                    onClick={() => changeBackground(defaultBackground ? "Museum5" : "Default")}
                    // onClick={handleClick}
                    >{defaultBackground ? props.title5 : "Default"}</div>
                    <div onClick={InfoLokasiMuseumKatedral} id="InfoLokasiMuseumKatedral" data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="50" class="museum3">{props.title3}
                      {lokasiMuseumKatedral ? (
                        <div id="APIMUSEUMKATEDRAL">
                          {lokasiMuseumKatedral.map((item) => (
                            <div key={item.id}>{item.displayName}</div>
                          ))}
                        </div>
                      ) : (
                        <div></div>
                      )}                    
                      </div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="120" id="museum6" 
                    // className={isClicked ? "smoothBG" : ""}
                    onClick={() => changeBackground(defaultBackground ? "Museum6" : "Default")}
                    // onClick={handleClick}
                    >{defaultBackground ? props.title6 : "Default"}</div>
                </div> 
                <div id="TextMuseum">
                    <div 
                    data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="230" class="textMuseum1">{props.text1}
                    </div>
                    <div 
                    data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="100" class="textMuseum2">{props.text2}
                        </div>
                    <div 
                    data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="80" class="textMuseum3">{props.text3}
                        </div>
                    </div> 
                {/* <div id="lineMuseum123"> */}
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="100" class="lineMuseum1"></div>
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="-10" class="lineMuseum2"></div>
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="-50" class="lineMuseum3"></div>
                {/* </div>      */}
                <div id="lineMuseum4567">
                    <div data-aos="fade-down" data-aos-easing="ease-out-sine" data-aos-offset="0" class="lineMuseum4"></div>
                    <div data-aos="fade-down" data-aos-easing="ease-out-sine" data-aos-offset="100" class="lineMuseum5"></div>
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="50" class="lineMuseum6"></div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="10" class="lineMuseum7"></div>
                </div>   
            </section>       
        </div>
        
    );
}

AOS.init();

export default Credita;