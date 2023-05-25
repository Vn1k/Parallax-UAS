import React from "react";

function Gallery(){
    const IMGURL0 = require("../../ASET/Images/borobudur.jpg");
    const IMGURL1 = require("../../ASET/Images/patung.jpg");
    const IMGURL2 = require("../../ASET/Images/lukisan3.jpg");
    return(
        <div id="group">
            <div>
                <img id="one" src={IMGURL0} alt="borobudur"/>
            </div>
            <div>
                <img id="two" src={IMGURL1} alt="lukisan3"/>
            </div>
            <div>
                <img id="three" src={IMGURL2} alt="patung"/>
            </div>
        </div>
    );
}

export default Gallery;