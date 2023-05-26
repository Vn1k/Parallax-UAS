import React from "react";
import './home.css';
import { ReactComponent as SvgImage } from '../../../ASET/SVG/SNAPVER.svg'; //cara memanggil gambar svg
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home () {
    const IMGURL = require("../../../ASET/Home/home.jpg");
    const Logo = require('../../../ASET/SVG/SNAPO.png');
    return (
        <div id="Home">
            <div>
                <img src={IMGURL} alt="" id="img-home"/>
            </div>
            <div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-anchor-placement="0">
                <SvgImage id='logovertical'/>
                <object id="background-logo"></object>
            </div>
            <div id="credit">
                <p>Credit by <strong>MOYSHI</strong></p>
            </div>
        </div>
    );
}

AOS.init();

export default Home;