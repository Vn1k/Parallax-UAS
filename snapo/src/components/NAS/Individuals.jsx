import React from "react";
import Individual from "./Individual";
import about_us from "./about_us";

function Individuals(){
    const ImgTrack = about_us.map((parameter) => (
        <Individual id={parameter.id} img_path={parameter.img_path}/>
    ));

    return(
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0" className="selectDisable">
            {ImgTrack}
        </div>
    )
}

export default Individuals;