import React from "react";
import { FaTiktok } from "react-icons/fa";

const SocialTikTok = () => {
  return (
    <div>
      <div className="w-[170px] h-[58px] border flex justify-start gap-3 items-center">
        <div className="ml-[10px]">
          <FaTiktok className="text-red-400" />
        </div>
        <div>
          <div>
            <p className="text-gray-700">TikTok</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialTikTok;
