import React from "react";
import HeaderUpMolecules from "../moleculess/headerMolecules/headerUpMolecules";
import HeaderDownMolecules from "../moleculess/headerMolecules/headerDownMolecules";
import HeaderGradient from "../moleculess/headerMolecules/headerGradient";

const Header = () => {
  return (
    <div className="w-full h-[117px] ">
      <HeaderUpMolecules />
      <HeaderGradient />
      <HeaderDownMolecules />
    </div>
  );
};

export default Header;
