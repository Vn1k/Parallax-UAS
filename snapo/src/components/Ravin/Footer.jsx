import React from "react";

function Footer(){
    const gmbrf = require("../../ASET/Images/footer.jpg");
    return(
       <div id="Credit">
            <h1 id="jfoot">Lorem Ipsum</h1>
            <p id="dfoot">Lorem ipsum dolor sit amet duadba jandw jsbdwb ndjwdw iqjsi ihdiq ajbabd ihsiq.</p>
            <p id="Ref1">References1</p>
            <p id="Ref2">References2</p>
            <p id="Ref3">References3</p>
            <p id="Ref4">References4</p>
            <div id="vert"></div>
            <div id="hor"></div>
            <div id="gm">
                <img src={gmbrf} alt="ppics"/>
            </div>
       </div> 
    );
}

export default Footer;