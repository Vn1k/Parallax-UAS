import React from "react";
import './tipo3.css';

function Tipo3()
{
    const image1 = require("../../ASET/Images/lukisan.jpg")
    return (
        <div id="container3">
            <div id="image3">
                <img src={image1}/>
            </div>
            <h2 id="kutip">"</h2>
            <h1 id="title">Living <br /> Space</h1>
            <p id="text">Our first skin is human skin. Clothes make up our second skin. If so, then isn’t our third skin made up of our living space, the walls, doors, and windows that surround the human body?</p>
            <h5 id="author">Chiharu Shiota</h5>
            <div id="rectangle"></div>
            <div id="rectangle1"></div>
            <div id="rectangle2"></div>
            <div id="line"></div>
            <div id="dot"></div>
        </div>
    );
}
export default Tipo3;