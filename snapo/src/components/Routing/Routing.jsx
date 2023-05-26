import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//pages
import Gallery1 from "../Ravin/Gallery1";
import Gallery2 from "../Ravin/Gallery2";
import Gallery3 from "../Ravin/Gallery3";
import App from "../App";
import ScrollToTop from "../Ravin/ScrollToTop";

export default function Routing(){
    return(
        <>
            <Router>
                {/* ini biar komponen ini berlaku ke semua pages */}
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/gallery1" element={<Gallery1/>}/>
                    <Route path="/gallery2" element={<Gallery2/>}/>
                    <Route path="/gallery3" element={<Gallery3/>}/>
                </Routes>
            </Router>
        </>
    );
}