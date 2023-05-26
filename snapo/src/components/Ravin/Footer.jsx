import React from "react";

function Footer(){
    const gmbrf = require("../../ASET/Images/footer.jpg");
    return(
       <div id="Footer">
            <div>
                <img id="gm" src={gmbrf} alt="gambarfooter" />
            </div>
            <div id="desc">
                <h1 id="jfoot">Lorem Ipsum</h1>
                <p id="dfoot">Lorem ipsum dolor sit amet duadba jandw jsbdwb ndjwdw iqjsi ihdiq ajbabd ihsiq.</p>
            </div>
            <div id="footerw">
                <div>
                    <p id="Ref1">References1</p>
                </div>
                <div>
                    <p id="Ref2">References2</p>
                </div>
                <div>
                    <p id="Ref3">References3</p>
                </div>
                <div>
                    <p id="Ref4">References4</p>  
                </div>            
            </div>
       </div> 
    );
}

export default Footer;