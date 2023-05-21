import React from "react";
import './home.css';

function Home () {
    const IMGURL = require("../../../ASET/Home/home.jpg");
    return (
        <div id="Home">
            <div>
                <img src={IMGURL} alt="" id="img-home"/>
            </div>
            <div id="credit">
                <h2>Credit by <strong>MOYSHI</strong></h2>
            </div>
        </div>
    );
}

export default Home;