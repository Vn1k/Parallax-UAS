import React, { useState } from "react";
import "./calista.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Credita(props) {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function changeBackground(content) {
    if (content === "Museum4") {
      setBackgroundImage(require("../../ASET/Images/Macan.JPG"));
    } else if (content === "Museum5") {
      setBackgroundImage(require("../../ASET/Images/Sarinah.JPG"));
    } else if (content === "Museum6") {
      setBackgroundImage(require("../../ASET/Images/Katedral.JPG"));
    }
  }

  function buttonRightClick() {
    const imagePaths = [
      props.imgmacan1,
      props.imgmacan2,
      props.imgsarinah1,
      props.imgsarinah2,
      props.imgsarinah3,
      props.imgkatedral1,
      props.imgkatedral2,
      props.imgkatedral3,
      props.imgkatedral4,
    ];

    const nextIndex = (currentImageIndex + 1) % imagePaths.length;
    const newImage = imagePaths[nextIndex];
    setCurrentImageIndex(nextIndex);
    props.changeImage(newImage);

    console.log("button");
  }

  function buttonLeftClick() {
    const imagePaths = [
      props.imgmacan1,
      props.imgmacan2,
      props.imgsarinah1,
      props.imgsarinah2,
      props.imgsarinah3,
      props.imgkatedral1,
      props.imgkatedral2,
      props.imgkatedral3,
      props.imgkatedral4,
    ];

    const nextIndex = (currentImageIndex - 1) % imagePaths.length;
    const newImage = imagePaths[nextIndex];
    setCurrentImageIndex(nextIndex);
    props.changeImage(newImage);

    console.log("button");
  }

    return (
      <section id="credit">
        <div id="cardCredita" >
          <button onClick={buttonLeftClick} id="buttonLeft">&lt;</button>
          <button onClick={buttonRightClick} id="buttonRight">&gt;</button>
            <img id="backgroundImageCredita" src={backgroundImage}/>
                <div id="image3Credita">
                  <img id="slideImageCredita" src={currentImageIndex}/>
                  <img id="img3Credita" src={props.img3} />
                </div>
                {/* <div id="katedral" 
                // style={{ display: showMuseumKatedral ? 'block' : 'none' }}
                >
                    <img id="imgkatedral1" src={props.imgkatedral1}/>
                    <img id="imgkatedral2" src={props.imgkatedral2}/>
                    <img id="imgkatedral3" src={props.imgkatedral3}/>
                    <img id="imgkatedral4" src={props.imgkatedral4}/>
                </div> */}
                <div id="Museum">
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="200" id="museum1">{props.title1}</div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="280" id="museum4" onClick={() => changeBackground("Museum4")}>{props.title4}</div>
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="120" id="museum2">{props.title2}</div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="180" id="museum5" onClick={() => changeBackground("Museum5")}>{props.title5}</div>
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="50" id="museum3">{props.title3}</div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="120" id="museum6" onClick={() => changeBackground("Museum6")} 
                    // onClick={handleMuseumKatedralClick}
                    >{props.title6}</div>
                </div> 

                <div id="TextMuseum">
                    <div data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="230" id="textMuseum1">{props.text1}</div>
                    <div data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="100" id="textMuseum2">{props.text2}</div>
                    <div data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="80" id="textMuseum3">{props.text3}</div> 
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
        </div>
        </section>
    );
}

AOS.init();

export default Credita;