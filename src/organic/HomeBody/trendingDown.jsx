import React from "react";
import { LuClock5 } from "react-icons/lu";

const TrendingDown = () => {
  return (
    <div className="flex flex-col  items-center mt-[80px] ">
      <div className="w-[287px] h-[192px] ">
        <img
          className="rounded-[12px]"
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=1500&quality=50"
          alt=""
        />
      </div>
      <div>
        <div className="w-[251px] h-[90px] flex flex-col mt-[-40px] bg-black text-white scroll-auto justify-center">
          <h1 className="font-semibold">
            Leaf Headphones: Here are Some of The Best Devices
          </h1>
          <div className="flex flex-row  justify-center  items-center gap-5">
            <b>Shane Doe</b>
            <span>
              <LuClock5 />
            </span>
            <p>Jan 15, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDown;
