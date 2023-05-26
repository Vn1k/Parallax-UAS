import React, { useState } from "react";
import './calista.css';

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
                    <div id="museum1">{props.title1}</div>
                    <button id="museum4" onClick={() => changeBackground("Museum4")}>{props.title4}</button>
                    <div id="museum2">{props.title2}</div>
                    <button id="museum5" onClick={() => changeBackground("Museum5")}>{props.title5}</button>
                    <div id="museum3">{props.title3}</div>
                    <button id="museum6" onClick={() => changeBackground("Museum6")} 
                    // onClick={handleMuseumKatedralClick}
                    >{props.title6}</button>
                </div> 

                <div id="TextMuseum">
                    <div id="textMuseum1">{props.text1}</div>
                    <div id="textMuseum2">{props.text2}</div>
                    <div id="textMuseum3">{props.text3}</div> 
                </div>
                {/* <div id="lineMuseum123"> */}
                    <div class="lineMuseum1"></div>
                    <div class="lineMuseum2"></div>
                    <div class="lineMuseum3"></div>
                {/* </div>      */}
                <div id="lineMuseum4567">
                    <div class="lineMuseum4"></div>
                    <div class="lineMuseum5"></div>
                    <div class="lineMuseum6"></div>
                    <div class="lineMuseum7"></div>
                </div>          
        </div>
    );
}

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
