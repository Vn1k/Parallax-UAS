import React from "react";
import Card1 from "./Card1";
import tipo from "./tipo";

function createCard(tipo){
    return(
        <Card1
        text={tipo.text}
        img1={tipo.img1}
        img2={tipo.img2}
        ></Card1>
    );
}

function Tipoc(){
    return (
        <div>
            <div className="heading">Time Dimension</div>
            <div id="cards">{tipo.map(createCard)}</div>
        </div>
    );
}

export default Tipoc;