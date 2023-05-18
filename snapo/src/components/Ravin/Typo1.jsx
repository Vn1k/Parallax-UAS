import React from "react";

export default function Tipo1(item){
    return(
        <div id="container">
            <div id="hands">
                <img src={item.gmbr}/>
            </div>
            <h1 id="judul"/>
            <h1 id="text"/>
            <h1 id="tahun"/>
        </div>
    );
}