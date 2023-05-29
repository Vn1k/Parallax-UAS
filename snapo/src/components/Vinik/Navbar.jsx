import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import 'animate.css';
import "./nabar.css";
import {
  handleScroll,
} from "./navbarFunction";

function Navbar() {
  const [digitalTime, setDigitalTime] = useState(null);
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

  // const jamBerjalan = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://worldtimeapi.org/api/timezone/Asia/jakarta'
  //     );
  //     const jsonData = await response.json();
  //     if(digitalTime){
  //       setDigitalTime(null);
  //     } else {
  //       const dateTime = jsonData.utc_datetime;
  //       const transformedTime = new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //       setDigitalTime(transformedTime);
  //       console.log(jsonData.utc_datetime);
  //     }
  //   } catch (error) {
  //     console.log('An error occurred:', error);
  //   }
  // };

  // setInterval(jamBerjalan, 1000);

  return (
    <nav className={`fixed z-10 w-full px-8 md:px-auto ${isNavbarVisible ? "fade-in" : "fade-out"}`}>
      <div className="md:h-20 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1">
          <Link to="snapo" smooth={true} duration={5000}>
            <img src={LogoSnap} className="w-40 ot" alt="Logo" />
          </Link>
        </div>
        <div id="JamBerjalan">
          {digitalTime ? (
            <div id="DIGITALTIME">
              <div key={digitalTime}>{digitalTime}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="text-gray-500 order-2 w-full md:w-auto md:order-2">
          <ul className="flex justify-between text-2xl">
            <li className="md:px-4 md:py-2">
              <Link to="top" smooth={true} duration={5000}className="ot">Home</Link>
            </li>
            <li className="md:px-4 md:py-2">
              <Link to="gallery" smooth={true} duration={5000} className="ot">Gallery</Link>
            </li>
            <li className="md:px-4 md:py-2">
              <Link to="c381" smooth={true} duration={5000}className="ot">Credit</Link>
            </li>
            <li className="md:px-4 md:py-2">
              <Link to="about-us" smooth={true} duration={5000} className="ot">About Us</Link>
            </li>
            <li className="md:px-4 md:py-2">
              <Link to="Footer" smooth={true} duration={5000}className="ot animate__bounceOutDown">References</Link>
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
