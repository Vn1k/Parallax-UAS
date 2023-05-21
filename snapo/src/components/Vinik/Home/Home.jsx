import React from "react";
import './home.css';

function Home () {

    const IMGURL = require("../../../ASET/Home/home2.jpg");
    return (
        <div id="Home">
            <div>
                <img src={IMGURL} alt="" id="img-home"/>
            </div>
        </div>
    );
}

export default Home;