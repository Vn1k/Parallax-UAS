import React from "react";
import Navbar from "../components/Vinik/Navbar";    
import AboutUs from "../components/NAS/AboutUs";
import Tipo3 from "./Acd/Tipo3";
import Typo1 from "./Ravin/Typo1";
import Home from "./Vinik/Home/Home";
import Tipo2 from "./Acd/Tipo2";
import Gallery from "./Ravin/Gallery";
import Work from "./Acd/Work"; 
import Footer from "./Ravin/Footer";

function App()
{
    return (
        <>
            {/* <Navbar/> */}
            {/* <Home/> */}
            <Tipo3 /> {/* Corrected Finished*/}
            {/* <Typo1/> */}
            {/* <Tipo2 />  */}
            {/* <Gallery/> */}
            {/* <Work/> */}
            <AboutUs/> {/* Corrected Unfinished*/}
            {/* <Footer/> */}
        </>
    )
}

export default App;