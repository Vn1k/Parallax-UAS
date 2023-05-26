import React from "react";
import "./calista.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Tipoc(props){
    return (
        <>
        <div id="cardTipoc">
            <div id="tulisantipoc">
                <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="50" id="headingTipoc">{props.title}</div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="200" id="textTipoc">{props.text}</div>
                <div data-aos="flip-down" data-aos-easing="ease-out-sine" data-aos-offset="10" id="linecaltipoc"></div>
            </div>
                <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="300" id="caltipocimage1">
                    <img id="caltipocimg1" src={props.img1} />
                </div>
                <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="500" id="caltipocimage2">
                    <img id="caltipocimg2" src={props.img2} />
                </div>
                <div id="line123">
                    <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="100" class="line1"></div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="200" class="line2"></div>
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="200" class="line3"></div>
                </div>
                <div id="line45">
                    <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="200" class="line4"></div>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="200" class="line5"></div>
                </div>
                <div id="allDot">
                    <div data-aos="zoom-in" data-aos-easing="ease-out-sine" data-aos-offset="0" class="dot1"></div>
                    <div data-aos="zoom-in" data-aos-easing="ease-out-sine" data-aos-offset="0" class="dot2"></div>
                    <div data-aos="zoom-in" data-aos-easing="ease-out-sine" data-aos-offset="0" class="dot3"></div>
                </div>
        </div>
        </>
    );
}

AOS.init();

export default Tipoc;