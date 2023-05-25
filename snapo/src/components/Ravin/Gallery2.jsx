import React from "react";

function Gallery2(){
    const gambar1 = require("../../ASET/Images/benang gantung.jpg");
    const gambar2 = require("../../ASET/Images/miniatur.jpg");
    const gambar3 = require("../../ASET/Images/piano.jpg");
    const gambar4 = require("../../ASET/Images/kaincal.JPG");
    const gambar5 = require("../../ASET/Images/salib.jpg");
    const gambar6 = require("../../ASET/Images/jubah.jpg");

    return(
        <div id="con">
            <div id="gro">
                <img id="Art1" src={gambar1} alt="Art" />
                <img id="Art2" src={gambar2} alt="Art" /> 
            </div>
            <div id="gro">
                <img id="Art3" src={gambar3} alt="Art" />
                {/* <img id="Art4" src={gambar4} alt="Art" />  */}
            </div>
            <div id="gro">
                <img id="Art5" src={gambar5} alt="Art" />
                <img id="Art6" src={gambar6} alt="Art" /> 
            </div>
        </div>
    );
}

export default Gallery2;