import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

function BackButton({ onClick }) {
  return <button onClick={onClick}><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ color: "#fff" }} /></button>;
}

export default BackButton;
