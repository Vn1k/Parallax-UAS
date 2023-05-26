import React from "react";

function Tipo1(){
    const IMGURL = require("../../ASET/Images/hands1.jpg");
    // reaksi jujur gw pas tau harus dikasih require: oalahh 😅😅 zizizizi hebat vin
    return(
        <div id="ravin">
            <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="-390" data-aos-anchor-placement="top-center" id="garisatas"></div>
            <h1 data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="-350" data-aos-anchor-placement="top-center" id="judul">THREADS</h1>
            <h1 data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="-350" data-aos-anchor-placement="top-center" id="awaw">"</h1>
            <h2 data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-offset="-300" data-aos-anchor-placement="top-center" id="tulisan">Threads become tangled, intertwined, broken off, unraveld. They constanly reflect a part of my mental state, as if they were expressing the state of human relationships.</h2>
            <h2 data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="-450" data-aos-anchor-placement="top-center" id="tahun">2019</h2>
            <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="-325" data-aos-anchor-placement="top-center" id="kotak1"></div>
            {/* persegi panjang kebawah */}
            <div data-aos="fade-down" data-aos-easing="ease-out-sine" data-aos-offset="200" data-aos-anchor-placement="top-center" id="gariskotak"></div>
            {/* yang nempel di foto */}
            <div data-aos="fade-down" data-aos-easing="ease-out-sine" data-aos-offset="-200" data-aos-anchor-placement="top-center" id="lingkaran"></div>
            {/* dibawah foto */}
            <div data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-offset="-400" data-aos-anchor-placement="top-center" id="gariskecil"></div> 
            {/* dibawah tulisan */}
            <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-offset="500" data-aos-anchor-placement="top-center" id="hands">
                <img src={IMGURL} alt="hands"/>
            </div>
        </div>
    );
}

export default Tipo1;