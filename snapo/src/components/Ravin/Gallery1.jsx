import React from "react";

function Gallery1(){
    const gambar1 = require("../../ASET/Images/art colorfull.jpg");
    const gambar2 = require("../../ASET/Images/relief.jpg");
    const gambar3 = require("../../ASET/Images/lukisan.jpg");
    const gambar4 = require("../../ASET/Images/lukisan2.jpg");
    const gambar5 = require("../../ASET/Images/bingkai.jpg");
    const gambar6 = require("../../ASET/Images/lukisan putih.jpg")
    
    document.addEventListener('DOMContentLoaded', function() {
        var images = document.querySelectorAll('.con img');
      
        images.forEach(function(image) {
          image.addEventListener('mouseover', function() {
            images.forEach(function(img) {
              if (img !== image) {
                img.classList.add('blur');
              }
            });
          });
      
          image.addEventListener('mouseout', function() {
            images.forEach(function(img) {
              img.classList.remove('blur');
            });
          });
        });
      });
      
    return(
        <div class="con">
            <div id="gro">
                <div id="tes1">
                    <img id="Art1" src={gambar1} alt="Art" />
                </div>
                <div>
                    <img id="Art2" src={gambar2} alt="Art" /> 
                </div>
            </div>
            <div id="gro">
                <div>
                    <img id="Art3" src={gambar3} alt="Art" />
                </div>
                <div>
                    <img id="Art4" src={gambar4} alt="Art" /> 
                </div>
            </div>
            <div id="gro">
                <div>
                    <img id="Art5" src={gambar5} alt="Art" />
                </div>
                <div>
                    <img id="Art6" src={gambar6} alt="Art" />
                </div> 
            </div>
        </div>
    );
}

export default Gallery1;