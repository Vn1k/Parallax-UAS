import React from "react";
import Navbar from "../Vinik/Navbar";

function Gallery3(){
  const gambar1 = require("../../ASET/randomUs/r1.jpg");
  const gambar2 = require("../../ASET/randomUs/r2.jpg");
  const gambar3 = require("../../ASET/randomUs/r3.JPG");
  const gambar4 = require("../../ASET/randomUs/r4.jpg");
  const gambar5 = require("../../ASET/randomUs/r5.JPG");
  const gambar6 = require("../../ASET/randomUs/r6.JPG");
  const gambar7 = require("../../ASET/randomUs/r7.JPG");
  const gambar8 = require("../../ASET/randomUs/r8.JPG");
  const gambar9 = require("../../ASET/randomUs/r9.JPG");
  const gambar10 = require("../../ASET/randomUs/r10.JPG");
  const gambar11 = require("../../ASET/randomUs/r11.JPG");
  const gambar12 = require("../../ASET/randomUs/r12.JPG");
  const gambar13 = require("../../ASET/randomUs/r13.jpg");
  const gambar14 = require("../../ASET/randomUs/r14.jpg");
  const gambar15 = require("../../ASET/randomUs/r15.JPG");
  const gambar16 = require("../../ASET/randomUs/r16.JPG");
  const gambar17 = require("../../ASET/randomUs/r17.JPG");
  const gambar18 = require("../../ASET/randomUs/r18.JPG");
  const gambar19 = require("../../ASET/randomUs/r19.JPG");
  const gambar20 = require("../../ASET/randomUs/r20.jpg");
  const gambar21 = require("../../ASET/randomUs/r21.jpg");
  const gambar22 = require("../../ASET/randomUs/r22.jpg");
  const gambar23 = require("../../ASET/randomUs/r23.jpg");
  const gambar24 = require("../../ASET/randomUs/r24.jpg");
  const gambar25 = require("../../ASET/randomUs/r25.jpg");
  const gambar26 = require("../../ASET/randomUs/r26.jpg");
  
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
                <img id="twtwos" src={gambar24}/>
                <img id="twos" src={gambar2}/>
                <img id="fourts" src={gambar14}/>
                <img id="fives" src={gambar6}/>
                <img id="sevents" src={gambar18}/>
                <img id="eightss" src={gambar19}/>
                <img id="ninets" src={gambar20}/>
                <img id="sixts" src={gambar17}/>
            </div>

            <div class="dream">
                    <img id="twfours" src={gambar26}/>
                    <img id="threes" src={gambar3}/>
                    <img id="sevens" src={gambar8}/>
                    <img id="eights" src={gambar9}/>
                    <img id="tens" src={gambar12}/>
                    <img id="twntys" src={gambar21}/>
                    <img id="twones" src={gambar22}/>
                    <img id="twfifs" src={gambar23}/>
                    <img id="twsixs" src={gambar7}/>
            </div>

            <div class="dream">
                    <img id="ones" src={gambar1}/>
                    <img id="elevens" src={gambar4}/>
                    <img id="fours" src={gambar10}/>
                    <img id="thrds" src={gambar13}/>
                    <img id="sixs" src={gambar16}/>
                    <img id="twlvs" src={gambar5}/>
                    <img id="fifs" src={gambar15}/>
                    <img id="nines" src={gambar11}/>
                    <img id="twtres" src={gambar25}/>
             </div>
          </div>
        </div>
  );
}

export default Gallery3;