import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaVimeoSquare } from "react-icons/fa";

const HeaderRightIcons = () => {
  return (
    <div className="w-[33%] h-[42px] flex justify-end">
      <ul className="flex  gap-5 items-center">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaSquareXTwitter />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
        <li>
          <FaPinterestSquare />
        </li>
        <li>
          <FaVimeoSquare />
        </li>
      </ul>
    </div>
  );
};

export default HeaderRightIcons;
