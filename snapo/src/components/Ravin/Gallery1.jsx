import React from "react";

function Gallery1(){
    const gambar1 = require("../../ASET/Images/art colorfull.jpg");
    const gambar2 = require("../../ASET/Images/relief.jpg");
    const gambar3 = require("../../ASET/Images/lukisan.jpg");
    const gambar4 = require("../../ASET/Images/lukisan2.jpg");
    const gambar5 = require("../../ASET/Images/bingkai.jpg");
    const gambar6 = require("../../ASET/Images/lukisan putih.jpg")

    return(
        <div id="con">
            <div id="gro">
                <img id="Art1" src={gambar1} alt="Art" />
                <img id="Art2" src={gambar2} alt="Art" /> 
            </div>
            <div id="gro">
                <img id="Art3" src={gambar3} alt="Art" />
                <img id="Art4" src={gambar4} alt="Art" /> 
            </div>
            <div id="gro">
                <img id="Art5" src={gambar5} alt="Art" />
                <img id="Art6" src={gambar6} alt="Art" /> 
            </div>
        </div>
    );
}

export default Gallery1;