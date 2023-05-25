import React from "react";
import './home.css';
import { ReactComponent as SvgImage } from '../../../ASET/SVG/SNAPOsv.svg'; //cara memanggil gambar svg
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home () {
    const IMGURL = require("../../../ASET/Home/home.jpg");

    return (
        <div id="Home">
            <div data-aos="fade-up" data-aos-easing="ease-out-sine">
                <img src={IMGURL} alt="" id="img-home"/>
            </div>
            <div>
                <SvgImage data-aos="fade-up" data-aos-easing="ease-out-sine" id='logovertical'/>
                <object data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-anchor-placement="center-center" id="background-logo"></object>
            </div>
            <div id="credit">
                <p>Credit by <strong>MOYSHI</strong></p>
            </div>
        </div>
    );
}

AOS.init();

export default Home;