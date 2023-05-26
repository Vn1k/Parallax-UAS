import React from "react";
import { useNavigate } from "react-router-dom";

function Gallery(){
    const IMGURL0 = require("../../ASET/Images/borobudur.jpg");
    const IMGURL1 = require("../../ASET/Images/patung.jpg");
    const IMGURL2 = require("../../ASET/Images/lukisan3.jpg");
    const navigate = useNavigate();
    
    function handleClickOne(){
        navigate("/gallery1")
    }
    function handleClickTwo(){
        navigate("/gallery2")
    }
    function handleClickThree(){
        navigate("/gallery3")
    }

    return(
        <div id="gallery">
            <div id="group">
                <button>
                    <img id="one" onClick={handleClickOne} src={IMGURL0} alt="borobudur"/>
                </button>
                <div>
                    <img id="two"  onClick={handleClickTwo} src={IMGURL1} alt="lukisan3"/>
                </div>
                <div>
                    <img id="three" onClick={handleClickThree} src={IMGURL2} alt="patung"/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;