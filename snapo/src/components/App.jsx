import React from "react";
import Navbar from "../components/Vinik/Navbar";    
import AboutUs from "../components/NAS/AboutUs";
import core from "./NAS/core";
import Tipoc from "./Calista/Tipoc";
import Tipo3 from "./Acd/Tipo3";
import Typo1 from "./Ravin/Typo1";
import Tipo2 from "./Acd/Tipo2";

function App()
{
    return (
        <div>
            <Navbar />
            <Tipo3 />
            <Typo1/>
            <Tipoc />
            <Tipo2 />
            <AboutUs/>
            {document.addEventListener("turbolinks:load", core())}
        </div>
    )
}

export default App;