import React from "react";
import tipo from "./tipo";

function Tipo(props){
    return(
        <div className="tipo">
            <div id="tittle">{props.tittle}</div>
            <div id="text">{props.text}</div>
            <div id="img1">{props.img1}</div>
            <div id="img2">{props.img2}</div>
        </div>
    );
}

export default Tipo;