import React from "react";
import { useState, useEffect } from "react";

function LoadingScreen(){
    const [loading, setLoading] = useState('');

    useEffect(() => {
    setTimeout(() => {
        setLoading("Invisible");
    }, 5000);
    }, []);

    return(
        <div id="loading" className={loading}>
            <div class="gradient-circle"></div>
            <div class="inner-circle"></div>
        </div>
    )
}

export default LoadingScreen;