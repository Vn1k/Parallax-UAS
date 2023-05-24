import React from "react";
import './nabar.css';
import { ReactComponent as Lognav } from '../../ASET/SVG/SNAPO.svg';

function Navbar () {
    return (
        <div id="navbar">
            <nav>
                <div id="nav-title">
                    <Lognav/>
                </div>
                <div id="nav-link">
                    <ul>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;