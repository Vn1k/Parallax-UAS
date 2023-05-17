import React from "react";
import Individual from "./Individual";
import about_us from "./about_us";

function Individuals(){
    const ImgTrack = about_us.map((parameter) => (
        <Individual id={parameter.id} img_path={parameter.img_path}/>
    ));

    return(
        <div id="a">
            {ImgTrack}
        </div>
    )
}

export default Individuals;