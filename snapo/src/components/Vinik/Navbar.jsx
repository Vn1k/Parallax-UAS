import React from "react";
import './nabar.css';
import { ReactComponent as Lognav } from '../../ASET/SVG/LOGO_SNAPO.svg';

function Navbar () {
    return (
        <div id="navbar">
            <nav>
                <div id="nav-title">
                    <Lognav/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;