import React, { useState, useEffect } from "react";
import "./nabar.css";
import { ReactComponent as Lognav } from "../../ASET/SVG/SNAPO.svg";
import {
  handleScroll,
  scrollToTop
} from "./navbarFunction";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {

    window.addEventListener("scroll", handleScroll(setIsNavbarVisible, setPrevScrollPos, prevScrollPos));

    return () => {
      window.removeEventListener("scroll", handleScroll(setIsNavbarVisible, setPrevScrollPos, prevScrollPos));
    };
  }, [prevScrollPos]);

  return (
    <nav className={`fixed py-4 px-8 ${isNavbarVisible ? "visible" : ""}`} id="navbar">
      <div className="flex items-center justify-between">
        <ul className={`flex space-x-4`}>
          <li>
            <a href="#AboutUs" className="text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Snapo
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Credits
            </a>
          </li>
        </ul>
        <div className={`flex items-start mr-4`}>
          <a href="#top" onClick={scrollToTop}>
            <Lognav className="h-8 w-8" id="logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
