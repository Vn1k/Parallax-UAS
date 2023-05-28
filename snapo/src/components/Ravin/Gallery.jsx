import React from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Atropos from 'atropos/react';
import 'atropos/css';

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
            <section id="gallery">
            <div id="group">
                <div id="conta">
                    <Atropos
                    activeOffset={50}
                    shadow={false}
                    onClick={handleClickOne}
                    >
                            <img id="one" src={IMGURL0} alt="borobudur"/>    
                    </Atropos>
                    <span className="titulo" >Statue</span>
                </div>
                <div id="conta">
                    <Atropos
                        activeOffset={50}
                        shadow={false}
                        onClick={handleClickTwo}
                        >
                        <img id="two" src={IMGURL1} alt="lukisan3"/>
                    </Atropos>
                    <span className="titulo" >Art</span>
                </div>
                <div id="conta">
                    <Atropos
                        activeOffset={50}
                        shadow={false}
                        onClick={handleClickThree}
                        >
                        <img id="three" src={IMGURL2} alt="patung"/>
                    </Atropos>
                    <span className="titulo" >Abstrak</span>
                </div>
            </div>
            </section>
        </div>
        
    );
}

AOS.init();

export default Gallery;