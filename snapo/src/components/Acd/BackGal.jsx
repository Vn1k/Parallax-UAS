import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './Backgal.css';

function BackGal({ onClick }) {
  return <button onClick={onClick}><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ color: "#fff" }} id="buttonz"/></button>;
}

export default BackGal;