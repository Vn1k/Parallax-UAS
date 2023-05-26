import React, { useState } from "react";
import './calista.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Credita(props){
    // const [showMuseumKatedral, setShowMuseumKatedral] = useState(false);

    // var button = document.getElementById("museum6");
    // var katedral = document.getElementById("katedral");


    // function handleMuseumKatedralClick(){
    //     setShowMuseumKatedral(!showMuseumKatedral);
    //     props.katedral(props.title6);
    // }   

    const [backgroundImage, setBackgroundImage] = useState('');

    function changeBackground(content){
        if(content == "Museum4"){
            setBackgroundImage(require("../../ASET/Images/Macan.JPG"));
        }
        else if(content == "Museum5"){
            setBackgroundImage(require("../../ASET/Images/Sarinah.JPG"));
        }
        else if(content == "Museum6"){
            setBackgroundImage(require("../../ASET/Images/Katedral.JPG"));
        }
    }
    
    return (
        <div id="cardCredita" >
            <img src={backgroundImage}/>
                <div id="image3Credita">
                    <img id="img3Credita" src={props.img3} />
                </div>
                <div id="katedral" 
                // style={{ display: showMuseumKatedral ? 'block' : 'none' }}
                >
                    <img id="imgkatedral1" src={props.imgkatedral1}/>
                    <img id="imgkatedral2" src={props.imgkatedral2}/>
                    <img id="imgkatedral3" src={props.imgkatedral3}/>
                    <img id="imgkatedral4" src={props.imgkatedral4}/>
                </div>
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
    );
}

AOS.init();

export default Credita;

// const Katedral = () => {
    //     const [showMuseumKatedral, setShowMuseumKatedral] = useState(0);
    //     return (
    //     <button onClick={() => setShowMuseumKatedral(showMuseumKatedral + 1)}>
    //       Click me {showMuseumKatedral}
    //    </button>        
    //    )
    // };

    // function handleMuseumKatedralClick(katedral){
    //     return 
    // }

    // const handleMuseumKatedralClick = () => {
    //     setShowMuseumKatedral(!showMuseumKatedral);
    // };

    // function handleMuseumKatedralClick(){
    //     var div = document.getElementById("museum6");
    //     if(div.style.display !== "display"){
    //         div.style.display = "display";
    //     } 
    //     else {
    //         div.style.display = document.getElementById("image3Credita");
    //     }
    // }

    // var button = document.getElementById("museum6");
    // var katedral = document.getElementById("katedral");

    // button.addEventListener("click", function(){
    //     katedral.style.display = "block";
    // });
