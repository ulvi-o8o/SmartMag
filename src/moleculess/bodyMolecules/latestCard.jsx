import React from "react";
import { GiDividedSquare } from "react-icons/gi";

const LatestCard = () => {
  return (
    <div className="relative w-[336px] h-[350px] mt-[20px] flex flex-col gap-[10px]   overflow-hidden border rounded-[12px] ">
      <div>
        <img
          className="w-[336px] h-[189px]  rounded-[12px] overflow-hidden"
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4-450x300.jpg"
          alt=""
        />

        <div className="absolute top-0">
          <div className="w-[77px] h-[26px] bg-purple-600 text-white font-semibold  flex items-center justify-center rounded-md">
            <p>Gaming</p>
          </div>
        </div>
        <div className="w-[50px] h-[50px]  text-white font-semibold  flex items-center justify-center rounded-[50%] border-[4px] border-blue-700  absolute top-3 right-3">
          <p>8.9</p>
        </div>
      </div>
      <div className="flex ">
        <div className="flex justify-center items-center ">
          <span className="font-bold text-5xl text-gray-400 ml-[12px]">1</span>
        </div>
        <div className=" px-[20px]">
          <h1 className="text-xl font-semibold ">
            Pico 4 Review: Should You Actually Buy One Instead of Quest 2?
          </h1>
        </div>
      </div>
      <div>
        <div className="flex flex-row px-[20px] mt-[20px] items-center gap-5">
          <b>Shane Doe</b>
          <span>
            <GiDividedSquare />
          </span>
          <p>Jan 15, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
