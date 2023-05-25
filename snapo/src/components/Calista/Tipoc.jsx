import React from "react";
import "./calista.css";

function Tipoc(props){
    return (
        <>
        <div id="cardTipoc">
            <div id="tulisantipoc">
                <div id="headingTipoc">{props.title}</div>
                <div id="textTipoc">{props.text}</div>
                <div id="linecaltipoc"></div>
            </div>
                <div id="caltipocimage1">
                    <img id="caltipocimg1" src={props.img1} />
                </div>
                <div id="caltipocimage2">
                    <img id="caltipocimg2" src={props.img2} />
                </div>
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
        </>
    );
}

export default Tipoc;