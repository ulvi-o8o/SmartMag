import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const FooterLogos = () => {
  return (
    <div className="flex gap-5 ">
      <div className="flex justify-center items-center rounded-[50%] w-[50px] h-[50px] text-white bg-gray-900 ">
        <FaFacebookF className="text-2xl" />
      </div>
      <div className="flex justify-center items-center rounded-[50%] w-[50px] h-[50px] text-white bg-gray-900 ">
        <FaXTwitter className="text-2xl" />
      </div>
      <div className="flex justify-center items-center rounded-[50%] w-[50px] h-[50px] text-white bg-gray-900 ">
        <FaInstagram className="text-2xl" />
      </div>
      <div className="flex justify-center items-center rounded-[50%] w-[50px] h-[50px] text-white bg-gray-900 ">
        <FaTiktok className="text-2xl" />
      </div>
    </div>
  );
};

export default FooterLogos;
