import React from "react";
import FooterLogos from "../moleculess/footerMolecules/footerLogos";

const FooterDown = () => {
  return (
    <div>
      <div className="w-full h-[350px] flex flex-col justify-center items-center  ">
        <div className="flex justify-center  items-center">
          <FooterLogos />
        </div>
        <div className="mt-[50px]">
          <ul className="flex gap-10 justify-center items-center">
            <li className="font-bold text-white">HOME</li>
            <li className="font-bold text-white">PHONES</li>
            <li className="font-bold text-white">ABOUT</li>
            <li className="font-bold text-white">CONTACT</li>
          </ul>
        </div>
        <div className="flex  justify-center mt-[50px] items-center">
          <p className=" text-white">
            © 2024 ThemeSphere. Designed by ThemeSphere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterDown;
