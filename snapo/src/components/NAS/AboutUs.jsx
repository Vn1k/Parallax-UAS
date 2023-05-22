import React, { useEffect } from "react";
import leftrightanimation from "./leftrightanimation";
import Individuals from "./Individuals";

function AboutUs(){
    useEffect(() => {
        leftrightanimation();
    }, []);
    
    return(
        <div id="about-us">
            <Individuals/>
        </div>
    )
}

export default AboutUs;