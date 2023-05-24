import React from "react";

function Tipoc(props){
    return (
        <div id="card">
                <div id="heading">{props.title}</div>
                <div id="text">{props.text}</div>
                <div id="image1"><img id="img1" src={props.img1} /></div>
                <div id="image2"><img id="img2" src={props.img2} /></div>
                <div id="line"><div class="line"></div></div>
                <div id="line123">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <div id="line45">
                    <div class="line4"></div>
                    <div class="line5"></div>
                </div>
                <div id="allDot">
                    <div class="dot1"></div>
                    <div class="dot2"></div>
                    <div class="dot3"></div>
                </div>
        </div>
    );
}

export default Tipoc;