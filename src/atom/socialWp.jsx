import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const SocialWp = () => {
  return (
    <div>
      <div className="w-[170px] h-[58px] border flex justify-start gap-3 items-center">
        <div className="ml-[10px]">
          <FaWhatsapp className="text-blue-600" />
        </div>
        <div>
          <div>
            <p className="text-gray-700">Whatsapp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialWp;
