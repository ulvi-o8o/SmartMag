import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const SocialX = () => {
  return (
    <div>
      <div className="w-[170px] h-[58px] border flex justify-start gap-3 items-center">
        <div className="ml-[10px]">
          <FaXTwitter className="text-blue-600" />
        </div>
        <div>
          <div>
            <span className="font-bold">68.9</span>
          </div>
          <div>
            <p className="text-gray-700">Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialX;
