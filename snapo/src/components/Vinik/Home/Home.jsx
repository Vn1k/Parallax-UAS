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
      targets: "#bg-image-about-us img",
      translateX: -cursorPosition.x,
      translateY: -cursorPosition.y,
      duration: 1000,
      easing: 'easeOutQuad',
    });
  }, [cursorPosition]);

    return (
        <div id="Home">
            <div onMouseMove={(event)=>{
                let movement_x = event.clientX * 0.05;
                let movement_y = event.clientY * 0.05;
                setCursorPosition({x: movement_x, y: movement_y})
            }}>
                <div id="bg-home">
                    <img className="selectDis" draggable="false" style={{position: "absolute", top: -cursorPosition.y, left: -cursorPosition.x}} src={IMGURL} alt=""/>
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
        </div>
    );
}

AOS.init();

export default Home;