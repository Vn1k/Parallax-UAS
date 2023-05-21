import React from "react";
import './nabar.css';

function Navbar () {
    return (
        <div id="navbar">
            <div id="logo">
                <img src="/snapo/src/ASET/SVG/SNAPO WHITE.png" className="Navbar-logo" alt="logo" />
            </div>
            <div id="nav-link">
                <a href="#top">Home</a>
                <a href="">Work</a>
                <a href="/about">About</a>
                <a href="/contact">Credits</a>
                <a href="/">Gallery</a>
            </div>
        </div>
    );
}

export default Navbar;