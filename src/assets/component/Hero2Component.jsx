import React from "react";
import logo from "../images/logoAjoloteFondo.webp"
const Hero2Component = ({titulo}) => {
  return (
    <div>
      <div className=" hero container">
        <img src={logo} className="arriba" alt="logo" />
        <h1>{titulo}</h1>
        <img className="abajo" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Hero2Component;
