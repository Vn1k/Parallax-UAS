import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

window.addEventListener('mousemove', function(event) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const mousePositionX = event.clientX;
    const mousePositionY = event.clientY;
    const panAmountX = (mousePositionX / screenWidth) * 0.5; // Adjust the pan speed as needed
    const panAmountY = (mousePositionY / screenHeight) * 0.1; // Adjust the pan speed as needed
  
    document.body.style.transform = `translate(-${panAmountX}%, -${panAmountY}%)`;
  });
  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);