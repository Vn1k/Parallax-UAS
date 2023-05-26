import React, { useState } from "react";
import './calista.css';

function Credita(props){
    // const [showMuseumKatedral, setShowMuseumKatedral] = useState(false);

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

    var button = document.getElementById("museum6");
    var katedral = document.getElementById("katedral");

    // button.addEventListener("click", function(){
    //     katedral.style.display = "block";
    // });

    return (
        <div id="cardCredita">
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
                    <div id="museum4">{props.title4}</div>
                    <div id="museum2">{props.title2}</div>
                    <div id="museum5">{props.title5}</div>
                    <div id="museum3">{props.title3}</div>
                    <div id="museum6" 
                    // onClick={handleMuseumKatedralClick}
                    >{props.title6}</div>
                </div> 

                <div id="TextMuseum">
                    <div id="textMuseum1">{props.text1}</div>
                    <div id="textMuseum2">{props.text2}</div>
                    <div id="textMuseum3">{props.text3}</div> 
                </div>
                <div id="lineMuseum123">
                    <div class="lineMuseum1"></div>
                    <div class="lineMuseum2"></div>
                    <div class="lineMuseum3"></div>
                </div>     
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