import React from "react";

function Work ()
{
    const Imgine1 = require("../../ASET/Images/piano crop.jpg");
    const Logou = require("../../ASET/SVG/LOGO_SNAPO.svg");

    return (
        <div id="containerWork">
            <div id="imgWork">
                <img src={Imgine1} alt="piano" />
            </div>
            <div id="logoWork">
                <img src={Logou} alt="logo" />
             </div>
            <div id="textWork">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
            <div id="creditWork">Created by |</div>
            <div id="nameWork">M O Y S H I</div>
            <div id="recWork1"></div>
            <div id="recWork2"></div>
            <div id="recWork3"></div>
            <div id="recWork4"></div>
            <div id="recWork5"></div>
            <div id="recWork6"></div>
        </div>
    );
}

export default Work;