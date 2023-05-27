import React from "react";
import { useState, useEffect } from "react";

function LoadingScreen(){
    const [loading, setLoading] = useState('Visible');
    const image = require("../ASET/SVG/loadSNAP.png");

    useEffect(()=>{
        window.onload = () => {
            setLoading("Invisible");
          };
    })

    return(
        <div id="loading" className={loading}>
            <img src={image}/>
            <div class="gradient-circle"></div>
            <div class="inner-circle"></div>
        </div>
    )
}

export default LoadingScreen;