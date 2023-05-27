import React from "react";
import Navbar from "../Vinik/Navbar";
import './gallery2.css';

function Gallery2(){
  const gambar1 = require("../../ASET/Images/art colorfull.jpg");
  const gambar2 = require("../../ASET/Images/bingkai.jpg");
  const gambar3 = require("../../ASET/Images/char katedral.jpg");
  const gambar4 = require("../../ASET/Images/home.jpg");
  const gambar5 = require("../../ASET/Images/lukisan.jpg");
  const gambar6 = require("../../ASET/Images/lukisan2.jpg");
  const gambar7 = require("../../ASET/Images/lukisan3.jpg");
  const gambar8 = require("../../ASET/Images/lukisan4.jpg");
  const gambar9 = require("../../ASET/Images/lukisanputih.jpg");
  const gambar10 = require("../../ASET/Images/relief.jpg");
  const gambar11 = require("../../ASET/Images/salib.jpg");
  const gambar12 = require("../../ASET/Images/words1.jpg");
  const gambar13 = require("../../ASET/Images/words.jpg");
  const gambar14 = require("../../ASET/Images/words2.jpg");
  const gambar15 = require("../../ASET/Images/story katedral.jpg");
  
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

  return (
    <div class="containergal">
      <div id="navs">
        <Navbar/>
      </div>
      <div class="box">
            <div class="dream">
                <img id="ones" src={gambar1}/>
                <img id="twos" src={gambar2}/>
                <img id="fours" src={gambar10}/>
                <img id="thrds" src={gambar13}/>
                <img id="sixs" src={gambar7}/>
            </div>

            <div class="dream">
                    <img id="fives" src={gambar6}/>
                    <img id="threes" src={gambar3}/>
                    <img id="sevens" src={gambar8}/>
                    <img id="eights" src={gambar9}/>
                    <img id="tens" src={gambar12}/>
            </div>

            <div class="dream">
                    <img id="nines" src={gambar11}/>
                    
                    <img id="elevens" src={gambar4}/>
                    <img id="fourts" src={gambar14}/>
                    <img id="twlvs" src={gambar5}/>
                    <img id="fifs" src={gambar15}/>
             </div>
          </div>
        </div>
  );
}

export default Gallery2;