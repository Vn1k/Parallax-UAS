import React from "react";
import './tipo2.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Tipo2()
{
    const IMAGERL = require("../../ASET/Images/benang gantung crop.jpg");
    return (
        <div id="container2" class="md:max-sm:flex md:max-md:flex md:max-lg:flex">
            <div id="image2">
                <img data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="220" src={IMAGERL} alt="benang" />
            </div>
            <div id="title2">
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="-90">E</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="0">X</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="0">I</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="0">S</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="0">T</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="0">E</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="0">N</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="0">C</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="10">E</div>
                 {/* E <br /> X <br /> I <br /> S <br /> T <br /> E <br /> N <br /> C <br /> E */}
            </div>
            <h1 data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="200" id="text2">No matter how hard you try, But they exist as souls without a tangible form. The more you think about them, the more their sounds disappear from my mind, an the more tangible their existace becomes.</h1>
            <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="200" id="year2">1997.</div>
            <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="150" id="rectangle22"></div>
            <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="0" id="rectangle32"></div>
        </div>
    );
}

AOS.init();

export default Tipo2;