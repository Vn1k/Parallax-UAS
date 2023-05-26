import React from "react";

function Gallery(){
    const IMGURL0 = require("../../ASET/Images/borobudur.jpg");
    const IMGURL1 = require("../../ASET/Images/patung.jpg");
    const IMGURL2 = require("../../ASET/Images/lukisan3.jpg");
    
    function handleClickOne(){
         alert("TES1");
    }
    function handleClickTwo(){
        alert("TES2");
    }
    function handleClickThree(){
        alert("TES3");
    }

    return(
        <div id="gallery">
            <div id="group">
                <div>
                    <img id="one" onClick={handleClickOne} src={IMGURL0} alt="borobudur"/>
                </div>
                <div>
                    <img id="two" onClick={handleClickTwo} src={IMGURL1} alt="lukisan3"/>
                </div>
                <div>
                    <img id="three" onClick={handleClickThree} src={IMGURL2} alt="patung"/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;