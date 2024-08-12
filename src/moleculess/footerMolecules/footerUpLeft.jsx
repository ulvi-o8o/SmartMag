import React from "react";
import FooterUpLeftCard from "./footerUpLeftCard";

const FooterUpLeft = () => {
  return (
    <div>
      <div className="w-[380px] h-[355px] flex gap-7  flex-col  ">
        <div className=" font-semibold  text-xl text-white ">
          <h5>Most Popular</h5>
        </div>
        <FooterUpLeftCard />
        <FooterUpLeftCard />
        <FooterUpLeftCard />
      </div>
    </div>
  );
};

export default FooterUpLeft;
