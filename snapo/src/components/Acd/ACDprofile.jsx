import React, { useContext } from "react";
import { NameContext } from "./AboutUs";
import BackButton from "./BackButton";

function ACDprofile() {
  const { name, setName, aboutIndividualRef } = useContext(NameContext);

  function handleResetClick() {
    setTimeout(() => {
      setName(null);
      aboutIndividualRef.current.classList.add("Invisible");
    },1500);
    aboutIndividualRef.current.style.left = "100%";
    document.body.style.overflow = "scroll";

  }

  return (
    <>
      <BackButton onClick={handleResetClick} />
        
    </>
  );
}

export default ACDprofile;
