import React from "react";
import BodyMoleculesLeft from "../moleculess/bodyMolecules/bodyMoleculesLeft";
import BodyMolekulesRight from "../moleculess/bodyMolecules/bodyMolekulesRight";
import HeaderGradient from "../moleculess/headerMolecules/headerGradient";

const Body = () => {
  return (
    <>
      <div className="flex h-[3000px] mt-[20px] px-[50px]">
        <BodyMoleculesLeft />
        <BodyMolekulesRight />
      </div>
      <div>
        <HeaderGradient />
      </div>
    </>
  );
};

export default Body;
