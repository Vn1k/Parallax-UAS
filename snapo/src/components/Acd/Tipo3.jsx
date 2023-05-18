import React from "react";
import Typo3 from "./Typo3";
import tipou3 from "./tipou3";

function Tipo3()
{
    const content = tipou3.map((param) => (
        <Typo3 id={param.id} image3={param.image} title={param.title} text={param.text} author={param.author} /> 
    ));
    return (
        <div id="tipo3">
          {content}
        </div>
    );
}

export default Tipo3;