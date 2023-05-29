import React, { useState } from "react";
import "./calista.css";
import AOS from "aos";
import "aos/dist/aos.css";
import conCredit from "./conCredit";

function Credita(props) {
  const [backgroundImage, setBackgroundImage] = useState("");
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [digitalTime, setDigitalTime] = useState(null);
  // const [informasiMuseumMacan, setInformasiMuseumMacan] = useState(null);
  // const [informasiMuseumSarinah, setInformasiMuseumSarinah] = useState(null);
  // const [informasiMuseumKatedral, setInformasiMuseumKatedral] = useState(null);
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

  const jamBerjalan = async () => {
    try {
      const response = await fetch(
        'https://worldtimeapi.org/api/timezone/Asia/jakarta'
      );
      const jsonData = await response.json();
      if(digitalTime){
        setDigitalTime(null);
      } else {
        const dateTime = jsonData.utc_datetime;
        const transformedTime = new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setDigitalTime(transformedTime);
        console.log(jsonData.utc_datetime);
      }
    } catch (error) {
      alert("API Error");
      console.log('An error occurred:', error);
    }
  };

  // const infoMuseumMacan = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Museum+Macan&format=json'
  //     );
  //     const jsonData = await response.json();
  //     if(informasiMuseumMacan){
  //       setInformasiMuseumMacan(null);
  //     } else {
  //       setInformasiMuseumMacan(jsonData.query.search);
  //       console.log(jsonData.data.results);
  //     }
  //   } catch (error) {
  //     alert("API Error");
  //     console.log('An error occurred:', error);
  //   }
  // };

  // const infoMuseumSarinah = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Museum+Sarinah&format=json'
  //     );
  //     const jsonData = await response.json();
  //     if(informasiMuseumSarinah){
  //       setInformasiMuseumSarinah(null);
  //     } else {
  //       setInformasiMuseumSarinah(jsonData.data.results);
  //     }
  //   } catch (error) {
  //     alert("API Error");
  //     console.log('An error occurred:', error);
  //   }
  // };

  // const infoMuseumKatedral = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Museum+Katedral&format=json'
  //     );
  //     const jsonData = await response.json();
  //     if(informasiMuseumKatedral){
  //       setInformasiMuseumKatedral(null);
  //     } else {
  //       setInformasiMuseumKatedral(jsonData.data.results);
  //     }
  //   } catch (error) {
  //     alert("API Error");
  //     console.log('An error occurred:', error);
  //   }
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
  }

    return (
        <div id="cardCredita" >
          <div onClick={jamBerjalan} id="JamBerjalan">Digital Time
          {digitalTime ? (
            <div id="DIGITALTIME">
              <div key={digitalTime}>{digitalTime}</div>
            </div>
          ) : (
            <div></div>
          )}
          </div>
          <section id="c381">
          <button onClick={buttonLeftClick} id="buttonLeft">&lt;</button>
          <button onClick={buttonRightClick} id="buttonRight">&gt;</button>
            <img id="backgroundImageCredita" src={backgroundImage}/>
                <div id="image3Credita">
                  {/* <img id="slideImageCredita" src={props.newImage}/> */}
                  <img id="slideShowImageCredita" src={getImage()} />
                  {/* <img id="img3Credita" src={props.img3} /> */}
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
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="280" id="museum4" onClick={() => changeBackground(defaultBackground ? "Museum4" : "Default")}>{defaultBackground ? props.title4 : "Default"}</div>
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
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="180" id="museum5" onClick={() => changeBackground(defaultBackground ? "Museum5" : "Default")}>{props.title5}</div>
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
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="120" id="museum6" onClick={() => changeBackground(defaultBackground ? "Museum6" : "Default")}>{props.title6}</div>
                </div> 
                <div id="TextMuseum">
                    <div 
                    // onClick={infoMuseumMacan} id="InfoMuseumMacan" 
                    data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="230" class="textMuseum1">{props.text1}
                      {/* {informasiMuseumMacan ? (
                          <div id="APIINFOMUSEUMMACAN">
                            {informasiMuseumMacan.map((item) => (
                              <div key={item.pageid}>{item.title}</div>
                            ))}
                          </div>
                        ) : (
                          <div></div>
                        )}    */}
                    </div>
                    <div 
                    // onClick={infoMuseumSarinah} id="InfoMuseumSarinah" 
                    data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="100" class="textMuseum2">{props.text2}
                    {/* {informasiMuseumSarinah ? (
                          <div id="APIINFOMUSEUMSARINAH">
                            {informasiMuseumSarinah.map((item) => (
                              <div key={item.id}>{item.displayName}</div>
                            ))}
                          </div>
                        ) : (
                          <div></div>
                        )}                      */}
                        </div>
                    <div 
                    // onClick={infoMuseumKatedral} id="InfoMuseumKatedral" 
                    data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="80" class="textMuseum3">{props.text3}
                    {/* {informasiMuseumKatedral ? (
                          <div id="APIINFOMUSEUMKATEDRAL">
                            {informasiMuseumKatedral.map((item) => (
                              <div key={item.id}>{item.displayName}</div>
                            ))}
                          </div>
                        ) : (
                          <div></div>
                        )}                      */}
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


























  // function buttonRightClick() {
  //   const imagePaths = [
  //     props.imgmacan1,
  //     props.imgmacan2,
  //     props.imgsarinah1,
  //     props.imgsarinah2,
  //     props.imgsarinah3,
  //     props.imgkatedral1,
  //     props.imgkatedral2,
  //     props.imgkatedral3,
  //     props.imgkatedral4,
  //   ];

  //   const nextIndex = (currentImageIndex + 1) % imagePaths.length;
  //   const newImage = imagePaths[nextIndex];
  //   setCurrentImageIndex(nextIndex);
  //   props.changeImage(newImage);

  //   console.log(newImage);
  //   console.log("button");
  // }

  // function buttonLeftClick() {
  //   const imagePaths = [
  //     props.imgmacan1,
  //     props.imgmacan2,
  //     props.imgsarinah1,
  //     props.imgsarinah2,
  //     props.imgsarinah3,
  //     props.imgkatedral1,
  //     props.imgkatedral2,
  //     props.imgkatedral3,
  //     props.imgkatedral4,
  //   ];

  //   const nextIndex = (currentImageIndex - 1) % imagePaths.length;
  //   const newImage = imagePaths[nextIndex];
  //   setCurrentImageIndex(nextIndex);
  //   props.changeImage(newImage);

  //   // console.log("button");
  //   console.log(currentImageIndex);
  // }