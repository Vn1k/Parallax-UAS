import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './tipo3.css';

function Tipo3()
{
    const image1 = require("../../ASET/Images/lukisan.jpg")
    return (
        <div id="container3">
            <div id="image3">
                <img data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="-600" data-aos-anchor-placement="top-center" src={image1} alt=""/>
                <h2 data-aos="fade-left" data-aos-offset="-1050" data-aos-anchor-placement="center-center" id="kutip">"</h2>
                <h1 data-aos="fade-left" data-aos-offset="-800" data-aos-anchor-placement="center-center" id="title">Living <br /> Space</h1>
                <p data-aos="fade-left" data-aos-offset="-700" data-aos-anchor-placement="top-center" id="text">Our first skin is human skin. Clothes make up our second skin. If so, then isn’t our third skin made up of our living space, the walls, doors, and windows that surround the human body?</p>
                <h5 data-aos="fade-left" data-aos-offset="-850" data-aos-anchor-placement="top-center" id="author">Chiharu Shiota</h5>
                <object data-aos="fade-left" data-aos-offset="-700" data-aos-anchor-placement="top-center" id="rectangle"></object>
                <object data-aos="fade-left" data-aos-offset="-700" data-aos-anchor-placement="top-center" id="rectangle1"></object>
                <div data-aos="fade-left" data-aos-offset="-700" data-aos-anchor-placement="top-center" id="line"></div>
                <div data-aos="fade-left" data-aos-offset="-700" data-aos-anchor-placement="top-center" id="dot"></div>
            </div>
            
            <div data-aos="fade-left" data-aos-offset="-350" data-aos-anchor-placement="top-center" id="rectangle2"></div>
            
        </div>
    );
}

AOS.init();

export default Tipo3;