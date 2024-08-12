import React from "react";
import { GiFlame } from "react-icons/gi";

const TopPostCardRight = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h3 className=" font-semibold text-xl">
          Popular New Xbox Game Pass <br /> Game Being Review Bombed With “0s”
        </h3>
      </div>
      <div className=" flex flex row gap-3 ">
        <p>Jan 14, 2021</p>
        <GiFlame className="text-red-600" />
        <span className="text-red-600">7,792 Views</span>
      </div>
    </div>
  );
};

export default TopPostCardRight;
