import React from "react";
import { LuClock5 } from "react-icons/lu";

const FavoriteCard = () => {
  return (
    <div>
      <div className="w-[360px] h-[132px] mt-[30px] flex flex-row justify-center items-center">
        <div className="w-[240px] h-[132px]  flex flex-col gap-3">
          <div>
            <h3 className="text-blue-400">Technology</h3>
          </div>
          <div>
            <h1 className="font-bold text-black">
              Schools, Parents Disagree over Bans on Student Mobile Phones
            </h1>
          </div>
          <div className="flex flex-row  justify-center  text-black items-center gap-5">
            <b className="text-black">Shane Doe</b>
            <span className="text-black">
              <LuClock5 />
            </span>
            <p className="text-black"> Jan 15, 2021</p>
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

export default FavoriteCard;
