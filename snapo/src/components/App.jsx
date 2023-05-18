import React from "react";
import Navbar from "../components/Vinik/Navbar";    
import AboutUs from "../components/NAS/AboutUs";
import core from "./NAS/core";

function App()
{
    return (
        <div>
            <Navbar />
                <h1 className="besok">Besok siang hari</h1>
            <AboutUs/>
            {document.addEventListener("turbolinks:load", core())}
        </div>
    );
}

export default App;