import React from "react";
import Navbar from "../components/Vinik/Navbar";    
import AboutUs from "../components/NAS/AboutUs";
import core from "./NAS/core";
<<<<<<< HEAD
import Tipo3 from "./Acd/Tipo3";
=======
// import Tipo from "./Calista/Tipo";
>>>>>>> d4e2790d32300de76141941f90e0fd9580c2dad2

function App()
{
    return (
        <div>
            <Navbar />
                <h1 className="besok">Besok siang hari</h1>
            <AboutUs/>
            {document.addEventListener("turbolinks:load", core())}
<<<<<<< HEAD
            <Tipo3 />
=======
            {/* <Tipo /> */}
>>>>>>> d4e2790d32300de76141941f90e0fd9580c2dad2
        </div>
    );
}

export default App;