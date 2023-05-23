import React from "react";
import './home.css';
import { ReactComponent as SvgImage } from '../../../ASET/SVG/SNAPOsv.svg'; //cara memanggil gambar svg


function Home () {
    const IMGURL = require("../../../ASET/Home/home.jpg");

    return (
        <div id="Home">
            <div>
                <img src={IMGURL} alt="" id="img-home"/>
            </div>
            <div>
                <SvgImage id='logovertical'/>
                <object id="background-logo"></object>
            </div>
            <div id="credit">
                <p>Credit by <strong>MOYSHI</strong></p>
            </div>
        </div>
    );
}

export default Home;