import React from "react";
import './home.css';
import { ReactComponent as SvgImage } from '../../../ASET/SVG/SNAPVER.svg'; //cara memanggil gambar svg


function Home () {
    const IMGURL = require("../../../ASET/Home/home.jpg");
    const Logo = require('../../../ASET/SVG/SNAPO.png');
    return (
        <div id="Home">
            <div>
                <img src={IMGURL} alt="" id="img-home"/>
            </div>
            <div>
                <SvgImage id='logovertical'/>
                <img src={Logo} id="logocam"/>
                <object id="background-logo"></object>
            </div>
            <div id="credit">
                <p>Credit by <strong>MOYSHI</strong></p>
            </div>
        </div>
    );
}

export default Home;