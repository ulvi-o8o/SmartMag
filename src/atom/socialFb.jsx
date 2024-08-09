import React from "react";
import { FaFacebookF } from "react-icons/fa";

const SocialFb = () => {
  return (
    <div>
      <div className="w-[170px] h-[58px] border flex justify-start gap-3 items-center">
        <div className="ml-[10px]">
          <FaFacebookF className="text-blue-600" />
        </div>
        <div>
          <div>
            <span className="font-bold"> 1.1K</span>
          </div>
          <div>
            <p className="text-gray-700">Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFb;
