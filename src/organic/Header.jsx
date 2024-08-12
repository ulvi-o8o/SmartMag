import React from "react";
import HeaderUpMolecules from "../moleculess/headerMolecules/headerUpMolecules";
// import HeaderDownMolecules from "../moleculess/headerMolecules/headerDownMolecules";
import HeaderGradient from "../moleculess/headerMolecules/headerGradient";
import HomeHeaderDown from "./HomeBody/homeHeaderDown";

const Header = () => {
  return (
    <div className="w-full h-[117px] ">
      <HeaderUpMolecules />
      <HeaderGradient />
      <HomeHeaderDown />
    </div>
  );
};

export default Header;
