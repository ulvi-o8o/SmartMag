import React from "react";
import { FaYoutube } from "react-icons/fa";

const SocialYoutube = () => {
  return (
    <div>
      <div className="w-[170px] h-[58px] border flex justify-start gap-3 items-center">
        <div className="ml-[10px]">
          <FaYoutube className="text-red-600" />
        </div>
        <div>
          <div>
            <span className="font-bold"> 105K</span>
          </div>
          <div>
            <p className="text-gray-700">Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialYoutube;
