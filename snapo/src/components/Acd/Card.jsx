import React from "react";

function Card(param)
{
    return (
        <div id="card">
          <img src={param.imgURL} alt="" />
        </div>
    );
}

export default Card;