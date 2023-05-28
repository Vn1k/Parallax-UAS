import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
import Routing from "./components/Routing/Routing";
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });

const root = ReactDOM.createRoot(document.getElementById('root'));

function updateGradientDegree() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const fullPageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const degree = Math.floor((scrollPosition / fullPageHeight) * -90);
  
    document.body.style.background = `linear-gradient(${degree}deg, rgba(16,12,8,1) 0%, rgba(70,59,18,1) 100%)`;
  }

root.render(
    <React.StrictMode>
        <Routing/>
    </React.StrictMode>
);