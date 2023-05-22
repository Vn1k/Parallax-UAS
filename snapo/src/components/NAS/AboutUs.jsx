import React from "react";
import core from "./core";
import Individuals from "./Individuals";

function AboutUs(){
    return(
        <div id="about-us">
            <h1>About Us</h1>
            <Individuals/>
            {document.addEventListener("turbolinks:load", core())}
        </div>
    )
}

export default AboutUs;