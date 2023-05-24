import React from "react";
import './calista.css';

function Credita(props){
    return (
        <div id="cardCredita">
                <div id="image3"><img id="img3" src={props.img3} /></div>
                <div id="Museum">
                    <div id="museum1">{props.title1}</div>
                    <div id="museum2">{props.title2}</div>
                    <div id="museum3">{props.title3}</div>
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