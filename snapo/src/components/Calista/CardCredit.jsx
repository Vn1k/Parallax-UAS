import React from "react";
import Credita from "./Credita";
import conCredit from "./conCredit";

function createCard(conCredit){
    return(
        <Credita
        img3={conCredit.img3}
        title1={conCredit.title1}
        text1={conCredit.text1}
        title2={conCredit.title2}
        text2={conCredit.text2}
        title3={conCredit.title3}
        text3={conCredit.text3}        
        ></Credita>
    );
}

function CardCredit(){
    return (
        <>
            {conCredit.map(createCard)}
            </>
    )
}

export default CardCredit;