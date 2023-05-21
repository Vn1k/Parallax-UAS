import React from "react";

function Gallery(){
    const IMGURL0 = require("../../ASET/Images/borobudur.jpg");
    const IMGURL1 = require("../../ASET/Images/patung.jpg");
    const IMGURL2 = require("../../ASET/Images/lukisan3.jpg");
    return(
        <div id="gallery">
            <div id="gambar1">
                <img src={IMGURL0} alt="BOROBUDUR" />
            </div>
            <div id="gambar2">
                <img src={IMGURL1} alt="PATUNG" />
            </div>
            <div id="gambar3">
                <img src={IMGURL2} alt="LUKISAN" />
            </div>
        </div>
    );
}

export default Gallery;