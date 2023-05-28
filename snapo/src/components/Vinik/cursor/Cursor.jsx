import React, { useEffect } from "react";
import './cursor.styl';
import Kinet from 'kinet';

export default function Cursor() {
  useEffect(() => {
    var kinet = new Kinet({
      acceleration: 0.06,
      friction: 0.20,
      names: ["x", "y"],
    });

    var circle = document.getElementById('circle');

    kinet.on('tick', function(instances) {
      circle.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
    });

    document.addEventListener('mousemove', function(event) {
      kinet.animate('x', event.clientX - window.innerWidth / 2);
      kinet.animate('y', event.clientY - window.innerHeight / 2);
    });

    kinet.on('start', function() {
      console.log('start');
    });

    kinet.on('end', function() {
      console.log('end');
    });

    return () => {
      document.removeEventListener('mousemove', function(event) {
        kinet.animate('x', event.clientX - window.innerWidth / 2);
        kinet.animate('y', event.clientY - window.innerHeight / 2);
      });
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="wrapper-inner">
          <h1>github.com/gmrchk/kinet</h1>
        </div>
      </div>
      <div id="circle" className="circle"></div>
    </>
  );
}

// Eksekusi efek kursor di seluruh halaman web
function applyCursorEffect() {
  var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });

  var circle = document.getElementById('circle');

  kinet.on('tick', function(instances) {
    circle.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
  });

  document.addEventListener('mousemove', function(event) {
    kinet.animate('x', event.clientX - window.innerWidth / 2);
    kinet.animate('y', event.clientY - window.innerHeight / 2);
  });

  kinet.on('start', function() {
    console.log('start');
  });

  kinet.on('end', function() {
    console.log('end');
  });
}

// Panggil fungsi untuk mengaplikasikan efek kursor
applyCursorEffect();
