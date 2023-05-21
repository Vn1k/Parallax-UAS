import React from "react";

function Tipo1(){
    const IMGURL = require("../../ASET/Images/hands1.jpg");
    // reaksi jujur gw pas tau harus dikasih require: oalahh 😅😅 zizizizi hebat vin
    return(
        <div id="ravin">
            <div id="garisatas"></div>
            <h1 id="judul">THREADS</h1>
            <h2 id="tulisan">Threads become tangled, intertwined, broken off, unraveld. They constanly reflect a part of my mental state, as if they were expressing the state of human relationships.</h2>
            <h2 id="tahun">2019</h2>
            <div id="kotak1"></div>
            {/* persegi panjang kebawah */}
            <div id="gariskotak"></div>
            {/* yang nempel di foto */}
            <div id="lingkaran"></div>
            {/* dibawah foto */}
            <div id="gariskecil"></div> 
            {/* dibawah tulisan */}
            <div id="hands">
                <img src={IMGURL} alt="hands"/>
            </div>
        </div>
    );
}

export default Tipo1;