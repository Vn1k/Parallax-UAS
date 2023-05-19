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
            <p id="text">{param.text}</p>
            <h3 id="author">{param.author}</h3>
            <div id="rectangle"></div>
            <div id="rectangle1"></div>
            <div id="rectangle2"></div>
        </div>
    );
}

export default Typo3;