import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HomeCategory = () => {
  return (
    <div className="flex items-center">
      <a href="https://smartmag.theme-sphere.com/tech-blog/">Home</a>
      <span>
        <MdOutlineKeyboardDoubleArrowRight />
      </span>
      <p>Category: "Gadgets"</p>
    </div>
  );
};

export default HomeCategory;
