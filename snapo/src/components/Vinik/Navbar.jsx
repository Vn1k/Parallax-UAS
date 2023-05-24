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
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Gallery</a>
                        </li>
                        <li>
                            <a>Snapo</a>
                        </li>
                        <li>
                            <a>Credit</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;