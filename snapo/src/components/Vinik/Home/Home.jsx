import React, { useEffect, useRef, useState } from "react";
import './home.css';
import { ReactComponent as SvgImage } from '../../../ASET/SVG/SNAPVER.svg'; //cara memanggil gambar svg
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from "animejs";


function Home () {
    const IMGURL = require("../../../ASET/Home/home.jpg");
    const Logom = require('../../../ASET/SVG/SNAPy.png');

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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg" alt=""/>
                    </div>

                    <div class="img-wrapper faster">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/antiquedollboy.jpg" alt=""/>
                    </div>

                    <div class="img-wrapper slower vertical">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg" alt=""/>
                    </div>

                    <div class="img-wrapper slower slower-down">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg" alt=""/>
                    </div>

                    <div class="img-wrapper">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg" alt=""/>
                    </div>

                    <div class="img-wrapper slower">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg" alt=""/>
                    </div>

                    <div class="img-wrapper faster1">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg" alt=""/>
                    </div>
                    
                    <div class="img-wrapper slower slower2">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg" alt=""/>
                    </div>
                    
                    <div class="img-wrapper">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg" alt=""/>
                    </div>
                    
                    <div class="img-wrapper slower">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg" alt=""/>
                    </div>
                    
                    <div class="img-wrapper slower last">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg" alt=""/>
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