import React from "react";
import cal from "../Calista/cal";

function Cal(props){
    return(
        <div className="tipo">
            <div id="tittlecal">{props.name}</div>
            <div id="textcal">{props.text}</div>
            <div id="img1cal">{props.img1}</div>
            <div id="img2cal">{props.img2}</div>
            <div id="vidcal">{props.video}</div>
        </div>
    );
}

export default Tipo;