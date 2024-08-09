import React from "react";
import FooterUp from "./footerUp";
import FooterDown from "./footerDown";

const Footer = () => {
  return (
    <div className="w-full h-[750px] flex flex-col bg-black">
      <FooterUp />
      <FooterDown />
    </div>
  );
};

export default Footer;
