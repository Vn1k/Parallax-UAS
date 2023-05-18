import React from "react";

function Tipo1(item){
    return(
        <div id="container">
            <div id="hands">
                <img src={item.gmbr}/>
            </div>
            <h1 id="judul">{item.judul}</h1>
            <h1 id="text">{item.text}</h1>
            <h1 id="tahun">{item.tahun}</h1>
        </div>
    );
}

export default Tipo1;