import React from "react";
import { GiFlame } from "react-icons/gi";
git;
const FooterUp = () => {
  return (
    <div>
      <div className="w-full h-[400px] bg-red-500">
        <div>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className=" font-semibold text-xl">
                Popular New Xbox Game Pass <br /> Game Being Review Bombed{" "}
                <br /> With “0s”
              </h3>
            </div>
            <div className=" flex flex row gap-3 ">
              <p>Jan 14, 2021</p>
              <GiFlame className="text-red-600" />
              <span className="text-red-600">7,792 Views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUp;
