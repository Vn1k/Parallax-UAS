<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import Navbar from "../components/Vinik/Navbar";
=======
//ini komponen untuk nyusun pages main menu
//Pages
import React from "react";
import Navbar from "../components/Vinik/Navbar";    
>>>>>>> Stashed changes
import AboutUs from "../components/NAS/AboutUs";

import Tipo3 from "./Acd/Tipo3";
import Typo1 from "./Ravin/Typo1";
import CardTipoc from "./Calista/CardTipoc";
import Home from "./Vinik/Home/Home";
import Tipo2 from "./Acd/Tipo2";
import Gallery from "./Ravin/Gallery";
import Work from "./Acd/Work";
import CardCredit from "./Calista/CardCredit";
import Footer from "./Ravin/Footer";
<<<<<<< Updated upstream
import Gallery1 from "./Ravin/Gallery1"; //ini yang di link
import Gallery2 from "./Ravin/Gallery2"; //ini yang di link
=======
>>>>>>> Stashed changes
import { ScrollProvider } from "./ScrollContext";
import LoadingScreen from './LoadingScreen';

<<<<<<< Updated upstream
function App() {
  return (
    <>
      <LoadingScreen/>
      <ScrollProvider>
        <Navbar />
        <Home />
        <Tipo3 />
        <Typo1 />
        <CardTipoc />
        <Tipo2 />
        <CardCredit />
        <Gallery />
        <Work />
        <AboutUs />
        <Footer />
      </ScrollProvider>
    </>
  );
}

export default App;
=======
function HomeMenu()
{
    return (
        <ScrollProvider>
            <Navbar/>{/* <Navbar/> */}
            <Home/> {/* Corrected Finished */}
            <Tipo3 /> {/* Corrected Finished */}
            <Typo1/> {/* Corrected Finished */}
            <CardTipoc /> 
            {/* <Tipo2/> */}
            {/* <Work/> */}
            <CardCredit />
            {/* <Tipoc />  */}
            {/* <Credita /> */}
            <Gallery/>
            <Work/>
            <AboutUs/> {/* Corrected Unfinished*/}
            <Footer/>
        </ScrollProvider>
    )
}

export default HomeMenu;
>>>>>>> Stashed changes
