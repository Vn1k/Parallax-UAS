import React, { useEffect, useState } from "react";
import Navbar from "../components/Vinik/Navbar";
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
import { ScrollProvider } from "./ScrollContext";
import LoadingScreen from './LoadingScreen';

function App() {
  return (
    <>
      {/* <LoadingScreen/> */}
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
