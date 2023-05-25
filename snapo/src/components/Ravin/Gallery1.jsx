import React from "react";

function Gallery1(){
    const gambar1 = require("../../ASET/Images/borobudur.jpg");
    const gambar2 = require("");
    const gambar3 = require("");
    const gambar4 = require("");
    const gambar5 = require("");

    return(
        <div id="con">
            <div id="gro">
                <img src={gambar1} alt="borobudur" />
            </div>
        </div>
    );
}

export default Gallery1;