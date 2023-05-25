import React from "react";
import Navbar from "../components/Vinik/Navbar";    
import AboutUs from "../components/NAS/AboutUs";
import Tipo3 from "./Acd/Tipo3";
import Typo1 from "./Ravin/Typo1";
import Tipoc from "./Calista/Tipoc";
import CardTipoc from "./Calista/CardTipoc";
import Home from "./Vinik/Home/Home";
import Tipo2 from "./Acd/Tipo2";
import Gallery from "./Ravin/Gallery";
import Work from "./Acd/Work";
import CardCredit from "./Calista/CardCredit";
import Footer from "./Ravin/Footer";

function App()
{
    return (
        <>
            <Navbar/>{/* <Navbar/> */}
            <Home/> {/* Corrected Finished */}
            <Tipo3 /> {/* Corrected Finished */}
            <Typo1/> {/* Corrected Finished */}
            <CardTipoc /> 
            <Tipo2 /> {/* Corrected Finished */}
            {/* <Work/> */}
            <CardCredit />
            <AboutUs/> {/* Corrected Unfinished*/}
            {/* <Tipoc />  */}
            <Tipo2 /> {/* Corrected Finished */}
            {/* <Credita /> */}
            <Gallery/>
            <Work/>
            <AboutUs/> {/* Corrected Unfinished*/}
            {/* <Footer/> */}
        </>
    )
}

export default App;