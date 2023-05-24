import React from "react";
import './nabar.css';
import { ReactComponent as Lognav } from '../../ASET/SVG/SNAPO.svg';

function Navbar() {
    return (
      <nav className="fixed py-4 px-8" id="navbar">
        <div className="flex items-center justify-between">
            <ul className="flex space-x-4">
                <li>
                <a href="#AboutUs" className="text-white">About Us</a>
                </li>
                <li>
                <a href="#" className="text-white">Home</a>
                </li>
                <li>
                <a href="#" className="text-white">Gallery</a>
                </li>
                <li>
                <a href="#" className="text-white">Snapo</a>
                </li>
                <li>
                <a href="#" className="text-white">Credit</a>
                </li>
            </ul>
            <div className="flex items-start">
                <div className="mr-4">
                    <Lognav className="h-8 w-8" id='logo' />
                </div>
            </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;