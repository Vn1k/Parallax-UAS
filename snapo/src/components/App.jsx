import React from "react";
import Navbar from "../components/Vinik/Navbar";    
import AboutUs from "../components/NAS/AboutUs";
import core from "./NAS/core";
// import Tipo from "./Calista/Tipo";

function App()
{
    return (
        <div>
            <Navbar />
            <AboutUs/>
            {/* <Tipo /> */}
        </div>
    )
}

export default App;