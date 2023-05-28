import React, { useEffect, useRef, useState } from "react";
import './home.css';
import { ReactComponent as SvgImage } from '../../../ASET/SVG/SNAPVER.svg'; //cara memanggil gambar svg
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from "animejs";


function Home () {
    //const IMGURL = require("../../../ASET/Home/home.jpg");
    const Logom = require('../../../ASET/SVG/SNAPy.png');
    const Pic1 = require('../../../ASET/Images/home.jpg');
    const Pic2 = require('../../../ASET/Images/biarawati.JPG');
    const Pic3 = require('../../../ASET/Images/words1.jpg');
    const Pic4 = require('../../../ASET/Images/words2.jpg');
    const Pic5 = require('../../../ASET/Images/story katedral2.jpg');
    const Pic6 = require('../../../ASET/Images/lukisanputih.jpg');
    const Pic7 = require('../../../ASET/Images/miniatur.jpg');
    const Pic8 = require('../../../ASET/Images/lamp.jpg');
    const Pic9 = require('../../../ASET/Images/patung.jpg');
    const Pic10 = require('../../../ASET/Images/hands.jpg');
    const Pic11 = require('../../../ASET/Images/piano.jpg');


    const [cursorPosition, setCursorPosition] = useState({x:0, y:0});
    useEffect(() => {
        anime({
          targets: "#bg-home img",
          translateX: -cursorPosition.x,
          translateY: -cursorPosition.y,
          duration: 1000,
          easing: 'easeOutQuad',
        });
      }, [cursorPosition]);

    return (
        <div id="Home" onMouseMove={(event)=>{
            let movement_x = event.clientX * 0.05;
            let movement_y = event.clientY * 0.05;
            setCursorPosition({x: movement_x, y: movement_y})
          }}>
            <section id="top">
            <div class="external">
                <div class="horizontal-scroll-wrapper">
                    <div class="img-wrapper slower">
                        <img src={Pic1} alt="" className="m3"/>
                    </div>

                    <div class="img-wrapper faster">
                        <img src={Pic2} alt="" className="m3"/>
                    </div>

                    <div class="img-wrapper slower vertical">
                        <img src={Pic3} alt="" className="m3"/>
                    </div>

                    <div class="img-wrapper slower slower-down">
                        <img src={Pic4} alt="" className="m3"/>
                    </div>

                    <div class="img-wrapper">
                        <img src={Pic5} alt="" className="m3"/>
                    </div>

                    <div class="img-wrapper slower">
                        <img src={Pic6} alt="" className="m3"/>
                    </div>

                    <div class="img-wrapper faster1">
                        <img src={Pic7} alt="" className="m3"/>
                    </div>
                    
                    <div class="img-wrapper slower slower2">
                        <img src={Pic8} alt="" className="m3"/>
                    </div>
                    
                    <div class="img-wrapper">
                        <img src={Pic9} alt="" className="m3"/>
                    </div>
                    
                    <div class="img-wrapper slower">
                        <img src={Pic10} alt="" className="m3"/>
                    </div>
                    
                    <div class="img-wrapper slower last">
                        <img src={Pic11} alt="" className="m3"/>
                    </div>
                </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-anchor-placement="0">
                    <SvgImage id='logovertical'/>
                    <object id="background-logo"></object>
                </div>
                <div id="logoo">
                    <img src={Logom} alt="" id="logoje" />
                </div>
                <div id="credit">
                    <p>Credit by <strong>MOYSHI</strong></p>
                </div>
            </section>
            
        </div>
    );
}

AOS.init();

export default Home;