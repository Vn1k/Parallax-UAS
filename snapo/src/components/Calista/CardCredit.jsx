import React from "react";
import Credita from "./Credita";
import conCredit from "./conCredit";

function createCard(props, changeImage) {
  return (
    <Credita
      {...props}
      changeImage={changeImage}
      newImage={props.newImage}  
    />
  );
}

function CardCredit() {
  const changeImage = (newImage) => {
    console.log("Changing image:", newImage);
  };

  return <>{conCredit.map((props) => createCard(props, changeImage))}</>;
}

export default CardCredit;