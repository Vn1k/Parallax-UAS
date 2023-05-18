import React from "react";
import Navbar from "../components/Vinik/Navbar";    
import AboutUs from "../components/NAS/AboutUs";
import core from "./NAS/core";
import Tipoc from "./Calista/Tipoc";

function App()
{
    return (
        <div>
            <Navbar />
            <AboutUs/>
            {document.addEventListener("turbolinks:load", core())}
            <Tipoc />
        </div>
    )
}

export default App;