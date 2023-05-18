import React from "react";
import Typo1 from "./Typo1";
import tipo1 from "./tipo1";    

export default function Tipo1(){
    const data = tipo1.map((item) => (
        <Typo1 judul={item.judul} text={item.text} tahun={item.tahun} gmbr={item.img1}/>
    ));
    return(
        <div id="Tipo1">
            {data}
        </div>
    );
}