import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import core from "./components/NAS/core";
import Tipoc from "./components/Calista/Tipoc";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);