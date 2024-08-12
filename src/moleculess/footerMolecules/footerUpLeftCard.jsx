import React from "react";
import { GiFlame } from "react-icons/gi";
import TopPostImage from "../../atom/topPostImage";

const FooterUpLeftCard = () => {
  return (
    <div>
      <div className="flex w-[450px] h-[71px] ">
        <TopPostImage />
        <div className="flex flex-col ml-[12px]">
          <div className="text-white">
            <h3 className=" font-semibold text-[16px]">
              Popular New Xbox Game Pass <br /> Game Being Review Bombed <br />{" "}
              With “0s”
            </h3>
          </div>
          <div className=" flex flex text-white row gap-3 ">
            <p>Jan 14, 2021</p>
            <GiFlame className="text-red-600" />
            <span className="text-red-600">7,792 Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUpLeftCard;
