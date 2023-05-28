import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import "./nabar.css";
import {
  handleScroll,
} from "./navbarFunction";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const LogoSnap = require("../../ASET/SVG/logoposter.png")

  useEffect(() => {
    const scrollHandler = handleScroll(setIsNavbarVisible, setPrevScrollPos, prevScrollPos);

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`fixed z-10 w-full px-8 md:px-auto ${isNavbarVisible ? "fade-in" : "fade-out"}`}>
      <div className="md:h-20 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1">
          <Link to="snapo" smooth={true} duration={5000}>
            <img src={LogoSnap} className="w-40 ot" alt="Logo" />
          </Link>
        </div>
        <div className="text-gray-500 order-2 w-full md:w-auto md:order-2">
          <ul className="flex justify-between text-2xl">
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400">
              <Link to="about-us" smooth={true} duration={5000} className="ot">About Us</Link>
            </li>
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400">
              <Link to="gallery" smooth={true} duration={5000} className="ot">Gallery</Link>
            </li>
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400">
              <Link to="credit" smooth={true} duration={5000}className="ot">Credit</Link>
            </li>
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400">
              <Link to="footer" smooth={true} duration={5000}className="ot">References</Link>
            </li>
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400">
              <Link to="top" smooth={true} duration={5000}className="ot">Home</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
      </div>
    </nav>
  );
}

export default Navbar;
