import React, { useContext } from "react";
import { NameContext } from "./AboutUs";
import BackButton from "./BackButton";

function NASprofile() {
  const { name, setName, aboutIndividualRef } = useContext(NameContext);

  function handleResetClick() {
    setName(null);
    aboutIndividualRef.current.style.left = "100%";
    // aboutIndividualRef.current.classList.add("Invisible");
    document.body.style.overflow = "scroll";

  }

  return (
    <>
      <BackButton onClick={handleResetClick} />

    </>
  );
}

export default NASprofile;
