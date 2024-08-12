import React from "react";
import FooterUpLeft from "../moleculess/footerMolecules/footerUpLeft";
import FooterUpMiddle from "../moleculess/footerMolecules/footerUpMiddle";
import FooterSubscribe from "../moleculess/footerMolecules/footerSubscribe";

const FooterUp = () => {
  return (
    <div>
      <div className="w-full h-[400px] bg-gray-900 flex justify-evenly items-center  ">
        <FooterUpLeft />
        <FooterUpMiddle />
        <FooterSubscribe />
      </div>
    </div>
  );
};

export default FooterUp;
