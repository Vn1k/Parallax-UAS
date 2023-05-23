import React from "react";
import { ReactComponent as Logou } from '../../ASET/SVG/LOGO_SNAPO.svg';

function Work ()
{
    const Imgine1 = require("../../ASET/Images/piano crop.jpg");

    return (
        <div id="containerWork">
            <div id="imgWork">
                <img src={Imgine1} alt="piano" />
            </div>
            <div id="logoWork">
                <Logou />
             </div>
            <div id="textWork">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
            <div id="creditWork">Created by | <strong>M O Y S H I</strong></div>
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