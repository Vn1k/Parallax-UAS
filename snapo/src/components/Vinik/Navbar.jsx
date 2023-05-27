import React, { useState, useEffect } from "react";
import "./nabar.css";
import Footer from "../Ravin/Footer";
import AboutUs from "../NAS/AboutUs";
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
          <a href=""><img src={LogoSnap} className="w-40" alt="Logo" /></a>
        </div>
        <div className="text-gray-500 order-2 w-full md:w-auto md:order-2">
          <ul className="flex justify-between text-2xl">
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400"><a href="#AboutUs">About Us</a></li>
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400"><a href="#">Gallery</a></li>
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400"><a href="">Credit</a></li>
            <li className="md:px-4 md:py-2 text-white hover:text-indigo-400"><a href="#Footer">References</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
