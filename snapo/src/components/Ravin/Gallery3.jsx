import React from "react";
import Navbar from "../Vinik/Navbar";

function Gallery3(){
    const gambar1 = require("../../ASET/Images/words.jpg");
    const gambar2 = require("../../ASET/Images/words1.jpg");
    const gambar3 = require("../../ASET/Images/miniatur.jpg");
    const gambar4 = require("../../ASET/Images/story katedral.jpg");
    // const gambar5 = require("../../ASET/Images/piano1.jpg");
    // const gambar6 = require("../../ASET/Images/piano.jpg");

    const blurImages = document.querySelectorAll('.blur-image');

    blurImages.forEach(image => {
      image.addEventListener('mouseover', () => {
        blurImages.forEach(otherImage => {
          if (otherImage !== image) {
            otherImage.classList.add('blur');
          }
        });
      });
  
      image.addEventListener('mouseout', () => {
        blurImages.forEach(otherImage => {
          otherImage.classList.remove('blur');
        });
      });
    });

    return(
        <div id="galcon">
          <Navbar/>
          <div id="groupsatu">
            <div className="satu">
              <img className="blur-image" src={gambar1} alt="Art1"/>
            </div>
            <div className="dua">
              <img className="blur-image" src={gambar2} alt="Art2" />
            </div>
          </div>
          <div id="groupdua">
            <div className="tigadua">
              <img className="blur-image" src={gambar3} alt="Art3" />
            </div>
            <div className="empatdua"> 
              <img className="blur-image" src={gambar4} alt="Art4" />
            </div>
          </div>
        </div>
      );
}

export default Gallery3;