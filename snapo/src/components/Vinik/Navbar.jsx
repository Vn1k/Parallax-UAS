import React, { useState, useEffect } from "react";
import "./nabar.css";
import { ReactComponent as Lognav } from "../../ASET/SVG/SNAPO.svg";
import {
  handleScroll,
  toggleDropdown,
  closeDropdown,
  handleLogoHover,
  handleLogoLeave,
} from "./navbarFunction";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll(setIsNavbarVisible, setPrevScrollPos, prevScrollPos));
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll(setIsNavbarVisible, setPrevScrollPos, prevScrollPos));
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed py-4 px-8 ${isNavbarVisible ? "visible" : "hidden"}`}
      id="navbar"
    >
      <div className="flex items-center justify-between">
        <ul className={`flex space-x-4 ${showDropdown ? "active" : ""}`}>
          <li>
            <a href="#AboutUs" className="text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Home
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
              Credit
            </a>
          </li>
        </ul>
        <div
          className={`flex items-start mr-4 ${
            isLogoHovered ? "cursor-pointer" : ""
          }`}
          onMouseEnter={handleLogoHover(windowWidth, setIsLogoHovered)}
          onMouseLeave={handleLogoLeave(setIsLogoHovered)}
        >
          <Lognav className="h-8 w-8" id="logo" />
          {showDropdown && (
            <ul className="absolute mt-8 bg-white p-2 shadow">
              <li>
                <a href="#AboutUs" className="text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800">
                  Snapo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800">
                  Credit
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
