import React from "react";
import { GiDividedSquare } from "react-icons/gi";

const BodyCardContent = () => {
  return (
    <div className="relative w-[404px] h-[450px] flex flex-col gap-[10px]  overflow-hidden border rounded-[12px] ">
      <div>
        <img
          className="w-[404px] h-[227px]  rounded-[12px] overflow-hidden"
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-1024x683.jpg"
          alt=""
        />

        <div className="absolute top-0">
          <div className="w-[77px] h-[26px] bg-purple-600 text-white font-semibold  flex items-center justify-center rounded-md">
            <p>Gadgets</p>
          </div>
        </div>
        <div className="w-[50px] h-[50px]  text-white font-semibold  flex items-center justify-center rounded-[50%] border-[4px] border-blue-700  absolute top-3 right-3">
          <p>8.9</p>
        </div>
      </div>
      <div className="px-[20px]">
        <h1 className="text-xl font-semibold ">
          DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
        </h1>
      </div>
      <div className="flex flex-row px-[20px] mt-[20px] items-center gap-5">
        <b>Shane Doe</b>
        <span>
          <GiDividedSquare />
        </span>
        <p>Jan 15, 2021</p>
      </div>
      <div className="px-[20px]">
        <p>
          To understand the new smart watched and other pro devices of recent
          focus, we should look to Silicon Valley and…
        </p>
      </div>
    </div>
  );
};

export default BodyCardContent;
