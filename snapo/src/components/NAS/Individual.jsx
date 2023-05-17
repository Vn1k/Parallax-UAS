import React from "react";

function Individual(parameter){
    return(
        <img id={parameter.key} src={parameter.img_path} draggable="false"/>
    )
}

export default Individual;