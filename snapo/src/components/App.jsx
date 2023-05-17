import React from "react";
import Individuals from "./NAS/Individuals";
import Navbar from "../components/Vinik/Navbar";                      

function App()
{
    return (
        <div>
            <Navbar />
            <h1 className="besok">Besok siang hari</h1>
            <Individuals/>
        </div>
    );
}

export default App;