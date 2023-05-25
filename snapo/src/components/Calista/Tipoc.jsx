import React from "react";
import "./calista.css";

function Tipoc(props){
    return (
        <>
        <div id="cardTipoc">
                <div id="headingTipoc">{props.title}</div>
                <div id="textTipoc">{props.text}</div>
<<<<<<< HEAD
                <div id="caltipocimage1">
                    <img id="caltipocimg1" src={props.img1} />
                </div>
                <div id="caltipocimage2">
                    <img id="caltipocimg2" src={props.img2} />
                </div>
                <div id="line"></div>
=======
                <div id="image1"><img id="img1" src={props.img1} /></div>
                <div id="image2"><img id="img2" src={props.img2} /></div>
                <div id="line"><div class="line"></div></div>
>>>>>>> bbb0c769e58f69c6cc14738b6de2edb9e7ffd7a1
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