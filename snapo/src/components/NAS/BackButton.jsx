import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './backbutton.css';

function BackButton({ onClick }) {
  return <button onClick={onClick}><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ color: "#fff" }} id="buttons"/></button>;
}

export default BackButton;
