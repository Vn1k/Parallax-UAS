import React from "react";
import Navbar from "../components/Vinik/Navbar";    
import AboutUs from "../components/NAS/AboutUs";
import Tipoc from "./Calista/Tipoc";
import Tipo3 from "./Acd/Tipo3";
import Typo1 from "./Ravin/Typo1";
import Home from "./Vinik/Home/Home";
import Tipo2 from "./Acd/Tipo2";
import Gallery from "./Ravin/Gallery"; 
import Credit from "./Ravin/Credit";

function App()
{
    return (
        <div>
            <Navbar/>
            <Home/>
            <Tipo3 />
            <Typo1/>
            <Tipo2 />
            <Gallery/>
            <AboutUs/>
            <Credit/>
        </div>
    )
}

export default App;