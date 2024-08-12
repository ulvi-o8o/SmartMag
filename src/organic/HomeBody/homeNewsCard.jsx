import React from "react";
import { GiDividedSquare } from "react-icons/gi";

const HomeNewsCard = () => {
  return (
    <div>
      <div className="w-[410px] h-[366px] rounded-xl ">
        <div>
          <img
            className="w-[410px] h-[228px] bg-cover rounded-xl"
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-819x1024.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center mt-[20px] items-center">
            <h1 className="text-xl font-bold ">
              Tablet PC Market Witness Exponential <br /> Growth by 2028,
              Sources Say
            </h1>
          </div>
          <div className="flex flex-row px-[20px] justify-center mt-[20px] items-center gap-5">
            <b>Shane Doe</b>
            <span>
              <GiDividedSquare />
            </span>
            <p>Jan 15, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCard;
