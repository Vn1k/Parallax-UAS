import React from "react";

function Footer(){
    const gmbrf = require("../../ASET/Images/footer.jpg");
    return(
        
       <div id="Footer">
        <section id="footer">
            <div>
                <img id="gm" src={gmbrf} alt="gambarfooter" />
            </div>
            <div id="desc">
                <h1 id="jfoot">Reference</h1>
                <p id="dfoot">These are the references in the process developing the website.</p>
            </div>
            <div id="footer1">
                <div>
                    <p id="Ref1">figma.com</p>
                </div>
                <div>
                    <p id="Ref2">sliderevolution.com</p>
                </div>
                <div>
                    <p id="Ref3">github.com</p>  
                </div>    
            </div>
            <div id="footer2">
                <div>
                    <p id="Ref1">AnimeJS</p>
                </div>
                <div>
                    <p id="Ref2">TailwindCSS</p>
                </div>
                <div>
                    <p id="Ref3">Animation On Scroll</p>
                </div>
                <div>
                    <p id="Ref4">Font Awesome Icon</p>  
                </div>
                <div>
                    <p id="Ref5">Camille Mormal</p>  
                </div>
                <div>
                    <p id="Ref6">Route</p>  
                </div>            
            </div>
            </section>
       </div> 
       
    );
}

export default Footer;