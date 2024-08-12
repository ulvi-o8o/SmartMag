import React from "react";
import { LuClock5 } from "react-icons/lu";

const TrendingCard = () => {
  return (
    <div>
      <div className="w-[360px] h-[75px] mt-[30px] flex flex-row justify-center items-center">
        <div className="w-[240px] h-[132px]  flex flex-col gap-3">
          <div>
            <h1 className="font-bold">
              Schools, Parents Disagree over Bans on Student Mobile Phones
            </h1>
          </div>
          <div className="flex flex-row  justify-center  items-center gap-5">
            <b>Shane Doe</b>
            <span>
              <LuClock5 />
            </span>
            <p>Jan 15, 2021</p>
          </div>
        </div>
        <div className="flex justify-center items-center ml-[20px]">
          <img
            className="w-[90px] h-[90px] rounded-[50%]"
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-1024x652.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
