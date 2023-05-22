import React from "react";
import individualsdata from "./individualsdata";
import Individual from "./Individual";

function Individuals(){
    const ImgTrack = individualsdata.map((parameter) => (
        <Individual id={parameter.id} img_path={parameter.img_path} individual_name={parameter.name}/>
    ));

    return(
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0" className="selectDisable">
            {ImgTrack}
        </div>
    )
}

export default Individuals;