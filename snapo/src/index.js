import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
import Routing from "./components/Routing/Routing";
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Routing/>
    </React.StrictMode>
);