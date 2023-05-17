import React from "react";
import Hal2 from "./Hal2";

function Hal2(content)
{
    return (
        <div id="background">
            <div id="image">{content.image}</div>
            <h1 id="title">{content.title}</h1>
            <h3 id="isi">{content.isi}</h3>
            <h5 id="name">{content.name}</h5>
        </div>
    );
}

export default Hal2;