import React from "react";

function Card(props){
    return (
        <div id="card">
            <div id="isi">
                <div id="name">{props.name}</div>
                <div id="text">{props.text}</div>
                <img id="img1" src={props.img1} />
                <img id="img2" src={props.img2} />
                <div id="vidcal">{props.vidcal}</div>
            </div>
        </div>
    );
}

export default Card;