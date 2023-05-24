import React from "react";
import Tipoc from "./Tipoc";
import tipo from "./tipo";

function createCard(tipo){
    return(
        <Tipoc
        title={tipo.title}
        text={tipo.text}
        img1={tipo.img1}
        img2={tipo.img2}
        ></Tipoc>
    );
}

function CardTipoc(){
    return (
        <>
            {tipo.map(createCard)}
        </>
    );
}

export default CardTipoc;