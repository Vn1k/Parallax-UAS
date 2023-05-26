import React from "react";
import { useState, useEffect } from "react";

function LoadingScreen(){
    const [loading, setLoading] = useState('');
    const image = require("../ASET/SVG/loadSNAP.png");

    useEffect(() => {
    setTimeout(() => {
        setLoading("Invisible");
    }, 4000);
    }, []);

    return(
        <div id="loading" className={loading}>
            <img src={image}/>
            <div class="gradient-circle"></div>
            <div class="inner-circle"></div>
        </div>
    )
}

export default LoadingScreen;