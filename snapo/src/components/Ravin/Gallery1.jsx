import React from "react";
import Navbar from "../Vinik/Navbar";
import './gallery1.css';

function Gallery1(){
    const gambar1 = require("../../ASET/Images/borobudur.jpg");
    const gambar2 = require("../../ASET/Images/jubah.jpg");
    const gambar3 = require("../../ASET/Images/cross.JPG");
    const gambar4 = require("../../ASET/Images/patung.jpg");
    const gambar5 = require("../../ASET/Images/piano.jpg");
    const gambar6 = require("../../ASET/Images/koper.jpg");
    const gambar7 = require("../../ASET/Images/bird.jpg");
    const gambar8 = require("../../ASET/Images/chairroda.JPG");
    const gambar9 = require("../../ASET/Images/gaunmacan.JPG");
    const gambar10 = require("../../ASET/Images/cetak uang.jpg");
    const gambar11 = require("../../ASET/Images/lamp.jpg");
    const gambar12 = require("../../ASET/Images/kursimacan.JPG");
    
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
                  <img id="threes" src={gambar3}/>
                  <img id="fours" src={gambar10}/>   
              </div>

              <div class="dream">
                      <img id="fives" src={gambar6}/>
                      <img id="sixs" src={gambar7}/>
                      <img id="sevens" src={gambar8}/>
                      <img id="eights" src={gambar9}/>
                      
              </div>

              <div class="dream">
                      <img id="nines" src={gambar11}/>
                      <img id="tens" src={gambar12}/>
                      <img id="elevens" src={gambar4}/>
                      <img id="twlvs" src={gambar5}/>
               </div>
            </div>
          </div>
    );
}

export default Gallery1;