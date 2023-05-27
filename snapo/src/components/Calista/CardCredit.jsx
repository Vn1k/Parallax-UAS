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




// import React from "react";
// import Credita from "./Credita";
// import conCredit from "./conCredit";

// function createCard(conCredit, {changeImage}){
//     const katedral = conCredit.map((props) => (
//         <Credita 
//         newImage={props.newImage} 
//         {...props} 
//         changeImage={changeImage} 
//         /> 
//     ));

//     return(
//         <Credita
//         img3={conCredit.img3}

//         imgkatedral1={conCredit.imgkatedral1}
//         imgkatedral2={conCredit.imgkatedral2}
//         imgkatedral3={conCredit.imgkatedral3}
//         imgkatedral4={conCredit.imgkatedral4}
        
//         title1={conCredit.title1}
//         title4={conCredit.title4}
//         text1={conCredit.text1}
//         title2={conCredit.title2}
//         title5={conCredit.title5}
//         text2={conCredit.text2}
//         title3={conCredit.title3}
//         title6={conCredit.title6}
//         text3={conCredit.text3}   
//         ></Credita>
//     );
// }

// function CardCredit(){
//     return (
//         <>
//             {conCredit.map(createCard)}
//         </>
//     )
// }

// export default CardCredit;
