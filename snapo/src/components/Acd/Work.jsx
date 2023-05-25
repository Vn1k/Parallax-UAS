import React from "react";
import { ReactComponent as Logou } from '../../ASET/SVG/LOGO_SNAPO.svg';
import './work.css';

function Work ()
{
    const Imgine1 = require("../../ASET/Images/piano crop.jpg");
    const Imgine2 = require("../../ASET/Images/bingkai2 crop.jpg");
    const Imgine3 = require("../../ASET/Images/lukisan4.jpg");
    
    return (
        <div id="containerWork">
            <div id="logoWork">
                <Logou />
             </div>
            <div id="textWork">SNAPO merupakan sebuah singkatan dari SNAP yaitu foto dan PO adalah typography. Sehingga, SNAPO menampilkan sebuah website yang berisikan gallery foto 'Museum' dan diberikan sebuah typography untuk menambahkan estetika sebuah foto.</div>
            <div id="creditWork">Created by | <strong>M O Y S H I</strong></div>
            <div id="recWork1"></div>
            <div id="recWork2"></div>
            <div id="color3">
                <div id="recWork3"></div>
                <div id="recWork4"></div>
                <div id="recWork5"></div>
                <div id="recWork6"></div>
            </div>
            <div id="carouselWork">
                <div id="imgWork1">
                    <img src={Imgine1} alt="piano" />
                </div>
                <div id="imgWork2">
                    <img src={Imgine2} alt="bikai2" />
                </div>
                <div id="imgWork3">
                    <img src={Imgine3} alt="lukisan4" />
                </div>
            </div>
        </div>
    );
}

export default Work;