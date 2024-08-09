import React from "react";
import { FaInstagram } from "react-icons/fa";

const SocialInstagram = () => {
  return (
    <div>
      <div className="w-[170px] h-[58px] border flex justify-start gap-3 items-center">
        <div className="ml-[10px]">
          <FaInstagram className="text-purple-400" />
        </div>
        <div>
          <div>
            <span className="font-bold">68.9</span>
          </div>
          <div>
            <p className="text-gray-700">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInstagram;
