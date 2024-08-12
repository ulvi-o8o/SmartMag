import React from "react";
import HomeNewsCard from "./homeNewsCard";

const HomeNewsLeft = () => {
  return (
    <div className="w-[65%] h-[970px]  ">
      <div className="w-[100%] h-[100%]  flex flex-col gap-9 items-center justify-center  ">
        <div>
          <img
            className="w-[858px] h-[480px] rounded-[20px] bg-cover "
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-row gap-9">
          <HomeNewsCard />
          <HomeNewsCard />
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLeft;
