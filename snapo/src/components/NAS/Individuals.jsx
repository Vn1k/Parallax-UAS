import React from "react";
import Individual from "./Individual";
import about_us from "./about_us";

function Individuals(){
    const ImgTrack = about_us.map((parameter) => (
        <Individual src={parameter.img_path}/>
    ));

    return(
        <div id="">
            {ImgTrack}
        </div>
    )
}

export default Individuals;