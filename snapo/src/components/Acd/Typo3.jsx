import React from "react";
import tipou3 from "./tipou3";

function Typo3(param)
{
    return (
        <div id="container3">
            <div id="image3">
                <img id={param.id} src={param.image3}/>
            </div>
            <h1 id="title">{param.title}</h1>
            <h3 id="text">{param.text}</h3>
            <h3 id="author">{param.author}</h3>
        </div>
    );
}

export default Typo3;